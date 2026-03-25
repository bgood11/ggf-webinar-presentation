import { motion } from 'framer-motion';
import { Banknote, PoundSterling, BadgePercent, Rocket, Phone, ShieldCheck } from 'lucide-react';
import SlideHeader from '../SlideHeader';

const rowContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
};

const benefits = [
  {
    icon: Banknote,
    label: 'Setup Fee',
    standard: '£200',
    ggf: '£100',
    highlight: '50% discount',
  },
  {
    icon: PoundSterling,
    label: 'Monthly IAR Fee',
    standard: '£45/month',
    ggf: '£45/month',
    highlight: 'Introducer Appointed Representative',
  },
  {
    icon: BadgePercent,
    label: 'Transaction Fees',
    standard: 'Per-application fee',
    ggf: '£0 - No transaction fees',
    highlight: null,
  },
  {
    icon: Rocket,
    label: 'Setup Time',
    standard: 'Standard onboarding',
    ggf: '7-day fast-track setup',
    highlight: null,
  },
  {
    icon: Phone,
    label: 'Support',
    standard: 'Standard support',
    ggf: '24hr callback guarantee',
    highlight: null,
  },
  {
    icon: ShieldCheck,
    label: 'Compliance',
    standard: 'Self-managed',
    ggf: 'Full FCA compliance support',
    highlight: null,
  },
];

export default function SlideGGFBenefits() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" showGGF />

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full gap-6">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="accent-line" />
          <span className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase">
            Exclusive to GGF Members
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-white text-3xl font-bold text-center leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Preferential Terms for GGF Approved Installers
        </motion.h2>

        {/* Column headers */}
        <motion.div
          className="grid grid-cols-[1fr_1fr_1fr] w-full gap-4 px-2 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div />
          <div className="text-center">
            <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
              Standard Terms
            </span>
          </div>
          <div className="text-center">
            <span className="text-sm font-bold text-stax-pink uppercase tracking-wider">
              GGF Member Terms
            </span>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <motion.div
          className="w-full flex flex-col gap-2.5"
          variants={rowContainer}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={rowItem}
              className="grid grid-cols-[1fr_1fr_1fr] gap-4 items-center w-full px-2"
            >
              {/* Benefit label with icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-white">{benefit.label}</span>
              </div>

              {/* Standard column */}
              <div className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-center">
                <span className="text-sm text-white/50">{benefit.standard}</span>
              </div>

              {/* GGF column */}
              <div
                className="bg-white/15 border-2 border-white/20 rounded-xl py-3 px-4 text-center relative"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
              >
                <span className="text-sm font-bold text-white">{benefit.ggf}</span>
                {benefit.highlight && (
                  <span className="block text-[10px] text-stax-pink mt-0.5 font-medium">
                    {benefit.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
