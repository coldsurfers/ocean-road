import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const TOKEN_BASE = resolve(__dirname, '../../../packages/ocean-road-design-tokens/dist/json/color');
const OUT_DIR = resolve(__dirname, '../docs/tokens');
const OUT_FILE = resolve(OUT_DIR, 'colors.mdx');

const light = JSON.parse(readFileSync(resolve(TOKEN_BASE, 'variables-light.json'), 'utf-8'));
const dark = JSON.parse(readFileSync(resolve(TOKEN_BASE, 'variables-dark.json'), 'utf-8'));

const GROUPS = {
  Background: 'color-background',
  Foreground: 'color-foreground',
  Border: 'color-border',
  Dimmed: 'color-dimmed',
};

function swatch(hex, label) {
  const border = label === 'light' ? '1px solid #dee2e6' : '1px solid #495057';
  return `<span title="${hex}" style="display:inline-block;width:1.25rem;height:1.25rem;background:${hex};border:${border};border-radius:3px;vertical-align:middle;margin-right:4px"></span>${hex}`;
}

function buildSection(groupName, prefix) {
  const keys = Object.keys(light)
    .filter((k) => k.startsWith(prefix))
    .sort();

  const rows = keys
    .map((key) => {
      const index = key.replace(`${prefix}-`, '');
      const cssVar = `--${key}`;
      const jsAccess = `semantics.color.${groupName.toLowerCase()}[${index}]`;
      return `| \`${jsAccess}\` | ${swatch(light[key], 'light')} | ${swatch(dark[key], 'dark')} | \`${cssVar}\` |`;
    })
    .join('\n');

  return `### ${groupName}

| JS | 라이트 | 다크 | CSS 변수 |
|----|--------|------|----------|
${rows}
`;
}

mkdirSync(OUT_DIR, { recursive: true });

const sections = Object.entries(GROUPS)
  .map(([name, prefix]) => buildSection(name, prefix))
  .join('\n');

const content = `# 색상 토큰 팔레트

> 이 페이지는 빌드 시 \`packages/ocean-road-design-tokens/dist/json/\`에서 자동 생성됩니다.

라이트/다크 모드별 시맨틱 색상 토큰의 실제 값을 시각화합니다. JS 접근 방법 및 CSS 변수 사용법은 [디자인 토큰](/design-tokens) 페이지를 참고하세요.

${sections}`;

writeFileSync(OUT_FILE, content, 'utf-8');
console.log(`✅ Generated: ${OUT_FILE}`);
