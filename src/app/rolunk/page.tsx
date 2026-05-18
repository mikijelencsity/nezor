import type { Metadata } from 'next'
import { ArrowRight, CheckCircle, Zap, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Rólunk — NEZOR csapat',
  description: 'Ismerj meg minket! A NEZOR két alapítója: Jelencsity Miklós és Müller Dániel. Professzionális weboldal és webshop készítés Bács-Kiskun megyében.',
  openGraph: {
    title: 'Rólunk — NEZOR',
    description: 'Ismerj meg minket! Kik állnak a NEZOR mögött.',
    url: 'https://nezor.hu/rolunk',
  },
}

const values = [
  {
    icon: Star,
    title: 'Alapos kivitelezés',
    desc: 'Minden projekthez ugyanolyan odafigyeléssel állunk hozzá — legyen szó egy egyszerű bemutatkozó oldalról vagy összetett webshopról. Nálunk nincs "elég jó", csak kész van.',
    color: 'from-cyan/20 to-blue-400/20',
    iconColor: 'text-cyan',
  },
  {
    icon: Zap,
    title: 'Kiemelkedő ár-érték arány',
    desc: 'Áraink bőven a piaci átlag alatt vannak — anélkül, hogy a minőségen spórolnánk. Azt hisszük, hogy egy profi weboldal nem csak a nagyvállalatoknak elérhető.',
    color: 'from-yellow-400/20 to-amber-400/20',
    iconColor: 'text-yellow-500',
  },
  {
    icon: Zap,
    title: 'Gyors átfutás',
    desc: 'Nem váratsz hónapokat. Alap weboldalak 1–2 héten belül elkészülnek, és minden határidőt írásban vállalunk.',
    color: 'from-green-400/20 to-emerald-400/20',
    iconColor: 'text-green-500',
  },
]

const team = [
  {
    name: 'Jelencsity Miklós',
    role: 'Társalapító',
    initials: 'JM',
    gradient: 'from-cyan to-blue-500',
  },
  {
    name: 'Müller Dániel',
    role: 'Társalapító',
    initials: 'MD',
    gradient: 'from-violet-500 to-purple-600',
  },
]

export default function RolunkPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark py-20 mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 text-white text-sm font-display font-semibold px-4 py-1.5 rounded-full mb-6">
            <Users className="w-3.5 h-3.5 text-cyan" />
            Kik vagyunk
          </div>
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl font-display font-bold text-white mb-5">
            A csapat <span className="text-gradient">mögöttetek</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-gray-400 text-lg max-w-2xl mx-auto">
            Ketten vagyunk, de mindketten teljes szívvel tesszük amit csinálunk. Bács-Kiskun megye digitális jelenlétének erősítése a célunk.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Csapat */}
        <section className="mb-24">
          <SectionHeading label="Csapat" title="Akikkel dolgozol" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 flex flex-col items-center text-center hover:shadow-card-hover transition-shadow"
              >
                {/* Avatar placeholder */}
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-white font-display font-bold text-2xl">{member.initials}</span>
                </div>
                <h3 className="font-display font-bold text-dark text-lg mb-1">{member.name}</h3>
                <span className="text-sm text-muted bg-secondary px-3 py-1 rounded-full">{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Értékek */}
        <section className="mb-24">
          <SectionHeading label="Értékeink" title="Miért válassz minket?" description="Három dolog, ami megkülönböztet minket másoktól." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover p-6 transition-shadow">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${v.iconColor}`} />
                  </div>
                  <h3 className="font-display font-bold text-dark mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-cyan/10 to-blue-400/10 border border-cyan/20 p-10 md:p-14 text-center">
          <h3 className="text-2xl font-display font-bold text-dark mb-3">Dolgozzunk együtt</h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">Kérd ingyenes ajánlatodat — megmutatjuk mit tudunk érted csinálni.</p>
          <Button href="/kapcsolat" size="lg">
            Ajánlatot kérek <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

      </div>
    </div>
  )
}
