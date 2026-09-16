import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'intent-fill-complete';
const LOCK_AT = 0.99;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hasFillLock() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function setFillLock() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // ignore quota / private mode
  }
}

export default function useScrollFill() {
  const trackRef = useRef(null);
  const lockedRef = useRef(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || hasFillLock()) {
      lockedRef.current = true;
      setProgress(1);
      if (reduceMotion) setFillLock();
      return undefined;
    }

    let frame = null;

    const update = () => {
      frame = null;
      if (lockedRef.current) {
        setProgress(1);
        return;
      }

      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const travel = Math.max(track.offsetHeight - window.innerHeight, 1);
      const next = clamp(-rect.top / travel, 0, 1);

      if (next >= LOCK_AT) {
        lockedRef.current = true;
        setFillLock();
        setProgress(1);
        return;
      }

      setProgress(next);
    };

    const onScroll = () => {
      if (frame == null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, []);

  return { trackRef, progress };
}
