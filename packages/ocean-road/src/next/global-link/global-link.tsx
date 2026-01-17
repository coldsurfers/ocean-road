'use client';

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

let redirectMap: Record<string, string> | undefined;

const getHref = (href: string) => {
  const redirectPath = redirectMap[href];
  if (redirectPath) return redirectPath;
  return href;
};

export const initializeGlobalLinkRedirectMap = (redirectMapParam: Record<string, string>) => {
  redirectMap = redirectMapParam;
};

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
      const to = getHref(href);
      const from = pathname;
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
