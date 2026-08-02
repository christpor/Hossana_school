# Recreate Prompt — Hosanna School for Cambodian Children Landing Page

Recreate the official high-impact, bilingual landing page for **Hosanna School for Cambodian Children (Hope School / 희망학교)** in Phnom Penh, Cambodia, fully aligned with the official Ministry of Education, Youth and Sport (MoEYS) recognized logo emblem.

---

## 🛠 Global Design System

### 1. Decompiled Official Emblem Palette
- **Primary Royal Navy Base**: `#002D62` (`bg-[#002D62]`)
- **Electric Cerulean Blue Accent**: `#0099E5` (`text-[#0099E5]`)
- **Rising Sky Blue**: `#46B2E6` (`text-[#46B2E6]`)
- **Educational Growth Emerald**: `#27AE60` & `#55B938` (`text-[#27AE60]`)
- **Sunburst Lime Gold**: `#E2DB14`
- **Background Dark Base**: `#060B14` (`bg-[#060B14]`)
- **Surface Dark Glass Card**: `rgba(12, 23, 38, 0.8)` with `backdrop-blur-md border border-[#0099E5]/20`

### 2. Typography Rules (Bilingual English & Khmer)
- **Latin Display Headline**: `Instrument Serif`, serif, italic (`font-serif italic tracking-tight`)
- **Latin Body**: `Inter`, sans-serif (`font-sans`)
- **Khmer Display & Body**: `Kantumruy Pro` / `Noto Sans Khmer`
- **Stats & Data Mono**: `JetBrains Mono`, monospace
- **Khmer Specific Override**:
  ```css
  html[data-lang="kh"] body {
    font-family: "Kantumruy Pro", "Noto Sans Khmer", sans-serif;
    line-height: 1.75 !important;
  }
  html[data-lang="kh"] .font-serif {
    font-family: "Kantumruy Pro", "Noto Sans Khmer", sans-serif;
    font-style: normal !important;
  }
  ```

---

## 📱 Section-by-Section Specification

### 1. Navigation Header
- **Layout**: Fixed top sticky bar with glassmorphism blur `backdrop-blur-xl bg-[#060B14]/85 border-b border-[#0099E5]/20`.
- **Left**: Render official logo image (`public/images/hosanna-logo.png`) inside `#002D62` circular badge with cerulean glow + "HOSANNA SCHOOL" title + "MoEYS Recognized" pill badge.
- **Center**: Links to `Story`, `Cycle of Blessing`, `Choir`, `Impact Calculator`, `Location`.
- **Right**: Language switcher `[EN | KH]` + "Sponsor a Student" CTA (`bg-gradient-to-r from-[#0099E5] to-[#002D62] text-white`).

### 2. Hero Section ("From Slum to Generational Hope")
- **Layout**: Full SVH viewport split/grid with eager background imagery (`public/images/hero.jpg`), radial cerulean vignette gradient, and blue highlight text.
- **Copy (EN)**: *"Recognized by the Ministry of Education, Youth and Sport (MoEYS), Hosanna School equips over 800+ children from Early Childhood through Grade 12 with quality education, clean water, and a path to lead their community."*
- **Key Metrics Row**: `800+` Active Students | `2003` Founded | `15+` Returned Teachers | `100%` Subsidized.

### 3. "The Cycle of Blessing" Story (Graduates Return as Teachers)
- **Concept**: Interactive timeline showing early impoverished graduates earning university degrees and returning to teach.
- **Cards**: Sombok Chab 2003 → Relocation 2006 → University Graduation 2015–2022 → Certified Teachers Present Day (`public/images/teacher.jpg`).

### 4. Interactive Micro-Donation Impact Calculator
- **Concept**: Solves the financial reality by eliminating day-to-day micro-costs (lesson printouts, clean water, uniforms, transportation).
- **Tiers**: `$15/mo` (Micro-Supplies), `$30/mo` (Full Pipeline Sponsorship), `$100/mo` (Arts & Choir).

### 5. Specialized Student Choir Spotlight
- **Highlight**: Hosanna Choir's backing vocalist performance with Cambodian music star **KESORRR**.
- **Features**: Interactive music player widget with audio wave animation, track list, and photo gallery (`public/images/choir.jpg`).

### 6. Transparency & Global Alignment (Sydney Hosanna Inc)
- **Trust Banner**: Fully sustained and audited by **Sydney Hosanna Incorporated** (Australian Registered Non-Profit).

### 7. Location & Official Emblem Footer
- **Address**: N° 665, Group 10, Mean Chey Village, Phnom Penh, Cambodia (Zip 12000).
- **Footer Marquee**: Animated continuous text banner displaying MoEYS accreditation & founders credit.

---

## ⚡ Definition of Done
1. Zero TypeScript build errors (`npm run build`).
2. Tested across 320px, 375px, 768px, 1440px without horizontal overflow.
3. Official logo emblem (`hosanna-logo.png`) rendered in header and footer.
4. Smooth scroll with Lenis `syncTouch: false`.
5. Full English & Khmer dual language toggle.
