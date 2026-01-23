import styled from '@emotion/styled';
import { type PropsWithChildren, memo } from 'react';
import type { AnimatedHeaderAnimation } from './app-header.types';

const HeaderContainer = styled.header<{ $animation: AnimatedHeaderAnimation; $zIndex?: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: translateY(${({ $animation }) => ($animation === 'show' ? '0' : '-100%')});
  z-index: ${({ $zIndex }) => $zIndex ?? 100};
`;

export type AnimatedHeaderProps = PropsWithChildren<{
  animation: AnimatedHeaderAnimation;
  className?: string;
  zIndex?: number;
}>;

export const AnimatedHeader = memo(
  ({ animation, children, className, zIndex }: AnimatedHeaderProps) => {
    return (
      <HeaderContainer $animation={animation} className={className} $zIndex={zIndex}>
        {children}
      </HeaderContainer>
    );
  }
);

AnimatedHeader.displayName = 'AppHeader.AnimatedHeader';
