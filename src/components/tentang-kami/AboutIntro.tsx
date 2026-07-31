import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const checkPoints = [
  'Berlandaskan Prinsip Syariah',
  'Transparan & Akuntabel',
  'Dikelola Secara Profesional',
  'Berkelanjutan & Berdaya Guna',
];

export function AboutIntro() {
  return (
    <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Photo Area (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-[#EADAB8]/40 bg-[#FAF8F5] aspect-[4/3] lg:aspect-[4/5] max-w-xl mx-auto lg:max-w-none">
              <Image
                src="/images/hero_team.png"
                alt="Tim Profesional ITSAR Circle"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle gold bottom accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* RIGHT: Content (7 columns) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            <div className="flex items-center gap-2.5">
              
              <span className="text-[18px] sm:text-[20px] font-black tracking-wider uppercase text-[var(--color-itsar-gold)]">
                Mengenal ITSAR Circle
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[var(--color-itsar-navy)] leading-[1.3] tracking-tight"
            >
              Lebih dari Koperasi, Kami adalah Ekosistem Kebaikan
            </h2>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="text-[var(--color-itsar-navy)] font-bold">ITSAR CIRCLE</strong>{' '}adalah koperasi modern berbasis komunitas yang dibangun atas nilai itsar &mdash; semangat mendahulukan kepentingan orang lain di atas diri sendiri.
              </p>
              <p>
                Kami menghadirkan ekosistem koperasi yang tidak hanya berorientasi pada transaksi, tetapi juga pada pertumbuhan, kebersamaan, dan keberlanjutan ekonomi anggota.
              </p>
              <p>
                Dengan sistem yang profesional, transparan, dan berbasis teknologi, <strong className="text-[var(--color-itsar-navy)] font-semibold">ITSAR CIRCLE</strong>{' '}berkomitmen menjadi mitra terpercaya dalam mewujudkan kesejahteraan bersama.
              </p>
            </div>

            {/* Checkpoints Grid without borders */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {checkPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-1 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-itsar-gold)] shrink-0 stroke-[2.2]" />
                  <span className="text-[14.5px] sm:text-[15px] font-bold text-gray-800 group-hover:text-[var(--color-itsar-navy)] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
