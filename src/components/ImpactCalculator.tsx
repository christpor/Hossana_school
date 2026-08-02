import React, { useState } from 'react';
import type { TranslationContent } from '../types';
import { Sparkles, CheckCircle2, Heart, DollarSign } from 'lucide-react';

interface ImpactCalculatorProps {
  t: TranslationContent['calculator'];
  onOpenDonate: () => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ t, onOpenDonate }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);

  const activeTier = t.tiers[selectedTierIndex];

  return (
    <section id="impact" className="py-24 relative bg-[#060B14] border-t border-[#0099E5]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0099E5]/10 border border-[#0099E5]/30 text-[#0099E5] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-100 mb-6">
            {t.title}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Tier Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.tiers.map((tier, idx) => {
            const isSelected = selectedTierIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedTierIndex(idx)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-[#0D1B2A] border-[#0099E5] shadow-2xl shadow-[#0099E5]/25 scale-[1.02]'
                    : 'glass-card border-[#0099E5]/20 hover:border-[#0099E5]/50 opacity-85 hover:opacity-100'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0099E5] to-[#002D62] text-white font-bold text-xs uppercase tracking-wider shadow-md border border-[#0099E5]/40">
                    Most Vital Sponsorship
                  </div>
                )}

                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-[#0099E5]">
                      ${tier.amount}
                    </span>
                    <span className="text-slate-400 text-sm font-mono"> / month</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#0099E5]/30 flex items-center justify-center">
                    <DollarSign className={`w-4 h-4 ${isSelected ? 'text-[#0099E5]' : 'text-slate-500'}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3">{tier.label}</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed min-h-[60px]">
                  {tier.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-[#0099E5]/15">
                  {tier.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#27AE60] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDonate();
                  }}
                  className={`w-full mt-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0099E5] to-[#002D62] text-white hover:from-[#46B2E6] hover:to-[#0099E5] shadow-lg shadow-[#0099E5]/25 border border-[#0099E5]/40'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Sponsor ${tier.amount}/mo</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Live Calculation Banner */}
        <div className="glass-card rounded-2xl p-6 border border-[#0099E5]/30 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0D1B2A]/90">
          <div className="text-left">
            <span className="text-xs font-mono text-[#0099E5] uppercase tracking-widest block mb-1">
              Active Sponsorship Selection
            </span>
            <p className="text-sm font-medium text-slate-200">
              ${activeTier.amount}/month directly guarantees {activeTier.label.toLowerCase()} for Hosanna children in Mean Chey.
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0099E5] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-lg shadow-[#0099E5]/20 border border-[#0099E5]/40"
          >
            Confirm ${activeTier.amount} Gift
          </button>
        </div>

      </div>
    </section>
  );
};
