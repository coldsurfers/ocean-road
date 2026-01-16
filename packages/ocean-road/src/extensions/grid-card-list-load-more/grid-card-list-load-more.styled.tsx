import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
