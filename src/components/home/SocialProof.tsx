import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const clients = [
  {
    name: 'Neked Sütöm',
    category: 'Lángosozó, Baja',
    result: 'Online megrendelési lehetőség + helyi közönség elérése Facebook hirdetéssel.',
    url: 'nekedsutom.hu',
    href: 'https://nekedsutom.hu',
  },
  {
    name: 'Estur Épker Kft.',
    category: 'Generálkivitelező, Baja',
    result: 'Professzionális megjelenés, ajánlatkérési űrlap, Google-ban is megtalálható.',
    url: 'estur.hu',
    href: 'https://estur.hu',
  },
  {
    name: 'Hellinger Kft.',
    category: 'Építőipar, Dél-Dunántúl',
    result: '25 éves tapasztalat — most már online is megtalálják az ügyfelek.',
    url: 'hellingerkft.hu',
    href: 'https://hellingerkft.hu',
  },
]

export function SocialProof() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Magyar vállalkozások, akik több ügyfelet szereznek velünk."
          description="Ezeknek a cégeknek készítettük el a weboldalát — hogy online is megtalálják őket."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col"
            >
              <div className="mb-4">
                <p className="font-display font-bold text-dark text-lg">{client.name}</p>
                <p className="text-xs text-muted uppercase tracking-widest mt-0.5">{client.category}</p>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-grow mb-5">
                "{client.result}"
              </p>

              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cyan font-semibold hover:underline"
              >
                {client.url}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
