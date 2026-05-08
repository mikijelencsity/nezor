'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface TimelineStep {
  number: string
  title: string
  description: string
}

export function AnimatedTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Background vertical track line */}
      <div
        className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100 hidden md:block"
        aria-hidden="true"
      />

      <div className="space-y-6 md:space-y-10">
        {steps.map((step, i) => (
          <TimelineItem
            key={step.number}
            step={step}
            index={i}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  step,
  index,
  isLast,
}: {
  step: TimelineStep
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 28, delay: index * 0.15 }}
      className="flex gap-6 md:gap-8"
    >
      {/* Step node + connector */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 380, damping: 22, delay: index * 0.15 + 0.1 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-blue-400 flex items-center justify-center shadow-lg z-10 relative"
        >
          <span className="text-white font-display font-bold text-sm">{step.number}</span>
        </motion.div>

        {/* Animated connecting line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, damping: 25, delay: index * 0.15 + 0.4 }}
            style={{ originY: 0 }}
            className="hidden md:block w-0.5 flex-1 min-h-[40px] bg-gradient-to-b from-cyan/60 to-transparent mt-1"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Text content */}
      <div className="pt-1.5 pb-6">
        <h3 className="font-display font-bold text-dark text-xl mb-2">{step.title}</h3>
        <p className="text-muted leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}
