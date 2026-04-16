import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SlideTitle from './components/slides/SlideTitle'
import SlideWhoWeAre from './components/slides/SlideWhoWeAre'
import SlideChallenge from './components/slides/SlideChallenge'
import SlideSolution from './components/slides/SlideSolution'
import SlideStax from './components/slides/SlideStax'
import SlideWalkthrough from './components/slides/SlideWalkthrough'
import SlideFinanceOptions from './components/slides/SlideFinanceOptions'
import SlideFCARegulation from './components/slides/SlideFCARegulation'
import SlideGGFBenefits from './components/slides/SlideGGFBenefits'
import SlidePartnership from './components/slides/SlidePartnership'
import SlideCommercialIntro from './components/slides/SlideCommercialIntro'
import SlideCommercialProducts from './components/slides/SlideCommercialProducts'
import SlideCommercialBroker from './components/slides/SlideCommercialBroker'
import SlideNextSteps from './components/slides/SlideNextSteps'

const slides = [
  { component: SlideTitle, label: 'Welcome' },
  { component: SlideWhoWeAre, label: 'Who We Are' },
  { component: SlideChallenge, label: 'The Challenge' },
  { component: SlideSolution, label: 'Our Solution' },
  { component: SlideStax, label: 'Introducing Stax' },
  { component: SlideWalkthrough, label: 'Customer Journey' },
  { component: SlideFinanceOptions, label: 'Finance Options' },
  { component: SlideFCARegulation, label: 'FCA Regulation' },
  { component: SlideGGFBenefits, label: 'GGF Benefits' },
  { component: SlidePartnership, label: 'Partnership' },
  { component: SlideCommercialIntro, label: 'Commercial Finance' },
  { component: SlideCommercialProducts, label: 'Finance Solutions' },
  { component: SlideCommercialBroker, label: 'Why Stax Commercial?' },
  { component: SlideNextSteps, label: 'Next Steps & Q&A' },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.5,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    const n = parseInt(hash, 10)
    return n >= 1 && n <= slides.length ? n - 1 : 0
  })
  const [direction, setDirection] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-stax-teal to-stax-blue"
          initial={false}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-6 z-50 flex items-center gap-3">
        <span className="text-sm font-medium text-stax-gray">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide
                ? 'bg-stax-teal scale-125'
                : 'bg-gray-300 hover:bg-stax-blue/50'
            }`}
            aria-label={`Go to slide ${i + 1}: ${slides[i].label}`}
          />
        ))}
      </div>

      {/* Slide content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      {currentSlide > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
