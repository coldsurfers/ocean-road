import { Dropdown as DropdownCore } from './dropdown';
import { DropdownMenuItem } from './dropdown.menu-item';
import { DropdownResultItem } from './dropdown.result-item';
import type { DropdownMenuItemRef } from './dropdown.types';

export const Dropdown = {
  ResultItem: DropdownResultItem,
  MenuItem: DropdownMenuItem,
  Core: DropdownCore,
};

export type { DropdownMenuItemRef };
