import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Target, ShieldCheck } from 'lucide-react';
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

const pillars = [
  {
    icon: Wallet,
    title: 'Support Cash Flow',
    desc: 'Access funding to keep your business running smoothly day-to-day',
  },
  {
    icon: TrendingUp,
    title: 'Accelerate Growth',
    desc: 'Invest in expansion without draining your reserves',
  },
  {
    icon: Target,
    title: 'Maximise Opportunities',
    desc: 'Act fast on time-sensitive deals and contracts',
  },
  {
    icon: ShieldCheck,
    title: 'Overcome Challenges',
    desc: 'Navigate financial hurdles with tailored solutions',
  },
];

export default function SlideCommercialIntro() {
  return (
    <div className="slide gradient-bg-warm relative justify-center">
      <SlideHeader variant="dark" showGGF />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 max-w-5xl w-full">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="accent-line" />
          <span className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase">
            New from Stax
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl font-bold text-white text-shadow-soft leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Are You Looking for Commercial Finance?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-lg text-white/80 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Stax Commercial Finance provides tailored commercial finance solutions
          designed to help you secure the funding you need to grow, expand, or
          manage your operations effectively.
        </motion.p>

        {/* 4 pillar cards */}
        <motion.div
          className="grid grid-cols-4 gap-5 w-full mt-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card px-5 py-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold text-base">{pillar.title}</span>
              <span className="text-white/70 text-sm leading-snug">{pillar.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
