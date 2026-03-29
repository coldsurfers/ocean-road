import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const DOCS_ROOT = resolve(__dirname, '../docs');
const COMPONENTS_DIR = resolve(DOCS_ROOT, 'components');
const NEXT_DIR = resolve(DOCS_ROOT, 'next');
const PUBLIC_DIR = resolve(DOCS_ROOT, 'public');
const OUT_COMPONENTS_DIR = resolve(PUBLIC_DIR, 'components');
const OUT_NEXT_DIR = resolve(PUBLIC_DIR, 'next');
const DOCS_BASE_URL = 'https://docs.ocean-road.coldsurf.io';

/**
 * MDX → clean markdown
 * - import 구문 제거 (코드블록 외부만)
 * - JSX 컴포넌트 (StorybookEmbed 등) 제거
 * - Rspress 전용 directives (:::tip, :::info 등) → 내용만 유지
 */
function mdxToMarkdown(content) {
  const lines = content.split('\n');
  const result = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      result.push(line);
      continue;
    }

    if (inCodeBlock) {
      result.push(line);
      continue;
    }

    if (line.startsWith('import ')) continue;
    if (/<[A-Z][A-Za-z]+[^>]*\/>/.test(line)) continue;
    if (/^:::/.test(line)) {
      result.push('');
      continue;
    }

    result.push(line);
  }

  return result
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * MDX에서 description 추출 (h1 다음 첫 번째 비어있지 않은 텍스트 단락)
 */
function extractDescription(content) {
  const lines = content.split('\n');
  let foundH1 = false;
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    if (line.startsWith('# ')) {
      foundH1 = true;
      continue;
    }
    if (!foundH1) continue;
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('import ') &&
      !trimmed.startsWith(':::') &&
      !trimmed.startsWith('<') &&
      !trimmed.startsWith('|') &&
      !trimmed.startsWith('`') &&
      !trimmed.startsWith('```') &&
      !trimmed.startsWith('//')
    ) {
      return trimmed.length > 120 ? `${trimmed.slice(0, 117)}...` : trimmed;
    }
  }
  return '';
}

/**
 * h1 제목 추출
 */
function extractTitle(content) {
  const match = content.match(/^# (.+)$/m);
  return match ? match[1].trim() : '';
}

function processDir(sourceDir, outDir, urlPath) {
  mkdirSync(outDir, { recursive: true });

  const files = readdirSync(sourceDir).filter((f) => f.endsWith('.mdx'));
  const entries = [];

  for (const file of files) {
    const slug = basename(file, '.mdx');
    const raw = readFileSync(resolve(sourceDir, file), 'utf-8');
    const markdown = mdxToMarkdown(raw);
    const title = extractTitle(raw);
    const description = extractDescription(raw);

    writeFileSync(resolve(outDir, `${slug}.md`), markdown, 'utf-8');

    entries.push({
      slug,
      title: title || slug,
      description,
      url: `${DOCS_BASE_URL}/${urlPath}/${slug}.md`,
    });
  }

  return entries;
}

// --- 실행 ---

const componentEntries = processDir(COMPONENTS_DIR, OUT_COMPONENTS_DIR, 'components');
const nextEntries = processDir(NEXT_DIR, OUT_NEXT_DIR, 'next');

// design-tokens.mdx → public/design-tokens.md
const designTokensRaw = readFileSync(resolve(DOCS_ROOT, 'design-tokens.mdx'), 'utf-8');
writeFileSync(resolve(PUBLIC_DIR, 'design-tokens.md'), mdxToMarkdown(designTokensRaw), 'utf-8');
console.log('✅ Generated: docs/public/design-tokens.md');

console.log(`✅ Generated ${componentEntries.length} component .md files`);
console.log(`✅ Generated ${nextEntries.length} next .md files`);

// llms.txt 생성
const componentLines = componentEntries
  .map((e) => `- [${e.title}](${e.url})${e.description ? `: ${e.description}` : ''}`)
  .join('\n');

const nextLines = nextEntries
  .map((e) => `- [${e.title}](${e.url})${e.description ? `: ${e.description}` : ''}`)
  .join('\n');

const llmsTxt = `# Ocean Road Design System

> COLDSURF 디자인 시스템 컴포넌트 라이브러리.
> 패키지: \`@coldsurf/ocean-road\` (web), \`@coldsurf/ocean-road/native\` (React Native), \`@coldsurf/ocean-road/next\` (Next.js)
> 설치: https://docs.ocean-road.coldsurf.io/installation

## Components (Web · \`@coldsurf/ocean-road\`)

${componentLines}

## Components (Next.js · \`@coldsurf/ocean-road/next\`)

${nextLines}

## Design Tokens

- [Design Tokens](${DOCS_BASE_URL}/design-tokens.md): 색상(Primitive/Semantic), 타이포그래피 토큰 레퍼런스. Style Dictionary 기반 2-레이어 구조.
`;

writeFileSync(resolve(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf-8');
console.log('✅ Generated: docs/public/llms.txt');
