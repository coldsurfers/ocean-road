import { colorTokens, typographyTokens } from '../generated/tokens.js';

export type TokenCategory = 'color' | 'typography' | 'all';

export function getTokens(category: TokenCategory = 'all') {
  if (category === 'color') return { color: colorTokens };
  if (category === 'typography') return { typography: typographyTokens };
  return { color: colorTokens, typography: typographyTokens };
}
