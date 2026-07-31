import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import StaggerReveal from '@/components/common/StaggerReveal';

const services = [
  { id: 'investasi-syariah',  title: 'Investasi Syariah',       desc: 'Pengembangan modal berkelanjutan',         img: '/images/cityscape_investment.png' },
  { id: 'investasi-emas',     title: 'Investasi Emas',          desc: 'Simpanan dan trading berkaidah syariah',   img: '/images/gold_bars.png' },
  { id: 'pembiayaan-anggota', title: 'Pembiayaan Anggota',      desc: 'Solusi permodalan syariah profesional',    img: '/images/services_financing.png' },
  { id: 'bisnis-bersama',     title: 'Bisnis Bersama',          desc: 'Peluang kemitraan untuk anggota',           img: '/images/business_handshake.png' },
  { id: 'berita',             title: 'Program Sosial (CSR)',    desc: 'Memberi manfaat untuk umat & berita terkini', img: '/images/services_csr.png' },
  { id: 'edukasi',            title: 'Edukasi & Pengembangan',  desc: 'Seminar, studi, dan mentoring',             img: '/images/services_education.png' },
];

export default function ServicesSection() {
  return (
    <section id="produk-layanan" className="py-10 sm:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <ScrollReveal className="text-center">
          <span
            style={{ fontFamily: "'Montserrat', 'Outfit', 'Futura', 'Century Gothic', 'Geometric Sans-Serif', sans-serif" }}
            className="section-badge font-geometric"
          >
            Produk &amp; Layanan Kami
          </span>
        </ScrollReveal>

        {/* Grid */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          itemSelector="[data-stagger]"
        >
          {services.map((srv, idx) => (
            <article
              key={idx}
              id={srv.id}
              data-stagger
              className="card-hover group bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:border-amber-200"
            >
              {/* Photo */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <Image
                  src={srv.img}
                  alt={srv.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex items-start justify-between gap-3 bg-white">
                <div>
                  <h3 className="font-display font-bold text-[15px] text-[var(--color-itsar-navy)]">{srv.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{srv.desc}</p>
                </div>
                <button
                  aria-label={`Selengkapnya ${srv.title}`}
                  className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-gray-400 transition-all duration-200 group-hover:bg-[var(--color-itsar-gold)] group-hover:border-[var(--color-itsar-gold)] group-hover:text-white cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}