import { Navbar, Footer } from '@/components/layout-parts';
import HeroSection from '@/components/beranda/Hero';
import FeaturesSection from '@/components/beranda/Features';
import AboutSection from '@/components/beranda/About';
import StatsSection from '@/components/beranda/Stats';
import ServicesSection from '@/components/beranda/Services';
import CTASection from '@/components/beranda/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}