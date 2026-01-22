import { Button, Text } from '@/base';
import { semantics } from '@/tokens';
import styled from '@emotion/styled';
import Link from 'next/link';
import { memo } from 'react';
import { match } from 'ts-pattern';
import { BrandIcon } from '../brand-icon';

const StyledAppStoreButton = styled(Button)`
  border-radius: 32px;
  background-color: ${semantics.color.background[1]} !important;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  margin-bottom: 1.5rem;

  padding: 0.5rem 1rem !important;
`;

const StyledAppStoreLogo = styled(BrandIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: ${semantics.color.foreground[1]};
  fill: ${semantics.color.foreground[1]};
`;

const StyledAppStoreText = styled(Text)`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${semantics.color.foreground[1]};
  margin: unset;
`;

type Props = {
  store: 'app-store' | 'google-play';
  url: string;
};

export const AppStoreButton = memo(({ store, url }: Props) => {
  return (
    <>
      {match(store)
        .with('app-store', () => {
          return (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: 'fit-content' }}
            >
              <StyledAppStoreButton variant="border">
                <StyledAppStoreLogo brand="apple" />
                <StyledAppStoreText as="p">iOS</StyledAppStoreText>
              </StyledAppStoreButton>
            </Link>
          );
        })
        .with('google-play', () => (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: 'fit-content' }}
          >
            <StyledAppStoreButton variant="border">
              <StyledAppStoreLogo brand="android" />
              <StyledAppStoreText as="p">Android</StyledAppStoreText>
            </StyledAppStoreButton>
          </Link>
        ))
        .exhaustive()}
    </>
  );
});

AppStoreButton.displayName = 'AppStoreButton';
