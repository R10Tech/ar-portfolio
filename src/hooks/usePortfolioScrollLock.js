import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-scroll-complete';

export function isPortfolioScrollComplete() {
  if (typeof window === 'undefined') return true;
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export default function usePortfolioScrollLock(sectionRef, slideCount, setActive) {
  const [isLocked, setIsLocked] = useState(() => !isPortfolioScrollComplete());

  useEffect(() => {
    if (!isLocked) return undefined;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const track = section.querySelector('[data-portfolio-spacer]');
      if (!track) return;

      const trackTop = track.offsetTop;
      const progress = window.scrollY - trackTop;
      const vh = window.innerHeight;

      if (progress < 0) return;

      const index = Math.min(slideCount - 1, Math.max(0, Math.floor(progress / vh + 0.25)));
      setActive(index);

      const unlockAt = (slideCount - 1) * vh + vh * 0.55;
      if (progress >= unlockAt) {
        localStorage.setItem(STORAGE_KEY, 'true');
        setIsLocked(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isLocked, slideCount, setActive, sectionRef]);

  return isLocked;
}
