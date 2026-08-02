import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TranslationContent } from '../types';
import { Award, HeartHandshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CycleOfBlessingProps {
  t: TranslationContent['blessing'];
  lang: string;
}

export const CycleOfBlessing: React.FC<CycleOfBlessingProps> = ({ t, lang }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const stages = stageRefs.current.filter(Boolean) as HTMLDivElement[];
      if (stages.length < 2) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        defaults: { ease: 'power2.out' },
      });

      stages.forEach((stage, i) => {
        const unit = i;
        if (i > 0) {
          tl.fromTo(stage, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, unit);
        }
        if (i < stages.length - 1) {
          tl.to(stage, { autoAlpha: 0, ease: 'power2.in', duration: 0.25 }, unit + 0.55);
        }
      });

      const counter = section.querySelector('[data-cinematic-counter]');
      const line = section.querySelector('[data-cinematic-line]');
      const counterObj = { n: 1 };
      tl.to(
        counterObj,
        {
          n: stages.length,
          duration: stages.length - 1,
          ease: 'none',
          onUpdate: () => {
            if (counter) counter.textContent = String(Math.round(counterObj.n)).padStart(2, '0');
          },
        },
        0,
      );
      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: stages.length - 1, ease: 'none' },
          0,
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [lang, t.steps]);

  const stages = t.steps;

  return (
    <section id="blessing" ref={sectionRef} data-cinematic className="relative bg-paper">
      <div data-cinematic-pin className="flex items-center bg-paper">
        {/* Stages */}
        {stages.map((step, idx) => (
          <div
            key={`${lang}-${idx}`}
            ref={(el) => {
              stageRefs.current[idx] = el;
            }}
            className="c-stage flex items-center"
            data-stage
          >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="eyebrow text-accent">0{idx + 1}</span>
                  <span className="h-px w-10 bg-accent/40" />
                  <span className="eyebrow text-muted">{step.year}</span>
                </div>
                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
                  {step.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                  {step.description}
                </p>
                <span className="mt-7 inline-flex items-center rounded-full border border-emerald/30 bg-emerald/5 px-3.5 py-1.5">
                  <span className="eyebrow text-emerald">{step.tag}</span>
                </span>
              </div>
              <div className="hidden lg:col-span-5 lg:block">
                {idx === stages.length - 1 ? (
                  <div className="relative mx-auto max-w-sm">
                    <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
                    <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-surface">
                      <img
                        src="/images/teacher.jpg"
                        alt="Hosanna School Graduate Teacher"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-paper/90 to-transparent p-4 pt-14">
                        <div className="flex items-center gap-2 text-xs font-bold text-ink">
                          <Award className="h-4 w-4 text-emerald" />
                          <span className="font-mono uppercase tracking-wider">
                            Graduates → Certified Teachers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto flex max-w-sm flex-col items-center text-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-accent/30 bg-accent/5">
                      <span className="font-display text-5xl text-accent">0{idx + 1}</span>
                    </div>
                    <p className="mt-6 font-display text-2xl text-ink-soft">
                      {idx === 0 ? 'Every story has a root' : 'Growth is a journey'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Progress UI */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
          <span className="eyebrow text-muted">01</span>
          <span
            data-cinematic-line
            className="h-px w-20 origin-left bg-accent sm:w-32"
          />
          <span data-cinematic-counter className="eyebrow text-muted">
            {String(stages.length).padStart(2, '0')}
          </span>
        </div>

        <div className="pointer-events-none absolute left-6 top-8 hidden items-center gap-2 sm:flex">
          <HeartHandshake className="h-4 w-4 text-accent" />
          <span className="eyebrow text-muted">{t.badge}</span>
        </div>
      </div>
    </section>
  );
};
