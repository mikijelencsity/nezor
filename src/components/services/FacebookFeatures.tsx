'use client'
import { Target, BarChart2, RefreshCw, FileText, Users, TrendingUp } from 'lucide-react'
import { FeatureGrid } from './FeatureGrid'

const features = [
  { icon: Target,     title: 'Precíz célzás',            description: 'Életkor, helyszín, érdeklődés és viselkedés alapján érjük el a célközönségedet.' },
  { icon: BarChart2,  title: 'A/B tesztelés',             description: 'Párhuzamos hirdetésváltozatok — mindig a legjobb teljesítő fut.' },
  { icon: RefreshCw,  title: 'Napi optimalizálás',        description: 'Minden nap figyelemmel kísérjük és finomítjuk a kampányokat.' },
  { icon: FileText,   title: 'Havi riport',               description: 'Részletes havi jelentés: elért emberek, kattintások, konverziók, ROI.' },
  { icon: Users,      title: 'Remarketing',               description: 'Visszahozza azokat, akik már jártak az oldalon de nem vásároltak.' },
  { icon: TrendingUp, title: 'Folyamatos skálázás',       description: 'Ahogy nőnek az eredmények, okosan növeljük a büdzsét is.' },
]

export function FacebookFeatures() {
  return <FeatureGrid features={features} />
}
