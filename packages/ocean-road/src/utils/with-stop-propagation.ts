import type { SyntheticEvent } from 'react';

export const withStopPropagation = <T extends SyntheticEvent>(handler?: (event: T) => void) => {
  return (event: T) => {
    event.stopPropagation();
    event.preventDefault();

    handler?.(event);
  };
};
