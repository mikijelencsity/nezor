import { Zap, MapPin, Wallet, Headphones } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reasons = [
  {
    icon: Zap,
    title: 'Gyors átfutás',
    description: 'Alap weboldalak 1-2 héten belül elkészülnek. Nem váratsz hónapokat.',
  },
  {
    icon: MapPin,
    title: 'Helyi ismeret',
    description: 'Ismerjük a Bács-Kiskun megyei piacot és az itteni ügyfelek elvárásait.',
  },
  {
    icon: Wallet,
    title: 'Rugalmas árazás',
    description: 'Egyszeri díj vagy havidíjas csomag — te választod, mi alkalmazkodunk.',
  },
  {
    icon: Headphones,
    title: 'Folyamatos support',
    description: '24 órán belüli válasz, segítünk minden kérdésedben és módosításban.',
  },
]

export function WhyNezor() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Miért a NEZOR?"
          title="Amivel mások nem tudnak versenyezni"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-10 h-10 bg-cyan-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-display font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-sm text-muted">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
