import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Globe, Building2, Phone, Mail } from 'lucide-react';

const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const contactCards = [
  { icon: Globe, heading: 'Consumer Finance', label: 'ggf.staxpay.co.uk' },
  { icon: Building2, heading: 'Commercial Finance', label: 'ggfcommercial.staxpay.co.uk' },
  { icon: Phone, heading: 'Call Us', label: '03302 30 30 30' },
  { icon: Mail, heading: 'Email Us', label: 'sales@sherminfinance.co.uk' },
];

export default function SlideNextSteps() {
  return (
    <div className="slide gradient-bg-warm relative justify-center items-center">
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 max-w-4xl">
        {/* Partnership logos */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/images/logos/stax-logo-white.png" alt="Stax" className="h-10" />
          <span className="text-white/50 text-2xl font-light">&times;</span>
          <img src="/images/logos/ggf-logo-white.svg" alt="GGF" className="h-11" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-5xl font-bold text-white text-shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Get Started Today
        </motion.h2>

        {/* Questions with single pulse */}
        <motion.p
          className="text-2xl font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          Questions?
        </motion.p>

        {/* Contact cards */}
        <motion.div
          className="grid grid-cols-2 gap-5 w-full"
          variants={cardContainer}
          initial="hidden"
          animate="visible"
        >
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="glass-card flex flex-col items-center gap-3 p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                {card.heading}
              </span>
              <span className="text-white font-semibold text-sm">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* QR Code */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <div className="bg-white p-3 rounded-lg">
            <QRCodeSVG value="https://ggf.staxpay.co.uk" size={80} />
          </div>
          <span className="text-white/60 text-xs">Scan to visit ggf.staxpay.co.uk</span>
        </motion.div>

        {/* Presenter info */}
        <motion.div
          className="flex flex-col items-center gap-1 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <span className="text-white text-lg font-semibold">Barney Goodman</span>
          <span className="text-white/70 text-sm">Change & Technology Director, Shermin Finance</span>
        </motion.div>

        {/* Thank you */}
        <motion.p
          className="text-white/60 text-base font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          Thank you
        </motion.p>
      </div>
    </div>
  );
}
