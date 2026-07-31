import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import StaggerReveal from '@/components/common/StaggerReveal';

const checkPoints = [
  'Berlandaskan Prinsip Syariah',
  'Dikelola Secara Profesional',
  'Transparan & Akuntabel',
  'Berkelanjutan & Berdaya Guna',
];

export default function AboutSection() {
  return (
    <section id="tentang-kami" className="py-10 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* LEFT — Photo Area */}
          <ScrollReveal className="relative">

            {/* ── MOBILE / TABLET: 3-photo layout — 1 large on top + 2 below ── */}
            <div className="lg:hidden flex flex-col gap-3">
              {/* Top: large main photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '220px' }}>
                <Image
                  src="/images/cityscape_investment.png"
                  alt="Ekosistem Investasi ITSAR Circle"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-[var(--color-itsar-gold)] px-2.5 py-1 rounded-full shadow">
                  Ekosistem Investasi
                </span>
              </div>
              {/* Bottom row: 2 smaller photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '140px' }}>
                  <Image
                    src="/images/business_handshake.png"
                    alt="Kemitraan Bisnis"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold bg-[var(--color-itsar-gold)] px-2 py-0.5 rounded-full shadow">
                    Kemitraan Bisnis
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '140px' }}>
                  <Image
                    src="/images/community_professional.png"
                    alt="Komunitas Berkualitas"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-white text-[11px] font-bold bg-[var(--color-itsar-gold)] px-2 py-0.5 rounded-full shadow">
                    Komunitas Berkualitas
                  </span>
                </div>
              </div>
            </div>

            {/* ── DESKTOP: 3-photo mosaic (unchanged) ── */}
            <div className="hidden lg:grid grid-cols-2 gap-3" style={{ height: '420px' }}>

              {/* LEFT TALL — cityscape/skyline */}
              <div className="card-hover relative rounded-2xl overflow-hidden shadow-lg cursor-pointer row-span-2">
                <Image
                  src="/images/cityscape_investment.png"
                  alt="Ekosistem Investasi ITSAR Circle"
                  fill
                  className="object-cover"
                  sizes="22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-[var(--color-itsar-gold)] px-2.5 py-1 rounded-full shadow">
                  Investasi Emas
                </span>
              </div>

              {/* TOP RIGHT — business handshake */}
              <div className="card-hover relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src="/images/business_handshake.png"
                  alt="Kemitraan Bisnis"
                  fill
                  className="object-cover"
                  sizes="22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-[var(--color-itsar-gold)] px-2.5 py-1 rounded-full shadow">
                  Kemitraan Bisnis
                </span>
              </div>

              {/* BOTTOM RIGHT — community */}
              <div className="card-hover relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <Image
                  src="/images/community_professional.png"
                  alt="Komunitas Berkualitas"
                  fill
                  className="object-cover"
                  sizes="22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold bg-[var(--color-itsar-gold)] px-2.5 py-1 rounded-full shadow">
                  Komunitas Berkualitas
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Content */}
          <div className="space-y-6">
            <ScrollReveal delay={0.05}>
              <span
                style={{ fontFamily: "'Montserrat', 'Outfit', 'Futura', 'Century Gothic', 'Geometric Sans-Serif', sans-serif" }}
                className="section-badge font-geometric"
              >
                Tentang ITSAR Circle
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
              className="font-display text-3xl sm:text-4xl font-black text-[var(--color-itsar-navy)] leading-tight">
                Lebih dari Koperasi,{' '}
                <span className="block text-[var(--color-itsar-gold)]">Ini Ekosistem Kebaikan</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-3 text-[15px] text-gray-700 leading-relaxed font-normal">
                <p>
                  <strong className="text-[var(--color-itsar-navy)] font-semibold">ITSAR CIRCLE</strong>{' '}adalah koperasi modern berbasis komunitas yang dibangun atas nilai itsar &mdash; semangat mendahulukan kepentingan orang lain di atas diri sendiri.
                </p>
                <p>
                  Kami menghadirkan ekosistem koperasi yang tidak hanya berorientasi pada transaksi, tetapi juga pada pertumbuhan, kebersamaan, dan keberlanjutan ekonomi anggota.
                </p>
                <p>
                  Dengan sistem yang profesional, transparan, dan berbasis teknologi, <strong className="text-[var(--color-itsar-navy)] font-semibold">ITSAR CIRCLE</strong>{' '}berkomitmen menjadi mitra terpercaya dalam mewujudkan kesejahteraan bersama.
                </p>
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-3" itemSelector="[data-stagger]">
              {checkPoints.map((point) => (
                <div key={point} data-stagger className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-itsar-gold)] shrink-0" />
                  {point}
                </div>
              ))}
            </StaggerReveal>

            <ScrollReveal delay={0.25}>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-itsar-gold)] hover:gap-3 transition-all duration-200 border border-[var(--color-itsar-gold)] px-4 py-2.5 rounded-lg hover:bg-[var(--color-itsar-gold-light)]"
              >
                Lebih Lanjut Tentang Kami <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
