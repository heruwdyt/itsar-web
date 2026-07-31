import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function CTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-[#F5F4F0] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/5 shadow-[0_15px_45px_-5px_rgba(0,0,0,0.08)] min-h-[260px] grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Photo Area: Dedicated to columns 1-4 (~33%) so it NEVER collides with text */}
            <div className="relative w-full h-64 lg:h-full lg:col-span-4 overflow-hidden self-stretch z-0">
              <Image
                src="/images/cta_family.png"
                alt="Keluarga sejahtera bersama ITSAR Circle"
                fill
                loading="eager"
                className="object-cover object-left sm:object-center"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              {/* Vertical gradient on mobile / Horizontal fade on desktop right edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0] via-[#F5F4F0]/30 to-transparent lg:bg-none lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#F5F4F0]" />
            </div>

            {/* Center Text Area: Dedicated to columns 5-9 so words start cleanly beside the photo */}
            <div className="px-6 sm:px-8 xl:px-10 py-8 lg:py-10 lg:col-span-5 text-left z-10">
              <h2
                style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                className="text-2xl sm:text-[28px] xl:text-[32px] font-bold text-[var(--color-itsar-navy)] leading-[1.2] tracking-tight mb-3"
              >
                Siap Bertumbuh Bersama <br className="hidden xl:inline" />
                ITSAR Circle?
              </h2>
              <p className="text-gray-600 font-medium text-[14px] sm:text-[15px] leading-relaxed">
                Bergabunglah sekarang dan rasakan manfaatnya untuk masa depan yang lebih baik dan berkah.
              </p>
            </div>

            {/* Right CTA Button Area: Dedicated to columns 10-12 */}
            <div className="px-6 sm:px-8 pb-8 pt-2 lg:py-10 lg:col-span-3 flex flex-col items-center justify-center gap-3.5 z-10">
              <Link
                href={process.env.NEXT_PUBLIC_REGISTER_URL || '#'}
                className="w-full sm:w-auto lg:w-full max-w-[250px] py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D79A2B] via-[#C9922A] to-[#B57C1E] text-white font-bold text-[15px] sm:text-[16px] shadow-[0_8px_20px_rgba(201,146,42,0.35)] hover:shadow-[0_12px_28px_rgba(201,146,42,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                Daftar Sekarang <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
              </Link>
              <div className="flex items-center justify-center gap-1.5 text-[12.5px] font-bold text-gray-600 text-center">
                <ShieldCheck className="w-4.5 h-4.5 text-[var(--color-itsar-gold)] shrink-0 stroke-[2.5]" />
                <span>Amanah, Syariah, dan Profesional</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
