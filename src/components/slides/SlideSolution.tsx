import { motion } from 'framer-motion';
import { User, X, Check, FileSignature, Wrench, PoundSterling, ChevronRight } from 'lucide-react';
import SlideHeader from '../SlideHeader';

const flowContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const flowStep = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

const arrowVariant = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.2, ease: 'easeOut' as const } }
};

interface StepDef {
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  borderColor: string;
  bgColor: string;
  iconColor: string;
  badge?: { text: string; color: string; bgColor: string };
}

const steps: StepDef[] = [
  {
    label: 'Customer Applies',
    icon: User,
    borderColor: '#ffffff80',
    bgColor: 'rgba(255,255,255,0.1)',
    iconColor: '#ffffff',
  },
  {
    label: 'Lender 1',
    icon: X,
    borderColor: '#ef4444',
    bgColor: 'rgba(239,68,68,0.15)',
    iconColor: '#ef4444',
    badge: { text: 'DECLINED', color: '#ef4444', bgColor: 'rgba(239,68,68,0.2)' },
  },
  {
    label: 'Lender 2',
    icon: Check,
    borderColor: '#22c55e',
    bgColor: 'rgba(34,197,94,0.15)',
    iconColor: '#22c55e',
    badge: { text: 'APPROVED', color: '#22c55e', bgColor: 'rgba(34,197,94,0.2)' },
  },
  {
    label: 'E-Sign Docs',
    icon: FileSignature,
    borderColor: '#ffffff80',
    bgColor: 'rgba(255,255,255,0.1)',
    iconColor: '#ffffff',
  },
  {
    label: 'Job Fitted',
    icon: Wrench,
    borderColor: '#ffffff80',
    bgColor: 'rgba(255,255,255,0.1)',
    iconColor: '#ffffff',
  },
  {
    label: 'Installer Paid',
    icon: PoundSterling,
    borderColor: '#22c55e',
    bgColor: 'rgba(34,197,94,0.15)',
    iconColor: '#22c55e',
  },
];

export default function SlideSolution() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" />

      <div className="relative z-10 flex flex-col max-w-6xl w-full gap-5 mt-2">
        {/* Section label */}
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.25em] uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          OUR SOLUTION
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-4xl font-bold text-white leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
        >
          One Application. Multiple Lenders. Maximum Approvals.
        </motion.h2>

        {/* Callout */}
        <motion.p
          className="text-white text-base leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' as const }}
        >
          The customer applies once. If Lender 1 declines, we automatically try Lender 2. {' '}
          <span className="font-semibold text-white">No additional credit searches.</span>
        </motion.p>

        {/* Waterfall flow graphic */}
        <motion.div
          className="flex items-center gap-2 mt-3 w-full justify-between"
          variants={flowContainer}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, i) => (
            <motion.div key={i} className="contents" variants={flowStep}>
              {/* Step card */}
              <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                <div
                  className="glass-card relative flex flex-col items-center justify-center gap-2 px-3 py-4 w-full"
                  style={{ borderTop: `3px solid ${step.borderColor}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: step.bgColor }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.iconColor }} />
                  </div>
                  <span className="text-xs font-semibold text-white text-center leading-tight">
                    {step.label}
                  </span>
                  {step.badge && (
                    <span
                      className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase"
                      style={{ color: step.badge.color, backgroundColor: step.badge.bgColor }}
                    >
                      {step.badge.text}
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  className="flex items-center shrink-0"
                  variants={arrowVariant}
                  style={{ originX: 0 }}
                >
                  {/* Cascade arrow between Lender 1 and Lender 2 */}
                  {i === 1 ? (
                    <div className="flex flex-col items-center gap-0.5">
                      <ChevronRight className="w-5 h-5 text-stax-pink" />
                      <span className="text-[9px] font-bold text-stax-pink tracking-wider uppercase">
                        waterfall
                      </span>
                    </div>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-white/50" />
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison bars */}
        <div className="w-full max-w-3xl mt-4 space-y-3">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.3, ease: 'easeOut' as const }}
          >
            <span className="text-sm font-medium text-white/50 w-32 text-right shrink-0">
              Single Lender
            </span>
            <div className="flex-1 h-9 bg-white/10 rounded-lg overflow-hidden relative">
              <motion.div
                className="h-full rounded-lg bg-white/20"
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' as const }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50">
                ~60% approval
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' as const }}
          >
            <span className="text-sm font-semibold text-stax-pink w-32 text-right shrink-0">
              Shermin Panel
            </span>
            <div className="flex-1 h-9 bg-white/10 rounded-lg overflow-hidden relative">
              <motion.div
                className="h-full rounded-lg"
                style={{ background: 'linear-gradient(90deg, #477085, #2ab7e3)' }}
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ delay: 0.25, duration: 0.3, ease: 'easeOut' as const }}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-white">
                ~85% approval
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
