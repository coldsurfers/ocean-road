import { AppHeader as AppHeaderDefault } from '@/extensions';
import { FloatingHeader } from './app-header';
import { FixedHeader } from './app-header.fixed-header';
import { FullScreenMobileAccordionDrawer } from './app-header.full-screen-mobile-accordion-drawer';
import { ModalMobileAccordionDrawer } from './app-header.modal-mobile-accordion-drawer';

export const AppHeader = {
  ...AppHeaderDefault,
  FloatingHeader,
  FixedHeader,
  FullScreenMobileAccordionDrawer,
  ModalMobileAccordionDrawer,
};
