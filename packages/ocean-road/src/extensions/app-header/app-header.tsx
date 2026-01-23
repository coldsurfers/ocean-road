import styled from '@emotion/styled';
import { type PropsWithChildren, memo } from 'react';
import type { AnimatedHeaderAnimation } from './app-header.types';

const HeaderContainer = styled.header<{ $animation: AnimatedHeaderAnimation }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform: translateY(${({ $animation }) => ($animation === 'show' ? '0' : '-100%')});
`;

export const AnimatedHeader = memo(
  ({
    animation,
    children,
    className,
  }: PropsWithChildren<{ animation: AnimatedHeaderAnimation; className?: string }>) => {
    return (
      <HeaderContainer $animation={animation} className={className}>
        {children}
      </HeaderContainer>
    );
  }
);

AnimatedHeader.displayName = 'AppHeader.AnimatedHeader';
