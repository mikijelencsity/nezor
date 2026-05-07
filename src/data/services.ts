import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'weboldalak',
    title: 'Weboldal készítés',
    description: 'Modern, gyors, mobilra optimalizált weboldalak, amelyek ügyfeleket hoznak.',
    href: '/weboldalak',
    icon: 'Monitor',
    features: ['Mobilra optimalizált', 'SEO beállítások', 'Gyors betöltés', 'SSL tanúsítvány'],
  },
  {
    id: 'webshopok',
    title: 'Webshop fejlesztés',
    description: 'Teljes e-kereskedelmi megoldás fizetési rendszerrel és rendeléskezelővel.',
    href: '/webshopok',
    icon: 'ShoppingCart',
    features: ['Fizetési rendszer', 'Rendeléskezelő', 'Raktárkezelés', 'Mobilra optimalizált'],
  },
  {
    id: 'facebook-hirdetesek',
    title: 'Facebook hirdetések',
    description: 'Célzott Meta kampányok, amelyek valódi ügyfeleket hoznak a vállalkozásodnak.',
    href: '/facebook-hirdetesek',
    icon: 'TrendingUp',
    features: ['Kampány tervezés', 'Célzás optimalizálás', 'A/B tesztelés', 'Havi riport'],
  },
]
