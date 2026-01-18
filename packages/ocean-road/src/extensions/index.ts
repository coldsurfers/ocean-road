import { GridCardImage } from './grid-card-image';
import { GridCardImageEmpty } from './grid-card-image-empty';
import { GridCardItem, type GridCardListItemProps, MasonryGridCardItem } from './grid-card-item';
import { GridCardList as GridCardListUI, MasonryGridCardList } from './grid-card-list';
import { GridCardListEmpty } from './grid-card-list-empty';
import { GridCardListLoadMore } from './grid-card-list-load-more';

export const GridCardList = {
  List: GridCardListUI,
  MasonryList: MasonryGridCardList,
  Item: GridCardItem,
  MasonryItem: MasonryGridCardItem,
  LoadMore: GridCardListLoadMore,
  Empty: GridCardListEmpty,
  ImageEmpty: GridCardImageEmpty,
  Image: GridCardImage,
};

export type { GridCardListItemProps };
