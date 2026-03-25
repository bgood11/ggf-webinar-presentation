# Customisation Guide

## Adding a New Slide

1. Create a new file in `src/components/slides/`:

```tsx
import { motion } from 'framer-motion';
import SlideHeader from '../SlideHeader';

export default function SlideNewName() {
  return (
    <div className="slide gradient-bg justify-center">
      <SlideHeader variant="dark" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-6">
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          SECTION LABEL
        </motion.span>
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Your Headline Here
        </motion.h2>
        {/* Add your content */}
      </div>
    </div>
  );
}
```

2. Import and add to the `slides` array in `src/App.tsx`:

```tsx
import SlideNewName from './components/slides/SlideNewName'

const slides = [
  // ... existing slides - insert at desired position
  { component: SlideNewName, label: 'New Slide' },
]
```

The navigation dots, progress bar, and slide counter auto-adapt to the array length.

## Removing a Slide

Remove the import and array entry from `src/App.tsx`. The slide component file can stay or be deleted.

## Changing Brand Colours

Edit `src/index.css` under the `@theme` block:

```css
@theme {
  --color-stax-teal: #477085;
  --color-stax-pink: #d884b6;
  --color-stax-blue: #2ab7e3;
  --color-stax-gray: #9d9c9c;
  --color-stax-dark: #1a3a4a;
}
```

These are referenced as Tailwind classes: `text-stax-teal`, `bg-stax-blue`, etc.

## Changing Backgrounds

### Slide backgrounds are defined in `index.css`:

- `.gradient-bg` - Blue gradient (slides 2-10): `linear-gradient(135deg, #1a3a4a, #477085, #2ab7e3)`
- `.gradient-bg-warm` - Warm gradient (slides 1, 11): `linear-gradient(135deg, #1a3a4a, #477085, #d884b6, #2ab7e3)`

### To change a slide's background:

Edit the outer `<div>` className in the slide component:
```tsx
// Blue gradient (default for content slides)
<div className="slide gradient-bg justify-center">

// Warm gradient (title/closing slides)
<div className="slide gradient-bg-warm relative justify-center items-center">
```

## Updating Finance Calculations

In `src/components/slides/SlideFinanceOptions.tsx`:

- Loan example: 5,000 at 10.9% APR over 120 months = 68.59/month
- Formula: `P * (r * (1+r)^n) / ((1+r)^n - 1)` where `r = APR / 12 / 100`
- Deposit variants: recalculate with reduced principal (e.g. 4,500 for 500 deposit)

## Updating Statistics (Slide 3)

`src/components/slides/SlideChallenge.tsx` uses the `DonutChart` component with sourced stats:

| Stat | Source |
|------|--------|
| 8.8M households with savings under 250 | HSBC UK Savings Research |
| 83% say finance influences purchase decision | Shermin Internal Research, 2022 |
| 60% would not have purchased without finance | Novuna Consumer Finance Research |
| 53% increase spending with POS finance | Novuna Consumer Finance Research |
| 94% won't ask if you offer finance | Duologi UK POS Finance Survey |

## Key Components

### SlideHeader
Renders Stax logo at top-left, optionally GGF logo at top-right.

```tsx
<SlideHeader variant="dark" />          // White logos (for gradient backgrounds)
<SlideHeader variant="light" />         // Colour logos (for white backgrounds)
<SlideHeader variant="dark" showGGF />  // Both logos
```

### DonutChart
Animated SVG percentage ring.

```tsx
<DonutChart
  percentage={83}
  colour="#d884b6"
  size={120}
  strokeWidth={10}
  label="say finance influences"
  sublabel="their purchase decision"
/>
```

## Animation Timings

All slide content uses Framer Motion with fast entrance animations:
- `delayChildren: 0.1` on container variants
- `staggerChildren: 0.08` between items
- `duration: 0.3` max on individual elements
- `delay: 0 to 0.3` max on individual elements

Slide transitions in `App.tsx`:
- `type: 'tween', duration: 0.3` for horizontal slide
- `opacity: { duration: 0.2 }` for fade

## Fonts

Inter (Google Fonts), weights 300-900. Loaded in `index.html`.
