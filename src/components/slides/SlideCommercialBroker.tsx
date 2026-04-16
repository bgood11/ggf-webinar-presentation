import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { GraduationCap, Handshake, MonitorSmartphone } from 'lucide-react';
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

const advantages = [
  {
    icon: GraduationCap,
    title: 'Dedicated Expertise',
    desc: 'We work with you to understand your business, coupling that understanding with our knowledge for sustained growth.',
  },
  {
    icon: Handshake,
    title: 'Wide Range of Lenders',
    desc: 'Access to a wide range of providers, leveraging our expertise and relationships for the best options.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Ease & Convenience',
    desc: 'Whether face-to-face, phone, or Zoom — we meet you where you are.',
  },
];

export default function SlideCommercialBroker() {
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
            Expert Guidance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Why Use a Commercial Finance Broker?
        </motion.h2>

        {/* Intro text */}
        <motion.p
          className="text-base text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.3 }}
        >
          Navigating commercial finance can be overwhelming. At Stax Commercial,
          our experienced team guides you through the complexities of business
          financing.
        </motion.p>

        {/* 3 advantage cards */}
        <motion.div
          className="grid grid-cols-3 gap-5 w-full mt-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card px-5 py-6 flex flex-col items-start text-left gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <adv.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold text-base">{adv.title}</span>
              <span className="text-white/70 text-sm leading-snug">{adv.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          className="flex items-center gap-6 glass-card px-8 py-5 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="bg-white p-2.5 rounded-lg shrink-0">
            <QRCodeSVG value="https://ggfcommercial.staxpay.co.uk" size={64} />
          </div>
          <div className="flex flex-col items-start text-left gap-1">
            <span className="text-white font-semibold text-lg">Request a Callback</span>
            <span className="text-white/70 text-sm">
              Visit <span className="text-white font-medium">ggfcommercial.staxpay.co.uk</span> to
              speak with a Stax Commercial specialist broker
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
