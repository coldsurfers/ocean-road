'use client';

import { memo } from 'react';
import { GridCardList } from '../../src/extensions/grid-card-list';
import type { GridCardItemNextProps } from '../grid-card-item';

type ItemT = GridCardItemNextProps;

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
  return <GridCardList {...props} />;
});
