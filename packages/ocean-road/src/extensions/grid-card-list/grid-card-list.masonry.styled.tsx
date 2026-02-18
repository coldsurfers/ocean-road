import { Text } from '@/base';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledListContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
`;

export const StyledListHeader = styled.div`
  width: 100%;
  margin-top: 3.5rem;

  ${media.medium(css`
    margin-top: 1.5rem;
    margin-bottom: 2.25rem;
  `)}
`;

export const StyledListHeaderText = styled(Text)`
  text-align: center;
  color: ${semantics.color.foreground[2]};

  font-size: 2rem;

  ${media.medium(css`
    font-size: 1.875rem;
  `)}
`;

export const StyledLoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;

  ${media.medium(css`
    margin-top: 2rem;
    margin-bottom: 2rem;
  `)}
`;
