interface SlideHeaderProps {
  variant: 'light' | 'dark'
  showGGF?: boolean
}

export default function SlideHeader({ variant, showGGF = false }: SlideHeaderProps) {
  const logoSrc = variant === 'dark'
    ? '/images/logos/stax-logo-white.png'
    : '/images/logos/stax-logo.png'

  return (
    <div className="absolute top-5 left-8 right-8 z-20 flex items-center justify-between">
      <img
        src={logoSrc}
        alt="Stax"
        className="h-9 w-auto object-contain"
      />
      {showGGF && (
        <img
          src="/images/logos/ggf-logo.svg"
          alt="GGF"
          className="h-10 w-auto object-contain"
        />
      )}
    </div>
  )
}
