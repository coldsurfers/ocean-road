import { memo } from 'react';
import { match } from 'ts-pattern';
import { GridCardImage } from '../grid-card-image';
import type { GridCardListItemProps } from './grid-card-item';
import {
  StyledGridDate,
  StyledGridImageEmptyContainer,
  StyledGridImageEmptyText,
  StyledGridItem,
  StyledGridTextContainer,
  StyledGridTitle,
  StyledGridTop,
  StyledVenueText,
} from './grid-card-item.masonry.styled';
import { FixedSubscribeEventButtonLayout } from './grid-card-item.subscribe-btn-layout';

export const MasonryGridCardItem = memo(
  ({
    isSubscribed,
    thumbnailUrl,
    titleText,
    subText,
    bottomText,
    rightBottomSlot,
    renderThumbnail,
  }: GridCardListItemProps) => {
    return (
      <StyledGridItem>
        <StyledGridTitle as="p">{titleText}</StyledGridTitle>
        <StyledGridDate as="p">{subText}</StyledGridDate>
        <StyledGridTop>
          {thumbnailUrl ? (
            renderThumbnail ? (
              renderThumbnail(thumbnailUrl)
            ) : (
              <GridCardImage src={thumbnailUrl} alt={titleText} />
            )
          ) : (
            <StyledGridImageEmptyContainer>
              <StyledGridImageEmptyText>{titleText}</StyledGridImageEmptyText>
            </StyledGridImageEmptyContainer>
          )}
          {match(rightBottomSlot)
            .with(
              { type: 'subscribe' },
              (value) =>
                typeof isSubscribed === 'boolean' && (
                  <FixedSubscribeEventButtonLayout>
                    {value.subscribeEventBtn}
                  </FixedSubscribeEventButtonLayout>
                )
            )
            .otherwise(() => null)}
        </StyledGridTop>
        <StyledGridTextContainer>
          {bottomText && <StyledVenueText as="p">{bottomText}</StyledVenueText>}
        </StyledGridTextContainer>
      </StyledGridItem>
    );
  }
);

MasonryGridCardItem.displayName = 'GridCardList.MasonryItem';
