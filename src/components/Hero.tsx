import React from 'react';
import type { TranslationContent } from '../types';
import { ShieldCheck, ArrowRight, Heart, Users, GraduationCap, Calendar } from 'lucide-react';

interface HeroProps {
  t: TranslationContent['hero'];
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenDonate }) => {
  return (
    <section id="story" className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden bg-[#060B14]">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Hosanna School Students in Phnom Penh"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter contrast-105 brightness-90 transform transition-transform duration-1000"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/85 to-[#060B14]/50" />
        <div className="absolute inset-0 bg-radial from-[#0099E5]/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-1 flex flex-col justify-center">
        
        {/* Official MoEYS Recognized Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D1B2A]/90 border border-[#0099E5]/40 text-[#46B2E6] text-xs sm:text-sm font-mono mb-8 backdrop-blur-md self-start shadow-xl shadow-[#0099E5]/10">
          <ShieldCheck className="w-4 h-4 text-[#27AE60] animate-pulse" />
          <span>{t.badge}</span>
        </div>

        {/* Big Display Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] text-slate-100 leading-[1.1]">
            {t.titleLine1}{' '}
            <span className="font-serif italic text-[#0099E5] underline decoration-[#0099E5]/40 decoration-wavy underline-offset-8">
              {t.titleHighlight}
            </span>{' '}
            {t.titleLine2}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={onOpenDonate}
            className="flex items-center gap-3 bg-gradient-to-r from-[#0099E5] via-[#46B2E6] to-[#002D62] hover:from-[#46B2E6] hover:to-[#0099E5] text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-[#0099E5]/30 text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-[#0099E5]/40"
          >
            <Heart className="w-5 h-5 fill-white" />
            <span>{t.ctaDonate}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href="#blessing"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D1B2A]/80 hover:bg-[#0D1B2A] border border-[#0099E5]/30 text-slate-200 hover:text-[#0099E5] font-semibold text-base backdrop-blur-md transition-all"
          >
            <span>{t.ctaStory}</span>
          </a>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#0099E5]/20">
          
          <div className="glass-card p-5 rounded-2xl border border-[#0099E5]/20">
            <div className="flex items-center gap-3 mb-2 text-[#0099E5]">
              <Users className="w-5 h-5" />
              <span className="text-3xl font-mono font-bold text-slate-100">{t.stats.students}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">{t.stats.studentsLabel}</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#0099E5]/20">
            <div className="flex items-center gap-3 mb-2 text-[#0099E5]">
              <Calendar className="w-5 h-5" />
              <span className="text-3xl font-mono font-bold text-slate-100">{t.stats.years}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">{t.stats.yearsLabel}</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#0099E5]/20">
            <div className="flex items-center gap-3 mb-2 text-[#27AE60]">
              <GraduationCap className="w-5 h-5" />
              <span className="text-3xl font-mono font-bold text-slate-100">{t.stats.returnedTeachers}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">{t.stats.returnedTeachersLabel}</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-[#0099E5]/20">
            <div className="flex items-center gap-3 mb-2 text-[#27AE60]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-3xl font-mono font-bold text-slate-100">{t.stats.subsidy}</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">{t.stats.subsidyLabel}</p>
          </div>

        </div>

      </div>
    </section>
  );
};
