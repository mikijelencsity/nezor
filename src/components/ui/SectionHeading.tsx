import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ label, title, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{title}</h2>
      {description && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}
