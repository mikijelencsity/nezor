import type { Metadata } from 'next'
import { ReferenciakClient } from './ReferenciakClient'

export const metadata: Metadata = {
  title: 'Referenciák — Ügyfelek akikkel dolgoztunk',
  description: 'NEZOR referenciák — weboldalak és webshopok amiket elkészítettünk. Nézd meg a munkáinkat!',
  openGraph: {
    title: 'Referenciák — NEZOR',
    description: 'Weboldalak és webshopok amiket elkészítettünk.',
    url: 'https://nezor.hu/referenciak',
  },
}

export default function ReferenciakPage() {
  return <ReferenciakClient />
}
