import { GridCardItem, type GridCardListItemProps } from './grid-card-item';
import { GridCardList as GridCardListUI } from './grid-card-list';
import { GridCardListLoadMore } from './grid-card-list-load-more';

export const GridCardList = {
  List: GridCardListUI,
  Item: GridCardItem,
  LoadMore: GridCardListLoadMore,
};

export type { GridCardListItemProps };
