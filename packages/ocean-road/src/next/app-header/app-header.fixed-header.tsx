'use client';

import { IconButton } from '@/base';
import { AppHeader } from '@/extensions';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AlignRight } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { AppHeaderLogo } from './app-header.logo';

const MobileMenuContainer = styled.div`
  display: none;

  ${media['x-large'](css`
    display: flex;
  `)}
`;

const MobileMenuIcon = styled(AlignRight)`
  color: ${semantics.color.foreground[3]};
`;

const MobileMenuOpener = ({
  onClick,
  leftAccessory,
}: {
  onClick?: () => void;
  leftAccessory?: ReactNode;
}) => {
  return (
    <MobileMenuContainer>
      {leftAccessory}
      <IconButton onClick={onClick}>
        <MobileMenuIcon />
      </IconButton>
    </MobileMenuContainer>
  );
};

export const FixedHeader = memo(
  ({
    zIndex,
    onClickOpenDrawer,
    mobileLeftAccessory,
    HeaderMenuItemComponent,
    logoRightAccessory,
  }: {
    zIndex?: number;
    onClickOpenDrawer?: () => void;
    mobileLeftAccessory?: ReactNode;
    HeaderMenuItemComponent: ReactNode;
    logoRightAccessory?: ReactNode;
  }) => {
    const { headerAnimation } = AppHeader.useHeaderScrollAnimation();

    return (
      <>
        <AppHeader.AnimatedHeader animation={headerAnimation} zIndex={zIndex}>
          <AppHeaderLogo logoRightAccessory={logoRightAccessory} />
          {HeaderMenuItemComponent}
          <MobileMenuOpener leftAccessory={mobileLeftAccessory} onClick={onClickOpenDrawer} />
        </AppHeader.AnimatedHeader>
      </>
    );
  }
);

FixedHeader.displayName = 'AppHeader.FixedHeader';
