import { Navbar, Footer } from '@/components/layout-parts';
import StatsSection from '@/components/beranda/Stats';
import {
  AboutHero,
  AboutIntro,
  AboutVisionMission,
  AboutValues,
  AboutOrgStructure,
  AboutCTA,
} from '@/components/tentang-kami';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | ITSAR CIRCLE - Ekosistem Koperasi Syariah Modern',
  description: 'Mengenal ITSAR CIRCLE sebagai ekosistem kebaikan berlandaskan prinsip syariah untuk tumbuh dan sejahtera bersama melalui investasi, bisnis, dan kolaborasi sosial.',
};

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutIntro />
        
        {/* Stats Section with 3D Gold Icons */}
        <div className="bg-white pt-2 pb-12 sm:pb-16">
          <StatsSection />
        </div>

        <AboutVisionMission />
        <AboutValues />
        <AboutOrgStructure />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
