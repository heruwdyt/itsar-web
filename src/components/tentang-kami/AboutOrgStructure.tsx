'use client';

import React from 'react';

export function AboutOrgStructure() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[16px] font-bold tracking-widest text-[var(--color-itsar-gold)] uppercase mb-3">
            Tata Kelola
          </p>
          <h2
            style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[var(--color-itsar-navy)] tracking-tight mb-4"
          >
            Struktur Organisasi
          </h2>
          <div className="w-16 h-[2px] bg-[var(--color-itsar-gold)] mx-auto mb-5" />
          <p className="text-gray-500 text-[15px] sm:text-base max-w-lg mx-auto leading-relaxed">
            Dipimpin oleh profesional yang amanah dan berpengalaman, berlandaskan prinsip syariah demi kesejahteraan anggota.
          </p>
        </div>

        {/* Org Chart */}
        <div className="flex flex-col items-center">

          {/* ── LEVEL 1: DEWAN ── */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">

            {/* Dewan Pengawas */}
            <div className="border border-[var(--color-itsar-gold)]/30 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:border-[var(--color-itsar-gold)] transition-all duration-300 text-center">
              <div className="mb-5 pb-4 border-b border-gray-100">
                <h3
                  style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                  className="text-lg font-black text-[var(--color-itsar-navy)] tracking-wide"
                >
                  Dewan Pengawas
                </h3>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Pengawasan Koperasi
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[var(--color-itsar-navy)] text-white uppercase tracking-wide shrink-0 w-[70px] text-center">
                    Ketua
                  </span>
                  <span className="font-semibold text-gray-800 text-[15px] w-[120px] text-left">Dedy Irawan</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 uppercase tracking-wide shrink-0 w-[70px] text-center">
                    Anggota
                  </span>
                  <span className="font-medium text-gray-700 text-[15px] w-[120px] text-left">Faisal Ramli</span>
                </div>
              </div>
            </div>

            {/* Dewan Syariah */}
            <div className="border border-[var(--color-itsar-gold)]/30 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:border-[var(--color-itsar-gold)] transition-all duration-300 text-center flex flex-col">
              <div className="mb-5 pb-4 border-b border-gray-100">
                <h3
                  style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                  className="text-lg font-black text-[var(--color-itsar-navy)] tracking-wide"
                >
                  Dewan Syariah
                </h3>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Kepatuhan Syariah
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center flex-1">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[var(--color-itsar-gold)] text-white uppercase tracking-wide shrink-0 w-[70px] text-center">
                  Ketua
                </span>
                <span className="font-semibold text-gray-800 text-[15px] w-[120px] text-left">Muhtar Fatony</span>
              </div>
            </div>
          </div>

          {/* ── Connector: Dewan → Pengurus ── */}
          <div className="hidden md:flex flex-col items-center">
            <div className="relative w-full max-w-3xl h-14">
              {/* Left vertical stem */}
              <div className="absolute left-1/4 top-0 w-[2px] h-5 bg-[var(--color-itsar-gold)]" />
              {/* Right vertical stem */}
              <div className="absolute right-1/4 top-0 w-[2px] h-5 bg-[var(--color-itsar-gold)]" />
              {/* Horizontal bar */}
              <div className="absolute top-5 left-1/4 right-1/4 h-[2px] bg-[var(--color-itsar-gold)]" />
              {/* Center junction dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[16px] w-3 h-3 rounded-full bg-[var(--color-itsar-gold)] border-2 border-white shadow-sm" />
              {/* Center vertical drop */}
              <div className="absolute left-1/2 -translate-x-1/2 top-5 w-[2px] h-9 bg-[var(--color-itsar-gold)]" />
            </div>
          </div>
          <div className="w-[2px] h-10 bg-[var(--color-itsar-gold)] md:hidden my-2" />

          {/* ── LEVEL 2: PENGURUS ── */}
          <div className="w-full max-w-3xl">
            <div className="border-2 border-[var(--color-itsar-gold)]/30 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)] transition-shadow duration-300 text-center">

              <div className="mb-6 pb-5 border-b border-gray-100">
                <h3
                  style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                  className="text-xl sm:text-2xl font-black text-[var(--color-itsar-navy)] tracking-wide"
                >
                  Pengurus
                </h3>
                <span className="text-[11px] font-semibold text-[var(--color-itsar-gold)] uppercase tracking-wider">
                  Badan Eksekutif Koperasi
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Ketua */}
                <div className="text-center border border-[var(--color-itsar-gold)]/25 rounded-xl p-5 bg-[#FDFBF7] shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
                  <span className="text-[10px] font-bold text-[var(--color-itsar-gold)] uppercase tracking-widest block mb-2">
                    Ketua
                  </span>
                  <h4 className="font-bold text-[var(--color-itsar-navy)] text-[16px] sm:text-[17px]">
                    Rizal Nurdin
                  </h4>
                </div>

                {/* Sekretaris */}
                <div className="text-center border border-[var(--color-itsar-gold)]/25 rounded-xl p-5 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Sekretaris
                  </span>
                  <h4 className="font-bold text-gray-800 text-[16px] sm:text-[17px]">
                    Firdiani
                  </h4>
                </div>

                {/* Bendahara */}
                <div className="text-center border border-[var(--color-itsar-gold)]/25 rounded-xl p-5 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Bendahara
                  </span>
                  <h4 className="font-bold text-gray-800 text-[16px] sm:text-[17px]">
                    M. Slamet Ridwan
                  </h4>
                </div>
              </div>

            </div>
          </div>

          {/* ── Connector: Pengurus → Manajer ── */}
          <div className="hidden md:flex flex-col items-center">
            <div className="relative w-full max-w-3xl h-14">
              {/* Center vertical stem */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-6 bg-[var(--color-itsar-gold)]" />
              {/* Junction dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[20px] w-3 h-3 rounded-full bg-[var(--color-itsar-gold)] border-2 border-white shadow-sm" />
              {/* Horizontal bar */}
              <div className="absolute top-[26px] left-[16.66%] right-[16.66%] h-[2px] bg-[var(--color-itsar-gold)]" />
              {/* Left drop */}
              <div className="absolute left-[16.66%] top-[26px] w-[2px] h-7 bg-[var(--color-itsar-gold)]" />
              {/* Center drop */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[26px] w-[2px] h-7 bg-[var(--color-itsar-gold)]" />
              {/* Right drop */}
              <div className="absolute right-[16.66%] top-[26px] w-[2px] h-7 bg-[var(--color-itsar-gold)]" />
            </div>
          </div>
          <div className="w-[2px] h-10 bg-[var(--color-itsar-gold)] md:hidden my-2" />

          {/* ── LEVEL 3: MANAJER ── */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">
            {[
              { title: 'Manajer Bisnis', sub: 'Divisi Bisnis & Operasional' },
              { title: 'Manajer Funding', sub: 'Divisi Pendanaan & Investasi' },
              { title: 'Manajer CRM', sub: 'Divisi Layanan & Relasi Anggota' },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center border border-[var(--color-itsar-gold)]/30 rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:border-[var(--color-itsar-gold)] transition-all duration-300"
              >
                <h4
                  style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }}
                  className="font-black text-[15px] sm:text-base text-[var(--color-itsar-navy)] tracking-wide mb-1"
                >
                  {item.title}
                </h4>
                <span className="text-[11px] text-gray-400 font-medium">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
