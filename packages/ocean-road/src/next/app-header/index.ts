import { AppHeader as AppHeaderDefault } from '@/extensions';
import { FloatingHeader } from './app-header';
import { FullScreenMobileAccordionDrawer } from './app-header.full-screen-mobile-accordion-drawer';
import { ModalMobileAccordionDrawer } from './app-header.modal-mobile-accordion-drawer';

export const AppHeader = {
  ...AppHeaderDefault,
  FloatingHeader,
  FullScreenMobileAccordionDrawer,
  ModalMobileAccordionDrawer,
};
