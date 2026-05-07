import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MessengerWidget } from '@/components/layout/MessengerWidget'
import { localBusinessSchema } from '@/lib/structured-data'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések',
    template: '%s | NEZOR',
  },
  description: 'Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés Bács-Kiskun megyében és egész Magyarországon. Gyors, modern, SEO-optimalizált megoldások.',
  keywords: ['weboldal készítés', 'webshop fejlesztés', 'Facebook hirdetés', 'Bács-Kiskun', 'digitális ügynökség'],
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://nezor.hu',
    siteName: 'NEZOR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ScrollProgressBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MessengerWidget />
      </body>
    </html>
  )
}
