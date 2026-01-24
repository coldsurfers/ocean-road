'use client';

import { IconButton } from '@/base';
import { AppHeader } from '@/extensions';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { commonHorizontalLayoutCss } from '@/utils/common-styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AlignRight } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { AppHeaderLogo } from './app-header.logo';

const HeaderContainer = styled(AppHeader.AnimatedHeader)<{ $headerHeight?: number }>`
  display: flex;
  align-items: center;
  padding: 0 40px;

  background-color: ${semantics.color.background[2]};

  height: ${(props) => (props.$headerHeight ? `${props.$headerHeight}px` : '100px')};

  ${commonHorizontalLayoutCss(['left', 'right'])}
`;

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
    headerHeight,
  }: {
    zIndex?: number;
    onClickOpenDrawer?: () => void;
    mobileLeftAccessory?: ReactNode;
    HeaderMenuItemComponent: ReactNode;
    logoRightAccessory?: ReactNode;
    headerHeight?: number;
  }) => {
    const { headerAnimation } = AppHeader.useHeaderScrollAnimation();

    return (
      <HeaderContainer animation={headerAnimation} zIndex={zIndex} $headerHeight={headerHeight}>
        <AppHeaderLogo logoRightAccessory={logoRightAccessory} />
        {HeaderMenuItemComponent}
        <MobileMenuOpener leftAccessory={mobileLeftAccessory} onClick={onClickOpenDrawer} />
      </HeaderContainer>
    );
  }
);

FixedHeader.displayName = 'AppHeader.FixedHeader';
