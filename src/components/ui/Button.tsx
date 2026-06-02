import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2'

  const variants = {
    primary: 'bg-lime text-dark hover:bg-lime/90 shadow-md hover:shadow-card-hover font-black',
    outline: 'border-2 border-cyan text-cyan hover:bg-cyan hover:text-white',
    ghost: 'text-cyan hover:bg-cyan-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true" role="link">
          {children}
        </span>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
