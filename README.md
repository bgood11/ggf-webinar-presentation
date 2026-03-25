# GGF Webinar Presentation

Interactive web-based presentation for the Shermin Finance / Stax webinar with GGF (Glass and Glazing Federation) approved installers.

**Live URL:** [Vercel Deployment](https://ggf-webinar-presentation-bhikihabm-bgood11s-projects.vercel.app)

## Overview

A React-based slide deck that replaces traditional PowerPoint with smooth animations, interactive navigation, and a premium branded experience. Built for a 30-minute webinar on 16th April 2025 introducing Shermin Finance's Stax platform to GGF members.

### Slide Deck (11 Slides)

| # | Slide | Content |
|---|-------|---------|
| 1 | **Title** | Partnership logos (Stax x GGF), headline, presenter info |
| 2 | **Who We Are** | Shermin Finance intro, stats (200+ retailers, 220k+ customers, 750M+ loans), finance objectives |
| 3 | **The Challenge** | Industry stats with animated donut charts (8.8M, 83%, 60%, 53%), sourced research |
| 4 | **Our Solution** | Waterfall decisioning flow, comparison bars (60% vs 85%) |
| 5 | **Introducing Stax** | Platform features grid (6 features), laptop outline SVG |
| 6 | **Customer Journey** | 12-step cradle-to-grave process in 3 colour-coded rows |
| 7 | **Finance Options** | 10.9% APR IBC, example calc (5k/120mo/68.59pm), deposit comparison, finer detail |
| 8 | **FCA Regulation** | 4 permission levels (Full Auth, Limited, AR, IAR), IAR recommended |
| 9 | **GGF Benefits** | Standard vs GGF Member comparison table (6 benefit rows) |
| 10 | **Partnership** | 7-day onboarding timeline, 3 support cards |
| 11 | **Next Steps** | Contact details, QR code to ggf.staxpay.co.uk, presenter info |

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** - build and dev server
- **Tailwind CSS 4** - styling
- **Framer Motion** - slide transitions and entrance animations
- **Lucide React** - icons
- **qrcode.react** - QR code generation

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Dev server runs at `http://localhost:5173/`.

## Navigation

- **Arrow keys** - Left/Right to navigate
- **Spacebar** / **PageDown** - Next slide
- **PageUp** - Previous slide
- **Nav buttons** - Frosted glass chevron buttons on left/right edges
- **Dot navigation** - Click dots at bottom to jump to any slide
- **URL hash** - Add `#5` to URL to jump directly to slide 5

## Project Structure

```
ggf-webinar-presentation/
  public/
    images/
      logos/              # Stax and GGF logos (colour + white variants)
  src/
    components/
      slides/             # One component per slide (11 files)
      DonutChart.tsx      # Animated SVG donut chart component
      SlideHeader.tsx     # Reusable header with Stax/GGF logos
    App.tsx               # Main app - navigation, transitions, layout
    index.css             # Tailwind config, custom utility classes
    main.tsx              # Entry point
  index.html
  package.json
  vite.config.ts
  tsconfig.json
```

## Deployment

Deployed to Vercel:

```bash
vercel deploy --prod --yes
```

## Customisation

See [docs/CUSTOMISATION.md](docs/CUSTOMISATION.md) for details on adding slides, changing branding, updating content, and modifying animations.

## Content Rules

- **No em dashes** - Never use the character. Use commas, hyphens, or full stops.
- **White text on dark slides** - All content slides (2-10) use gradient backgrounds
- **SlideHeader on slides 2-10** - Always `variant="dark"`
