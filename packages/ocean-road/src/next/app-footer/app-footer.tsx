'use client';

import { Text } from '@/base';
import { WEB_APP_CONTAINER_MAX_WIDTH } from '@/constants';
import { AppLogo, AppStoreButton, SNSIcon } from '@/extensions';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { GlobalLink } from '../global-link';
import { NewTabLink } from '../new-tab-link';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
`;

const FooterInnerContainer = styled.div`
  max-width: ${WEB_APP_CONTAINER_MAX_WIDTH}px;
  min-width: ${WEB_APP_CONTAINER_MAX_WIDTH}px;
  margin: 0 auto;

  ${media['xx-large'](css`
    margin-left: 1rem;
    margin-right: 1rem;
    min-width: unset;
    max-width: 100%;
  `)}
`;

const FooterTopContainer = styled(FooterInnerContainer)`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5rem;

  ${media.medium(css`
    flex-direction: column;
  `)}
`;

const FooterMiddleContainer = styled(FooterInnerContainer)`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const FooterBottomContainer = styled(FooterInnerContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  border-top: 1px solid ${semantics.color.border[2]};

  ${media.medium(css`
    flex-direction: column;
    align-items: flex-start;
  `)}
`;

const FooterText = styled(Text)`
  margin: unset;
  color: ${semantics.color.foreground[1]};
`;

const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: auto;

  ${media.medium(css`
    flex-direction: column;
    margin-left: unset;
    margin-top: 1.5rem;
  `)}
`;

const StyledSNSLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 2.5rem;

  ${media.medium(css`
    margin-left: unset;
    margin-top: 1.5rem;
  `)}
`;

const StyledSNSIcon = styled(SNSIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${semantics.color.foreground[1]};
  fill: ${semantics.color.foreground[1]};
  cursor: pointer;

  ${media.medium(css`
    width: 1.25rem;
    height: 1.25rem;
  `)}
`;

const StyledSNSLogo = ({ social, url }: { social: 'instagram' | 'x'; url: string }) => {
  return (
    <NewTabLink href={url}>
      <StyledSNSIcon social={social} />
    </NewTabLink>
  );
};

const StyledAppLogo = styled(AppLogo)`
  width: 5rem;
  height: 5rem;

  ${media.medium(css`
    margin-left: -1rem;
  `)}
`;

const StyledTopFooterMenuContainer = styled.div`
  margin-left: 8rem;

  ${media.medium(css`
    margin-left: unset;
    padding-right: unset;
    margin-top: 2rem;
  `)}
`;

const StyledTopFooterMenuText = styled(Text)`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${semantics.color.foreground[1]};
  margin: unset;
  flex: 1;
`;

const StyledTopFooterSubMenuText = styled(Text)`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${semantics.color.foreground[3]};
  margin: unset;
  flex: 1;
  margin-top: 0.5rem;
`;

const footerMenuItems = [
  {
    sectionTitle: 'About',
    items: [
      {
        title: 'Mission',
        href: '/about',
      },
      {
        title: 'Blog',
        href: 'https://blog.coldsurf.io',
      },
    ],
  },
  {
    sectionTitle: 'Support',
    items: [
      {
        title: 'Buy me a coffee',
        href: 'https://ko-fi.com/coldsurf',
      },
    ],
  },
  {
    sectionTitle: 'Work with us',
    items: [
      {
        title: 'Partners',
        href: '/partners',
      },
      {
        title: 'Makers',
        href: '/makers',
      },
    ],
  },
] as const;

export function AppFooter({
  appStoreUrl,
  playStoreUrl,
  instagramUrl,
  xUrl,
}: {
  appStoreUrl: string;
  playStoreUrl: string;
  instagramUrl: string;
  xUrl: string;
}) {
  return (
    <FooterContainer>
      <FooterTopContainer>
        <StyledAppLogo type="round" logoTheme="white-background" />
        <div style={{ flex: 1 }} />
        {footerMenuItems.map((item) => {
          return (
            <StyledTopFooterMenuContainer key={item.sectionTitle}>
              <StyledTopFooterMenuText as="p">{item.sectionTitle}</StyledTopFooterMenuText>
              {item.items.map((item) => {
                return (
                  <Link key={item.href} href={item.href}>
                    <StyledTopFooterSubMenuText as="p">{item.title}</StyledTopFooterSubMenuText>
                  </Link>
                );
              })}
            </StyledTopFooterMenuContainer>
          );
        })}
      </FooterTopContainer>
      <FooterMiddleContainer>
        <NewTabLink href={appStoreUrl}>
          <AppStoreButton store="app-store" />
        </NewTabLink>
        <NewTabLink href={playStoreUrl}>
          <AppStoreButton store="google-play" />
        </NewTabLink>
      </FooterMiddleContainer>
      <FooterBottomContainer>
        <Text as="p" style={{ fontWeight: 'bold', margin: 'unset' }}>
          &copy; 2026 COLDSURF, Inc.
        </Text>
        <StyledLinksContainer>
          <GlobalLink href="/privacy-policy">
            <FooterText as="p">개인정보 처리방침</FooterText>
          </GlobalLink>
          <GlobalLink href="/terms-of-service">
            <FooterText as="p">이용약관</FooterText>
          </GlobalLink>
        </StyledLinksContainer>
        <StyledSNSLinksContainer>
          <StyledSNSLogo social="instagram" url={instagramUrl} />
          <StyledSNSLogo social="x" url={xUrl} />
        </StyledSNSLinksContainer>
      </FooterBottomContainer>
    </FooterContainer>
  );
}
