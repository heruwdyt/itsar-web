import Image from 'next/image';


export function AboutHero() {
  return (
    <section className="relative bg-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center">
      {/* Full-width Background Banner Graphic */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <Image
          src="/images/tentang-kami.png"
          alt="Latar Belakang ITSAR Circle"
          fill
          className="object-cover object-center sm:object-center"
          priority
          sizes="100vw"
        />
        {/* Soft light overlay on small screens so text remains 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden" />

        {/* Seamless bottom gradient transition blending into the solid white section below */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 lg:h-44 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-[55%] text-left">
          {/* Main Title */}
          <h1
            style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
            className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[var(--color-itsar-navy)] tracking-tight leading-[1.12] mb-4 sm:mb-6"
          >
            Tentang Kami
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-[22px] text-gray-700 font-bold leading-relaxed max-w-xl">
            Membangun Ekosistem Kebaikan untuk Tumbuh dan Sejahtera Bersama
          </p>
        </div>
      </div>
    </section>
  );
}

