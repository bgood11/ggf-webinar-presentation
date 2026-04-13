import { motion } from 'framer-motion';
import {
  Landmark,
  Cog,
  FileText,
  Truck,
  Building2,
  Receipt,
  Leaf,
  ArrowRightLeft,
} from 'lucide-react';
import SlideHeader from '../SlideHeader';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

const products = [
  {
    icon: Landmark,
    title: 'Business Loans',
    desc: 'Short-term loans for equipment, expansion, or cash flow',
  },
  {
    icon: Cog,
    title: 'Asset Finance',
    desc: 'Acquire vehicles, machinery, or equipment via instalments',
  },
  {
    icon: FileText,
    title: 'Invoice Finance',
    desc: 'Borrow against unpaid invoices for quick cash flow',
  },
  {
    icon: Truck,
    title: 'Vehicle Finance',
    desc: 'Purchase, lease, or refinance commercial vehicles',
  },
  {
    icon: Building2,
    title: 'Property Finance',
    desc: 'Purchase, develop, or refinance commercial property',
  },
  {
    icon: Receipt,
    title: 'VAT & Tax Finance',
    desc: 'Spread VAT and Corporation Tax payments over time',
  },
  {
    icon: Leaf,
    title: 'Renewables Finance',
    desc: 'Fund solar, wind, and renewable energy projects',
  },
  {
    icon: ArrowRightLeft,
    title: 'Bridging Finance',
    desc: 'Short-term loans for time-sensitive opportunities',
  },
];

export default function SlideCommercialProducts() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" showGGF />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 max-w-5xl w-full">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="accent-line" />
          <span className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase">
            Stax Commercial
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Wide Range of Commercial Finance Solutions
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-base text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.3 }}
        >
          From business loans to property finance, we offer comprehensive funding
          solutions tailored to your business needs.
        </motion.p>

        {/* 4x2 product grid */}
        <motion.div
          className="grid grid-cols-4 gap-4 w-full mt-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card px-4 py-5 flex flex-col items-start text-left gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1">
                <product.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-sm">{product.title}</span>
              <span className="text-white/70 text-xs leading-snug">{product.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
