import { Text } from '@/base';
import { semantics } from '@/tokens';
import { media } from '@/utils';
import { commonHorizontalLayoutCss } from '@/utils/common-styles';
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

export const StyledNavigationContainer = styled.div`
  margin-bottom: 3rem;
  ${media.small(css`
    margin-bottom: 1.875rem;
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

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 1.25rem;

  ${commonHorizontalLayoutCss(['left', 'right'])}

  ${media.large(css`
    grid-template-columns: repeat(3, minmax(0px, 1fr));
    gap: 1rem;
  `)}
  ${media.medium(css`
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 0.85rem;
  `)}
  ${media.small(css`
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  `)}
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

export const StyledGridImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: 50%;
  border-radius: 12px;
  background-color: ${semantics.color.background[3]};
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
