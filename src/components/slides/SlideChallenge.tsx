import { motion } from 'framer-motion';
import SlideHeader from '../SlideHeader';
import DonutChart from '../DonutChart';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.3, ease: 'easeOut' as const },
});

export default function SlideChallenge() {
  return (
    <div className="slide gradient-bg justify-center">
      <SlideHeader variant="dark" />

      <div className="flex flex-col max-w-6xl w-full gap-5 mt-2">
        {/* Section label */}
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.25em] uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          THE CHALLENGE
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-4xl font-bold text-white leading-tight max-w-3xl"
          {...fadeUp(0.05)}
        >
          Why Your Customers Need Finance
        </motion.h2>

        {/* Hero stat */}
        <motion.div
          className="flex flex-col gap-1"
          {...fadeUp(0.1)}
        >
          <span className="text-6xl font-bold text-white leading-none">8.8M</span>
          <span className="text-lg text-white/75">UK households have savings of £250 or less</span>
          <span className="text-xs text-white/40 mt-1">HSBC UK Savings Research</span>
        </motion.div>

        {/* Three donut chart stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-2"
          {...fadeUp(0.2)}
        >
          <DonutChart
            percentage={83}
            colour="#d884b6"
            label="say finance influences their purchase decision"
          />
          <DonutChart
            percentage={60}
            colour="#2ab7e3"
            label="would not have purchased without finance"
          />
          <DonutChart
            percentage={53}
            colour="#22c55e"
            label="increase spending when POS finance available"
          />
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="glass-card px-6 py-4 mt-2"
          {...fadeUp(0.35)}
        >
          <p className="text-white text-base font-semibold leading-relaxed">
            94% of customers won't ask if you offer finance. You need to tell them.
          </p>
          <span className="text-xs text-white/40 mt-1 block">Duologi UK POS Finance Survey</span>
        </motion.div>
      </div>
    </div>
  );
}
