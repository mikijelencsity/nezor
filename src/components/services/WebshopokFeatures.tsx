'use client'
import { CreditCard, Package, BarChart2, Truck, Tag, Shield } from 'lucide-react'
import { FeatureGrid } from './FeatureGrid'

const features = [
  { icon: CreditCard, title: 'Fizetési rendszer',      description: 'SimplePay, Barion, PayPal, bankkártya és utánvét integráció.' },
  { icon: Package,    title: 'Rendeléskezelő',          description: 'Áttekinthető admin felület, automatikus rendelési értesítők.' },
  { icon: BarChart2,  title: 'Raktárkezelés',           description: 'Automatikus készletkövetés és értesítések alacsony készletnél.' },
  { icon: Truck,      title: 'Szállítás integráció',    description: 'GLS, DPD, Magyar Posta szállítási lehetőségek beépítve.' },
  { icon: Tag,        title: 'Kupon & akciók',          description: 'Könnyen kezelhető kedvezmények, akciós időszakok.' },
  { icon: Shield,     title: 'GDPR kompatibilis',       description: 'Cookie kezelés, adatvédelem, ÁSZF — mind beépítve.' },
]

export function WebshopokFeatures() {
  return <FeatureGrid features={features} />
}
