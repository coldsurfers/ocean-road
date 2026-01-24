import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

export const useAccordion = (): [string | null, Dispatch<SetStateAction<string | null>>] => {
  const [accordionKey, setAccordionKey] = useState<string | null>(null);

  useEffect(() => {
    return () => setAccordionKey(null);
  }, []);

  return [accordionKey, setAccordionKey];
};
