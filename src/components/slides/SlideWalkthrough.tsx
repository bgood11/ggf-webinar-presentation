import { motion } from 'framer-motion';
import {
  Home,
  Send,
  Smartphone,
  ClipboardCheck,
  CheckCircle,
  Mail,
  PenTool,
  Wrench,
  MousePointerClick,
  MailCheck,
  ThumbsUp,
  Banknote,
  ChevronRight,
} from 'lucide-react';
import SlideHeader from '../SlideHeader';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const stepItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

interface Step {
  num: number;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const rows: { label: string; color: string; steps: Step[] }[] = [
  {
    label: 'Sale & Application',
    color: '#477085',
    steps: [
      { num: 1, icon: Home, title: 'Customer Visit', desc: 'Retailer visits customer, provides quote, mentions finance' },
      { num: 2, icon: Send, title: 'Send Finance Link', desc: 'Retailer logs into Stax, sends link to customer' },
      { num: 3, icon: Smartphone, title: 'Choose Terms', desc: 'Customer opens link, selects finance terms & deposit' },
      { num: 4, icon: ClipboardCheck, title: 'Apply', desc: 'Customer completes the loan application' },
    ],
  },
  {
    label: 'Decision & Documentation',
    color: '#2ab7e3',
    steps: [
      { num: 5, icon: CheckCircle, title: 'Lending Decision', desc: 'Approved, referred, or declined in seconds' },
      { num: 6, icon: Mail, title: 'E-Sign Link Sent', desc: 'If approved, e-sign link sent via email' },
      { num: 7, icon: PenTool, title: 'E-Sign Docs', desc: 'Customer signs documentation digitally' },
      { num: 8, icon: Wrench, title: 'Install Goods', desc: 'Installer delivers and installs the products' },
    ],
  },
  {
    label: 'Completion & Payment',
    color: '#22c55e',
    steps: [
      { num: 9, icon: MousePointerClick, title: 'Send Sat Note', desc: 'Installer logs into Stax, clicks \'Send Satisfaction Note\'' },
      { num: 10, icon: MailCheck, title: 'Note Sent', desc: 'Satisfaction note emailed to customer' },
      { num: 11, icon: ThumbsUp, title: 'Customer Confirms', desc: 'Customer confirms goods delivered per contract' },
      { num: 12, icon: Banknote, title: 'Funds Released', desc: 'Lender pays installer directly within 24hrs' },
    ],
  },
];

export default function SlideWalkthrough() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl w-full gap-5">
        {/* Section label */}
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          THE COMPLETE JOURNEY
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
        >
          From Quote to Payment - Step by Step
        </motion.h2>

        {/* Rows */}
        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            className="w-full"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Row label */}
            <motion.div
              className="flex items-center gap-2 mb-2"
              variants={stepItem}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: row.color }} />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: row.color }}>
                {row.label}
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: `${row.color}40` }} />
            </motion.div>

            {/* Steps grid */}
            <div className="grid grid-cols-4 gap-3">
              {row.steps.map((step, stepIdx) => (
                <motion.div
                  key={step.num}
                  variants={stepItem}
                  className="relative flex items-start gap-2.5 bg-white/5 rounded-xl px-3 py-3 border border-white/10 text-left"
                >
                  {/* Arrow between steps */}
                  {stepIdx < 3 && (
                    <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-4 h-4 text-white/30" />
                    </div>
                  )}

                  {/* Step number circle */}
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: row.color }}
                  >
                    {step.num}
                  </div>

                  <div className="flex flex-col gap-0.5 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <step.icon className="w-3.5 h-3.5 shrink-0" style={{ color: row.color }} />
                      <span className="text-xs font-semibold text-white truncate">{step.title}</span>
                    </div>
                    <span className="text-xs text-white/70 leading-tight">{step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
