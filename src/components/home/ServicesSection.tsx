import Link from 'next/link'
import { Monitor, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

const icons = { Monitor, ShoppingCart, TrendingUp }

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Szolgáltatások"
          title="Minden amire szükséged van az online sikerhez"
          description="Komplex digitális megoldásokat kínálunk kis- és középvállalkozásoknak."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div key={service.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow group">
                <div className="w-12 h-12 bg-cyan-light rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="flex items-center gap-1 text-cyan font-semibold text-sm group-hover:gap-2 transition-all">
                  Részletek
                  <span className="sr-only"> — {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
