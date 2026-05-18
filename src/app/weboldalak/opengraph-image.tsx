import { ogSize, generateOG } from '@/lib/og'
export const runtime = 'edge'
export const alt = 'Weboldal készítés — NEZOR'
export const size = ogSize
export const contentType = 'image/png'
export default function OG() {
  return generateOG('Weboldal készítés', 'Gyors, mobilbarát, SEO-optimalizált weboldalak')
}
