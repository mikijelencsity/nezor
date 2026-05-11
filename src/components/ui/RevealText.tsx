'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'span' | 'p'
}

export function RevealText({ text, className, delay = 0.1, tag = 'span' }: RevealTextProps) {
  const words = text.split(' ')
  const Tag = tag

  return (
    <Tag className={cn('inline', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 26,
            delay: delay + i * 0.07,
          }}
        >
          {word}{i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}
