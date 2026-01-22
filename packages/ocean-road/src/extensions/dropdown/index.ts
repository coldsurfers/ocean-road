import { Dropdown as DropdownCore, type DropdownCoreProps } from './dropdown';
import { DropdownMenuItem } from './dropdown.menu-item';
import { DropdownResultItem } from './dropdown.result-item';
import { DropdownTrigger } from './dropdown.trigger';
import type { DropdownMenuItemRef } from './dropdown.types';

export const Dropdown = {
  ResultItem: DropdownResultItem,
  MenuItem: DropdownMenuItem,
  Core: DropdownCore,
  Trigger: DropdownTrigger,
};

export type { DropdownMenuItemRef, DropdownCoreProps };
