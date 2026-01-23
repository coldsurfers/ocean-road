import { Text } from '@/base';
import { AnimatedHeader } from '@/extensions/app-header/app-header';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GlobalLink } from '../global-link';

export const StyledFloatingHeader = styled(AnimatedHeader)`
  padding-left: 96px;
  padding-right: 96px;
  padding-top: 48px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${media['xx-large'](css`
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 48px;
  `)}
  ${media['x-large'](css`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
  `)}
    ${media.large(css`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
  `)};
`;

export const StyledFloatingHeaderInner = styled.div`
  max-width: 1728px;
  width: 100%;
  background-color: ${semantics.color.background[3]};
  border-radius: 10000px;
  z-index: 2;

  height: 78px;

  display: flex;
  align-items: center;

  padding: 12px;

  ${media.large(css`
    max-width: 1536px;
  `)}

  ${media.medium(css`
    max-width: none;
    width: 100%;
  `)}
`;

export const StyledFloatingHeaderLogoWrapper = styled(GlobalLink)`
  padding-left: 32px;
  margin-right: 48px;
  display: flex;
  align-items: center;

  ${media.large(css`
    padding-left: 18px;
    margin-right: 0;
  `)}

  ${media.small(css`
    padding-left: 0;
  `)}
`;

export const StyledFloatingHeaderAppLogoText = styled(Text)`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin: unset;
  color: ${semantics.color.foreground[3]};
  ${media.large(css`
    display: none;
  `)}
`;

export const StyledFloatingHeaderMenuContainer = styled.div`
  display: block;
  display: flex;
  align-items: center;
  ${media.large(css`
    display: none;
  `)}
`;

export const StyledFloatingHeaderColorSchemeToggleContainer = styled.div`
  margin-left: auto;

  ${media.large(css`
    display: none;
  `)}
`;
