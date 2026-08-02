import React from 'react';
import type { TranslationContent } from '../types';
import { ShieldCheck, ArrowRight, Heart, Users, GraduationCap, Calendar } from 'lucide-react';

interface HeroProps {
  t: TranslationContent['hero'];
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenDonate }) => {
  return (
    <section id="story" className="relative overflow-hidden bg-paper pt-32 pb-16 sm:pt-36">
      {/* soft cerulean wash */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-64 h-[380px] w-[380px] rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald" />
              <span className="eyebrow text-ink-soft">{t.badge}</span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
              {t.titleLine1}{' '}
              <span className="font-display accent-underline">{t.titleHighlight}</span>{' '}
              {t.titleLine2}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="group flex h-12 items-center gap-2.5 rounded-full bg-deep px-7 text-sm font-bold text-white transition-all hover:bg-accent"
              >
                <Heart className="h-4 w-4 fill-current" />
                {t.ctaDonate}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="#blessing"
                className="flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-7 text-sm font-semibold text-ink transition-all hover:border-accent hover:text-accent"
              >
                {t.ctaStory}
              </a>
            </div>
          </div>

          {/* Photo frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface">
                <img
                  src="/images/hero.jpg"
                  alt="Hosanna School Students in Phnom Penh"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper/90 to-transparent p-5 pt-16">
                  <div className="flex items-center justify-between text-xs font-mono text-ink-soft">
                    <span>Phnom Penh · Mean Chey</span>
                    <span>Est. 2003</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {[
            { icon: Users, value: t.stats.students, label: t.stats.studentsLabel },
            { icon: Calendar, value: t.stats.years, label: t.stats.yearsLabel },
            { icon: GraduationCap, value: t.stats.returnedTeachers, label: t.stats.returnedTeachersLabel },
            { icon: ShieldCheck, value: t.stats.subsidy, label: t.stats.subsidyLabel },
          ].map((stat, idx) => (
            <div key={idx} className="bg-surface p-5 sm:p-6">
              <stat.icon className="mb-3 h-5 w-5 text-accent" />
              <div className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
