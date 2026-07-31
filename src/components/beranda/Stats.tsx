import Image from 'next/image';
import StaggerReveal from '@/components/common/StaggerReveal';

const stats = [
  { image: '/images/stat_anggota_aktif.png',        val: '500+',      label: 'Anggota Aktif',               alt: 'Ikon 3D Anggota Aktif' },
  { image: '/images/stat_aset_dikelola.png',        val: 'Rp 250 M+', label: 'Total Aset Dikelola',         alt: 'Ikon 3D Total Aset Dikelola' },
  { image: '/images/stat_total_investasi.png',      val: 'Rp 180 M+', label: 'Total Investasi',             alt: 'Ikon 3D Total Investasi' },
  { image: '/images/stat_perpanjang_investasi.png', val: '95%',        label: 'Anggota Perpanjang Investasi', alt: 'Ikon 3D Anggota Perpanjang Investasi' },
];

export default function StatsSection() {
  return (
    <section id="keanggotaan" className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerReveal
          className="bg-white border border-gray-100 rounded-[24px] sm:rounded-[32px] shadow-[0_15px_45px_-5px_rgba(0,0,0,0.12),0_5px_15px_-2px_rgba(0,0,0,0.05)] grid grid-cols-2 lg:grid-cols-4 relative overflow-hidden"
          itemSelector="[data-stagger]"
        >
          {stats.map((st, i) => (
            <div
              key={i}
              data-stagger
              className="relative flex flex-row items-center justify-center gap-2.5 sm:gap-4 lg:gap-5 px-2 py-5 sm:px-6 sm:py-8 lg:px-5 lg:py-9 text-left group cursor-pointer"
            >
              <div className="relative w-11 h-11 sm:w-16 sm:h-16 lg:w-[66px] lg:h-[66px] shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-md drop-shadow-sm">
                <Image
                  src={st.image}
                  alt={st.alt}
                  fill
                  sizes="66px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-xl sm:text-[26px] lg:text-[28px] xl:text-[32px] font-bold text-[var(--color-itsar-navy)] group-hover:text-[var(--color-itsar-gold)] transition-colors leading-tight">
                  {st.val}
                </div>
                <div className="text-[11px] sm:text-[13.5px] lg:text-[14.5px] font-semibold text-gray-600 mt-0.5 sm:mt-1 leading-snug">
                  {st.label}
                </div>
              </div>

              {/* Garis Pembatas Vertikal GOLD (Desktop - 4 Kolom) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[60%] bg-[var(--color-itsar-gold)] opacity-85 rounded-full z-10" />
              )}

              {/* Garis Pembatas Vertikal GOLD (Tablet/Mobile - 2 Kolom) */}
              {(i % 2 !== 1 && i < stats.length - 1) && (
                <div className="block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[60%] bg-[var(--color-itsar-gold)] opacity-85 rounded-full z-10" />
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}