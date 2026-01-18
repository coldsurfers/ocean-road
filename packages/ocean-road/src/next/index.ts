'use client';

import { GridCardList as DefaultGridCardList } from '@/extensions';
import { GridCardItem, MasonryGridCardItem } from './grid-card-item';
import { GridCardListNext, MasonryGridCardListNext } from './grid-card-list';

export const GridCardList = {
  ...DefaultGridCardList,
  List: GridCardListNext,
  Item: GridCardItem,
  MasonryList: MasonryGridCardListNext,
  MasonryItem: MasonryGridCardItem,
};

export * from './global-link';
export * from './route-loading';
