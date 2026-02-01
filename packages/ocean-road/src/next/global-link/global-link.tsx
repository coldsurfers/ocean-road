'use client';

import { fullyDecodePathname } from '@coldsurfers/shared-utils';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import {
  type AnchorHTMLAttributes,
  type MouseEventHandler,
  type PointerEventHandler,
  type PropsWithChildren,
  useCallback,
} from 'react';
import { useLinkStore } from './global-link.store';
import { getRedirectHref } from './global-link.utils';

export function GlobalLink({
  children,
  href,
  onClick,
  target,
  ...otherProps
}: PropsWithChildren<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const pathname = usePathname();
  const { setIsLoading } = useLinkStore();
  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      const to = getRedirectHref(href);
      const from = fullyDecodePathname(pathname);
      if (!target && to !== from) {
        setIsLoading(true);
      }
      onClick?.(e);
    },
    [onClick, pathname, setIsLoading, target, href]
  );
  const onPointerDown = useCallback<PointerEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
  }, []);

  return (
    <Link
      href={href}
      target={target}
      onClick={handleClick}
      {...otherProps}
      // or draggable={false}
      onPointerDown={onPointerDown}
    >
      {children}
    </Link>
  );
}
