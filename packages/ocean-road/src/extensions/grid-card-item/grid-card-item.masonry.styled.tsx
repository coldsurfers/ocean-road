import { Text } from '@/base';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StyledGridDate = styled(Text)`
  margin: unset;
  margin-top: 0.25rem;
  font-size: 20px;
  font-weight: 500;
  color: ${semantics.color.foreground[3]};
  margin-bottom: 0.875rem;

  ${media.large(css`
    font-size: 17.5px;
  `)}
  ${media.small(css`
    font-size: 14px;
  `)}
`;

export const StyledGridImageEmptyContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50%;
  border-radius: 12px;
  background-color: ${semantics.color.background[1]};

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const StyledGridImageEmptyText = styled(Text)`
  text-align: center;
  font-weight: 600;
  font-size: 16px;

  padding-left: 1rem;
  padding-right: 1rem;
`;

export const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.875rem;

  ${media.medium(css`
    margin-bottom: 0.5rem;
  `)}
`;

export const StyledGridTop = styled.div`
  position: relative;
`;

export const StyledGridTextContainer = styled.div`
  margin-top: 0.5rem;
`;

export const StyledGridTitle = styled(Text)`
  margin: unset;
  font-size: 22px;
  color: ${semantics.color.foreground[1]};
  font-weight: 600;

  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;

  ${media.large(css`
    font-size: 1.5rem;
    font-size: 20px;
  `)}
  ${media.small(css`
    font-size: 1.25rem;
    font-size: 16.5px;
  `)}
`;

export const StyledVenueText = styled(Text)`
  margin: unset;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${semantics.color.foreground[4]};
  text-align: right;

  ${media.small(css`
    font-size: 14.5px;
  `)}
`;
