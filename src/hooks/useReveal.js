import { useEffect, useRef } from 'react';

export default function useReveal(variantOrThreshold = 'up', threshold = 0.1) {
  const variant = typeof variantOrThreshold === 'number' ? 'up' : variantOrThreshold;
  const t = typeof variantOrThreshold === 'number' ? variantOrThreshold : threshold;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.classList.add('reveal', `reveal--${variant}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: t, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, t]);

  return ref;
}

export function useSectionReveal(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    el.classList.add('section-reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-inview');
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
