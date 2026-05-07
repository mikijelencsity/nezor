import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
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
    primary: 'bg-cyan text-white hover:bg-cyan-dark shadow-md hover:shadow-card-hover',
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
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
