import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Csomagok és árak — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Csomagok és árak', 'Átlátható árazás, rugalmas konstrukciók')
}
