import { motion } from 'framer-motion';

interface DonutChartProps {
  percentage: number;
  colour: string;
  size?: number;
  strokeWidth?: number;
  label: string;
  sublabel?: string;
}

export default function DonutChart({
  percentage,
  colour,
  size = 120,
  strokeWidth = 10,
  label,
  sublabel,
}: DonutChartProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background ring */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(128,128,128,0.2)"
            strokeWidth={strokeWidth}
          />
          {/* Foreground arc */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={colour}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (circumference * percentage) / 100 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>
        {/* Percentage number centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <span className="text-sm text-white/80 text-center leading-tight max-w-[160px]">{label}</span>
      {sublabel && (
        <span className="text-xs text-white/50 text-center">{sublabel}</span>
      )}
    </div>
  );
}
