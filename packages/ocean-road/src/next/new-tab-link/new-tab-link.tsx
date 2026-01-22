import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { type PropsWithChildren, memo } from 'react';

export const NewTabLink = memo(
  ({ children, ...linkProps }: PropsWithChildren<Omit<LinkProps, 'target' | 'rel'>>) => {
    return (
      <Link target="_blank" rel="noopener noreferrer" {...linkProps}>
        {children}
      </Link>
    );
  }
);

NewTabLink.displayName = 'NewTabLink';
