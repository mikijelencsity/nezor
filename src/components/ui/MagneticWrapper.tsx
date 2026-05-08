'use client'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticWrapperProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticWrapper({ children, strength = 0.35, className }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * strength)
    y.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovering(false)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
