import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Kapcsolat — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Kapcsolat', 'Ingyenes konzultáció — kötelezettség nélkül')
}
