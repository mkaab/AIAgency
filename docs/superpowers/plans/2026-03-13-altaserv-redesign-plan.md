# AltaServ Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Subtly enhance the AltaServ web application to feel more premium, modern, and aligned with high-end tech/design agencies (specifically Experience Ventures) by refining typography and adding strategic motion via framer-motion.

**Architecture:** We will apply global and component-level CSS class updates for typographic hierarchy. For motion, we will leverage `framer-motion` to create elegant, staggered fade-ins and scroll-reveals across the primary layout components (Hero, About, Services, Stats, Team, CaseStudies, Contact). We will also add a placeholder video background to the Hero section to accommodate future custom video content.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

## Task 1: Global Typography Updates

**Files:**
- Modify: `src/styles/globals.css`
- Modify: `src/components/SectionHeading.jsx`

- [ ] **Step 1: Update Global CSS Typography Settings**
Edit `src/styles/globals.css` to ensure global `h1, h2, h3` have tighter tracking and increased weights if not fully handled by Tailwind utility classes.
Expected: The `letter-spacing` variable in `globals.css` under the heading selectors should be updated to `-0.02em` or similar for a tighter, premium feel. Add text gradient utility classes if necessary.

- [ ] **Step 2: Update SectionHeading Component**
Modify `src/components/SectionHeading.jsx` to apply `tracking-tight` and `font-extrabold` globally to all section headers used across the site.

- [ ] **Step 3: Commit Global Typography Updates**
```bash
git add src/styles/globals.css src/components/SectionHeading.jsx
git commit -m "style: update global typography tracking and weights for premium feel"
```

---

## Task 2: Hero Section Upgrades (Motion + Video Background)

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Step 1: Add Video Background Structure**
Modify `src/components/Hero.jsx` to include an HTML5 `<video>` element set to `autoPlay loop muted playsInline`. Use a placeholder abstract video URL (e.g., a generic tech or abstract gradient MP4 from a reliable CDN or static assets folder if available) behind the main content.

- [ ] **Step 2: Apply Framer Motion to Hero Content**
Wrap the main hero text (`h1`, `p`) and CTA buttons in `framer-motion` `<motion.div>` or `<motion.h1>` elements.
Configure them with an `initial={{ opacity: 0, y: 30 }}` and `animate={{ opacity: 1, y: 0 }}` with a staggered transition.

- [ ] **Step 3: Apply Text Gradient to Hero Headline**
Add Tailwind text gradient classes (`bg-gradient-to-r from-brand-blue-500 to-brand-blue-400 bg-clip-text text-transparent`) to the main `h1` element in the Hero for a subtle pop.

- [ ] **Step 4: Commit Hero Updates**
```bash
git add src/components/Hero.jsx
git commit -m "feat: enhance hero with video background, text gradient, and framer-motion reveal"
```

---

## Task 3: Scroll Revealing via Framer Motion for Major Sections

**Files:**
- Modify: `src/components/About.jsx`
- Modify: `src/components/Services.jsx`
- Modify: `src/components/Stats.jsx`
- Modify: `src/components/CaseStudies.jsx`

- [ ] **Step 1: Add Scroll Reveal to About Section**
Import `motion` in `src/components/About.jsx`. Wrap the main content container in a `<motion.div>` using `initial={{ opacity: 0, y: 30 }}` and `whileInView={{ opacity: 1, y: 0 }}`. Set `viewport={{ once: true, margin: "-100px" }}` so it triggers slightly before coming into full view.

- [ ] **Step 2: Add Scroll Reveal to Services Section**
Apply the same `whileInView` animation pattern to `src/components/Services.jsx`. If services are listed in cards, stagger the reveal of individual cards.

- [ ] **Step 3: Add Scroll Reveal to Stats and CaseStudies Sections**
Apply the `whileInView` animation pattern to `src/components/Stats.jsx` and `src/components/CaseStudies.jsx` containers.

- [ ] **Step 4: Commit Scroll Reveal Updates**
```bash
git add src/components/About.jsx src/components/Services.jsx src/components/Stats.jsx src/components/CaseStudies.jsx
git commit -m "feat: implement framer-motion scroll reveals on major site sections"
```

---

## Task 4: Interactive Hover States on Cards and Buttons

**Files:**
- Modify: `src/components/Services.jsx`
- Modify: `src/components/CaseStudies.jsx`
- Modify: `src/components/MagneticButton.jsx` (if applicable) or main CTA buttons.

- [ ] **Step 1: Add Hover Lift to Service Cards**
In `src/components/Services.jsx`, update the service card wrappers with Tailwind hover utility classes: `transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`.

- [ ] **Step 2: Add Hover Lift to Case Study Cards**
In `src/components/CaseStudies.jsx`, apply similar hover utility classes (`hover:-translate-y-2 hover:shadow-xl`) to the case study cards.

- [ ] **Step 3: Enhance Button Hover States**
Review main buttons (especially in Hero and Contact) and ensure they have a noticeable but smooth transition on hover, utilizing either Tailwind `hover:scale-105` or Framer Motion's `whileHover={{ scale: 1.05 }}`.

- [ ] **Step 4: Commit Interactive Hover Updates**
```bash
git add src/components/Services.jsx src/components/CaseStudies.jsx
git commit -m "style: add refined hover states to cards and primary interactive elements"
```

---
*End of Plan*
