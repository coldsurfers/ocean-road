'use client';

import { Spinner } from '@/base';
import { type DependencyList, type PropsWithChildren, Suspense, useLayoutEffect } from 'react';
import { useLinkStore } from '../global-link';

export function RouteLoading({ children, deps }: PropsWithChildren<{ deps?: DependencyList }>) {
  const { setIsLoading, isLoading } = useLinkStore();

  useLayoutEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsLoading, ...(deps ?? [])]);

  return (
    <Suspense fallback={<Spinner variant="page-overlay" />}>
      {children}
      {isLoading && <Spinner variant="page-overlay" />}
    </Suspense>
  );
}
