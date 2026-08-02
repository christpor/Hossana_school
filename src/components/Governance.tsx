import React from 'react';
import type { TranslationContent } from '../types';
import { ShieldCheck, CheckCircle2, ExternalLink, Globe2 } from 'lucide-react';

interface GovernanceProps {
  t: TranslationContent['governance'];
}

export const Governance: React.FC<GovernanceProps> = ({ t }) => {
  return (
    <section className="relative border-t border-line bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-line bg-deep p-8 sm:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left — trust copy */}
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5">
                <ShieldCheck className="mr-2 h-3.5 w-3.5 text-emerald" />
                <span className="eyebrow text-white">{t.badge}</span>
              </div>
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl">
                {t.title}{' '}
                <span className="font-display accent-underline">Sydney Hosanna Inc</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {t.subtitle}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
                    <span className="text-sm text-white/85">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — partner callout */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Globe2 className="h-7 w-7" />
                </div>
                <span className="eyebrow mb-2 block text-accent">Primary international engine</span>
                <h3 className="text-xl font-bold text-white">{t.australianPartner}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Registered Australian NGO sustaining field trips, school infrastructure, and
                  student subsidies.
                </p>
                <a
                  href="https://sydneyhosanna.com.au/cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-bold text-deep transition-colors hover:bg-accent hover:text-white"
                >
                  {t.ctaButton}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
