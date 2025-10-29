# AltaServ Website V1 Implementation Plan

This plan translates the PRD in `Prd.md` into an actionable, verifiable, and deployable build for V1.

## 1) Goals Recap
- Convert visitors to leads via contact form and/or consultation scheduling.
- Establish brand authority with a futuristic yet trustworthy aesthetic.
- Deliver a visually engaging, performant, and responsive one-page experience.

Success metrics (V1 targets):
- Time on site ≥ 1:30
- Conversion rate ≥ 5%
- Scroll completion ≥ 70%
- Lighthouse Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 95, SEO ≥ 95

## 2) Tech Stack
- Framework: React + Vite
- Styling: Tailwind CSS
- Animations: Framer Motion + React Scroll Parallax
- Forms: Formspree (V1) with simple client-side validation
- Hosting: Vercel or Netlify (V1 choose Netlify for zero-config; can switch later)
- SEO: Static meta and OpenGraph tags, `sitemap.xml`, `robots.txt`
- Analytics: Google Analytics (optional flagging) or Plausible

## 3) High-Level Architecture
- Single-page app (SPA) with semantic sections.
- Component-based: one component per section.
- Centralized theme/tokens via Tailwind config.
- Content constants live in `src/content/` for easy swap (CMS-ready structure).
- Strict TypeScript optional (V1: JS for speed; TypeScript can be a V1.1 enhancement).

## 4) Project Structure
```
/ (repo root)
  ├─ index.html
  ├─ vite.config.(ts|js)
  ├─ package.json
  ├─ tailwind.config.js
  ├─ postcss.config.js
  ├─ /public
  │   ├─ og-image.png
  │   ├─ icons/*
  │   ├─ lotties/* (if used)
  │   └─ sitemap.xml (generated at build or static)
  └─ /src
      ├─ main.jsx
      ├─ App.jsx
      ├─ /components
      │   ├─ Header.jsx
      │   ├─ Hero.jsx
      │   ├─ About.jsx
      │   ├─ Services.jsx
      │   ├─ CaseStudies.jsx
      │   ├─ Contact.jsx
      │   ├─ Footer.jsx
      │   ├─ ParticlesBG.jsx (optional)
      │   └─ SectionHeading.jsx (shared)
      ├─ /hooks
      │   └─ useParallax.js
      ├─ /lib
      │   ├─ analytics.js
      │   └─ seo.js
      ├─ /styles
      │   └─ globals.css
      └─ /content
          ├─ site.js (brand, nav, footer, social)
          ├─ hero.js (tagline, subcopy, cta)
          ├─ about.js (mission, differentiators)
          ├─ services.js (tiles data)
          └─ casestudies.js (cards/slider data)
```

