'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const slideImages = [
  {
    src: '/images/hero_team.png',
    alt: 'Tim profesional ITSAR Circle dalam pertemuan bisnis syariah',
    caption: 'Tata Kelola Profesional & Akuntabel'
  },
  {
    src: '/images/cityscape_investment.png',
    alt: 'Kawasan bisnis dan investasi modern masa depan',
    caption: 'Ekosistem Investasi & Pertumbuhan'
  },
  {
    src: '/images/business_handshake.png',
    alt: 'Kemitraan bisnis syariah yang berkeadilan',
    caption: 'Kemitraan Strategis yang Memakmurkan'
  },
  {
    src: '/images/community_professional.png',
    alt: 'Komunitas anggota ITSAR Circle yang berdaya',
    caption: 'Komunitas Eksklusif yang Saling Meringankan'
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[820px] flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-32"
    >
      
      {/* ─────────────────────────────────────────────
          RUNNING BACKGROUND SLIDE (4 Images)
      ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--color-itsar-navy)]">
        {slideImages.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                idx === activeSlide ? 'scale-105' : 'scale-100'
              }`}
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Mobile/Tablet: strong white overlay for text readability */}
        <div className="absolute inset-0 z-20 bg-white/88 sm:bg-white/80 lg:hidden pointer-events-none" />

        {/* Desktop: subtle left-side gradient — image clearly visible on right */}
        <div className="absolute inset-0 z-20 hidden lg:block bg-gradient-to-r from-white/95 via-white/70 to-transparent pointer-events-none" />

        {/* Top fade to blend with navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 z-20 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none" />

        {/* Bottom soft gradient to transition into Features section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────
          HERO CONTENT
      ───────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-30">
        <div className="max-w-3xl space-y-4 sm:space-y-6">

          {/* Eyebrow label */}
          <ScrollReveal delay={0}>
            <div
              style={{ fontFamily: "'Arial', Arial, sans-serif" }}
              className="text-[13px] sm:text-[15px] font-bold tracking-[0.18em] text-[var(--color-itsar-gold)] uppercase drop-shadow-xs"
            >
              KOPERASI SYARIAH MODERN
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.05}>
            <h1
              style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
              className="text-[2rem] sm:text-[2.6rem] lg:text-[3.8rem] font-bold text-[var(--color-itsar-navy)] leading-[1.12] tracking-tight"
            >
              Bertumbuh dan{' '}
              <span className="text-[var(--color-itsar-navy)] drop-shadow-sm">Sejahtera Bersama</span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.1}>
            <p className="text-gray-700 font-medium text-[14px] sm:text-base lg:text-lg leading-relaxed max-w-xl">
              ITSAR Circle adalah koperasi syariah modern berbasis komunitas yang menghubungkan investasi, bisnis, dan kolaborasi untuk kesejahteraan anggota dan kebermanfaatan umat.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.15}>
            {/* Mobile: stack full-width; Desktop: inline side-by-side */}
            <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 pt-1">
              <Link
                href={process.env.NEXT_PUBLIC_REGISTER_URL || '#'}
                className="btn-gold shadow-lg sm:w-auto w-full justify-center"
              >
                Menjadi Anggota <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="#tentang-kami"
                className="inline-flex items-center gap-2 bg-white border-2 border-[var(--color-itsar-gold)] text-[var(--color-itsar-navy)] font-bold text-[0.9rem] px-[1.625rem] py-[0.8125rem] rounded-lg shadow-sm hover:bg-[var(--color-itsar-gold)]/10 transition-all sm:w-auto w-full justify-center"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--color-itsar-gold)] flex items-center justify-center shrink-0 shadow-inner">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </span>
                Pelajari Lebih Lanjut
              </a>
            </div>
          </ScrollReveal>
          </div>
      </div>

      {/* ─────────────────────────────────────────────
          SLIDE INDICATOR DOTS
      ───────────────────────────────────────────── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 p-2">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Lihat slide foto ${idx + 1}`}
            className={`h-3 rounded-full transition-all duration-500 cursor-pointer touch-manipulation ${
              idx === activeSlide
                ? 'w-10 bg-[var(--color-itsar-gold)] shadow-xs'
                : 'w-3 bg-gray-400/60 hover:bg-[var(--color-itsar-gold)]/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}