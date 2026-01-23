'use client';

import { AppLogo } from '@/extensions';
import { useHeaderScrollAnimation } from '@/extensions/app-header/app-header.hooks';
import styled from '@emotion/styled';
import { type ReactNode, memo } from 'react';
import {
  StyledFloatingHeader,
  StyledFloatingHeaderAppLogoText,
  StyledFloatingHeaderColorSchemeToggleContainer,
  StyledFloatingHeaderInner,
  StyledFloatingHeaderLogoWrapper,
  StyledFloatingHeaderMenuContainer,
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
  }: {
    serviceName: string;
    HeaderMenuItemComponent: ReactNode;
    ColorSchemeToggleComponent: ReactNode;
  }) => {
    const { headerAnimation } = useHeaderScrollAnimation();
    return (
      <StyledFloatingHeader animation={headerAnimation}>
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
        </StyledFloatingHeaderInner>
      </StyledFloatingHeader>
    );
  }
);
