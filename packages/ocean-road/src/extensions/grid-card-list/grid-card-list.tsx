import { Fragment, type ReactNode, memo } from 'react';
import type { GridCardListItemProps } from '../grid-card-item';
import { GridCardListLoadMore } from '../grid-card-list-load-more';
import {
  StyledGridContainer,
  StyledListContainer,
  StyledListHeader,
  StyledListHeaderText,
  StyledNavigationContainer,
} from './grid-card-list.styled';

type Props = {
  items: GridCardListItemProps[];
  renderItem: (item: GridCardListItemProps) => ReactNode;
  onLoadMore: () => void;
  headerText?: string;
  hasNextPage?: boolean;
  isEmpty?: boolean;
  emptyComponent?: ReactNode;
  navigationComponent?: ReactNode;
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
    navigationComponent,
  }: Props) => {
    return (
      <StyledListContainer>
        {headerText && (
          <StyledListHeader>
            <StyledListHeaderText as="h1">{headerText}</StyledListHeaderText>
          </StyledListHeader>
        )}
        <StyledNavigationContainer>
          {navigationComponent && navigationComponent}
        </StyledNavigationContainer>
        {isEmpty ? (
          emptyComponent
        ) : (
          <StyledGridContainer>
            {items.map((item) => (
              <Fragment key={item.id}>{renderItem(item)}</Fragment>
            ))}
          </StyledGridContainer>
        )}
        {hasNextPage && <GridCardListLoadMore onLoadMore={onLoadMore} />}
      </StyledListContainer>
    );
  }
);

GridCardList.displayName = 'GridCardList.List';
