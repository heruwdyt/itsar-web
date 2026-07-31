'use client';

import React from 'react';
import Link from 'next/link';
import { LogOut, Shield, Award, ChevronRight } from 'lucide-react';

export default function MemberDashboardPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Dasbor */}
        <div className="bg-[var(--color-itsar-navy)] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[var(--color-itsar-gold)]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-itsar-gold)]/15 border border-[var(--color-itsar-gold)]/30 text-[var(--color-itsar-gold)] text-xs font-semibold mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Anggota Terverifikasi</span>
            </div>
            <h1 style={{ fontFamily: "'Georgia', 'Times New Roman', Times, serif" }} className="text-2xl sm:text-3xl font-bold">
              Dasbor Anggota ITSAR Circle
            </h1>
            <p className="text-sm text-gray-300 mt-2">
              Selamat datang kembali di portal manajemen investasi dan keanggotaan syariah Anda.
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition border border-white/10 shrink-0"
          >
            <LogOut className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Status Keanggotaan</p>
              <p className="text-lg font-bold text-[var(--color-itsar-navy)] mt-1">Aktif & Bersaiyid</p>
            </div>
            <Award className="w-10 h-10 text-[var(--color-itsar-gold)]" />
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Total Investasi Syariah</p>
              <p className="text-lg font-bold text-[var(--color-itsar-navy)] mt-1">Rp 0 (Memulai)</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-[var(--color-itsar-gold)] font-bold">
              Rp
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase text-gray-500 tracking-wider">Bagi Hasil / Dividen</p>
              <p className="text-lg font-bold text-emerald-600 mt-1">Rp 0</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
