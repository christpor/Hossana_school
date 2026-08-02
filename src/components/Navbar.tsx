import React, { useState } from 'react';
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

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#060B14]/85 border-b border-[#0099E5]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Official Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-full bg-[#002D62] border border-[#0099E5]/40 p-1 shadow-lg shadow-[#0099E5]/20 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center shrink-0">
            <img
              src="/images/hosanna-logo.png"
              alt="Hosanna School Official Logo"
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>
          <div>
            <div className="font-bold text-slate-100 text-base sm:text-lg tracking-wide group-hover:text-[#0099E5] transition-colors flex items-center gap-2">
              HOSANNA SCHOOL
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#0099E5]/15 text-[#46B2E6] border border-[#0099E5]/30">
                MoEYS Recognized
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans tracking-normal">
              {lang === 'en' ? 'Hosanna School for Cambodian Children' : 'សាលាហូសាណាសម្រាប់កុមារកម្ពុជា'}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#story" className="hover:text-[#0099E5] transition-colors">{t.story}</a>
          <a href="#blessing" className="hover:text-[#0099E5] transition-colors">{t.blessing}</a>
          <a href="#choir" className="hover:text-[#0099E5] transition-colors">{t.choir}</a>
          <a href="#impact" className="hover:text-[#0099E5] transition-colors">{t.impact}</a>
          <a href="#location" className="hover:text-[#0099E5] transition-colors">{t.location}</a>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(lang === 'en' ? 'kh' : 'en')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#0099E5]/30 text-slate-300 hover:text-[#0099E5] hover:border-[#0099E5]/60 text-xs font-mono transition-all"
            title="Toggle English / Khmer"
          >
            <Globe className="w-3.5 h-3.5 text-[#0099E5]" />
            <span className="font-bold">{lang === 'en' ? 'EN' : 'KH'}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{lang === 'en' ? 'ខ្មែរ' : 'ENG'}</span>
          </button>

          {/* Sponsor Button */}
          <button
            onClick={onOpenDonate}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0099E5] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white font-bold px-6 py-2.5 rounded-full shadow-lg shadow-[#0099E5]/25 transition-all transform hover:scale-105 active:scale-95 text-xs sm:text-sm border border-[#0099E5]/40"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{t.donate}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => onLanguageChange(lang === 'en' ? 'kh' : 'en')}
            className="p-2 rounded-lg bg-[#0D1B2A] border border-[#0099E5]/30 text-[#0099E5] font-mono text-xs font-bold"
          >
            {lang === 'en' ? 'KH' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#0D1B2A] border border-[#0099E5]/30 text-slate-200 hover:text-[#0099E5]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-20 bottom-0 bg-[#060B14]/95 backdrop-blur-2xl z-40 border-t border-[#0099E5]/20 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="min-h-full flex flex-col justify-center gap-6 text-center text-lg font-medium text-slate-200">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0099E5] border-b border-slate-800"
              >
                {t.story}
              </a>
              <a
                href="#blessing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0099E5] border-b border-slate-800"
              >
                {t.blessing}
              </a>
              <a
                href="#choir"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0099E5] border-b border-slate-800"
              >
                {t.choir}
              </a>
              <a
                href="#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0099E5] border-b border-slate-800"
              >
                {t.impact}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#0099E5] border-b border-slate-800"
              >
                {t.location}
              </a>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#0099E5] to-[#002D62] text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#0099E5]/30"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  {t.donate}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
