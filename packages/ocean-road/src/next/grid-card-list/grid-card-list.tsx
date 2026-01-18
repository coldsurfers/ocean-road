'use client';

import { GridCardList, type GridCardListItemProps } from '@/extensions';
import { type ReactNode, memo } from 'react';

type ItemT = GridCardListItemProps;

type Props = {
  items: ItemT[];
  renderItem: (item: ItemT) => ReactNode;
  keyExtractor?: (item: ItemT, index: number) => string;
  onLoadMore: () => void;
  headerText?: string;
  hasNextPage?: boolean;
  isEmpty?: boolean;
  emptyComponent?: ReactNode;
};

export const GridCardListNext = memo((props: Props) => {
  return <GridCardList.List {...props} />;
});
