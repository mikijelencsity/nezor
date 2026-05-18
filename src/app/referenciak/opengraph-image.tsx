import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Referenciák — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Referenciák', 'Weboldalak és webshopok amiket elkészítettünk')
}
