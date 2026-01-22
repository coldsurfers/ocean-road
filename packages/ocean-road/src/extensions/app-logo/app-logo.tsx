'use client';

import styled from '@emotion/styled';
import { memo } from 'react';
import { match } from 'ts-pattern';
import appLogoChristmas from '../../../assets/app-logo-christmas.webp';
import appLogoTransparent from '../../../assets/app-logo-transparent.webp';
import appLogoWhiteBackground from '../../../assets/app-logo-white-background.webp';

type LogoTheme = 'christmas' | 'transparent' | 'white-background';

const StyledAppLogo = styled.div<{
  $circle?: boolean;
  $logoTheme: LogoTheme;
}>`

  background-image: ${({ $logoTheme }) => {
    return match($logoTheme)
      .with('christmas', () => `url(${appLogoChristmas})`)
      .with('transparent', () => `url(${appLogoTransparent})`)
      .with('white-background', () => `url(${appLogoWhiteBackground})`)
      .otherwise(() => `url(${appLogoWhiteBackground})`);
  }};
  background-size: cover;
  background-position: 50%;;
  border-radius: ${({ $circle }) => ($circle ? '50%' : '12px')};
`;

interface Props {
  type?: 'round' | 'square';
  logoTheme: LogoTheme;
}

export const AppLogo = memo(({ type = 'round', logoTheme, ...otherProps }: Props) => {
  return <StyledAppLogo $circle={type === 'round'} $logoTheme={logoTheme} {...otherProps} />;
});

AppLogo.displayName = 'AppLogo';
