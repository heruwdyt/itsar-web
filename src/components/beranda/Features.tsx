import { Users, Coins, Briefcase, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import StaggerReveal from '@/components/common/StaggerReveal';

const features = [
  { icon: Users,          title: 'Komunitas Eksklusif',     desc: 'Berkolaborasi & saling menguatkan' },
  { icon: Coins,          title: 'Investasi Syariah',       desc: 'Aman, transparan, dan produktif' },
  { icon: Briefcase,      title: 'Peluang Bisnis',          desc: 'Meningkatkan nilai dan manfaat' },
  { icon: GraduationCap,  title: 'Edukasi Berkualitas',     desc: 'Seminar, workshop, dan mentoring' },
  { icon: HeartHandshake, title: 'Manfaat Sosial',          desc: 'Memberi dampak untuk sesama' },
  { icon: ShieldCheck,    title: 'Tata Kelola Profesional', desc: 'Akuntabel dan berintegritas' },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerReveal
          className="bg-white border border-gray-200/80 rounded-[24px] sm:rounded-[32px] shadow-[0_15px_45px_-5px_rgba(0,0,0,0.12),0_5px_15px_-2px_rgba(0,0,0,0.05)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 relative overflow-hidden"
          itemSelector="[data-stagger]"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              data-stagger
              className="relative flex flex-col items-center text-center px-3 py-6 sm:px-4 sm:py-8 lg:py-9 group cursor-pointer"
            >
              <div className="text-[var(--color-itsar-gold)] mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                <item.icon className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 stroke-[1.8]" />
              </div>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="font-display font-bold text-[13px] sm:text-[15px] lg:text-[16px] text-[var(--color-itsar-navy)] leading-tight mb-1 group-hover:text-[var(--color-itsar-gold)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-[12.5px] lg:text-[13px] text-gray-500 font-medium leading-tight">
                  {item.desc}
                </p>
              </div>

              {/* Garis Pembatas Vertikal GOLD (Desktop - 6 Kolom) */}
              {idx < features.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[60%] bg-[var(--color-itsar-gold)] opacity-80 rounded-full z-10" />
              )}

              {/* Garis Pembatas Vertikal GOLD (Tablet - 3 Kolom) */}
              {(idx % 3 !== 2 && idx < features.length - 1) && (
                <div className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[60%] bg-[var(--color-itsar-gold)] opacity-80 rounded-full z-10" />
              )}

              {/* Garis Pembatas Vertikal GOLD (Mobile - 2 Kolom) */}
              {(idx % 2 === 0 && idx < features.length - 1) && (
                <div className="block sm:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[60%] bg-[var(--color-itsar-gold)] opacity-80 rounded-full z-10" />
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}