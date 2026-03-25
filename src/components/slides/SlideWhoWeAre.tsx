import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import SlideHeader from '../SlideHeader';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

const stats = [
  { value: 200, suffix: '+', label: 'Retail Partners', prefix: '' },
  { value: 220000, suffix: '+', label: 'Customers Served', prefix: '' },
  { value: 750, suffix: 'M+', label: 'in Loans Facilitated', prefix: '\u00a3' },
  { value: 6, suffix: '', label: 'Lending Partners', prefix: '' },
];

const objectives = [
  'Boost conversion rates',
  'Increase average order value',
  'Decrease the need for discount',
  'Reduce payment chasing',
  'Decrease cancellations',
  'Attract new customers',
];

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [value]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function SlideWhoWeAre() {
  return (
    <div className="slide gradient-bg justify-center">
      <SlideHeader variant="dark" />

      <div className="flex flex-col max-w-6xl w-full gap-6 mt-4">
        {/* Section label + accent line */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          <span className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase">
            WHO WE ARE
          </span>
          <div className="accent-line" />
        </motion.div>

        {/* Headline + Badge row */}
        <div className="flex items-center gap-5 flex-wrap">
          <motion.h2
            className="text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
          >
            Shermin Finance
          </motion.h2>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-wide"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' as const }}
          >
            Part of the Homeserve / Brookfield Group
          </motion.div>
        </div>

        {/* Key paragraph - left-aligned */}
        <motion.p
          className="text-white text-lg leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' as const }}
        >
          As an FCA-authorised credit broker, we connect over 200 retailers in the home
          improvement and renewables sectors with our panel of 6 specialist lenders. We handle
          the full customer finance journey, from application through to lender payout, so
          you can focus on selling.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          className="grid grid-cols-4 gap-5 mt-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card flex flex-col items-center text-center px-5 py-7 relative overflow-hidden"
            >
              {/* Gradient top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] bg-white/30"
              />
              <span className="text-4xl font-bold text-white leading-none mb-2">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-white/70 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Finance Objectives */}
        <motion.div
          className="grid grid-cols-3 gap-x-6 gap-y-2 mt-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' as const }}
        >
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 text-green-400" />
              <span className="text-xs text-white">{obj}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
