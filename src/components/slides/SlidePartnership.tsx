import { motion } from 'framer-motion';
import { ClipboardList, Settings, GraduationCap, Rocket, User, Headphones, BarChart3 } from 'lucide-react';
import SlideHeader from '../SlideHeader';

const timelineStepVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 }
  })
};

const supportContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const supportItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const timelineSteps = [
  { icon: ClipboardList, label: 'Register', desc: 'Day 1: Complete your application', color: 'bg-stax-teal', textColor: 'text-stax-teal' },
  { icon: Settings, label: 'Onboard', desc: 'Days 2-5: Compliance checks & setup', color: 'bg-stax-blue', textColor: 'text-white/80' },
  { icon: GraduationCap, label: 'Train', desc: 'Day 6: Platform training session', color: 'bg-stax-pink', textColor: 'text-stax-pink' },
  { icon: Rocket, label: 'Go Live', desc: 'Day 7: Start offering finance', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
];

export default function SlidePartnership() {
  return (
    <div className="slide gradient-bg justify-center">
      <SlideHeader variant="dark" />

      <div className="flex flex-col items-center text-center max-w-5xl w-full gap-7">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="accent-line" />
          <span className="text-stax-pink text-xs font-bold tracking-[0.2em] uppercase">
            Working with Shermin
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.3 }}
        >
          Simple Onboarding. Dedicated Support.
        </motion.h2>

        {/* Timeline */}
        <div className="w-full relative flex items-start justify-between mt-2 px-6">
          {/* Animated gradient line */}
          <motion.div
            className="absolute top-6 left-[12%] right-[12%] h-0.5 rounded-full origin-left"
            style={{ background: 'linear-gradient(90deg, #477085, #2ab7e3, #d884b6, #22c55e)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.05, duration: 0.3, ease: 'easeOut' as const }}
          />

          {timelineSteps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 relative z-10 flex-1"
              custom={i}
              variants={timelineStepVariant}
              initial="hidden"
              animate="visible"
            >
              {/* Numbered circle with icon */}
              <div
                className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}
                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}
              >
                <step.icon className="w-5 h-5 text-white" />
              </div>
              <span className={`text-sm font-bold ${step.textColor}`}>{step.label}</span>
              <span className="text-xs text-white/70 max-w-[140px] leading-snug">{step.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Support cards */}
        <motion.div
          className="grid grid-cols-3 gap-4 w-full mt-3"
          variants={supportContainer}
          initial="hidden"
          animate="visible"
        >
          {supportCards.map((card, i) => (
            <motion.div
              key={i}
              variants={supportItem}
              className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              <p className="text-xs text-white/70 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const supportCards = [
  { icon: User, title: 'Dedicated BDM', desc: 'Your own Business Development Manager for ongoing account support' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Help desk available whenever you need assistance' },
  { icon: BarChart3, title: 'Analytics & Insights', desc: 'Conversion data, approval rates, and pipeline reporting' },
];
