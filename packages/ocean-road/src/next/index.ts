'use client';

import { GridCardList as DefaultGridCardList } from '@/extensions';
import { GridCardItem } from './grid-card-item';
import { GridCardListNext } from './grid-card-list';

export const GridCardList = {
  ...DefaultGridCardList,
  List: GridCardListNext,
  Item: GridCardItem,
};

export * from './global-link';
export * from './route-loading';
