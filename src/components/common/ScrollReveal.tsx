'use client';

import { JSX, useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  as?: keyof JSX.IntrinsicElements;
}

/**
 * ScrollReveal — UI UX Pro Max: Scroll Reveal (Subtle tier - SPA & Back Navigation Resilient)
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let gsap: typeof import('gsap').gsap;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
    let refreshTimeout1: NodeJS.Timeout;
    let refreshTimeout2: NodeJS.Timeout;

    (async () => {
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Gunakan fromTo agar target opacity selalu terjamin 1 (mencegah bug konten hilang saat Back button)
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          delay,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            // 'play none none none' memastikan konten TIDAK menyembul atau menghilang kembali
            toggleActions: 'play none none none',
          },
          onComplete: () => {
            // Bersihkan properti transform setelah animasi selesai agar tata letak tidak terkurung
            gsap.set(el, { clearProps: 'transform' });
          },
        }
      );

      // Memaksa penyegaran ScrollTrigger setelah transisi rute Next.js (terutama browser Back / History)
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
      ScrollTrigger?.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
