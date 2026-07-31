import Image from 'next/image';

const values = [
  {
    image: '/images/komunitas.png',
    title: 'BERBASIS KOMUNITAS',
    desc: 'Kami percaya kekuatan terbesar lahir dari kebersamaan. Saling mendukung dan menguatkan untuk mencapai tujuan bersama.',
  },
  {
    image: '/images/profesional.png',
    title: 'PROFESIONAL DAN AMANAH',
    desc: 'Kami menjalankan setiap proses dengan terbuka, Amanah & dapat dipertanggungjawabkan demi kepercayaan anggota.',
  },
  {
    image: '/images/bertumbuh.png',
    title: 'BERTUMBUH BERKELANJUTAN',
    desc: 'Kami berkomitmen untuk terus meningkatkan kapasitas diri, kontribusi dan dampak kepada anggota.',
  },
  {
    image: '/images/kesejahteraan-anggota.png',
    title: 'KESEJAHTERAAN ANGGOTA',
    desc: 'Tujuan utama kami adalah meningkatkan kesejahteraan anggota melalui manfaat ekonomi yang nyata.',
  },
  {
    image: '/images/syariah.png',
    title: 'PRINSIP SYARIAH',
    desc: 'Kami beroperasi sesuai dengan prinsip syariah untuk memastikan setiap aktivitas bernilai halal, adil, dan berkah.',
  },
];

export function AboutValues() {
  return (
    <section className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Accent Lines */}
        {/* Section Header with Gold Accent Lines & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 mb-3 sm:mb-4">
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-[var(--color-itsar-gold)] opacity-75" />
            <span
              style={{ fontFamily: "'Montserrat', 'Outfit', 'Century Gothic', sans-serif" }}
              className="text-[14px] sm:text-[16px] font-black tracking-[0.2em] uppercase text-[var(--color-itsar-gold)]"
            >
              Nilai-Nilai Kami
            </span>
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-[var(--color-itsar-gold)] opacity-75" />
          </div>

          <p
            style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
            className="text-[16px] sm:text-[19px] lg:text-[21px] font-bold text-[var(--color-itsar-navy)] leading-relaxed px-2"
          >
            &ldquo;Nilai-nilai ini menjadi fondasi dalam setiap langkah dan keputusan kami untuk menghadirkan manfaat terbaik bagi seluruh anggota.&rdquo;
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white to-[#FAF7EF]/40 border-2 border-[#EADAB8]/60 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col items-center text-center group hover:border-[var(--color-itsar-gold)] transition-all duration-300 cursor-pointer overflow-hidden shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-5px_rgba(215,154,43,0.15)]"
            >
              {/* Image Container with elegant hover scaling */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-5 rounded-2xl overflow-hidden border-2 border-[#E5D2A5]/70 shadow-sm group-hover:scale-105 group-hover:border-[var(--color-itsar-gold)] transition-all duration-300 shrink-0 bg-white">
                <Image
                  src={val.image}
                  alt={val.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                className="text-[16px] sm:text-[17px] font-black text-[var(--color-itsar-navy)] mb-3 group-hover:text-[var(--color-itsar-gold)] transition-colors leading-tight tracking-wide uppercase"
              >
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-[13.5px] text-gray-600 font-medium leading-relaxed flex-1 group-hover:text-gray-700 transition-colors">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

