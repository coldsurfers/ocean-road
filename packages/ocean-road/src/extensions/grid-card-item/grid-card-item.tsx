import { withStopPropagation } from '@/utils/with-stop-propagation';
import { type PropsWithChildren, type ReactNode, memo } from 'react';
import { match } from 'ts-pattern';
import {
  StyledFixedSubscribeEventButtonLayoutContainer,
  StyledGridDate,
  StyledGridImage,
  StyledGridImageEmptyContainer,
  StyledGridImageEmptyText,
  StyledGridItem,
  StyledGridTextContainer,
  StyledGridTitle,
  StyledGridTop,
  StyledVenueText,
} from './grid-card-item.styled';

const FixedSubscribeEventButtonLayout = memo(
  ({
    children,
    customRight = 12,
    customBottom = 12,
  }: PropsWithChildren<{
    customRight?: number;
    customBottom?: number;
  }>) => {
    return (
      <StyledFixedSubscribeEventButtonLayoutContainer
        onClick={withStopPropagation()}
        whileHover={{
          scale: 1.1,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          bottom: customBottom,
          right: customRight,
        }}
      >
        {children}
      </StyledFixedSubscribeEventButtonLayoutContainer>
    );
  }
);

export type GridCardListItemProps = {
  thumbnailUrl: string;
  titleText: string;
  subText: string;
  onClick?: () => void;
  bottomText?: string;
  isSubscribed?: boolean;
  rightBottomSlot?: {
    type: 'subscribe';
    subscribeEventBtn: ReactNode;
  };
  renderThumbnail?: (url: string) => ReactNode;
};

export const GridCardItem = memo(
  ({
    thumbnailUrl,
    titleText,
    subText,
    bottomText,
    rightBottomSlot,
    renderThumbnail,
    onClick,
    isSubscribed,
  }: GridCardListItemProps) => {
    return (
      <StyledGridItem onClick={onClick}>
        <StyledGridTop>
          {thumbnailUrl ? (
            renderThumbnail ? (
              renderThumbnail(thumbnailUrl)
            ) : (
              <StyledGridImage src={thumbnailUrl} alt={titleText} />
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
          <StyledGridTitle as="p" numberOfLines={2}>
            {titleText}
          </StyledGridTitle>
          <StyledGridDate as="p">{subText}</StyledGridDate>
          {bottomText && <StyledVenueText as="p">{bottomText}</StyledVenueText>}
        </StyledGridTextContainer>
      </StyledGridItem>
    );
  }
);

GridCardItem.displayName = 'GridCardItem.Item';
