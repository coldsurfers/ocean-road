import { useEffect, useState } from 'react';

export function useHeaderScrollAnimation() {
  const [animation, setAnimation] = useState<'show' | 'hide'>('show');

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
