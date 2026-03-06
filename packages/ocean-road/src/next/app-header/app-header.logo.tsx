'use client';

import { Text } from '@/base';
import { AppLogo } from '@/extensions';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { type ReactNode, memo } from 'react';
import { GlobalLink } from '../global-link';

const StyledHeaderLogo = styled(AppLogo)`
  margin-right: 12px;

  width: 42px;
  height: 42px;

  ${media.large(css`
    width: 36px;
    height: 36px;
  `)}
`;

const HeaderTitle = styled(Text)`
  font-size: 32px;
  font-weight: 800;
  color: ${semantics.color.foreground[1]};

  ${media['x-large'](css`
    font-size: 24px;
  `)}
`;

export const AppHeaderLogo = memo(
  ({ logoRightAccessory, title }: { logoRightAccessory?: ReactNode; title?: string }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <GlobalLink href="/">
          <StyledHeaderLogo type="round" logoTheme="white-background" />
        </GlobalLink>
        <GlobalLink href="/">
          <HeaderTitle as="h1">
            {title ? `${title} ` : ''}
            {logoRightAccessory}
          </HeaderTitle>
        </GlobalLink>
      </div>
    );
  }
);
