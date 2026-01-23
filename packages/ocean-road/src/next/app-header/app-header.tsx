'use client';

import { AppLogo } from '@/extensions';
import type { AnimatedHeaderProps } from '@/extensions/app-header/app-header';
import {
  useHeaderScrollAnimation,
  useIsMobileMenuOpen,
} from '@/extensions/app-header/app-header.hooks';
import styled from '@emotion/styled';
import { type ReactNode, memo, useCallback } from 'react';
import {
  StyledFloatingHeader,
  StyledFloatingHeaderAppLogoText,
  StyledFloatingHeaderCloseDrawerButton,
  StyledFloatingHeaderCloseDrawerIcon,
  StyledFloatingHeaderColorSchemeToggleContainer,
  StyledFloatingHeaderInner,
  StyledFloatingHeaderLogoWrapper,
  StyledFloatingHeaderMenuContainer,
  StyledFloatingHeaderOpenDrawerMenu,
} from './app-header.styled';

const StyledFloatingHeaderAppLogo = styled(AppLogo)`
  border-radius: 50%;
  margin-right: 20px;
  width: 48px;
  height: 48px;
`;

type FloatingHeaderProps = {
  serviceName: string;
  HeaderMenuItemComponent: ReactNode;
  ColorSchemeToggleComponent: ReactNode;
  onClickOpenMobileDrawer?: (params: { isMobileMenuOpen: boolean }) => void;
  className?: string;
  zIndex?: AnimatedHeaderProps['zIndex'];
};

export const FloatingHeader = memo(
  ({
    serviceName,
    HeaderMenuItemComponent,
    ColorSchemeToggleComponent,
    onClickOpenMobileDrawer,
    className,
    zIndex,
  }: FloatingHeaderProps) => {
    const { headerAnimation } = useHeaderScrollAnimation();
    const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useIsMobileMenuOpen();

    const handleClickOpenDrawer = useCallback(() => {
      onClickOpenMobileDrawer?.({
        isMobileMenuOpen,
      });
      if (isMobileMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }, [closeMobileMenu, isMobileMenuOpen, onClickOpenMobileDrawer, openMobileMenu]);

    return (
      <StyledFloatingHeader animation={headerAnimation} className={className} zIndex={zIndex}>
        <StyledFloatingHeaderInner>
          <StyledFloatingHeaderLogoWrapper href="/">
            <StyledFloatingHeaderAppLogo type="round" logoTheme="white-background" />
            <StyledFloatingHeaderAppLogoText as="h2">{serviceName}</StyledFloatingHeaderAppLogoText>
          </StyledFloatingHeaderLogoWrapper>
          <StyledFloatingHeaderMenuContainer>
            {HeaderMenuItemComponent}
          </StyledFloatingHeaderMenuContainer>
          <StyledFloatingHeaderColorSchemeToggleContainer>
            {ColorSchemeToggleComponent}
          </StyledFloatingHeaderColorSchemeToggleContainer>
          <StyledFloatingHeaderCloseDrawerButton
            $isOpen={isMobileMenuOpen}
            onClick={handleClickOpenDrawer}
          >
            {isMobileMenuOpen ? (
              <StyledFloatingHeaderCloseDrawerIcon />
            ) : (
              <StyledFloatingHeaderOpenDrawerMenu />
            )}
          </StyledFloatingHeaderCloseDrawerButton>
        </StyledFloatingHeaderInner>
      </StyledFloatingHeader>
    );
  }
);

FloatingHeader.displayName = 'AppHeader.FloatingHeader';
