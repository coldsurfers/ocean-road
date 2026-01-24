import { AppHeader as AppHeaderDefault } from '@/extensions';
import { FloatingHeader } from './app-header';
import { FullScreenMobileMenu } from './app-header.full-screen-mobile-menu';
import { ModalMobileDrawer } from './app-header.modal-mobile-drawer';

export const AppHeader = {
  ...AppHeaderDefault,
  FloatingHeader,
  // @TODO: maybe, we can move this "FullScreenMobileDrawer" to extensions (not next)
  FullScreenMobileDrawer: FullScreenMobileMenu,
  // @TODO: maybe, we can move this "ModalMobileDrawer" to extensions (not next)
  ModalMobileDrawer,
};
