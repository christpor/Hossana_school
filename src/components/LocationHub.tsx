import React from 'react';
import type { TranslationContent } from '../types';
import { MapPin, Phone, Compass, ExternalLink, Building2, Share2 } from 'lucide-react';

interface LocationHubProps {
  t: TranslationContent['location'];
}

export const LocationHub: React.FC<LocationHubProps> = ({ t }) => {
  return (
    <section id="location" className="py-24 relative bg-[#060B14]/90 border-t border-[#0099E5]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0099E5]/10 border border-[#0099E5]/30 text-[#0099E5] text-xs font-mono mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-4">
            {t.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-sans">
            {t.address}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Historical Footprint & Contacts (6 cols) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#0099E5]/25 space-y-4 bg-[#0D1B2A]/70">
              <div className="flex items-center gap-3 text-[#0099E5] font-bold text-lg">
                <Compass className="w-5 h-5" />
                <h3>{t.historyTitle}</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {t.historyText}
              </p>
              <div className="pt-3 border-t border-[#0099E5]/15 flex items-center gap-2 text-xs font-mono text-[#0099E5]">
                <Building2 className="w-4 h-4" />
                <span>Landmark Tag: {t.landmark}</span>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#0099E5]/25 space-y-4 bg-[#0D1B2A]/70">
              <div className="flex items-center gap-3 text-[#0099E5] font-bold text-lg">
                <Phone className="w-5 h-5" />
                <h3>{t.phonesTitle}</h3>
              </div>
              <div className="flex flex-wrap gap-4 pt-1">
                {t.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="px-4 py-2.5 rounded-xl bg-[#060B14] border border-[#0099E5]/30 text-slate-100 font-mono text-sm hover:border-[#0099E5] hover:text-[#0099E5] transition-all flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0099E5]" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://www.facebook.com/hosannaschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-[#002D62] to-[#060B14] border border-[#0099E5]/35 text-slate-100 flex items-center justify-between hover:border-[#0099E5] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0099E5]/20 border border-[#0099E5]/40 flex items-center justify-center text-[#0099E5] group-hover:scale-105 transition-transform">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Hosanna School Official Facebook Hub</h4>
                  <p className="text-xs text-slate-400">Thousands of photos, choir videos & classroom updates</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0099E5]" />
            </a>

          </div>

          {/* Interactive Map Visual Box (6 cols) */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-4 border border-[#0099E5]/30 h-full flex flex-col justify-between relative overflow-hidden bg-[#0D1B2A]/70">
              
              {/* Styled Map Graphic Canvas */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#060B14] border border-[#0099E5]/20 p-6 flex flex-col justify-between">
                
                {/* Background Grid Map Lines Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0D1B2A_1px,transparent_1px),linear-gradient(to_bottom,#0D1B2A_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60" />
                
                {/* Map Pin Highlight */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-full bg-[#0D1B2A]/90 border border-[#0099E5]/30 text-xs font-mono text-[#0099E5] backdrop-blur-md">
                    Phnom Penh • Mean Chey 12000
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#0099E5] animate-ping" />
                </div>

                <div className="relative z-10 text-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#0099E5]/20 border border-[#0099E5]/40 flex items-center justify-center text-[#0099E5] mx-auto mb-4 animate-pulse">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Hosanna School Campus</h4>
                  <p className="text-xs font-mono text-[#0099E5] mt-1">N° 665, Group 10, Mean Chey Village</p>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4 border-t border-slate-800">
                  <span>Lat 11.5432° N</span>
                  <span>Long 104.8876° E</span>
                  <span>Pochentong Zone</span>
                </div>

              </div>

              <div className="p-4 text-center">
                <a
                  href="https://www.google.com/search?kgmid=/g/11c1sk9blk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#0099E5] hover:text-[#46B2E6]"
                >
                  <span>Open Official Google Map Directory Tag</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