## 5) Visual & Brand Implementation
- Color: White (#fff), Silver (#C0C0C0), Blue gradient (#007BFF→#0096FF), Charcoal (#333).
- Typography: Poppins or Inter via Google Fonts.
- Style: Clean, airy, subtle glassmorphism (backdrop-blur), rounded xl corners, soft shadows.
- Imagery: Abstract AI network visuals, human+machine collaborative scenes.

## 6) Section Specifications

### 6.1 Header
- Sticky top, translucent (glassmorphism), slight blur on scroll.
- Left: AltaServ logotype (text for V1). Right: nav anchors (About, Services, Impact, Contact), primary CTA "Talk to Us".
- Scroll spy highlights current section.

### 6.2 Hero
- Full-viewport height, animated gradient or particles background.
- Headline: "Human Intelligence. Augmented."
- Subcopy: One sentence value prop.
- Primary CTA: "Talk to Us" → smooth-scroll to Contact.
- Secondary microprompt: "See our work" → scroll to Case Studies.
- Motion: staggered fade/slide-in for heading, subcopy, CTAs.

### 6.3 About AltaServ
- Two-column on desktop, stacked on mobile.
- Content: mission statement + 3 differentiators (trust, scalability, augmentation focus).
- Motion: fade-in on viewport; slight parallax on illustration.

### 6.4 Services (What We Do)
- 3–4 tiles: AI Strategy, Automation Design, Augmentation Systems, Ethical AI.
- Each: icon, short title, 1–2 line description.
- Hover: elevate, scale 1.02, shadow-lg, subtle gradient border.
- Enter animation: tiles stagger in from bottom.

### 6.5 Case Studies / Impact
- 2–3 cards with KPI highlights (e.g., "–35% manual ops", "+22% lead QA speed").
- Optional slider for desktop; stack on mobile.
- Motion: parallax background strip, card fade+rise in.

### 6.6 Contact / CTA
- Headline: "Let’s Augment Your Business"
- Form fields: Name, Email, Company, Message.
- Validation: required Name, Email; Email format; Message min length.
- Submission: Formspree endpoint; show success/failure states.
- Alternative CTA: "Schedule a Consultation" → placeholder link (can integrate Calendly later).

### 6.7 Footer
- Company info, social links, copyright.
- Small links: Privacy, Terms (stub pages optional in V1 or anchors to modal stubs).

## 7) Animation System
- Use Framer Motion variants for consistent reveal patterns (fade, slide, stagger).
- Use `react-scroll-parallax` for background layers in Hero and Case Studies.
- Reduce motion preference: respect `prefers-reduced-motion` and minimize animations accordingly.
- Performance budget: ≤ 60fps on modern devices; limit heavy effects; avoid layout thrashing.

## 8) Accessibility
- Landmarks: header, main, footer; section headings with semantic tags.
- Keyboard: Focus-visible styles; skip-to-content link.
- Color contrast: AA minimum; verify gradient on text with shadow/overlay.
- Labels: Form inputs with `label` + `aria-invalid` on error; success/failure announce region.

## 9) SEO & Social
- Title, meta description per page (single page keywords around AI augmentation consultancy).
- OpenGraph/Twitter image `og-image.png` in `/public`.
- `sitemap.xml` and `robots.txt` in `/public`.
- Canonical URL configurable via env.

## 10) Analytics
- Lightweight analytics guard by env var: `VITE_ANALYTICS=ga|plausible|none`.
- Defer script loading to avoid blocking; respect Do Not Track when possible.

## 11) Performance & Quality
- Lighthouse target: ≥ 90 Perf.
- Use `vite` image optimization (static); consider `loading="lazy"`.
- Preload fonts; use `display=swap`.
- Bundle size target: initial JS ≤ 180KB gz (V1).

## 12) Environment & Configuration
- `.env` for:
  - `VITE_FORMSPREE_ID`
  - `VITE_SITE_URL`
  - `VITE_ANALYTICS`
- Provide `.env.example`.

## 13) Delivery Milestones (V1)
- M1 – Scaffold & Theming (Day 1–2)
  - Vite+React, Tailwind, project structure, fonts/colors.
- M2 – Content & Sections (Day 3–5)
  - Implement Header, Hero, About, Services, Case Studies, Footer; content from `/src/content/*`.
- M3 – Contact & Integrations (Day 6–7)
  - Formspree integration, validation, success/failure flows; SEO meta; analytics flag.
- M4 – Animations & Polish (Day 8–9)
  - Framer Motion reveals, parallax layers, microinteractions; accessibility pass.
- M5 – QA & Launch (Day 10)
  - Responsive checks, Lighthouse, deploy to Netlify/Vercel; domain config checklist.

## 14) Risks & Mitigations
- Animation performance on low-end devices → keep effects subtle, use `prefers-reduced-motion`.
- Brand assets not finalized → keep content in `/src/content/` to swap quickly.
- Form deliverability → start with Formspree; later add backend with reCAPTCHA if needed.

## 15) Task Breakdown (Jira-style)
- FE-001: Scaffold Vite+React app, add Tailwind, base styles.
- FE-002: Implement Header with sticky glass effect + scroll spy.
- FE-003: Implement Hero with animated background + CTA scroll.
- FE-004: Implement About section with reveal + parallax illustration.
- FE-005: Implement Services grid with hover interactions.
- FE-006: Implement Case Studies cards with parallax background.
- FE-007: Implement Contact form with Formspree, validation, states.
- FE-008: Implement Footer with social links.
- FE-009: Add SEO meta, OG image, sitemap, robots.
- FE-010: Add analytics (env-guarded) and DNT respect.
- FE-011: Accessibility pass + prefers-reduced-motion support.
- FE-012: Performance pass (images, font loading, Lighthouse >= 90).
- FE-013: Deploy to Netlify/Vercel, verify prod build and basic metrics.

## 16) Definition of Done (V1)
- All sections implemented and responsive.
- Framer Motion + Parallax used tastefully without jank.
- Contact form submits successfully with visible success/failure states.
- Lighthouse Perf ≥ 90, A11y ≥ 90, SEO ≥ 95.
- Deployed to a public URL with working OG tags and analytics (if enabled).
