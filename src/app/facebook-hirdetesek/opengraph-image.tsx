import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Facebook hirdetés kezelés — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Facebook hirdetések', 'Célzott Meta kampányok valódi ügyfelekért')
}
