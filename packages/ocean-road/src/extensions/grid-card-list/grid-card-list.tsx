import { Fragment, type ReactNode, memo } from 'react';
import type { GridCardListItemProps } from '../grid-card-item';
import { GridCardListLoadMore } from '../grid-card-list-load-more';
import {
  StyledGridContainer,
  StyledListContainer,
  StyledListHeader,
  StyledListHeaderText,
} from './grid-card-list.styled';

type Props = {
  items: GridCardListItemProps[];
  renderItem: (item: GridCardListItemProps) => ReactNode;
  keyExtractor?: (item: GridCardListItemProps, index: number) => string;
  onLoadMore: () => void;
  headerText?: string;
  hasNextPage?: boolean;
  isEmpty?: boolean;
  emptyComponent?: ReactNode;
};

export const GridCardList = memo(
  ({
    items,
    renderItem,
    onLoadMore,
    headerText,
    hasNextPage,
    isEmpty,
    emptyComponent,
    keyExtractor,
  }: Props) => {
    return (
      <StyledListContainer>
        {headerText && (
          <StyledListHeader>
            <StyledListHeaderText as="h1">{headerText}</StyledListHeaderText>
          </StyledListHeader>
        )}
        {isEmpty ? (
          emptyComponent
        ) : (
          <StyledGridContainer>
            {items.map((item, index) => (
              <Fragment
                key={
                  typeof keyExtractor === 'function' ? keyExtractor(item, index) : index.toString()
                }
              >
                {renderItem(item)}
              </Fragment>
            ))}
          </StyledGridContainer>
        )}
        {hasNextPage && <GridCardListLoadMore onLoadMore={onLoadMore} />}
      </StyledListContainer>
    );
  }
);
