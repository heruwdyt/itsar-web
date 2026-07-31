'use client';

import { useEffect, useRef } from 'react';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
}

/**
 * StaggerReveal — UI UX Pro Max: Stagger List (Standard tier - SPA & Back Navigation Resilient)
 */
export default function StaggerReveal({
  children,
  className = '',
  itemSelector = '[data-stagger]',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let refreshTimeout1: NodeJS.Timeout;
    let refreshTimeout2: NodeJS.Timeout;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const items = container.querySelectorAll(itemSelector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          scale: 0.92,
          y: 16,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: { each: 0.06, from: 'start', grid: 'auto' },
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            gsap.set(items, { clearProps: 'transform,scale' });
          },
        }
      );

      refreshTimeout1 = setTimeout(() => {
        ScrollTrigger?.refresh();
      }, 150);
      refreshTimeout2 = setTimeout(() => {
        ScrollTrigger?.refresh();
      }, 500);
    })();

    return () => {
      clearTimeout(refreshTimeout1);
      clearTimeout(refreshTimeout2);
    };
  }, [itemSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
