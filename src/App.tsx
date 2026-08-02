import { useState } from 'react';
import type { Language } from './types';
import { content } from './data/content';
import { ScrollEffects } from './ScrollEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CycleOfBlessing } from './components/CycleOfBlessing';
import { ImpactCalculator } from './components/ImpactCalculator';
import { ChoirSpotlight } from './components/ChoirSpotlight';
import { Governance } from './components/Governance';
import { LocationHub } from './components/LocationHub';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';

function readInitialLang(): Language {
  try {
    const stored = localStorage.getItem('hosanna-lang');
    if (stored === 'kh' || stored === 'en') return stored;
  } catch {
    /* ignore */
  }
  const nav = document.documentElement.getAttribute('data-lang');
  return nav === 'kh' ? 'kh' : 'en';
}

export function App() {
  const [lang, setLang] = useState<Language>(readInitialLang);
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.setAttribute('data-lang', newLang);
    document.documentElement.lang = newLang;
    try {
      localStorage.setItem('hosanna-lang', newLang);
    } catch {
      /* ignore */
    }
  };

  const t = content[lang];

  return (
    <div className="grain min-h-screen bg-paper font-sans text-ink">
      <ScrollEffects />

      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t.nav}
        onOpenDonate={() => setDonateModalOpen(true)}
      />

      <main>
        <Hero t={t.hero} onOpenDonate={() => setDonateModalOpen(true)} />

        <CycleOfBlessing t={t.blessing} lang={lang} />

        <ImpactCalculator t={t.calculator} onOpenDonate={() => setDonateModalOpen(true)} />

        <ChoirSpotlight t={t.choir} />

        <Governance t={t.governance} />

        <LocationHub t={t.location} />
      </main>

      <Footer t={t.footer} />

      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default App;
