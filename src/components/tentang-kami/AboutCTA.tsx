import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Outer card with exact linear gradient background from image 2 */}
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#EAE1C8]/60 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)]"
          style={{ background: 'linear-gradient(135deg, #FAF6EB 0%, #F5EDD8 60%, #EFE4C6 100%)' }}
        >
          {/* Layout: text left, image right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch min-h-[320px]">

            {/* LEFT: Content (6 columns width equivalent) */}
            <div className="flex-1 px-8 sm:px-12 lg:px-14 py-10 sm:py-12 flex flex-col justify-center z-10 text-left">

              {/* Heading: Using default clean sans-serif */}
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-black text-[var(--color-itsar-navy)] leading-[1.25] tracking-tight mb-4">
                Mari Bertumbuh dan<br />Sejahtera Bersama
              </h2>

              {/* Sub-text */}
              <p className="text-gray-600 font-semibold text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-md">
                Bergabunglah bersama ITSAR CIRCLE dan rasakan manfaatnya untuk masa depan yang lebih baik dan berkah bagi Anda dan keluarga.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href={process.env.NEXT_PUBLIC_REGISTER_URL || '#'}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9922A] via-[#D4A030] to-[#B57C1E] text-white font-bold text-[14px] sm:text-[15px] px-6.5 py-3 rounded-xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_6px_20px_rgba(201,146,42,0.25)]"
                >
                  Menjadi Anggota <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            {/* RIGHT: family image */}
            <div className="relative w-full lg:w-[48%] min-h-[260px] sm:min-h-[320px] lg:min-h-0 shrink-0 overflow-hidden">
              <Image
                src="/images/cta_family_city.png"
                alt="Keluarga sejahtera bersama ITSAR Circle"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-[center_25%]"
                priority
              />
              {/* Fade left edge */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5EDD8] to-transparent" />
              {/* Fade top on mobile */}
              <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF6EB] to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
