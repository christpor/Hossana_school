import { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * One orchestrator for the whole page's scroll-linked motion:
 * - Lenis smooth wheel (syncTouch:false -> native mobile momentum)
 * - Golden sync with GSAP ScrollTrigger
 * - data-parallax      -> multi-layer image parallax (desktop only)
 * - data-mask-reveal   -> clip-path image wipe (all viewports)
 * - data-marquee       -> velocity-responsive marquee strip
 * Reduced-motion users get none of it.
 */
export function ScrollEffects() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (reduced) return;

      // --- Lenis + golden sync ---
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false, // critical: native momentum on phones
      });
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // --- Parallax (≥768px only) ---
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -5, scale: 1.15 },
            {
              yPercent: 5,
              scale: 1.15,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
      });

      // --- Mask (clip-path) reveals ---
      gsap.utils.toArray<HTMLElement>('[data-mask-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              end: 'top 35%',
              scrub: true,
            },
          },
        );
      });

      // --- Velocity-responsive marquee ---
      gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((strip) => {
        const track = strip.querySelector<HTMLElement>('[data-marquee-track]');
        if (!track) return;
        track.style.animation = 'none';
        const tween = gsap.to(track, {
          xPercent: -50,
          repeat: -1,
          ease: 'none',
          duration: 28,
        });
        ScrollTrigger.create({
          trigger: strip,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: () => {
            const v = Math.abs(lenis.velocity ?? 0);
            const target = v > 3 ? Math.min(1 + v * 0.08, 5) : 1;
            tween.timeScale(tween.timeScale() + (target - tween.timeScale()) * 0.15);
          },
        });
      });

      return () => {
        gsap.ticker.remove(tick);
        mm.revert();
        lenis.destroy();
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef} className="contents" aria-hidden="true" />;
}
