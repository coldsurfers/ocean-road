import colorDesignTokens from '../../tokens/js/color/variables';
import themeVariablesDesignTokens from '../../tokens/js/semantic/theme-variables';
import semanticDesignTokens from '../../tokens/js/semantic/variables';
import typographyDesignTokens from '../../tokens/js/typography/variables';
import type { ColorDesignTokens } from './tokens.types';

export const colors: ColorDesignTokens = colorDesignTokens;
export const semantics = semanticDesignTokens; // { color: {...}, typography: { heading1, ... } }
export const semanticVariables = themeVariablesDesignTokens;
export const typography = typographyDesignTokens; // { fontSize, fontWeight, lineHeight }
