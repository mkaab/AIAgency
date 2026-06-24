# AIAgency Project Context

## Overview
AltaServ is a visually engaging, single-page marketing website for an AI augmentation consultancy. The site aims to communicate innovation, intelligence, and professionalism, converting visitors into leads while establishing brand authority.

## Tech Stack
- **Framework**: React + Vite
- **Routing**: `react-router-dom` (Home, Blog, BlogPost, Nexus product page)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & `react-scroll-parallax` (slated for a major Three.js / high-fidelity animation overhaul)
- **Hosting / Deploy**: TBD (Vercel/Netlify)

## Current State
- The AIAgency site has undergone a complete premium 3D design overhaul.
- **WebGL Background**: A global `<Scene>` renders reactive 3D Data Particles (`@react-three/fiber`), gracefully falling back to CSS gradients on mobile.
- **Glassmorphism**: UI sections (`Hero`, `About`, `Services`, `CaseStudies`, `Nexus`) use dark glassmorphism (`bg-white/5 backdrop-blur-md`) to float seamlessly over the WebGL background.
- **Tactile UI**: `MagneticButton` uses advanced Framer Motion spring physics with 3D tilt (`rotateX/Y`) and deep tactile shadows.
- **Nexus Product Page**: Completely modernized to highlight the latest technical capabilities (Multi-Agent orchestration, Shopify App Blocks, Semantic RAG).

## Project Structure
- `/src/components`: UI components (Header, Hero, Services, etc.)
- `/src/pages`: Route pages (Home, Blog, Nexus)
- `/src/lib`: Utilities
- `/src/data`: Content data files
- `/src/styles`: Globals

## Key Rules & Patterns
- **Start Small**: Build incrementally. One logical chunk at a time.
- **Propose First**: Never execute terminal commands, package installs, or file edits without explicit user approval.
- **Context Maintenance**: Update this `context.md` file after any significant architectural change or at the end of a session.
- **Documentation**: Log significant findings or architecture decisions in `docs/` (e.g., `docs/decisions/`).
