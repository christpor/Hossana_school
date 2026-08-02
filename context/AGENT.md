# AGENT.md — Hosanna School Agent Brain

## 1. PROJECT IDENTIFIER
- **Project**: Hosanna School for Cambodian Children Landing Page | **Stack**: React + Vite + Tailwind v4 + TS + Lenis | **Status**: Production Preview Active

## 2. WHO YOU ARE
- **Persona**: Sovereign Cambodian Web Engineer + Senior Designer.
- **Hard Rules**: Zero AI slop. Strict MoEYS brand colors (`#002D62` Navy, `#0099E5` Cerulean, `#27AE60` Emerald). Mobile-first 320px responsive floor. Lenis `syncTouch: false`.

## 3. WHO THE DEVELOPER IS
- **Developer**: Christ (Cambodian tech lead).
- **Philosophy**: Peer-to-peer tone. Zero fluff. Always show plan -> wait for approval -> execute. Never claim victory without `npm run build` green.

## 4. SESSION START PROTOCOL
1. Read `context/AGENT.md` for latest session handoff & state.
2. If working on UI/branding → consult `context/LAWS.md` for MoEYS logo tokens and Khmer font rules.
3. Run `npm run build` after editing code to verify zero TS errors.

## 5. CURRENT STATE
- **Branch**: `main`
- **Build Status**: `npm run build` PASSED (1.12s, 0 TS errors)
- **Active Server**: Vite Preview running at `http://localhost:3000`
- **Assets**: Official logo (`public/images/hosanna-logo.png`), hero (`hero.jpg`), choir (`choir.jpg`), teacher (`teacher.jpg`).

## 6. NEXT TASKS
1. Maintain bilingual EN/KH content dictionary in `src/data/content.ts`.
2. Add interactive photo lightbox for student choir & campus gallery if requested.
3. Keep `docs/recreate-prompt.md` synced with any future design system changes.

## 7. KEY FILES & UTILS
- **Logo Asset**: [`public/images/hosanna-logo.png`](file:///home/christ/projects/hosanna-school/public/images/hosanna-logo.png)
- **Content Dictionary**: [`src/data/content.ts`](file:///home/christ/projects/hosanna-school/src/data/content.ts)
- **Brand CSS Tokens**: [`src/index.css`](file:///home/christ/projects/hosanna-school/src/index.css)
- **Recreate Spec**: [`docs/recreate-prompt.md`](file:///home/christ/projects/hosanna-school/docs/recreate-prompt.md)
- **Deep Reference**: [`context/LAWS.md`](file:///home/christ/projects/hosanna-school/context/LAWS.md)

## 8. RUN + PUSH & GIT SAFETY
- **Verification**: `npm run build`
- **Preview**: `npx vite preview --port 3000`
- **Git Rollback**: `git log -n 5`, `git checkout <hash>`

## 9. LAST SESSION HANDOFF (2026-08-02)
- **Built & Verified**:
  - Decompiled official MoEYS logo (`ChatGPT Image Aug 2, 2026, 02_34_45 PM.png`) into brand colors (`#002D62` Navy, `#0099E5` Cerulean, `#27AE60` Emerald).
  - Saved official emblem to `public/images/hosanna-logo.png` and rendered in Navbar header & Footer.
  - Implemented 8 complete sections: Navbar, Hero, Cycle of Blessing, Impact Calculator, Choir Spotlight with audio player (KESORRR feat.), Governance (Sydney Hosanna Inc), Location Hub, Footer with MoEYS marquee banner.
  - Built DonateModal dialog with Australian (AUD/USD) & direct field contact options.
  - Verified `npm run build` in 1.12s with zero TypeScript errors.
- **Next Session**: Load `context/AGENT.md` → run `npx vite preview --port 3000` → ready for user updates.
- **Ponytail Diff**: +8 components built / 0 unresolved bugs.
