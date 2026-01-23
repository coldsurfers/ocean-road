import { breakpoints } from '@/utils';
import { useEffect, useState, useSyncExternalStore } from 'react';
import type { AnimatedHeaderAnimation } from './app-header.types';

export function useHeaderScrollAnimation() {
  const [animation, setAnimation] = useState<AnimatedHeaderAnimation>('show');

  useEffect(() => {
    let lastScrollTop = 0;
    const onScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const diff = Math.abs(currentScroll - lastScrollTop);
      if (diff >= 12) {
        if (currentScroll > lastScrollTop) {
          setAnimation('hide');
        } else {
          setAnimation('show');
        }
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { headerAnimation: animation };
}

type Listener = () => void;

let isOpen = false;
const listeners = new Set<Listener>();

const notify = () => {
  listeners.forEach((listener) => listener());
};

export const mobileMenuStore = {
  getSnapshot: () => isOpen,

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  open() {
    if (!isOpen) {
      isOpen = true;
      notify();
    }
  },

  close() {
    if (isOpen) {
      isOpen = false;
      notify();
    }
  },
};

let initialized = false;

function initMobileMenuEffects() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  const handleResize = () => {
    if (window.innerWidth > breakpoints.large) {
      mobileMenuStore.close();
    }
  };

  window.addEventListener('resize', handleResize);
}

export function useIsMobileMenuOpen() {
  // 최초 1회만 effect 초기화
  initMobileMenuEffects();
  const isMobileMenuOpen = useSyncExternalStore(
    mobileMenuStore.subscribe,
    mobileMenuStore.getSnapshot,
    () => false // SSR fallback
  );

  return {
    isMobileMenuOpen,
    openMobileMenu: mobileMenuStore.open,
    closeMobileMenu: mobileMenuStore.close,
  };
}
