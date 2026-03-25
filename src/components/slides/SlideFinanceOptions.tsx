import { motion } from 'framer-motion';
import { Percent, CheckCircle } from 'lucide-react';
import SlideHeader from '../SlideHeader';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.3, ease: 'easeOut' as const },
});

const finerDetails = [
  'Customer chooses a loan term between 48-120 months',
  'Payments begin approximately 30 days after installation',
  'Customer can settle the loan at any time with no penalty',
  'Partial overpayments permitted and carry no penalty',
  'Protected under Section 75 of the Consumer Credit Act',
];

export default function SlideFinanceOptions() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-3">
        {/* Section label */}
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase"
          {...fadeUp(0)}
        >
          FINANCE OPTIONS
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white"
          {...fadeUp(0.05)}
        >
          Flexible Finance for Your Customers
        </motion.h2>

        {/* Main product card */}
        <motion.div
          className="glass-card w-full max-w-lg px-6 py-4 flex flex-col items-center gap-2"
          {...fadeUp(0.1)}
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <Percent className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Interest Bearing Credit</h3>
          <span className="text-2xl font-bold text-stax-pink">10.9% APR Representative</span>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/10 font-semibold text-white/80">48 months</span>
            <span className="px-3 py-1 rounded-full bg-white/10 font-semibold text-white/80">60 months</span>
            <span className="px-3 py-1 rounded-full bg-white/10 font-semibold text-white/80">120 months</span>
          </div>
        </motion.div>

        {/* Example calculation */}
        <motion.div
          className="glass-card w-full max-w-2xl px-6 py-4 text-left border-l-4 border-l-stax-pink"
          {...fadeUp(0.15)}
        >
          <div className="flex flex-col gap-0.5 mb-2">
            <span className="text-xs font-bold tracking-wider uppercase text-stax-pink">Example: Bi-fold Doors</span>
            <span className="text-sm text-white/70">
              Loan Amount: <strong className="text-white">£5,000</strong> &nbsp;|&nbsp; Term: <strong className="text-white">120 months</strong> &nbsp;|&nbsp; APR: <strong className="text-white">10.9%</strong>
            </span>
          </div>
          <div className="flex items-end gap-6">
            <div>
              <span className="text-sm text-white/70 block mb-1">Monthly Payment</span>
              <span className="text-5xl font-bold text-white leading-none">£68.59</span>
            </div>
            <div className="flex flex-col gap-0.5 text-sm text-white/70 pb-1">
              <span>Total Repayable: <strong className="text-white">£8,231.07</strong></span>
              <span>Total Interest: <strong className="text-white">£3,231.07</strong></span>
            </div>
          </div>
        </motion.div>

        {/* Deposit comparison */}
        <motion.div
          className="grid grid-cols-3 gap-4 w-full max-w-2xl"
          {...fadeUp(0.2)}
        >
          {[
            { deposit: '£0', monthly: '£68.59' },
            { deposit: '£500', monthly: '£61.73' },
            { deposit: '£1,000', monthly: '£54.87' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl border border-white/10 px-4 py-3 flex flex-col items-center gap-0.5"
            >
              <span className="text-xs font-bold text-white/70 uppercase tracking-wide">{item.deposit} deposit</span>
              <span className="text-2xl font-bold text-white">{item.monthly}</span>
              <span className="text-xs text-white/70">per month</span>
            </div>
          ))}
        </motion.div>

        {/* IBC - The Finer Detail */}
        <motion.div
          className="glass-card w-full max-w-2xl px-6 py-4 text-left"
          {...fadeUp(0.25)}
        >
          <span className="text-sm font-bold text-stax-pink uppercase tracking-wider block mb-3">The Finer Detail</span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {finerDetails.map((detail, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span className="text-xs text-white/70 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-sm text-white/70 italic"
          {...fadeUp(0.3)}
        >
          Customer chooses their own deposit level and term length
        </motion.p>
      </div>
    </div>
  );
}
