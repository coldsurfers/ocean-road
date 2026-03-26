import styled from '@emotion/styled';
import { semantics, typography } from '../../tokens';

type TextVariant = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'caption' | 'label';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type StyledTextContainerProps = {
  numberOfLines?: number;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
};

export const StyledTextContainer = styled.span<StyledTextContainerProps>`
  white-space: pre-wrap;
  line-height: 1.25;

  ${({ variant }) =>
    variant &&
    `
    font-size: ${semantics.typography[variant].fontSize};
    font-weight: ${semantics.typography[variant].fontWeight};
    line-height: ${semantics.typography[variant].lineHeight};
  `}

  ${({ size }) =>
    size &&
    `
    font-size: ${typography.fontSize[size]};
  `}

  ${({ weight }) =>
    weight &&
    `
    font-weight: ${typography.fontWeight[weight]};
  `}

  ${({ numberOfLines }) =>
    numberOfLines &&
    `
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${numberOfLines};
    -webkit-box-orient: vertical;
    word-break: break-all;
  `}
`;
