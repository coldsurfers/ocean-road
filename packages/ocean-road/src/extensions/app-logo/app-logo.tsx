'use client';

import styled from '@emotion/styled';
import { memo } from 'react';
import { match } from 'ts-pattern';
import appLogoChristmas from '../../../assets/app-logo-christmas.webp';
import appLogoTransparent from '../../../assets/app-logo-transparent.webp';
import appLogoWhiteBackground from '../../../assets/app-logo-white-background.webp';

const createDataUrl = (base64Encoded: string) => {
  if (process.env.NODE_ENV === 'development') {
    return `url(${base64Encoded})`;
  }
  return `url(${base64Encoded})`;
};

type LogoTheme = 'christmas' | 'transparent' | 'white-background';

const StyledAppLogo = styled.div<{
  $circle?: boolean;
  $logoTheme: LogoTheme;
}>`

  background-image: ${({ $logoTheme }) => {
    return match($logoTheme)
      .with('christmas', () => createDataUrl(appLogoChristmas))
      .with('transparent', () => createDataUrl(appLogoTransparent))
      .with('white-background', () => createDataUrl(appLogoWhiteBackground))
      .otherwise(() => createDataUrl(appLogoWhiteBackground));
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
