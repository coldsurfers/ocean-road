import {
  type CSSProperties,
  type ComponentPropsWithRef,
  type ElementType,
  type PropsWithChildren,
  forwardRef,
} from 'react';
import { StyledTextContainer, type StyledTextContainerProps } from './text.styled';

type TextProps = PropsWithChildren<
  ComponentPropsWithRef<'span'> & {
    style?: CSSProperties;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    as?: ElementType<any, keyof JSX.IntrinsicElements>;
    numberOfLines?: number;
  } & Pick<StyledTextContainerProps, 'variant' | 'size' | 'weight'>
>;

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ children, style, as, numberOfLines, variant, size, weight, ...otherProps }, ref) => {
    return (
      <StyledTextContainer
        ref={ref}
        as={as}
        numberOfLines={numberOfLines}
        variant={variant}
        size={size}
        weight={weight}
        style={{
          ...style,
        }}
        {...otherProps}
      >
        {children}
      </StyledTextContainer>
    );
  }
);

Text.displayName = 'Text';
