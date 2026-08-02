import React from 'react';
import type { TranslationContent } from '../types';
import { Heart, ExternalLink, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  t: TranslationContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-[#060B14] border-t border-[#0099E5]/20 pt-12 pb-16 relative overflow-hidden">
      
      {/* Marquee Banner */}
      <div className="w-full overflow-hidden whitespace-nowrap border-y border-[#0099E5]/15 bg-[#0D1B2A]/60 py-3 mb-12">
        <div className="inline-block animate-marquee font-mono text-xs text-[#0099E5] uppercase tracking-widest space-x-8">
          <span>HOSANNA SCHOOL FOR CAMBODIAN CHILDREN</span>
          <span>•</span>
          <span>RECOGNIZED BY MINISTRY OF EDUCATION YOUTH AND SPORT (MoEYS)</span>
          <span>•</span>
          <span>HOPE SCHOOL (희망학교)</span>
          <span>•</span>
          <span>PHNOM PENH, CAMBODIA</span>
          <span>•</span>
          <span>800+ STUDENTS (ECE TO GRADE 12)</span>
          <span>•</span>
          <span>FOUNDED 2003 IN SOMBOK CHAB</span>
          <span>•</span>
          <span>MEAN CHEY VILLAGE</span>
          <span>•</span>
          <span>SYDNEY HOSANNA INC PARTNER</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#0099E5]/15">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#002D62] border border-[#0099E5]/40 p-1 shadow-lg shadow-[#0099E5]/20 overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/images/hosanna-logo.png"
                  alt="Hosanna School Official Emblem"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-slate-100 tracking-wide block">
                  HOSANNA SCHOOL
                </span>
                <span className="text-xs font-mono text-[#0099E5]">
                  Ministry of Education Youth and Sport Recognized
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              {t.tagline}
            </p>
            <p className="text-xs font-mono text-[#46B2E6]">
              {t.founders}
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs font-mono">
            <span className="text-slate-300 uppercase tracking-widest block font-bold">
              Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#story" className="hover:text-[#0099E5]">Our Journey</a></li>
              <li><a href="#blessing" className="hover:text-[#0099E5]">Cycle of Blessing</a></li>
              <li><a href="#choir" className="hover:text-[#0099E5]">Hosanna Choir</a></li>
              <li><a href="#impact" className="hover:text-[#0099E5]">Micro-Donation Calculator</a></li>
              <li><a href="#location" className="hover:text-[#0099E5]">Campus Location</a></li>
            </ul>
          </div>

          {/* Social & Partners (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs font-mono">
            <span className="text-slate-300 uppercase tracking-widest block font-bold">
              Verified Footprint
            </span>
            <div className="space-y-2">
              <a
                href="https://www.facebook.com/hosannaschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#0099E5] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Facebook Community</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://sydneyhosanna.com.au/cambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-[#0099E5] transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Sydney Hosanna Australia</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-1 text-[#0099E5]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 fill-current text-[#27AE60]" />
            <span>for Phnom Penh</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
