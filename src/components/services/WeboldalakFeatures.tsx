'use client'
import { Smartphone, Zap, Search, Shield, BarChart2, Palette } from 'lucide-react'
import { FeatureGrid } from './FeatureGrid'

const features = [
  { icon: Smartphone,  title: 'Mobilra optimalizált',      description: 'Tökéletesen néz ki telefonon, tableten és asztali gépen egyaránt.' },
  { icon: Zap,         title: 'Villámgyors betöltés',       description: 'Optimalizált kód és képek — az oldal 1 másodpercen belül tölt.' },
  { icon: Search,      title: 'SEO-barát felépítés',        description: 'Google-ban megtalálható struktúra, meta adatok, strukturált adatok.' },
  { icon: Shield,      title: 'SSL tanúsítvány',            description: 'Biztonságos HTTPS kapcsolat, ami növeli a látogatók bizalmát.' },
  { icon: BarChart2,   title: 'Google Analytics',           description: 'Látod ki, honnan és mikor látogatja az oldalad.' },
  { icon: Palette,     title: 'Egyedi design',              description: 'Semmi sablon — kizárólag a te vállalkozásodra szabott megjelenés.' },
]

export function WeboldalakFeatures() {
  return <FeatureGrid features={features} />
}
