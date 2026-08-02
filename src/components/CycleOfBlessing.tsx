import React from 'react';
import type { TranslationContent } from '../types';
import { Sparkles, Award, HeartHandshake } from 'lucide-react';

interface CycleOfBlessingProps {
  t: TranslationContent['blessing'];
}

export const CycleOfBlessing: React.FC<CycleOfBlessingProps> = ({ t }) => {
  return (
    <section id="blessing" className="py-24 relative overflow-hidden bg-[#060B14]/80 border-t border-[#0099E5]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
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

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {t.steps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#0099E5]/20 glass-card-hover group relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0099E5]/15 border border-[#0099E5]/30 flex items-center justify-center text-[#0099E5] font-mono font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-[#46B2E6] px-2.5 py-0.5 rounded bg-[#0099E5]/10 border border-[#0099E5]/20">
                        {step.year}
                      </span>
                      <span className="text-xs font-mono text-[#27AE60]">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#0099E5] transition-colors mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Image & Story Spotlight (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-4 border border-[#0099E5]/30 shadow-2xl relative bg-[#0D1B2A]/90">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <img
                  src="/images/teacher.jpg"
                  alt="Hosanna School Graduate Teacher"
                  className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#060B14]/90 text-[#46B2E6] text-xs font-mono border border-[#0099E5]/40">
                    <Award className="w-3.5 h-3.5 text-[#27AE60]" />
                    <span>Graduates → Certified Teachers</span>
                  </div>
                </div>
              </div>

              <div className="p-2 space-y-3">
                <div className="flex items-center gap-2 text-[#0099E5] font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#27AE60]" />
                  <span>Generational Recovery in Action</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  "I was taught here in 2005 when we had no permanent building. Hosanna funded my education and university tuition. Returning here as a teacher is my life’s highest purpose."
                </p>
                <div className="pt-2 border-t border-[#0099E5]/15 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Hosanna Alumni Association</span>
                  <span>Mean Chey, Phnom Penh</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
