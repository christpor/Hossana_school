import React from 'react';
import type { TranslationContent } from '../types';
import { ShieldCheck, CheckCircle2, ExternalLink, Globe2 } from 'lucide-react';

interface GovernanceProps {
  t: TranslationContent['governance'];
}

export const Governance: React.FC<GovernanceProps> = ({ t }) => {
  return (
    <section className="py-24 relative bg-[#060B14] border-t border-[#0099E5]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#0099E5]/30 relative overflow-hidden bg-gradient-to-br from-[#0D1B2A]/90 to-[#060B14]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0099E5]/10 border border-[#0099E5]/30 text-[#0099E5] text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-[#27AE60]" />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
                {t.title}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                {t.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {t.points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#060B14]/60 border border-[#0099E5]/20">
                    <CheckCircle2 className="w-5 h-5 text-[#27AE60] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card Callout (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#0D1B2A]/95 border border-[#0099E5]/40 text-center space-y-6 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#002D62] border border-[#0099E5]/40 flex items-center justify-center text-[#0099E5] mx-auto">
                  <Globe2 className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs font-mono text-[#0099E5] uppercase tracking-widest block mb-1">
                    Primary International Engine
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">{t.australianPartner}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Registered Australian NGO sustaining field trips, school infrastructure, and student subsidies.
                  </p>
                </div>

                <a
                  href="https://sydneyhosanna.com.au/cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#0099E5] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#0099E5]/20 border border-[#0099E5]/40"
                >
                  <span>{t.ctaButton}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
