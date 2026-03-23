import colorDesignTokens from '@coldsurfers/ocean-road-design-tokens/js/color/variables';
import themeVariablesDesignTokens from '@coldsurfers/ocean-road-design-tokens/js/semantic/theme-variables';
import semanticDesignTokens from '@coldsurfers/ocean-road-design-tokens/js/semantic/variables';
import typographyDesignTokens from '@coldsurfers/ocean-road-design-tokens/js/typography/variables';
import type { ColorDesignTokens } from './tokens.types';

export const colors: ColorDesignTokens = colorDesignTokens;
export const semantics = semanticDesignTokens; // { color: {...}, typography: { heading1, ... } }
export const semanticVariables = themeVariablesDesignTokens;
export const typography = typographyDesignTokens; // { fontSize, fontWeight, lineHeight }
