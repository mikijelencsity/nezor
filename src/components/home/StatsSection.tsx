import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const stats = [
  { target: 9, suffix: '+', label: 'Elégedett ügyfél' },
  { target: 15, suffix: '+', label: 'Elkészült projekt' },
  { target: 100, suffix: '%', label: 'Elégedettségi arány' },
  { target: 24, suffix: 'h', label: 'Átlagos válaszidő' },
]

export function StatsSection() {
  return (
    <section className="py-12 bg-dark" aria-label="Statisztikák">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
