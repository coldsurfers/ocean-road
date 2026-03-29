const COLOR_TOKENS = {
  background: [1, 2, 3, 4, 5].map((i) => ({
    js: `semantics.color.background[${i}]`,
    css: `var(--color-background-${i})`,
  })),
  foreground: [1, 2, 3, 4, 5].map((i) => ({
    js: `semantics.color.foreground[${i}]`,
    css: `var(--color-foreground-${i})`,
  })),
  border: [1, 2, 3].map((i) => ({
    js: `semantics.color.border[${i}]`,
    css: `var(--color-border-${i})`,
  })),
  dimmed: [1, 2].map((i) => ({
    js: `semantics.color.dimmed[${i}]`,
    css: `var(--color-dimmed-${i})`,
  })),
};

const TYPOGRAPHY_TOKENS = {
  heading1: { fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.2' },
  heading2: { fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.2' },
  heading3: { fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.5' },
  body1: { fontSize: '1rem', fontWeight: '400', lineHeight: '1.5' },
  body2: { fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.5' },
  caption: { fontSize: '0.75rem', fontWeight: '400', lineHeight: '1.75' },
  label: { fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.5' },
};

export type TokenCategory = 'color' | 'typography' | 'all';

export function getTokens(category: TokenCategory = 'all') {
  if (category === 'color') return { color: COLOR_TOKENS };
  if (category === 'typography') return { typography: TYPOGRAPHY_TOKENS };
  return { color: COLOR_TOKENS, typography: TYPOGRAPHY_TOKENS };
}
