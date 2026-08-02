import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import type { Language } from './types';
import { content } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CycleOfBlessing } from './components/CycleOfBlessing';
import { ImpactCalculator } from './components/ImpactCalculator';
import { ChoirSpotlight } from './components/ChoirSpotlight';
import { Governance } from './components/Governance';
import { LocationHub } from './components/LocationHub';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  // Initialize Lenis smooth scroll (Strict Contract Rule: syncTouch: false)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false, // Critical: preserves native touch momentum on mobile devices
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Update root html attribute for Khmer font override styling
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.setAttribute('data-lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Sticky Header */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t.nav}
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          t={t.hero}
          onOpenDonate={() => setDonateModalOpen(true)}
        />

        <CycleOfBlessing
          t={t.blessing}
        />

        <ImpactCalculator
          t={t.calculator}
          onOpenDonate={() => setDonateModalOpen(true)}
        />

        <ChoirSpotlight
          t={t.choir}
        />

        <Governance
          t={t.governance}
        />

        <LocationHub
          t={t.location}
        />
      </main>

      {/* Footer */}
      <Footer
        t={t.footer}
      />

      {/* Donate Modal */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}

export default App;
