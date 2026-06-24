# AltaServ Website Redesign Design Specification

## 1. Goal
Subtly enhance the AltaServ web application to feel more premium, modern, and aligned with high-end tech/design agencies (specifically taking inspiration from Experience Ventures), without requiring a complete structural overhaul. 

## 2. Approach: The Subtle Enhancement
Focusing primarily on refining typography tracking/weights and adding strategic motion & interactivity via `framer-motion` and Tailwind CSS. The current layout and brand colors (blue, charcoal) remain intact.

### 2.1 Typography & Styling Updates
*   **Headings (`h1`, `h2`, `h3`):**
    *   Increase weight (`font-extrabold` / `font-bold`).
    *   Tighten tracking (`tracking-tighter` / `tracking-tight`).
    *   **Hero Upgrade:** Add a subtle, elegant text-gradient to the main Hero headline using the `brand-blue` palette (e.g., `#0096FF` to `#33ADFF`) for a modern pop that draws the eye.
*   **Component Styling:**
    *   Ensure cards and interactive elements have appropriate border radii and subtle structural borders.
    *   Maintain the high-contrast readability against the white/light background.

### 2.2 Motion & Interactivity (`framer-motion`)
*   **Initial Page Load (Hero):**
    *   Implement staggered fade-ins with upward translation.
    *   Example: `initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`.
*   **Scroll Revealing (Sections):**
    *   Use Framer Motion's `whileInView` for content blocks, text, and cards as the user scrolls. Elements should fade up gently.
*   **Hover States:**
    *   **Buttons/Links:** Smooth background color transition or subtle scale up (`scale: 1.05`).
    *   **Cards (Services/Features):** Subtle Y-axis lift (`-translate-y-1` or `-translate-y-2`) combined with a slight shadow increase to create tactile depth.

### 2.3 Hero Background (Video)
*   **Implementation:** The Hero section will be configured to support a looping, muted, autoplay background video.
*   **Current State:** Provide a high-quality stock placeholder or abstract animated texture (like a slow ambient CSS gradient or a generic abstract tech stock video via URL) so the user can easily swap in their custom video later.

## 3. Libraries & Tools Used
*   **Tailwind CSS:** For all utility styling and typography adjustments.
*   **Framer Motion (`framer-motion`):** For all scroll triggers and hover animations.
*   *(Existing)* React & Vite stack.

## 4. Execution Plan Summary
1.  Update typography globally in component classes.
2.  Add Hero video background structural HTML.
3.  Wrap major layout components (Hero, Features, Testimonials, CTA) in Framer Motion components with `whileInView` trigger constraints.
4.  Add hover interactives to individual cards.
