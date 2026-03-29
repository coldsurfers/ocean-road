/** MDX → clean markdown (코드블록 외부 import/JSX/directives 제거) */
export function mdxToMarkdown(content) {
  const lines = content.split('\n');
  const result = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trimStart().startsWith('```')) {
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

/** MDX h1 제목 추출 */
export function extractTitle(content) {
  const match = content.match(/^# (.+)$/m);
  return match ? match[1].trim() : '';
}

/** h1 다음 첫 번째 텍스트 단락 추출 */
export function extractDescription(content) {
  const lines = content.split('\n');
  let foundH1 = false;
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trimStart().startsWith('```')) {
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
