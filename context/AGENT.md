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
4. **Tripwire**: If a design/copy draft is weak (< 8/10) → load `pushback-engineer-christ` and iterate before showing Christ.
5. **Tripwire**: If about to add a new file → load `context/SOUL.md` Ponytail rules and prove reuse failed first.

## 5. CURRENT STATE
- **Branch**: `redesign` — Full Tier 3 context layer added; next: fast-forward merge → `main` + Vercel deploy.
- **Build Status**: `npm run build` PASSED (~3s, 0 TS errors) | Lint clean
- **Remote**: `christpor/Hossana_school` (main + redesign pushed, commits visible)
- **Assets**: Official logo (`public/images/hosanna-logo.png`), real school photos (`real-students-hero.jpg`, `real-assembly-campus.jpg` — sourced from sydneyhosanna.com.au/cambodia), AI placeholders still present (`hero.jpg`, `choir.jpg`, `teacher.jpg`). Branded `public/404.html`.
- **Location (confirmed by Christ 2026-08-02)**: Pou Senchey District, Phnom Penh — Google pin `maps.app.goo.gl/CwM5fNPkbwsSCpiF6`, lat 11.5651 / long 104.8514. This supersedes LAWS.md's Mean Chey coords (11.5432, 104.8876).

## 6. NEXT TASKS
1. Deploy to Vercel (`vercel --prod`, project `hosanna-school`) after merge + verify 200.
2. Confirm site live with Christ; handle any post-launch fix.
3. Keep `docs/recreate-prompt.md` + `context/` files synced with design system changes.

## 7. KEY FILES & UTILS
- **Logo Asset**: [`public/images/hosanna-logo.png`](file:///home/christ/projects/hosanna-school/public/images/hosanna-logo.png)
- **Content Dictionary**: [`src/data/content.ts`](file:///home/christ/projects/hosanna-school/src/data/content.ts)
- **Design System CSS**: [`src/index.css`](file:///home/christ/projects/hosanna-school/src/index.css) (cream editorial tokens, sticky cinematic CSS, grain, reduced-motion)
- **Scroll Motion Orchestrator**: [`src/ScrollEffects.tsx`](file:///home/christ/projects/hosanna-school/src/ScrollEffects.tsx) (Lenis golden-sync + GSAP, parallax/mask/marquee)
- **Recreate Spec**: [`docs/recreate-prompt.md`](file:///home/christ/projects/hosanna-school/docs/recreate-prompt.md)
- **Deep Reference**: [`context/LAWS.md`](file:///home/christ/projects/hosanna-school/context/LAWS.md)
- **Context Layer**: [`context/`](file:///home/christ/projects/hosanna-school/context) — USER/SOUL/IDENTITY/SKILL_INDEX/CONTEXT_ENGINEERING (Tier 3). Audit: `token_audit.py`

## 8. RUN + PUSH & GIT SAFETY
- **Verification**: `npm run build` + `npm run lint`
- **Preview**: `npx vite preview --port 3000`
- **Git Rollback**: `git log -n 5`, `git checkout <hash>`

## 9. LAST SESSION HANDOFF (2026-08-02)
- **Context layer → Tier 3 (commit `PENDING`)**: Wrote `context/USER.md`, `SOUL.md`, `IDENTITY.md`, `SKILL_INDEX.md`, `CONTEXT_ENGINEERING.md`; added `LAZY DEV ARCHITECTURE` to `context/LAWS.md`; injected Tripwire gates into Session Start. Audit clean. Merging `redesign` → `main` (fast-forward) then deploying to Vercel (`hosanna-school.vercel.app`).
- **Navbar compacted (commit `22bae49`, pushed)**: pill `max-w-5xl→4xl`, logo `h-10→h-8`, dropped brand subtitle, nav links `13px` tighter, buttons `h-8`, drawer top `72→56px`. Build green.
- **Location + copy + real photos (commit `8d95b5f`, pushed)**: Pou Senchey, Phnom Penh (`maps.app.goo.gl/CwM5fNPkbwsSCpiF6`, 11.5651, 104.8514) supersedes Mean Chey coords. Light-trimmed copy, added 2 real photos (Hero + LocationHub).
- **Redesign build (commits `bd9e06b`..`55a0934`)**: all 8 sections in cream/navy editorial style + GSAP/Lenis motion + branded 404.
- **Next Session**: Confirm Vercel URL live + 200s with Christ; then any post-launch polish.
- **Ponytail Diff**: -2 dead files (App.css, src/assets) / 9 rebuilt sections / 5 new context files (Tier 3, required by skill) / 0 unresolved bugs.
