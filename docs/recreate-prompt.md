# Recreate Prompt — Hosanna School for Cambodian Children

> A single-page **cream + navy** bilingual (EN/ខ្មែរ) charity landing page for
> **Hosanna School for Cambodian Children (Hope School / 희망학교)** in Phnom Penh.
> Paste this into any AI coding tool to recreate
> https://hosanna-school.vercel.app (design branch: `redesign`).

---

```
Prompt to recreate this landing page:

Build a single-page CREAM + NAVY bilingual (EN/ខ្មែរ) charity landing page using
React + Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion + Lenis.
It MUST be fully responsive (zero horizontal scroll at 320px, mobile-first) and fast
(~126KB gzipped, no layout shift). Follow the Responsive + Performance Rules below.

---

## Global Design System

### Palette (editorial light — brand tokens inverted to cream + navy ink)
- --color-paper: #FAF7F2      /* warm cream background */
- --color-surface: #FFFFFF    /* white cards */
- --color-ink: #002D62        /* brand navy = headline/body ink */
- --color-ink-soft: #33527A   /* secondary text */
- --color-muted: #5A6B82      /* labels, muted */
- --color-line: #E4DDD1       /* hairline warm borders */
- --color-accent: #0099E5     /* cerulean — the ONE accent color */
- --color-sky: #46B2E6        /* secondary glow / hover washes */
- --color-emerald: #27AE60    /* positive/checkmarks ONLY */
- --color-gold: #E2DB14       /* history tags ONLY */
- --color-deep: #001C3D       /* near-black navy: footer, buttons, dark moments */

Rule: ONE accent (cerulean). Emerald = semantics only. Gold = tags only. Navy = ink/depth.

### Fonts (Google Fonts, preconnect + display=swap)
- --font-sans: 'Inter' (400–700) → body
- --font-serif: 'Instrument Serif' (italic only) → display accent words, font-display
- --font-mono: 'JetBrains Mono' (400/500/700) → labels, prices, data
- Khmer: 'Kantumruy Pro' + 'Noto Sans Khmer' (400/500/700)
- Khmer override: html[data-lang="kh"] switches body AND every .font-serif/.font-display
  AND .font-mono element to 'Kantumruy Pro','Noto Sans Khmer' with font-style: normal
  (Khmer has no italics), body line-height 1.75.

### Signature utilities (in index.css)
- .font-display { font-family: Instrument Serif; font-style: italic; font-weight: 400; }
- .eyebrow { font-family: mono; font-size: 11px; letter-spacing: 0.22em; uppercase; }
- .accent-underline { background-image: linear-gradient(transparent 62%, rgba(0,153,229,0.22) 62%); }
- .editorial-card { white surface, 1px line border, 1.5rem radius, hover: translateY(-2px) +
  cerulean border + soft navy shadow }
- .grain::after — fixed fractal-noise SVG overlay at 3.5% opacity, z-100, pointer-events-none
- Sticky cinematic CSS: [data-cinematic]{height:300vh}; [data-cinematic-pin]{position:sticky;
  top:0; height:100svh; overflow:hidden}; .c-stage{position:absolute;inset:0;height:100%}
- prefers-reduced-motion: collapse all animation + unstick the cinematic (position:relative,
  height auto, stages stacked visible)

### Bilingual system
html[data-lang="en"|"kh"]. No-flash inline script in index.html head reads
localStorage key "hosanna-lang" before first paint. All text from src/data/content.ts
via a content[lang] dictionary. Persist choice on toggle. Active language shown ONLY.

### Images (local, in public/images/)
hero.jpg (students, eager, width=640 height=800), teacher.jpg (graduate teacher, lazy),
choir.jpg (choir, lazy), hosanna-logo.png (official emblem).

### Responsive Rules (MANDATORY)
- Mobile-first classes only (sm:/md:/lg: upscale).
- Zero horizontal overflow at 320px: no fixed widths > viewport; grids collapse to 1 col;
  photo frames use decorative -inset-3 borders INSIDE px-4 containers so nothing peeks.
- Viewport-tall sections use h-svh (100svh), not h-screen.
- Heavy scroll effects (parallax) ONLY inside gsap.matchMedia("(min-width: 768px)").
  Sticky cinematic uses CSS position:sticky on ALL viewports (mobile-safe, no GSAP pin).
- prefers-reduced-motion: skip everything, unstick cinematic.
- Navbar below lg: hamburger + full-screen drawer; scroll box = flex-1 overflow-y-auto,
  inner div min-h-full justify-center (NEVER justify-center on the scroll box — crops item 1).
- Touch targets >= 40px (h-10/h-12 buttons); every icon-only button has aria-label.
- Headings scale down at 320px (text-5xl base, not text-6xl+).

### Performance Rules (MANDATORY)
- Images local + lazy EXCEPT hero (eager, has width+height so LCP doesn't shift).
- No layout shift: images in fixed aspect boxes (aspect-[4/5], aspect-[4/3], aspect-square).
- No react-router, no hls.js, no UI kit. Bundle target ~384KB raw / ~126KB gzip.
- Lenis syncTouch:false (native mobile momentum) + GSAP golden sync:
  lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t*1000)).
- One gsap.context() per component with ctx.revert() cleanup; ScrollTrigger through
  matchMedia; no long-running rAF loops.
- Only the hero entrance at load; below-fold content reveals via ScrollTrigger.

---

## Page Structure (App.tsx)

<div class="grain"> + <ScrollEffects /> + Navbar, Hero, CycleOfBlessing (cinematic),
ImpactCalculator, ChoirSpotlight, Governance, LocationHub, Footer, DonateModal.

## Section 1: Navbar (fixed floating white pill)

fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4, pointer-events-none.
Inner: w-full max-w-5xl rounded-full border bg-surface px-3 py-2, shadow when scrolled>24.
- Left: logo image in h-10 w-10 rounded-full bg-deep border-accent/40 + "HOSANNA
  <em class='font-display text-accent'>School</em>" + mono micro-line (bilingual).
- Center (lg only): rounded-full hover pills: Our Journey / Cycle of Blessing / Choir /
  Micro-Donations / Location (from t.nav).
- Right: language pill [EN|ខ្មែរ] + "Sponsor a Student" h-10 rounded-full bg-deep
  hover:bg-accent (sm+) + hamburger (lg:hidden).
- Mobile drawer: fixed inset-0 top-[72px] border-t bg-paper/95 backdrop-blur-2xl;
  scroll box flex-1 overflow-y-auto px-6 pb-10; inner min-h-full flex-col justify-center
  gap-5 text-center; links text-2xl leading-snug border-b border-line pb-4; donate CTA
  h-12 rounded-full bg-deep. Close on tap. Body scroll locks while open.

## Section 2: Hero (light editorial)

pt-32 sm:pt-36, bg-paper, soft cerulean radial washes (accent/10 blur-3xl absolute).
Grid lg:grid-cols-12 gap-12.
- Left (7 cols): MoEYS badge pill (ShieldCheck emerald + eyebrow), then giant h1
  text-5xl→7xl font-semibold tracking-[-0.03em] text-ink: titleLine1 + <span
  class='font-display accent-underline'>titleHighlight</span> + titleLine2; subtitle
  text-ink-soft; dual CTAs (h-12 rounded-full bg-deep hover:bg-accent + white outline pill).
- Right (5 cols): photo frame — absolute -inset-3 rounded-[2rem] border-accent/20 +
  relative aspect-[4/5] rounded-[2rem] overflow-hidden; hero.jpg data-parallax
  (desktop scrub yPercent -5→5 scale 1.15); bottom gradient from-paper/90 with mono meta.
- Stats strip: mt-16 grid grid-cols-2 md:grid-cols-4 gap-px border rounded-3xl overflow-
  hidden bg-line; cells bg-surface p-5: lucide icon (accent) + text-3xl/4xl value +
  muted label. (800+, 2003, 15+, 100% — from t.hero.stats)

## Section 3: Cycle of Blessing (sticky cinematic scroll story)

<section data-cinematic height:300vh>. Sticky pin [data-cinematic-pin] = 100svh, flex
items-center. N stages = t.blessing.steps (4). Each stage .c-stage absolute inset-0:
grid 12-col; left (7 cols): mono "0X + year", giant h2 title text-4xl→6xl, description,
emerald tag pill; right (5 cols, lg only): stage number disc OR teacher.jpg mask-reveal
on final stage (aspect-square rounded-[2rem], "Graduates → Certified Teachers" pill).
GSAP timeline scrub 0.5 over the 300vh: stages crossfade autoAlpha (0.25 in at unit i,
out at i+0.55), progress line scaleX 0→1 + counter 01→NN. Reduced-motion: unstick + show all.
Header chip: HeartHandshake + t.badge (top-left), progress bar bottom-center.

## Section 4: Impact Calculator

bg-surface border-t border-line py-24 sm:py-28. Centered header: badge pill + h2 with
live "$N" font-display accent-underline + subtitle. 3 tier cards grid md:grid-cols-3 gap-6
(.editorial-card p-7). Featured tier gets "Most vital sponsorship" deep pill. Price =
font-mono text-5xl + "/ month". Checkmarks emerald. CTA h-11 rounded-full bg-deep (selected)
or outline (unselected). Clicking a card selects it. Below: confirmation bar rounded-2xl
border-line bg-paper max-w-2xl with "Confirm $N Gift" button.

## Section 5: Choir Spotlight

bg-paper py-24 sm:py-28. grid lg:grid-cols-12 gap-12. Left (6 cols): choir.jpg in
rounded-[2rem] frame (aspect-[4/3], data-mask-reveal clip wipe) + "Featured with KESORRR"
pill + audio player bar (relative -mt-8, w-[calc(100%-2rem)] ml-auto mr-4, rounded-2xl
border bg-surface shadow): h-12 round play/pause (bg-deep hover:bg-accent), track title +
artist, duration mono. Right (6 cols): badge, h2 with KESORRR font-display accent-underline,
subtitle, tracklist rows (border rounded-xl p-4; selected = border-accent bg-surface
shadow): number tile + title/artist + duration mono + Music icon.

## Section 6: Governance (trust panel, dark)

bg-surface py-24 sm:py-28. Rounded-[2.5rem] border border-line bg-deep p-8 sm:p-14.
Left (7 cols): ShieldCheck emerald badge, white h2 with "Sydney Hosanna Inc" font-display
accent-underline, white/70 subtitle, 2x2 grid of white/5 border-white/10 checkmark rows.
Right (5 cols): white/5 rounded-3xl callout — Globe2 icon, eyebrow "Primary international
engine", partner name, white/60 note, CTA h-11 rounded-full bg-white text-deep
hover:bg-accent hover:text-white (link sydneyhosanna.com.au/cambodia).

## Section 7: Location Hub

bg-paper py-24 sm:py-28. Header + left stack (6 cols): history card (Compass), phones card
(Phone icon + tel: links as h-11 rounded-full pills), Facebook card (editorial-card,
Share2 icon, ExternalLink). Right (6 cols): map visual — editorial-card with a grid-line
div ([background-size:2rem_2rem] linear-gradient lines), "Phnom Penh · Mean Chey 12000"
chip + ping dot, centered MapPin disc + campus name, bottom mono lat/long, and
"Open official Google map directory tag" mono link.

## Section 8: Footer

bg-paper border-t. Marquee strip (border-b bg-surface py-5 overflow-hidden) — mono
uppercase tracking-widest text-ink/60 items separated by ✦, track duplicated once,
GSAP xPercent -50 loop, timeScale scales with Lenis velocity (pattern: velocity marquee).
Main block bg-deep py-14: logo + name + MoEYS eyebrow, tagline white/70, founders (sky);
Navigation column (white/60 eyebrow + white/70 links hover:text-accent); Verified
footprint column (Facebook + Sydney links). Bottom bar: copyright white/50 + "Crafted
with ❤ for Phnom Penh" accent.

## Section 9: DonateModal

fixed inset-0 z-[60] bg-deep/60 backdrop-blur-sm (backdrop click closes), Escape closes,
body scroll locks. Panel: max-w-lg rounded-3xl border-line bg-surface p-6 sm:p-8,
stopPropagation. Heart icon in accent/10 rounded-2xl, h3 + muted sub, 3 amount buttons
[$15/$30/$100] grid-cols-3 (selected = bg-deep text-white), Sydney CTA (h-14 rounded-2xl
bg-deep hover:bg-accent), direct-contact box (border-line bg-paper, tel links), close link.

## Branded 404

public/404.html — cream bg, logo, giant mono "404", serif-italic "This page isn't
enrolled yet", muted description, pill links to /, #story, #blessing, #impact.

---

## Dependencies
react, react-dom, vite, typescript, tailwindcss v4, gsap, lenis, lucide-react, clsx,
tailwind-merge. NO react-router, NO hls.js, NO UI kit.

## Definition of Done (verify before shipping)
1. npm run build → zero TypeScript errors.
2. Test at 320/375/768/1440px: no horizontal scrollbar at any width.
3. Mobile: hamburger opens/closes; menu links reachable at short heights; donate modal
   opens on all CTA paths; modal closes on backdrop + Escape; body scroll locks.
4. Desktop: hero parallax scrubs; cinematic crossfades with progress counter; nothing
   overlaps the next section.
5. Lazy images load on scroll; hero paints immediately (no LCP shift).
6. EN/ខ្មែរ toggle works from a cold load with no flash, choice persisted.
7. prefers-reduced-motion: everything collapses, cinematic unsticks and shows all stages.
```
