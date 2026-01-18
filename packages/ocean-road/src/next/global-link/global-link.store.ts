import { useSyncExternalStore } from 'react';

type LinkStoreState = {
  isLoading: boolean;
};

type Listener = () => void;

let state: LinkStoreState = {
  isLoading: false,
};

const listeners = new Set<Listener>();

const linkStore = {
  getSnapshot: () => state,

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  setIsLoading: (isLoading: boolean) => {
    if (state.isLoading === isLoading) return;
    state = { ...state, isLoading };
    listeners.forEach((l) => l());
  },
};

export function useLinkStore() {
  const state = useSyncExternalStore(
    linkStore.subscribe,
    linkStore.getSnapshot,
    linkStore.getSnapshot // SSR fallback
  );

  return {
    isLoading: state.isLoading,
    setIsLoading: linkStore.setIsLoading,
  };
}
