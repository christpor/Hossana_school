import React, { useState, useEffect } from 'react';
import type { Language, TranslationContent } from '../types';
import { Heart, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationContent['nav'];
  onOpenDonate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  t,
  onOpenDonate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border bg-surface px-3 py-2 transition-all duration-300 ${
          scrolled
            ? 'border-line shadow-lg shadow-[#002D62]/5'
            : 'border-line/70 shadow-none'
        }`}
      >
        {/* Brand */}
        <a href="#story" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-deep p-1 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/hosanna-logo.png"
              alt="Hosanna School Official Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-wide text-ink sm:text-base">
              HOSANNA
              <span className="font-serif italic text-accent"> School</span>
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
              {lang === 'en'
                ? 'Cambodian Children · Est. 2003'
                : 'កុមារកម្ពុជា · ចាប់តាំងពី ២០០៣'}
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-ink-soft lg:flex">
          <a href="#story" className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-paper hover:text-accent">
            {t.story}
          </a>
          <a href="#blessing" className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-paper hover:text-accent">
            {t.blessing}
          </a>
          <a href="#choir" className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-paper hover:text-accent">
            {t.choir}
          </a>
          <a href="#impact" className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-paper hover:text-accent">
            {t.impact}
          </a>
          <a href="#location" className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-paper hover:text-accent">
            {t.location}
          </a>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onLanguageChange(lang === 'en' ? 'kh' : 'en')}
            className="flex h-10 items-center gap-1.5 rounded-full border border-line px-3.5 text-xs font-bold text-ink transition-all hover:border-accent hover:text-accent"
            aria-label="Toggle English / Khmer"
          >
            <Globe className="h-3.5 w-3.5 text-accent" />
            {lang === 'en' ? 'EN' : 'ខ្មែរ'}
          </button>

          <button
            onClick={onOpenDonate}
            className="hidden h-10 items-center gap-2 rounded-full bg-deep px-5 text-xs font-bold text-white transition-all hover:bg-accent sm:flex"
          >
            <Heart className="h-4 w-4 fill-current" />
            {t.donate}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 top-[72px] z-40 border-t border-line bg-paper/95 backdrop-blur-2xl lg:hidden">
          <div className="flex h-full flex-1 flex-col overflow-y-auto px-6 pb-10">
            <div className="flex min-h-full flex-col justify-center gap-5 text-center">
              {[
                { href: '#story', label: t.story },
                { href: '#blessing', label: t.blessing },
                { href: '#choir', label: t.choir },
                { href: '#impact', label: t.impact },
                { href: '#location', label: t.location },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-line pb-4 text-2xl font-semibold leading-snug text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="mx-auto mt-4 flex h-12 items-center gap-2 rounded-full bg-deep px-8 text-sm font-bold text-white transition-colors hover:bg-accent"
              >
                <Heart className="h-4 w-4 fill-current" />
                {t.donate}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
