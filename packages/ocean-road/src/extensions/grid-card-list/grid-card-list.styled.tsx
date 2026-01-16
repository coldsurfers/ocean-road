import { Text } from '@/base';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 1rem;

  ${media.large(css`
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  `)}
  ${media.medium(css`
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  `)}
  ${media.small(css`
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  `)}
`;

export const StyledListContainer = styled.div``;

export const StyledListHeader = styled.div`
  width: 100%;
`;

export const StyledListHeaderText = styled(Text)``;
