'use client';

import { AppLogo } from '@/extensions';
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

export const FloatingHeader = memo(
  ({
    serviceName,
    HeaderMenuItemComponent,
    ColorSchemeToggleComponent,
    onClickOpenMobileDrawer,
    className,
  }: {
    serviceName: string;
    HeaderMenuItemComponent: ReactNode;
    ColorSchemeToggleComponent: ReactNode;
    onClickOpenMobileDrawer?: (params: { isMobileMenuOpen: boolean }) => void;
    className?: string;
  }) => {
    const { headerAnimation } = useHeaderScrollAnimation();
    const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useIsMobileMenuOpen();

    const handleClickOpenDrawer = useCallback(() => {
      onClickOpenMobileDrawer?.({
        isMobileMenuOpen,
      });
    }, [isMobileMenuOpen, onClickOpenMobileDrawer]);

    return (
      <StyledFloatingHeader animation={headerAnimation} className={className}>
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
              <StyledFloatingHeaderCloseDrawerIcon onClick={closeMobileMenu} />
            ) : (
              <StyledFloatingHeaderOpenDrawerMenu onClick={openMobileMenu} />
            )}
          </StyledFloatingHeaderCloseDrawerButton>
        </StyledFloatingHeaderInner>
      </StyledFloatingHeader>
    );
  }
);
