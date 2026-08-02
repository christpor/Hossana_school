# AGENT.md — Hosanna School Agent Brain

## 1. PROJECT IDENTIFIER
- **Project**: Hosanna School for Cambodian Children Landing Page | **Stack**: React + Vite + Tailwind v4 + TS + GSAP + Lenis | **Status**: Redesign (branch `redesign`) ready for review

## 2. WHO YOU ARE
- **Persona**: Sovereign Cambodian Web Engineer + Senior Designer.
- **Hard Rules**: Zero AI slop. Strict MoEYS brand tokens (`#002D62` Navy ink, `#0099E5` Cerulean accent, `#27AE60` Emerald semantics only). Mobile-first 320px responsive floor. Lenis `syncTouch: false`. One accent only.

## 3. WHO THE DEVELOPER IS
- **Developer**: Christ (Cambodian tech lead).
- **Philosophy**: Peer-to-peer tone. Zero fluff. Always show plan -> wait for approval -> execute. Never claim victory without `npm run build` green.

## 4. SESSION START PROTOCOL
1. Read `context/AGENT.md` for latest session handoff & state.
2. If working on UI/branding → consult `context/LAWS.md` for MoEYS logo tokens and Khmer font rules.
3. Run `npm run build` after editing code to verify zero TS errors.

## 5. CURRENT STATE
- **Branch**: `redesign` (new cream/navy editorial design, awaiting Christ approval to merge to `main`)
- **Build Status**: `npm run build` PASSED (~1s, 0 TS errors) | Lint clean
- **Remote**: `christpor/Hossana_school` (main + redesign pushed, commits visible)
- **Assets**: Official logo (`public/images/hosanna-logo.png`), hero (`hero.jpg`), choir (`choir.jpg`), teacher (`teacher.jpg`). Branded `public/404.html`.

## 6. NEXT TASKS
1. Christ previews redesign → on approval, merge `redesign` → `main` + push.
2. Deploy on Christ's explicit go (Vercel: `vercel --prod` + re-point alias + verify 200s).
3. Keep `docs/recreate-prompt.md` synced with any future design system changes.

## 7. KEY FILES & UTILS
- **Logo Asset**: [`public/images/hosanna-logo.png`](file:///home/christ/projects/hosanna-school/public/images/hosanna-logo.png)
- **Content Dictionary**: [`src/data/content.ts`](file:///home/christ/projects/hosanna-school/src/data/content.ts)
- **Design System CSS**: [`src/index.css`](file:///home/christ/projects/hosanna-school/src/index.css) (cream editorial tokens, sticky cinematic CSS, grain, reduced-motion)
- **Scroll Motion Orchestrator**: [`src/ScrollEffects.tsx`](file:///home/christ/projects/hosanna-school/src/ScrollEffects.tsx) (Lenis golden-sync + GSAP, parallax/mask/marquee)
- **Recreate Spec**: [`docs/recreate-prompt.md`](file:///home/christ/projects/hosanna-school/docs/recreate-prompt.md)
- **Deep Reference**: [`context/LAWS.md`](file:///home/christ/projects/hosanna-school/context/LAWS.md)

## 8. RUN + PUSH & GIT SAFETY
- **Verification**: `npm run build` + `npm run lint`
- **Preview**: `npx vite preview --port 3000`
- **Git Rollback**: `git log -n 5`, `git checkout <hash>`

## 9. LAST SESSION HANDOFF (2026-08-02)
- **Built & Verified**:
  - Git initialized for `christpor/Hossana_school` (was not a repo); baseline committed to `main`, pushed.
  - Redesign branch `redesign`: rebuilt all 8 sections in cream/navy editorial style + branded 404.
  - Added GSAP + ScrollEffects orchestrator (Lenis `syncTouch:false`, parallax ≥768px, mask reveals, velocity marquee).
  - Cycle of Blessing → sticky cinematic scroll story (CSS sticky, mobile-safe, reduced-motion unsticks).
  - Recreated `docs/recreate-prompt.md` in elite format.
  - Verified `npm run build` green, lint clean, DOM checks pass, 4-width screenshots in `.shots/`.
- **Next Session**: Load `context/AGENT.md` → run `npx vite preview --port 3000` → wait for Christ's approval to merge `redesign` → `main`.
- **Ponytail Diff**: -2 dead files (App.css, src/assets) / 9 rebuilt sections / 0 unresolved bugs.
