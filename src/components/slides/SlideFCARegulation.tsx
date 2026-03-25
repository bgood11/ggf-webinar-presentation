import { motion } from 'framer-motion';
import { Shield, ShieldAlert, Handshake, UserCheck } from 'lucide-react';
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

const cards = [
  {
    icon: Shield,
    title: 'Fully Authorised',
    borderColor: '#477085',
    badge: 'Full flexibility',
    badgeBg: '#477085',
    desc: 'Fully authorised in your own right to offer credit to customers. Can discuss and sell finance in the customer\'s home or on trade premises.',
    highlight: false,
  },
  {
    icon: ShieldAlert,
    title: 'Limited Permission',
    borderColor: '#2ab7e3',
    badge: 'Trade premises only',
    badgeBg: '#2ab7e3',
    desc: 'Can sell and explain finance to customers, but only on your trade premises. Cannot discuss finance in the customer\'s home.',
    highlight: false,
  },
  {
    icon: Handshake,
    title: 'Appointed Representative (AR)',
    borderColor: '#d884b6',
    badge: 'Under Shermin\'s licence',
    badgeBg: '#d884b6',
    desc: 'Same permissions as Fully Authorised, but you sit under Shermin\'s FCA licence. We handle all the compliance burden for you.',
    highlight: false,
  },
  {
    icon: UserCheck,
    title: 'Introducer Appointed Representative (IAR)',
    borderColor: '#477085',
    badge: 'Easiest entry point \u2605',
    badgeBg: '#477085',
    desc: 'Sits under Shermin as principal. You introduce customers to finance but don\'t discuss it. The cheapest and quickest way to get started with finance.',
    highlight: true,
    callout: 'Discounted fees for GGF members \u2014 see next slide \u2192',
  },
];

export default function SlideFCARegulation() {
  return (
    <div className="slide gradient-bg relative justify-center">
      <SlideHeader variant="dark" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-5">
        {/* Section label */}
        <motion.span
          className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          FCA REGULATION
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
        >
          Your Options for Offering Finance
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-sm text-white/70 max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3, ease: 'easeOut' as const }}
        >
          All retailers need FCA permission to offer finance to customers. Here are the four levels:
        </motion.p>

        {/* 2x2 grid */}
        <motion.div
          className="grid grid-cols-2 gap-5 w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className={`glass-card text-left border-l-4 px-6 py-5 relative ${
                card.highlight ? 'bg-white/15 ring-1 ring-white/20' : ''
              }`}
              style={{ borderLeftColor: card.borderColor }}
            >
              {/* Recommended label for IAR */}
              {card.highlight && (
                <span className="absolute top-3 right-4 text-[10px] font-bold tracking-wider uppercase text-white bg-stax-teal px-2 py-0.5 rounded">
                  RECOMMENDED
                </span>
              )}

              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${card.borderColor}25` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.borderColor }} />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="text-base font-bold text-white leading-tight">{card.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>

                  {/* Badge */}
                  <span
                    className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold text-white mt-1"
                    style={{ backgroundColor: card.badgeBg }}
                  >
                    {card.badge}
                  </span>

                  {/* Callout for IAR */}
                  {card.callout && (
                    <span className="text-xs font-semibold text-stax-pink mt-1">
                      {card.callout}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
