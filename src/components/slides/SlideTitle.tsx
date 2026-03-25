import { motion } from 'framer-motion';

const words = ['Unlock', 'More', 'Sales', 'with', 'Smarter', 'Customer', 'Finance'];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const wordItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } }
};

export default function SlideTitle() {
  return (
    <div className="slide-centered gradient-bg-warm relative">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(216,132,182,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-[16.67%] w-48 h-48 rounded-full bg-stax-pink/10 blur-2xl" />
      <div className="absolute top-1/2 right-[16.67%] w-56 h-56 rounded-full bg-stax-blue/[0.08] blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-10 max-w-5xl">
        {/* Partnership logo lockup */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' as const }}
        >
          <img
            src="/images/logos/stax-logo-white.png"
            alt="Stax"
            className="h-12 w-auto object-contain"
          />
          <span className="text-white/50 text-3xl font-extralight select-none">&times;</span>
          <img
            src="/images/logos/ggf-logo-white.svg"
            alt="GGF"
            className="h-14 w-auto object-contain"
          />
        </motion.div>

        {/* Main Title - word-by-word stagger */}
        <motion.h1
          className="text-7xl font-bold text-white leading-[1.1] flex flex-wrap justify-center gap-x-5 text-shadow-soft"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              className="inline-block"
              style={{
                fontWeight: (word === 'More' || word === 'Smarter') ? 800 : 700,
                letterSpacing: (word === 'More' || word === 'Smarter') ? '-0.02em' : undefined,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Accent divider */}
        <motion.div
          className="w-24 h-px bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' as const }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-2xl text-white/80 font-light tracking-wide text-shadow-soft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3, ease: 'easeOut' as const }}
        >
          Powered by <span className="font-semibold text-white">Shermin Finance</span>
        </motion.p>

        {/* Presenter info */}
        <motion.div
          className="flex flex-col items-center gap-1 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' as const }}
        >
          <span className="text-white text-xl font-semibold tracking-wide text-shadow-soft">
            Barney Goodman
          </span>
          <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
            Change &amp; Technology Director
          </span>
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-white/50 text-base tracking-[0.15em] uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' as const }}
        >
          16th April 2025
        </motion.p>
      </div>
    </div>
  );
}
