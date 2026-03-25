import { motion } from 'framer-motion';
import { Send, Activity, FileSignature, Bell, BarChart3, Users } from 'lucide-react';
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

const features = [
  {
    icon: Send,
    title: 'Send Finance Links',
    desc: 'SMS or email links direct to customers',
  },
  {
    icon: Activity,
    title: 'Real-Time Tracking',
    desc: 'Track applications across all lenders live',
  },
  {
    icon: FileSignature,
    title: 'Digital E-Signatures',
    desc: 'Built into the customer journey',
  },
  {
    icon: Bell,
    title: 'Satisfaction Notes',
    desc: 'Automated notes to release funds faster',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Reporting',
    desc: 'See your full pipeline and conversion data',
  },
  {
    icon: Users,
    title: 'Multi-User Access',
    desc: 'Your whole sales team on one platform',
  },
];

export default function SlideStax() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" />

      {/* Device outline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06]">
        <svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="50" width="500" height="320" rx="12" stroke="white" strokeWidth="2"/>
          <rect x="170" y="70" width="460" height="280" rx="4" stroke="white" strokeWidth="1"/>
          <path d="M100 370 L700 370 L720 400 L80 400 Z" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 max-w-5xl w-full">
        {/* Logo */}
        <motion.img
          src="/images/logos/stax-logo-white.png"
          alt="Stax"
          className="h-16 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        />

        {/* Value proposition */}
        <motion.h2
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
        >
          Your All-in-One Finance Platform
        </motion.h2>

        {/* 3x2 feature grid */}
        <motion.div
          className="grid grid-cols-3 gap-5 w-full mt-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {features.map((feat, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card px-5 py-5 flex flex-col items-start text-left gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1">
                <feat.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-base">{feat.title}</span>
              <span className="text-white/70 text-sm leading-snug">{feat.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
