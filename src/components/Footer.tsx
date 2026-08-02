import React from 'react';
import type { TranslationContent } from '../types';
import { ExternalLink, Globe, Heart, Share2 } from 'lucide-react';

interface FooterProps {
  t: TranslationContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const marqueeItems = [
    'Hosanna School for Cambodian Children',
    'Recognized by MoEYS',
    'Hope School (희망학교)',
    'Phnom Penh, Cambodia',
    '800+ Students (ECE to Grade 12)',
    'Founded 2003 in Sombok Chab',
    'Mean Chey Village',
    'Sydney Hosanna Inc Partner',
  ];

  return (
    <footer className="relative border-t border-line bg-paper">
      {/* Marquee strip */}
      <div className="overflow-hidden border-b border-line bg-surface py-5" data-marquee>
        <div className="flex whitespace-nowrap" data-marquee-track>
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-6 flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-ink/60">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main footer block */}
      <div className="bg-deep py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-6">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-deep p-1">
                  <img
                    src="/images/hosanna-logo.png"
                    alt="Hosanna School Official Emblem"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="block text-lg font-bold tracking-wide text-white">HOSANNA SCHOOL</span>
                  <span className="eyebrow text-accent">Ministry of Education · MoEYS Recognized</span>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">{t.tagline}</p>
              <p className="eyebrow mt-4 text-sky">{t.founders}</p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <span className="eyebrow mb-4 block text-white/60">Navigation</span>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><a href="#story" className="transition-colors hover:text-accent">Our Journey</a></li>
                <li><a href="#blessing" className="transition-colors hover:text-accent">Cycle of Blessing</a></li>
                <li><a href="#choir" className="transition-colors hover:text-accent">Hosanna Choir</a></li>
                <li><a href="#impact" className="transition-colors hover:text-accent">Micro-Donation Calculator</a></li>
                <li><a href="#location" className="transition-colors hover:text-accent">Campus Location</a></li>
              </ul>
            </div>

            {/* Verified footprint */}
            <div className="md:col-span-3">
              <span className="eyebrow mb-4 block text-white/60">Verified footprint</span>
              <div className="space-y-2.5">
                <a
                  href="https://www.facebook.com/hosannaschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Facebook Community
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://sydneyhosanna.com.au/cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Sydney Hosanna Australia
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
            <p>{t.copyright}</p>
            <div className="flex items-center gap-1.5 text-accent">
              <span>Crafted with</span>
              <Heart className="h-3 w-3 fill-current text-emerald" />
              <span>for Phnom Penh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
