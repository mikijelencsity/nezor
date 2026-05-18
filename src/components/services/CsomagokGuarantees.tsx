'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, RefreshCw, Clock, HeartHandshake, Zap, Lock } from 'lucide-react'

const guarantees = [
  {
    icon: RefreshCw,
    title: 'Ingyenes újratervezés',
    desc: 'Ha nem tetszik az első designterv, ingyen újracsináljuk. Addig nem adjuk fel, amíg nem vagy 100%-ban elégedett.',
    badge: 'Design garancia',
    color: 'from-cyan/20 to-blue-400/20',
    iconColor: 'text-cyan',
    badgeColor: 'bg-cyan-light text-cyan',
  },
  {
    icon: Clock,
    title: '1–2 hetes átfutás',
    desc: 'Alap weboldalak 1-2 héten belül elkészülnek. Írásban vállaljuk a határidőt — késés esetén kedvezmény.',
    badge: 'Határidő garancia',
    color: 'from-purple-400/20 to-violet-400/20',
    iconColor: 'text-purple-400',
    badgeColor: 'bg-purple-50 text-purple-600',
  },
  {
    icon: HeartHandshake,
    title: '30 napos support',
    desc: 'Az átadás után 30 napig ingyenes support — bármilyen javítás, kérdés, módosítás. 24 órán belül válaszolunk.',
    badge: 'Support garancia',
    color: 'from-green-400/20 to-emerald-400/20',
    iconColor: 'text-green-400',
    badgeColor: 'bg-green-50 text-green-600',
  },
  {
    icon: Zap,
    title: 'Gyors betöltés',
    desc: 'Minden általunk készített oldal 90+ PageSpeed pontszámot kap. Ha nem, ingyen optimalizáljuk.',
    badge: 'Sebesség garancia',
    color: 'from-yellow-400/20 to-amber-400/20',
    iconColor: 'text-yellow-400',
    badgeColor: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Shield,
    title: 'Mobilbarát megjelenés',
    desc: 'Az oldal minden eszközön tökéletesen néz ki — telefon, tablet, desktop. Tesztelve a leadás előtt.',
    badge: 'Mobil garancia',
    color: 'from-blue-400/20 to-sky-400/20',
    iconColor: 'text-blue-400',
    badgeColor: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Lock,
    title: 'Tulajdonjog',
    desc: 'Az oldal 100%-ban a tiéd. Minden forráskód, design, tartalom az átadás után a te tulajdonod.',
    badge: 'Tulajdon garancia',
    color: 'from-rose-400/20 to-pink-400/20',
    iconColor: 'text-rose-400',
    badgeColor: 'bg-rose-50 text-rose-600',
  },
]

export function CsomagokGuarantees() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {guarantees.map((g, i) => {
        const Icon = g.icon
        return (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.07 }}
            className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            {/* Icon */}
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center mb-4`}>
              <Icon className={`w-5 h-5 ${g.iconColor}`} />
            </div>

            {/* Badge */}
            <span className={`inline-block text-[10px] font-display font-bold px-2 py-0.5 rounded-full mb-2 ${g.badgeColor}`}>
              {g.badge}
            </span>

            <h3 className="font-display font-bold text-dark text-sm mb-2">{g.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{g.desc}</p>

            {/* Subtle bottom accent */}
            <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r ${g.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        )
      })}
    </div>
  )
}
