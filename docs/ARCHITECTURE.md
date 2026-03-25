# Architecture

## Overview

Single-page React application that functions as a slide presentation. No routing library needed - slide state is managed via React useState with URL hash support for deep-linking.

## Component Hierarchy

```
App.tsx
  |-- Progress bar (motion.div)
  |-- Slide counter
  |-- Navigation dots
  |-- AnimatePresence (slide transitions)
  |   |-- Current slide component
  |       |-- SlideHeader (logo bar)
  |       |-- Slide content (varies per slide)
  |           |-- DonutChart (Slide 3 only)
  |           |-- QRCodeSVG (Slide 11 only)
  |-- Navigation buttons (ChevronLeft/Right)
```

## Slide System

Each slide is a standalone React component in `src/components/slides/`. They share:

1. **Outer container**: `<div className="slide gradient-bg justify-center">` - full-screen flex container
2. **SlideHeader**: Stax logo (and optionally GGF logo) absolutely positioned at top
3. **Content wrapper**: `<div className="relative z-10 ...">` - positioned above any background elements

## Navigation

`App.tsx` manages:
- `currentSlide` (index into slides array)
- `direction` (1 or -1, for transition direction)
- Keyboard listeners (ArrowLeft/Right, Space, PageUp/Down)
- URL hash initialisation (`#5` loads slide 5)

## Animation System

- **Slide transitions**: Framer Motion `AnimatePresence` with `mode="wait"`, tween-based horizontal slide
- **Content animations**: Each slide uses `motion` components with `initial/animate` props
- **Staggered entrances**: Container variants with `staggerChildren: 0.08`

## Styling

Tailwind CSS 4 with custom theme colours defined in `index.css` via `@theme`. Custom utility classes:

- `.slide` - Base slide layout (full-screen, flex-col, centered, padded for header)
- `.gradient-bg` / `.gradient-bg-warm` - Background gradients
- `.glass-card` - Frosted glass effect for cards on dark backgrounds
- `.card-premium` / `.card-elevated` - White cards (currently unused, kept for light-bg variants)

## Build

Vite 8 with React plugin. TypeScript strict mode. Production output to `dist/`.

## Deployment

Static site deployed to Vercel. The `vercel.json` is auto-generated. Build command: `tsc -b && vite build`.
