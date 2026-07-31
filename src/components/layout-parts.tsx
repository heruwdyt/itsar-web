'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(pathname === '/tentang-kami' ? 'Tentang Kami' : 'Beranda');
  // Menggunakan ref agar tidak perlu masuk ke dependency array useEffect
  const pendingAnchorRef = useRef<string | null>(null);

  // useCallback agar scrollToSection stabil dan tidak memicu warning ESLint
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // Gunakan queueMicrotask agar tidak terjadi synchronous cascading re-render (sesuai best practice React modern)
    queueMicrotask(() => {
      if (pathname === '/tentang-kami') {
        setActiveTab('Tentang Kami');
      } else if (pathname === '/') {
        setActiveTab('Beranda');
      }
    });

    // Jika ada anchor yang ditunda (dari berpindah halaman), scroll ke section tersebut
    if (pendingAnchorRef.current) {
      const anchor = pendingAnchorRef.current;
      pendingAnchorRef.current = null; // Reset ref setelah dibaca
      const timer = setTimeout(() => {
        scrollToSection(anchor);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Tidak ada anchor tertunda, scroll ke atas halaman
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollToSection]);

  const handleNavClick = (label: string, href?: string, e?: React.MouseEvent) => {
    setActiveTab(label);
    setOpen(false);
    setProductsOpen(false);

    if (!href || typeof window === 'undefined') return;

    if (href.includes('#')) {
      const [pagePath, sectionId] = href.split('#');
      const targetPage = pagePath || '/';

      // Apakah elemen section sudah ada di halaman sekarang?
      const element = document.getElementById(sectionId);
      if (element) {
        // Sudah ada di halaman yang sama — langsung scroll
        if (e) e.preventDefault();
        window.history.pushState(null, '', `#${sectionId}`);
        scrollToSection(sectionId);
      } else {
        // Elemen belum ada (harus berpindah halaman dulu)
        // Simpan anchor di ref supaya di-scroll setelah halaman render
        pendingAnchorRef.current = sectionId;
        router.push(targetPage);
      }
    } else {
      // Link tanpa anchor (contoh: '/' atau '/tentang-kami')
      if (pathname === href && e) {
        // Sudah di halaman yang sama, cukup scroll ke atas
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Jika berpindah halaman, useEffect akan scroll ke atas via scrollTo(0,0)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { href: '/#produk-layanan', label: 'Investasi Syariah' },
    { href: '/#produk-layanan', label: 'Investasi Emas' },
    { href: '/#produk-layanan', label: 'Pembiayaan Anggota' },
    { href: '/#produk-layanan', label: 'Bisnis Bersama' },
    { href: '/#produk-layanan', label: 'Program Sosial (CSR)' },
    { href: '/#produk-layanan', label: 'Edukasi & Pengembangan' },
  ];

  const mainLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Produk & Layanan', href: '/#produk-layanan', isDropdown: true },
    { label: 'Keanggotaan', href: '/#keanggotaan' },
    { label: 'Edukasi', href: '/#edukasi' },
    { label: 'Berita', href: '/#berita' },
    { label: 'Kontak', href: '/#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[var(--color-itsar-gold)]/30 py-2.5 sm:py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6">

          {/* Logo 3D Horizontal */}
          <Link
            href="/"
            onClick={(e) => handleNavClick('Beranda', '/', e)}
            className="flex items-center gap-2 shrink-0 group py-0.5"
          >
            <Image
              src="/images/logo_3d_horizontal.png"
              alt="Logo ITSAR Circle"
              width={270}
              height={75}
              priority
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center">
            {mainLinks.map((item) => {
              const isActive = activeTab === item.label;

              if (item.isDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(item.label, item.href, e)}
                      className={`relative group flex items-center gap-1.5 text-[13.5px] xl:text-[14px] whitespace-nowrap px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? 'font-bold text-[#c9922a]'
                          : 'font-medium text-gray-700 hover:text-[var(--color-itsar-navy)] hover:bg-yellow-50/70'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#c9922a]' : 'text-gray-400'}`} />
                      
                      {/* Active / Hover Gold Underline */}
                      <span
                        className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] rounded-full transition-all duration-300 ${
                          isActive ? 'bg-[#F5C518] opacity-100 scale-x-100' : 'bg-[#F5C518]/40 opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </button>

                    {productsOpen && (
                      <div className="absolute top-full left-0 w-60 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-amber-100 py-2 mt-1.5 z-50">
                        {productLinks.map((l) => (
                          <Link
                            key={l.label}
                            href={l.href}
                            onClick={(e) => handleNavClick(item.label, l.href, e)}
                            className="block px-5 py-2.5 text-[13px] font-medium text-gray-700 hover:bg-amber-50 hover:text-[var(--color-itsar-gold)] transition"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, item.href, e)}
                  className={`relative group text-[13.5px] xl:text-[14px] whitespace-nowrap px-3.5 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'font-bold text-[#c9922a]'
                      : 'font-medium text-gray-700 hover:text-[var(--color-itsar-navy)] hover:bg-yellow-50/70'
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {/* Active / Hover Gold Underline */}
                  <span
                    className={`absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#F5C518] opacity-100 scale-x-100' : 'bg-[#F5C518]/40 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href={process.env.NEXT_PUBLIC_LOGIN_URL || '#'}
              className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#b89222] hover:from-[#c29c29] hover:to-[#a38018] text-white text-[13.5px] xl:text-[14px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap border border-amber-200/30"
            >
              <User className="w-4 h-4" />
              <span>Masuk Member</span>
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl mt-3">
          <div className="px-4 py-4 space-y-1">
            {mainLinks.map((l) => {
              const isActive = activeTab === l.label;
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNavClick(l.label, l.href, e)}
                  className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? 'text-[#9a7010] bg-yellow-50 border-l-[3px] border-[#F5C518]'
                      : 'text-gray-700 hover:text-[#c9922a] hover:bg-yellow-50/60'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href={process.env.NEXT_PUBLIC_LOGIN_URL || '#'}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-[#D4AF37] to-[#b89222] text-white text-sm font-bold px-4 py-3.5 rounded-xl shadow-md"
            >
              <User className="w-4 h-4" /> <span>Masuk Member</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer id="kontak" className="bg-[var(--color-itsar-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Logo 3D Stacked */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo_3d_stacked.png"
                alt="Logo ITSAR Circle"
                width={170}
                height={170}
                className="w-36 sm:w-40 h-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_6px_18px_rgba(212,175,55,0.25)]"
              />
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed">
              Koperasi syariah modern yang menghubungkan investasi, bisnis, dan kolaborasi untuk kesejahteraan anggota dan umat.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[var(--color-itsar-gold)] hover:border-[var(--color-itsar-gold)]/60 hover:bg-[var(--color-itsar-gold)]/10 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[var(--color-itsar-gold)] hover:border-[var(--color-itsar-gold)]/60 hover:bg-[var(--color-itsar-gold)]/10 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[var(--color-itsar-gold)] hover:border-[var(--color-itsar-gold)]/60 hover:bg-[var(--color-itsar-gold)]/10 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <div className="font-bold text-xs text-[var(--color-itsar-gold)] uppercase tracking-wider mb-4">
              Tentang ITSAR Circle
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><Link href="/tentang-kami" className="hover:text-white transition">Visi & Misi</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-white transition">Pengurus & Pengawas Syariah</Link></li>
              <li><Link href="/#keanggotaan" className="hover:text-white transition">Keanggotaan & Syarat</Link></li>
              <li><Link href="/#berita" className="hover:text-white transition">Laporan & Keterbukaan</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <div className="font-bold text-xs text-[var(--color-itsar-gold)] uppercase tracking-wider mb-4">
              Produk & Layanan Syariah
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><Link href="#produk-layanan" className="hover:text-white transition">Investasi Usaha (Mudharabah)</Link></li>
              <li><Link href="#produk-layanan" className="hover:text-white transition">Investasi Emas & Logam Mulia</Link></li>
              <li><Link href="#produk-layanan" className="hover:text-white transition">Pembiayaan Anggota (Murabahan)</Link></li>
              <li><Link href="#produk-layanan" className="hover:text-white transition">Kolaborasi Bisnis Bersama</Link></li>
              <li><Link href="#produk-layanan" className="hover:text-white transition">Dana Sosial (Ziswaf & CSR)</Link></li>
            </ul>
          </div>

          {/* Col 3: Kontak Kami */}
          <div>
            <div className="font-bold text-xs text-[var(--color-itsar-gold)] uppercase tracking-wider mb-4">
              Kontak Kami
            </div>
            <ul className="space-y-3.5 text-xs text-gray-400 font-medium">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[var(--color-itsar-gold)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <div className="text-gray-300 font-semibold mb-0.5">Telepon</div>
                  <div>+62 811-9283-889</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[var(--color-itsar-gold)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-gray-300 font-semibold mb-0.5">Alamat</div>
                  <div>Jl. Jend. Sudirman No. 45, Jakarta Selatan, Indonesia</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[var(--color-itsar-gold)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-gray-300 font-semibold mb-0.5">Email</div>
                  <a href="mailto:info@itsarcircle.id" className="hover:text-white transition">info@itsarcircle.id</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="font-bold text-xs text-[var(--color-itsar-gold)] uppercase tracking-wider mb-4">
              Pusat Informasi & Bantuan
            </div>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li><Link href="#kontak" className="hover:text-white transition">Tanya Jawab (FAQ)</Link></li>
              <li><Link href="#kontak" className="hover:text-white transition">Layanan Anggota</Link></li>
              <li><Link href="#kontak" className="hover:text-white transition">Panduan Aplikasi / Web</Link></li>
              <li><Link href="#kontak" className="hover:text-white transition">Kebijakan Privasi</Link></li>
              <li><Link href="#kontak" className="hover:text-white transition">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} ITSAR Circle — All rights reserved.
          </div>
          <div className="flex items-center text-[var(--color-itsar-gold)] font-semibold tracking-wide text-[13px]">
            Bertumbuh dan Sejahtera Bersama
          </div>
        </div>

      </div>
    </footer>
  );
}
