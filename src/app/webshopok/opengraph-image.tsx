import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Webshop fejlesztés — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Webshop fejlesztés', 'Online bolt fizetési rendszerrel, rendeléskezelővel')
}
