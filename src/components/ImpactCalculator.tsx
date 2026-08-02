import React, { useState } from 'react';
import type { TranslationContent } from '../types';
import { CheckCircle2, Heart } from 'lucide-react';

interface ImpactCalculatorProps {
  t: TranslationContent['calculator'];
  onOpenDonate: () => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ t, onOpenDonate }) => {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);

  const activeTier = t.tiers[selectedTierIndex];

  return (
    <section id="impact" className="relative border-t border-line bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5">
            <span className="eyebrow text-accent">{t.badge}</span>
          </div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
            {t.title}{' '}
            <span className="font-display accent-underline">${activeTier.amount}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.tiers.map((tier, idx) => {
            const isSelected = selectedTierIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedTierIndex(idx)}
                className={`editorial-card cursor-pointer p-7 ${
                  isSelected
                    ? 'border-accent shadow-xl shadow-[#002D62]/8 ring-1 ring-accent/30'
                    : 'editorial-card-hover opacity-85 hover:opacity-100'
                }`}
              >
                {tier.featured && (
                  <div className="mb-5 inline-flex rounded-full bg-deep px-3 py-1">
                    <span className="eyebrow text-white">Most vital sponsorship</span>
                  </div>
                )}

                <div className="mb-4 flex items-baseline gap-1">
                  <span className="font-mono text-5xl font-bold tracking-tight text-ink">
                    ${tier.amount}
                  </span>
                  <span className="font-mono text-sm text-muted">/ month</span>
                </div>

                <h3 className="text-xl font-bold text-ink">{tier.label}</h3>
                <p className="mt-2 min-h-[64px] text-sm leading-relaxed text-ink-soft">
                  {tier.description}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {tier.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                      <span className="text-sm text-ink-soft">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDonate();
                  }}
                  className={`mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-deep text-white hover:bg-accent'
                      : 'border border-line bg-paper text-ink hover:border-accent hover:text-accent'
                  }`}
                >
                  <Heart className="h-4 w-4 fill-current" />
                  Sponsor ${tier.amount}/mo
                </button>
              </div>
            );
          })}
        </div>

        {/* Live confirmation bar */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-6 sm:flex-row">
          <div>
            <span className="eyebrow mb-1 block text-accent">Active sponsorship selection</span>
            <p className="text-sm font-medium text-ink">
              ${activeTier.amount}/month directly guarantees{' '}
              {activeTier.label.toLowerCase()} for Hosanna children in Mean Chey.
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            className="h-11 shrink-0 whitespace-nowrap rounded-full bg-deep px-6 text-sm font-bold text-white transition-colors hover:bg-accent"
          >
            Confirm ${activeTier.amount} Gift
          </button>
        </div>
      </div>
    </section>
  );
};
