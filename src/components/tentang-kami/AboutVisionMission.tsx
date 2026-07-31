import { Goal } from 'lucide-react';

const missions = [
  {
    num: '01',
    text: 'Membangun ekosistem koperasi yang kuat, modern, dan terpercaya.',
  },
  {
    num: '02',
    text: 'Mengoptimalkan potensi anggota melalui partisipasi aktif dan kolaboratif.',
  },
  {
    num: '03',
    text: 'Mengelola usaha secara transparan, akuntabel, dan profesional sesuai prinsip syariah.',
  },
  {
    num: '04',
    text: 'Menghadirkan manfaat ekonomi nyata melalui program koperasi dan SHU anggota.',
  },
];

export function AboutVisionMission() {
  return (
    <section className="py-10 sm:py-14 bg-[#FDFAEB]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Gold Accent Lines */}
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
          <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-[var(--color-itsar-gold)] opacity-75" />
          <span
            style={{ fontFamily: "'Montserrat', 'Outfit', 'Century Gothic', sans-serif" }}
            className="text-[14px] sm:text-[16px] font-black tracking-[0.2em] uppercase text-[var(--color-itsar-gold)]"
          >
            Visi & Misi Kami
          </span>
          <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-[var(--color-itsar-gold)] opacity-75" />
        </div>

        {/* 2-Column Grid for Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT CARD: VISI (5 columns) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 bg-gradient-to-b from-[#FAF7EE] to-[#F3ECD9]/80 border border-[#E8DCBE] rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300">
              
              {/* Title Visi - Pinned symmetrically at the top */}
              <h3
                style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                className="w-full text-center text-[22px] sm:text-[26px] lg:text-[28px] font-black tracking-widest uppercase text-[var(--color-itsar-gold)] mb-6 sm:mb-8 shrink-0"
              >
                Visi
              </h3>

              {/* Centered content block below the pinned heading */}
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                {/* Goal Icon (Target with arrow) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border border-[var(--color-itsar-gold)]/30 flex items-center justify-center mb-5 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm">
                  <Goal className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[var(--color-itsar-gold)] stroke-[1.8]" />
                </div>

                {/* Vision Text */}
                <p
                  style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                  className="text-[16px] sm:text-[19px] lg:text-[22px] text-[var(--color-itsar-navy)] font-bold leading-relaxed max-w-sm"
                >
                  &ldquo;Menjadi koperasi modern berbasis komunitas yang profesional, amanah dan berlandaskan prinsip syariah dalam membangun ekosistem ekonomi riil anggota yang tumbuh, mandiri dan sejahtera bersama.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD: MISI (7 columns) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 bg-white border border-gray-200/80 rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.05)] flex flex-col relative overflow-hidden transition-all duration-300">
              
              {/* Title Misi - Pinned symmetrically at the top */}
              <h3
                style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                className="w-full text-center text-[22px] sm:text-[26px] lg:text-[28px] font-black tracking-widest uppercase text-[var(--color-itsar-gold)] mb-6 sm:mb-8 shrink-0"
              >
                Misi
              </h3>

              <div className="divide-y divide-gray-200/80 flex-1 flex flex-col justify-center">
                {missions.map((m) => (
                  <div key={m.num} className="flex items-start gap-3 sm:gap-5 py-4 sm:py-6 first:pt-0 last:pb-0 group cursor-pointer">
                    {/* Number Badge */}
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E2A732] via-[#C9922A] to-[#A36B14] text-white font-black text-sm sm:text-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {m.num}
                    </div>

                    {/* Mission Text */}
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <p className="text-[14px] sm:text-[16px] lg:text-[16.5px] font-semibold text-gray-800 group-hover:text-[var(--color-itsar-navy)] transition-colors leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
