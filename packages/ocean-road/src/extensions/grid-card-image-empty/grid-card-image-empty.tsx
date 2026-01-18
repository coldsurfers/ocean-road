import { semantics } from '@/tokens';
import styled from '@emotion/styled';

export const GridCardImageEmpty = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50%;
  border-radius: 12px;
  background-color: ${semantics.color.background[3]};
`;
