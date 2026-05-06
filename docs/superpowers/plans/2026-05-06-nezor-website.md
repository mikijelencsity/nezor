# NEZOR Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete NEZOR digitális ügynökség website — 8 oldal, MDX blog, SEO, JSON-LD, Messenger widget, kapcsolatfelvételi form Resend emailküldéssel.

**Architecture:** Next.js 14 App Router, statikus MDX blog gray-matter-rel, Resend API a form emailküldéshez, next-sitemap a sitemap generáláshoz. Minden oldal saját server-side metadata-val és JSON-LD strukturált adatokkal rendelkezik.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React, gray-matter, next-mdx-remote, Resend, next-sitemap

---

## File Structure

```
src/
  app/
    layout.tsx                  # Root layout: Navbar + Footer + MessengerWidget
    page.tsx                    # Főoldal
    globals.css
    weboldalak/page.tsx
    webshopok/page.tsx
    facebook-hirdetesek/page.tsx
    csomagok/page.tsx
    referenciak/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
    kapcsolat/page.tsx
    api/contact/route.ts        # Email küldés Resend-del
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      MessengerWidget.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      FAQAccordion.tsx
    home/
      Hero.tsx
      ServicesSection.tsx
      WhyNezor.tsx
      ReferencesPreview.tsx
      PackagesTeaser.tsx
      FAQSection.tsx
      BlogPreview.tsx
    services/
      ServiceHero.tsx
      ServiceProcess.tsx
      ServiceFAQ.tsx
    packages/
      PackageCard.tsx
      PricingToggle.tsx
    references/
      ReferenceCard.tsx
    blog/
      BlogCard.tsx
    contact/
      ContactForm.tsx
  lib/
    blog.ts                     # MDX frontmatter olvasás
    structured-data.ts          # JSON-LD generátorok
  data/
    references.ts
    packages.ts
    faq.ts
    services.ts
  types/index.ts
  content/blog/                 # .mdx fájlok
public/
  logo.png                      # NEZOR logo (user tölti fel)
  og-image.png                  # OG kép (user tölti fel)
next.config.ts
tailwind.config.ts
next-sitemap.config.js
.env.local                      # RESEND_API_KEY, NEXT_PUBLIC_FB_PAGE_ID
```

---

## Task 1: Projekt inicializálás + függőségek

**Files:**
- Create: `package.json` (npx generálja)
- Modify: `next.config.ts`
- Create: `.env.local`
- Create: `.env.example`

- [ ] **Step 1: Next.js projekt létrehozása a meglévő könyvtárban**

```bash
cd c:\Users\Miki\Desktop\nezor
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Amikor kérdez: válaszd az alapértelmezett értékeket. A `--no-git` fontos mert már van git repo.

- [ ] **Step 2: Függőségek telepítése**

```bash
npm install framer-motion lucide-react gray-matter next-mdx-remote resend react-hook-form @hookform/resolvers zod
npm install -D next-sitemap @types/gray-matter
```

- [ ] **Step 3: `.env.local` létrehozása**

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_FB_PAGE_ID=your_facebook_page_id
NEXT_PUBLIC_SITE_URL=https://nezor.hu
```

- [ ] **Step 4: `.env.example` létrehozása**

```env
RESEND_API_KEY=
NEXT_PUBLIC_FB_PAGE_ID=
NEXT_PUBLIC_SITE_URL=https://nezor.hu
```

- [ ] **Step 5: `next.config.ts` módosítása**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
}

export default nextConfig
```

- [ ] **Step 6: Fejlesztői szerver indítás — ellenőrzés**

```bash
npm run dev
```

Elvárt: böngészőben `http://localhost:3000` megnyílik, Next.js alapoldal látható.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: initialize Next.js project with dependencies"
```

---

## Task 2: Tailwind konfiguráció + globális stílusok

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: `tailwind.config.ts` felülírása**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00CFFF',
          dark: '#00A8D4',
          light: '#E0F9FF',
        },
        dark: '#1A1A2E',
        muted: '#6B7280',
        secondary: '#F5F7FA',
        accent: '#0D0D0D',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,207,255,0.08)',
        'card-hover': '0 4px 24px 0 rgba(0,207,255,0.18)',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: `src/app/globals.css` felülírása**

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-body text-dark bg-white;
  }
  h1, h2, h3, h4 {
    @apply font-display;
  }
}

@layer utilities {
  .gradient-hero {
    background: linear-gradient(135deg, #e0f9ff 0%, #ffffff 60%);
  }
  .text-gradient {
    background: linear-gradient(90deg, #00CFFF, #0090FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

- [ ] **Step 3: Ellenőrzés**

```bash
npm run dev
```

Elvárt: az oldal betölt, nincs CSS hiba a konzolon.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts src/app/globals.css
git commit -m "feat: configure Tailwind theme with NEZOR brand colors"
```

---

## Task 3: TypeScript típusok + adatfájlok

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/references.ts`
- Create: `src/data/packages.ts`
- Create: `src/data/faq.ts`
- Create: `src/data/services.ts`

- [ ] **Step 1: `src/types/index.ts` létrehozása**

```typescript
export interface Reference {
  id: string
  name: string
  description: string
  url: string
  category: 'weboldal' | 'webshop'
}

export interface Package {
  id: string
  name: string
  description: string
  features: string[]
  oneTimePrice?: string
  monthlyPrice?: string
  monthlyUpdates?: number
  highlighted?: boolean
  type: 'weboldal' | 'webshop'
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Service {
  id: string
  title: string
  description: string
  href: string
  icon: string
  features: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
  content?: string
}
```

- [ ] **Step 2: `src/data/references.ts` létrehozása**

```typescript
import { Reference } from '@/types'

export const references: Reference[] = [
  { id: '1', name: 'Neked Sütöm', description: 'Egyedi sütemény weboldal', url: '#', category: 'weboldal' },
  { id: '2', name: 'Hellinger Kft.', description: 'Céges bemutatkozó oldal', url: '#', category: 'weboldal' },
  { id: '3', name: 'Cruiser Shop', description: 'Online motoralkatrész webshop', url: '#', category: 'webshop' },
  { id: '4', name: 'InShape-Diet', description: 'Diéta és életmód weboldal', url: '#', category: 'weboldal' },
  { id: '5', name: 'ZT Épületgépészet', description: 'Épületgépészeti szolgáltató oldal', url: '#', category: 'weboldal' },
  { id: '6', name: 'Estur Kft.', description: 'Céges bemutatkozó oldal', url: '#', category: 'weboldal' },
  { id: '7', name: 'Korona Gomba', description: 'Gomba termelő és értékesítő oldal', url: '#', category: 'weboldal' },
  { id: '8', name: 'DoverSolution', description: 'IT megoldások weboldal', url: '#', category: 'weboldal' },
  { id: '9', name: 'Kisállatkereskedés Baja', description: 'Kisállatkereskedés webshop', url: '#', category: 'webshop' },
]
```

**Megjegyzés:** Az `url: '#'` értékeket a tényleges URL-ekkel kell helyettesíteni.

- [ ] **Step 3: `src/data/packages.ts` létrehozása**

```typescript
import { Package } from '@/types'

export const websitePackages: Package[] = [
  {
    id: 'web-alap',
    name: 'Alap',
    description: 'Tökéletes kis vállalkozásoknak és önállóknak',
    features: [
      '1-5 aloldal',
      'Mobilra optimalizált',
      'SSL tanúsítvány',
      'Alapvető SEO beállítások',
      'Kapcsolatfelvételi form',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 2,
    type: 'weboldal',
  },
  {
    id: 'web-pro',
    name: 'Pro',
    description: 'Növekvő vállalkozásoknak, akik több ügyfélt szeretnének',
    features: [
      '6-15 aloldal',
      'Teljes SEO optimalizálás',
      'Google Analytics integráció',
      'Blog modul',
      'Gyors betöltési idő',
      'Egyedi design',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 5,
    highlighted: true,
    type: 'weboldal',
  },
  {
    id: 'web-premium',
    name: 'Prémium',
    description: 'Teljes digitális jelenlét, kompromisszumok nélkül',
    features: [
      'Korlátlan aloldal',
      'Teljes SEO + helyi SEO',
      'Facebook Pixel integráció',
      'Egyedi animációk',
      'Prioritásos support',
      'Havi riport',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 10,
    type: 'weboldal',
  },
]

export const webshopPackages: Package[] = [
  {
    id: 'shop-alap',
    name: 'Alap Shop',
    description: 'Kisebb termékskálához, belépő szintű webshop',
    features: [
      'Max 100 termék',
      'Fizetési rendszer integráció',
      'Mobilra optimalizált',
      'SSL tanúsítvány',
      'Rendeléskezelő',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 3,
    type: 'webshop',
  },
  {
    id: 'shop-pro',
    name: 'Pro Shop',
    description: 'Közepes méretű webshop teljes funkcionalitással',
    features: [
      'Korlátlan termék',
      'Több fizetési mód',
      'Automatikus számlázás',
      'Raktárkezelés',
      'Kupon és akciók',
      'SEO optimalizálás',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 6,
    highlighted: true,
    type: 'webshop',
  },
  {
    id: 'shop-premium',
    name: 'Prémium Shop',
    description: 'Nagyobb webshopoknak, egyedi igényekhez',
    features: [
      'Egyedi design és funkciók',
      'Több valuta és nyelv',
      'Hűségprogram',
      'Fejlett analitika',
      'API integráció',
      'Prioritásos support',
    ],
    oneTimePrice: 'Árat kérek',
    monthlyPrice: 'Árat kérek',
    monthlyUpdates: 10,
    type: 'webshop',
  },
]
```

- [ ] **Step 4: `src/data/faq.ts` létrehozása**

```typescript
import { FAQItem } from '@/types'

export const homeFAQ: FAQItem[] = [
  {
    question: 'Mennyibe kerül egy weboldal Magyarországon?',
    answer: 'A weboldal ára a komplexitástól függ. Kínálunk egyszeri díjas és havidíjas csomagokat is. Pontos árajánlatért vedd fel velünk a kapcsolatot — az első konzultáció ingyenes.',
  },
  {
    question: 'Mennyi idő alatt készül el a weboldal?',
    answer: 'Egy alap weboldal általában 1-2 héten belül elkészül. Komplexebb projektek (webshop, egyedi funkciók) 3-5 hetet vehetnek igénybe.',
  },
  {
    question: 'Mi a különbség az egyszeri díj és a havidíjas csomag között?',
    answer: 'Egyszeri díj esetén egyszer fizetsz, és az oldal a tiéd. Havidíjas csomagnál alacsonyabb az induló költség, és benne van egy meghatározott számú havi frissítés is.',
  },
  {
    question: 'Készítetek weboldalt Bács-Kiskun megyében?',
    answer: 'Igen! Bács-Kiskun megye az elsődleges piacunk — Kecskemét, Baja, Kalocsa, Kiskunhalas és a többi városban is dolgozunk. Természetesen egész Magyarországon elvállalunk munkát.',
  },
  {
    question: 'Mit tartalmaz a havi karbantartás?',
    answer: 'A havidíjas csomagba beletartozik a megállapodott számú frissítés (szöveg, kép, termék módosítás), a technikai karbantartás és az ügyfélszolgálat.',
  },
  {
    question: 'Segítetek a Facebook hirdetések beállításában is?',
    answer: 'Igen, Facebook hirdetések kezelése is a szolgáltatásaink között szerepel. Kampány tervezéstől a hirdetések optimalizálásáig mindent elvállalunk.',
  },
  {
    question: 'Kaphatok ingyenes konzultációt?',
    answer: 'Természetesen! Az első konzultáció teljesen ingyenes és kötelezettség nélküli. Vedd fel velünk a kapcsolatot emailben vagy Messengeren.',
  },
  {
    question: 'Webshophoz milyen fizetési rendszereket integrálnak?',
    answer: 'SimplePay, Barion, PayPal, bankkártyás fizetés és utánvét lehetőségét is be tudjuk építeni a webshopba.',
  },
]
```

- [ ] **Step 5: `src/data/services.ts` létrehozása**

```typescript
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
```

- [ ] **Step 6: Commit**

```bash
git add src/types src/data
git commit -m "feat: add TypeScript types and static data files"
```

---

## Task 4: UI alap komponensek

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/FAQAccordion.tsx`

- [ ] **Step 1: `src/components/ui/Button.tsx` létrehozása**

```typescript
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-display font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2'

  const variants = {
    primary: 'bg-cyan text-white hover:bg-cyan-dark shadow-md hover:shadow-card-hover',
    outline: 'border-2 border-cyan text-cyan hover:bg-cyan hover:text-white',
    ghost: 'text-cyan hover:bg-cyan-light',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: `src/lib/utils.ts` létrehozása (cn helper)**

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 3: `src/components/ui/SectionHeading.tsx` létrehozása**

```typescript
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ label, title, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">{title}</h2>
      {description && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 4: `src/components/ui/FAQAccordion.tsx` létrehozása**

```typescript
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQItem } from '@/types'
import { cn } from '@/lib/utils'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-display font-semibold text-dark hover:bg-secondary transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={cn('w-5 h-5 text-cyan flex-shrink-0 transition-transform', openIndex === index && 'rotate-180')}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-muted bg-white border-t border-gray-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui src/lib/utils.ts
git commit -m "feat: add shared UI components (Button, SectionHeading, FAQAccordion)"
```

---

## Task 5: Layout komponensek + Root Layout

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/MessengerWidget.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: `src/components/layout/Navbar.tsx` létrehozása**

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Weboldalak', href: '/weboldalak' },
  { label: 'Webshopok', href: '/webshopok' },
  { label: 'Facebook hirdetések', href: '/facebook-hirdetesek' },
  { label: 'Csomagok', href: '/csomagok' },
  { label: 'Referenciák', href: '/referenciak' },
  { label: 'Blog', href: '/blog' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-dark">
          <span className="text-gradient">NEZOR</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-display font-medium text-dark hover:text-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button href="/kapcsolat" size="sm">Ajánlatot kérek</Button>
        </div>

        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 font-display font-medium text-dark hover:text-cyan"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/kapcsolat" size="sm" className="w-full mt-2">Ajánlatot kérek</Button>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: `src/components/layout/Footer.tsx` létrehozása**

```typescript
import Link from 'next/link'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-gradient font-display font-bold text-2xl">NEZOR</span>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Professzionális weboldal és webshop készítés, Facebook hirdetések — Bács-Kiskun megyében és egész Magyarországon.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Szolgáltatások</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/weboldalak" className="hover:text-cyan transition-colors">Weboldal készítés</Link></li>
              <li><Link href="/webshopok" className="hover:text-cyan transition-colors">Webshop fejlesztés</Link></li>
              <li><Link href="/facebook-hirdetesek" className="hover:text-cyan transition-colors">Facebook hirdetések</Link></li>
              <li><Link href="/csomagok" className="hover:text-cyan transition-colors">Csomagok és árak</Link></li>
              <li><Link href="/referenciak" className="hover:text-cyan transition-colors">Referenciák</Link></li>
              <li><Link href="/blog" className="hover:text-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Kapcsolat</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan" />
                <a href="mailto:nezorweb@gmail.com" className="hover:text-cyan transition-colors">nezorweb@gmail.com</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} NEZOR. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: `src/components/layout/MessengerWidget.tsx` létrehozása**

```typescript
'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbAsyncInit: () => void
    FB: {
      init: (options: { xfbml: boolean; version: string }) => void
      CustomerChat: {
        show: (shouldShowDialog: boolean) => void
        hide: () => void
      }
    }
  }
}

export function MessengerWidget() {
  const pageId = process.env.NEXT_PUBLIC_FB_PAGE_ID

  useEffect(() => {
    if (!pageId) return

    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: 'v18.0' })
    }

    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/hu_HU/sdk/xfbml.customerchat.js'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [pageId])

  if (!pageId) return null

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        data-attribution="biz_inbox"
        data-page_id={pageId}
        data-theme_color="#00CFFF"
        data-logged_in_greeting="Szia! Miben segíthetünk?"
        data-logged_out_greeting="Szia! Miben segíthetünk?"
      />
    </>
  )
}
```

- [ ] **Step 4: `src/app/layout.tsx` felülírása**

```typescript
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MessengerWidget } from '@/components/layout/MessengerWidget'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MessengerWidget />
      </body>
    </html>
  )
}
```

- [ ] **Step 5: Ellenőrzés**

```bash
npm run dev
```

Elvárt: A navbar és footer látható az oldalon, nincs console error.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout src/app/layout.tsx
git commit -m "feat: add Navbar, Footer, MessengerWidget and root layout"
```

---

## Task 6: Főoldal szekciók — Hero + Services + WhyNezor

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/ServicesSection.tsx`
- Create: `src/components/home/WhyNezor.tsx`

- [ ] **Step 1: `src/components/home/Hero.tsx` létrehozása**

```typescript
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Bács-Kiskun megye #1 ügynöksége',
  'Ingyenes konzultáció',
  '24 órán belüli válasz',
]

export function Hero() {
  return (
    <section className="gradient-hero py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block bg-cyan-light text-cyan font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            Digitális ügynökség — Bács-Kiskun megye
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-tight mb-6">
            Professzionális weboldal.{' '}
            <span className="text-gradient">Több ügyfél.</span>{' '}
            Gyorsabb növekedés.
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed">
            Weboldalakat, webshopokat és Facebook hirdetéseket készítünk, amelyek valódi eredményeket hoznak — Bács-Kiskun megyétől az egész országig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button href="/csomagok" size="lg">
              Csomagok megtekintése <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/kapcsolat" variant="outline" size="lg">
              Ingyenes konzultáció
            </Button>
          </div>
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {highlights.map((text) => (
              <li key={text} className="flex items-center gap-2 text-sm text-muted">
                <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: `src/components/home/ServicesSection.tsx` létrehozása**

```typescript
import Link from 'next/link'
import { Monitor, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

const icons = { Monitor, ShoppingCart, TrendingUp }

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Szolgáltatások"
          title="Minden amire szükséged van az online sikerhez"
          description="Komplex digitális megoldásokat kínálunk kis- és középvállalkozásoknak."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons]
            return (
              <div key={service.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow group">
                <div className="w-12 h-12 bg-cyan-light rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-cyan rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} className="flex items-center gap-1 text-cyan font-semibold text-sm group-hover:gap-2 transition-all">
                  Részletek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: `src/components/home/WhyNezor.tsx` létrehozása**

```typescript
import { Zap, MapPin, Wallet, Headphones } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reasons = [
  {
    icon: Zap,
    title: 'Gyors átfutás',
    description: 'Alap weboldalak 1-2 héten belül elkészülnek. Nem váratsz hónapokat.',
  },
  {
    icon: MapPin,
    title: 'Helyi ismeret',
    description: 'Ismerjük a Bács-Kiskun megyei piacot és az itteni ügyfelek elvárásait.',
  },
  {
    icon: Wallet,
    title: 'Rugalmas árazás',
    description: 'Egyszeri díj vagy havidíjas csomag — te választod, mi alkalmazkodunk.',
  },
  {
    icon: Headphones,
    title: 'Folyamatos support',
    description: '24 órán belüli válasz, segítünk minden kérdésedben és módosításban.',
  },
]

export function WhyNezor() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Miért a NEZOR?"
          title="Amivel mások nem tudnak versenyezni"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="w-10 h-10 bg-cyan-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="font-display font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-sm text-muted">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Hero.tsx src/components/home/ServicesSection.tsx src/components/home/WhyNezor.tsx
git commit -m "feat: add Hero, ServicesSection, WhyNezor home sections"
```

---

## Task 7: Főoldal szekciók — References, PackagesTeaser, FAQ, BlogPreview

**Files:**
- Create: `src/components/home/ReferencesPreview.tsx`
- Create: `src/components/home/PackagesTeaser.tsx`
- Create: `src/components/home/FAQSection.tsx`
- Create: `src/components/home/BlogPreview.tsx`

- [ ] **Step 1: `src/components/home/ReferencesPreview.tsx` létrehozása**

```typescript
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { references } from '@/data/references'

export function ReferencesPreview() {
  const preview = references.slice(0, 6)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Elégedett ügyfeleink"
          description="Nézd meg kik bíztak meg minket eddig."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {preview.map((ref) => (
            <div key={ref.id} className="border border-gray-100 rounded-xl p-5 hover:border-cyan hover:shadow-card transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-dark">{ref.name}</h3>
                  <p className="text-sm text-muted mt-1">{ref.description}</p>
                  <span className="inline-block mt-2 text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">
                    {ref.category === 'webshop' ? 'Webshop' : 'Weboldal'}
                  </span>
                </div>
                {ref.url !== '#' && (
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/referenciak" variant="outline">
            Összes referencia <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: `src/components/home/PackagesTeaser.tsx` létrehozása**

```typescript
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function PackagesTeaser() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Csomagok"
          title="Átlátható árak, rugalmas feltételek"
          description="Válaszd az egyszeri díjas vagy havidíjas modellt — mindkettőt kínáljuk."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <h3 className="font-display font-bold text-dark text-lg mb-3">Egyszeri díj</h3>
            <p className="text-muted text-sm mb-4">Egyszer fizetsz, az oldal örökre a tied. Nincs havidíj, nincs kötöttség.</p>
            <ul className="space-y-2">
              {['Teljes tulajdonjog', 'Nincs havidíj', 'Egyszer és kész'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check className="w-4 h-4 text-cyan" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card border-2 border-cyan">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-dark text-lg">Havidíjas</h3>
              <span className="text-xs bg-cyan text-white px-2 py-0.5 rounded-full">Népszerű</span>
            </div>
            <p className="text-muted text-sm mb-4">Alacsonyabb induló költség + havi frissítések beleértve. Ideális, ha rendszeresen változik a tartalom.</p>
            <ul className="space-y-2">
              {['Alacsony belépési költség', 'Havi frissítések', 'Folyamatos support'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted">
                  <Check className="w-4 h-4 text-cyan" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button href="/csomagok" size="lg">Csomagok és árak megtekintése</Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: `src/components/home/FAQSection.tsx` létrehozása**

```typescript
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { homeFAQ } from '@/data/faq'

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GYIK"
          title="Gyakori kérdések"
          description="Nem találod a választ? Írj nekünk!"
        />
        <FAQAccordion items={homeFAQ} />
      </div>
    </section>
  )
}
```

- [ ] **Step 4: `src/components/home/BlogPreview.tsx` létrehozása**

```typescript
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { getLatestPosts } from '@/lib/blog'

export async function BlogPreview() {
  const posts = await getLatestPosts(3)

  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Tippek és tudástár"
          description="Hasznos cikkek weboldalakról, webshopokról és digitális marketingről."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group">
              <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">{post.category}</span>
              <h3 className="font-display font-bold text-dark mt-3 mb-2 group-hover:text-cyan transition-colors">{post.title}</h3>
              <p className="text-sm text-muted mb-4 line-clamp-2">{post.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button href="/blog" variant="outline">
            Összes cikk <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/home/
git commit -m "feat: add ReferencesPreview, PackagesTeaser, FAQSection, BlogPreview"
```

---

## Task 8: Blog rendszer (lib + tartalom + oldalak)

**Files:**
- Create: `src/lib/blog.ts`
- Create: `src/content/blog/weboldal-keszites-kecskemeten.mdx`
- Create: `src/content/blog/webshop-inditasa-magyarorszagon.mdx`
- Create: `src/content/blog/facebook-hirdetes-kisvallalkozasoknak.mdx`
- Create: `src/app/blog/page.tsx`
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: `src/lib/blog.ts` létrehozása**

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        category: data.category ?? 'Általános',
        readingTime: data.readingTime ?? '3 perc',
      } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getLatestPosts(count: number): Promise<BlogPost[]> {
  return getAllPosts().slice(0, count)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    readingTime: data.readingTime ?? '3 perc',
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx')).map((f) => f.replace('.mdx', ''))
}
```

- [ ] **Step 2: Első blog bejegyzés létrehozása**

`src/content/blog/weboldal-keszites-kecskemeten.mdx`:
```mdx
---
title: "Weboldal készítés Kecskeméten — mit érdemes tudni 2025-ben?"
description: "Ha Kecskeméten keresel weboldal készítőt, ezt olvasd el előbb. Árak, határidők, mit kell figyelni a választásnál."
date: "2025-09-01"
category: "Weboldal"
readingTime: "5 perc"
---

## Miért fontos a weboldal egy kecskeméti vállalkozásnak?

Kecskemét Bács-Kiskun megye székhelye, közel 115 000 lakossal. A helyi vállalkozások...

## Mennyibe kerül egy weboldal Kecskeméten?

Az árak széles skálán mozognak. Egy egyszerű bemutatkozó oldal...

## Mit nézz meg, mielőtt megbízol egy ügynökséget?

1. Van-e referencia munkájuk?
2. Kínálnak-e havidíjas karbantartást?
3. Milyen határidőt vállalnak?

## Összefoglalás

A jó weboldal nem csak szép — gyors, mobilra optimalizált és SEO-barát...
```

- [ ] **Step 3: Második blog bejegyzés létrehozása**

`src/content/blog/webshop-inditasa-magyarorszagon.mdx`:
```mdx
---
title: "Webshop indítása Magyarországon — lépésről lépésre útmutató"
description: "Hogyan indíts el egy webshopot Magyarországon? Jogi, technikai és marketing szempontok egy helyen."
date: "2025-09-15"
category: "Webshop"
readingTime: "7 perc"
---

## Mit kell tudni a webshop indítása előtt?

Magyarországon évente több ezer webshop nyit...

## Jogi követelmények

- ÁSZF szükséges
- Cookie tájékoztató
- Adatvédelmi nyilatkozat (GDPR)

## Technikai szempontok

A webshopnak gyorsnak és mobilbarátinak kell lennie...

## Összefoglalás

Egy jól felépített webshop akár hónapokon belül megtérülhet...
```

- [ ] **Step 4: Harmadik blog bejegyzés létrehozása**

`src/content/blog/facebook-hirdetes-kisvallalkozasoknak.mdx`:
```mdx
---
title: "Facebook hirdetés kis vállalkozásoknak — hogyan kezdj bele?"
description: "Kis büdzsével is lehet hatékony Facebook hirdetést csinálni. Megmutatjuk hogyan."
date: "2025-10-01"
category: "Facebook hirdetés"
readingTime: "4 perc"
---

## Miért éri meg a Facebook hirdetés?

Magyarországon 5+ millió Facebook felhasználó van...

## Mekkora büdzsé kell?

Napi 500-1000 Ft-tal is el lehet indulni...

## A legfontosabb célzási lehetőségek

- Életkor és nem
- Érdeklődési kör
- Helyszín (pl. Bács-Kiskun megye)

## Összefoglalás

A Facebook hirdetés a leghatékonyabb módja a helyi ügyfelek elérésének...
```

- [ ] **Step 5: `src/app/blog/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Tippek weboldalakról, webshopokról és Facebook hirdetésekről',
  description: 'Hasznos cikkek digitális marketingről, weboldal készítésről és webshop fejlesztésről magyar vállalkozásoknak.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Tudástár és tippek"
          description="Cikkek amelyek segítenek az online jelenlétedben."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow group">
              <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">{post.category}</span>
              <h2 className="font-display font-bold text-dark text-lg mt-3 mb-2 group-hover:text-cyan transition-colors">{post.title}</h2>
              <p className="text-sm text-muted mb-4 line-clamp-3">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-muted">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readingTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 6: `src/app/blog/[slug]/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-cyan mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Vissza a bloghoz
        </Link>
        <span className="text-xs bg-cyan-light text-cyan px-2 py-0.5 rounded-full">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mt-4 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-6 border-b border-gray-100">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readingTime}</span>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-cyan">
          <MDXRemote source={post.content ?? ''} />
        </div>
      </div>
    </article>
  )
}
```

```bash
npm install @tailwindcss/typography
```

Tailwind configba hozzáadni a `@tailwindcss/typography` plugint:
```typescript
// tailwind.config.ts plugins tömbben:
require('@tailwindcss/typography'),
```

- [ ] **Step 7: Commit**

```bash
git add src/lib/blog.ts src/content src/app/blog
git commit -m "feat: add MDX blog system with 3 sample posts"
```

---

## Task 9: Főoldal + Service oldalak

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/weboldalak/page.tsx`
- Create: `src/app/webshopok/page.tsx`
- Create: `src/app/facebook-hirdetesek/page.tsx`

- [ ] **Step 1: `src/app/page.tsx` felülírása**

```typescript
import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyNezor } from '@/components/home/WhyNezor'
import { ReferencesPreview } from '@/components/home/ReferencesPreview'
import { PackagesTeaser } from '@/components/home/PackagesTeaser'
import { FAQSection } from '@/components/home/FAQSection'
import { BlogPreview } from '@/components/home/BlogPreview'

export const metadata: Metadata = {
  title: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések Magyarországon',
  description: 'Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés Bács-Kiskun megyében és egész Magyarországon. Ingyenes konzultáció!',
  openGraph: {
    title: 'NEZOR — Weboldal, Webshop és Facebook Hirdetések',
    description: 'Professzionális digitális ügynökség — Bács-Kiskun megye és egész Magyarország.',
    url: 'https://nezor.hu',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyNezor />
      <ReferencesPreview />
      <PackagesTeaser />
      <FAQSection />
      <BlogPreview />
    </>
  )
}
```

- [ ] **Step 2: `src/app/weboldalak/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { Monitor, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'Weboldal készítés Bács-Kiskun megye — NEZOR',
  description: 'Professzionális weboldal készítés Bács-Kiskun megyében és egész Magyarországon. Egyszeri díjas és havidíjas csomagok. Ingyenes ajánlat!',
}

const faq: FAQItem[] = [
  { question: 'Mennyi idő alatt készül el a weboldal?', answer: 'Alap weboldalak 1-2 héten belül elkészülnek. Egyedi, összetettebb oldalak 3-4 hetet vehetnek igénybe.' },
  { question: 'Mi kell ahhoz, hogy elkezdjük?', answer: 'Szükségünk van a cég adataira, logóra, és egy vázlatos elképzelésre. Ezeket az ingyenes konzultáción egyeztetjük.' },
  { question: 'Segítetek a szövegek megírásában?', answer: 'Igen, kérés esetén segítünk a szövegek megírásában is, SEO-barát formában.' },
  { question: 'Mi történik, ha módosítani szeretném az oldalt?', answer: 'Havidíjas csomagban a megállapodott számú frissítés beleértve. Egyszeri díjas csomagnál egyedi árazású módosítás.' },
]

const steps = [
  { number: '01', title: 'Ingyenes konzultáció', description: 'Megismerjük az igényeidet és bemutjuk a lehetőségeket.' },
  { number: '02', title: 'Design tervezés', description: 'Elkészítjük az oldal dizájntervét, amit jóváhagysz.' },
  { number: '03', title: 'Fejlesztés', description: 'Megépítjük az oldalt, mobilra és SEO-ra optimalizálva.' },
  { number: '04', title: 'Átadás', description: 'Tesztelés után átadjuk az oldalt és betanítunk a kezelésére.' },
]

export default function WeboldalakPage() {
  return (
    <div>
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Weboldal készítés</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Modern weboldalak, amelyek <span className="text-gradient">ügyfeleket hoznak</span>
            </h1>
            <p className="text-lg text-muted mb-8">Gyors, mobilra optimalizált, SEO-barát weboldalak kis- és középvállalkozásoknak — Bács-Kiskun megyétől az egész országig.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kapcsolat" size="lg">Ingyenes ajánlat kérése</Button>
              <Button href="/csomagok" variant="outline" size="lg">Csomagok megtekintése</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Folyamat" title="Hogyan dolgozunk?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-display font-bold text-cyan-light mb-4">{step.number}</div>
                <h3 className="font-display font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a weboldal készítésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Kész vagy elkezdeni?</h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: `src/app/webshopok/page.tsx` létrehozása**

Ugyanolyan struktúra mint Weboldalak oldal, de webshop specifikus tartalommal:

```typescript
import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'Webshop fejlesztés Magyarország — NEZOR',
  description: 'Professzionális webshop fejlesztés fizetési rendszerrel, rendeléskezelővel. Egyszeri díjas és havidíjas megoldások. Ingyenes ajánlat!',
}

const faq: FAQItem[] = [
  { question: 'Milyen fizetési rendszereket építetek be?', answer: 'SimplePay, Barion, PayPal, bankkártya és utánvét — az igényednek megfelelőt választjuk ki.' },
  { question: 'Kezeli a rendszer a készletet is?', answer: 'Igen, automatikus raktárkezelés és értesítések is beépíthetők.' },
  { question: 'Hogyan kezeli a rendszer a számlákat?', answer: 'Integrálható automatikus számlázó rendszerekkel (pl. Számlázz.hu, Billingo).' },
  { question: 'Mennyi terméket kezel a webshop?', answer: 'Csomagtól függően 100 terméktől korlátlan mennyiségig skálázható.' },
]

const steps = [
  { number: '01', title: 'Konzultáció', description: 'Felmérjük az igényeket: termékek, fizetési mód, szállítás.' },
  { number: '02', title: 'Tervezés', description: 'Design és funkcionális terv elkészítése.' },
  { number: '03', title: 'Fejlesztés', description: 'Webshop felépítése, fizetési rendszer integráció.' },
  { number: '04', title: 'Átadás és betanítás', description: 'Tesztelés, átadás, és termékfeltöltési betanítás.' },
]

export default function WebshopokPage() {
  return (
    <div>
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Webshop fejlesztés</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Online bolt, ami <span className="text-gradient">valóban elad</span>
            </h1>
            <p className="text-lg text-muted mb-8">Teljes e-kereskedelmi megoldás fizetési rendszerrel, rendeléskezelővel és automatikus számlázással.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kapcsolat" size="lg">Ingyenes ajánlat kérése</Button>
              <Button href="/csomagok" variant="outline" size="lg">Csomagok megtekintése</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Folyamat" title="Hogyan dolgozunk?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-display font-bold text-cyan-light mb-4">{step.number}</div>
                <h3 className="font-display font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a webshopról" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Indítsuk el a webshopod!</h2>
          <p className="text-gray-400 mb-8">Az első konzultáció ingyenes és kötelezettség nélküli.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 4: `src/app/facebook-hirdetesek/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { FAQItem } from '@/types'
import { Target, BarChart2, RefreshCw, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facebook hirdetés kezelés Magyarország — NEZOR',
  description: 'Professzionális Facebook és Instagram hirdetés kezelés. Célzott Meta kampányok kis- és középvállalkozásoknak egész Magyarországon.',
}

const faq: FAQItem[] = [
  { question: 'Mekkora büdzsével érdemes elkezdeni?', answer: 'Napi 1000-2000 Ft-tal már érdemi eredményeket lehet elérni helyi célzással. Az optimális büdzsét az ingyenes konzultáción határozzuk meg.' },
  { question: 'Mennyi idő alatt látszanak az eredmények?', answer: 'Az első eredmények 1-2 héten belül láthatók. Az optimalizálás folyamatos, általában 30 nap után érik el a kampányok a legjobb hatékonyságot.' },
  { question: 'Instagram hirdetéseket is csináltok?', answer: 'Igen, a Meta hirdetési rendszere Facebook-ot és Instagramot is lefed, mindkettőre optimalizálunk.' },
  { question: 'Kapok-e riportot a hirdetések eredményéről?', answer: 'Igen, minden hónapban részletes riportot küldünk az elért eredményekről, elköltött büdzséről és az optimalizálási lépésekről.' },
]

const features = [
  { icon: Target, title: 'Precíz célzás', description: 'Életkor, helyszín, érdeklődés alapján érjük el a potenciális ügyfeleidet.' },
  { icon: BarChart2, title: 'A/B tesztelés', description: 'Több hirdetésváltozatot tesztelünk, hogy a legjobb teljesítőt futtassuk.' },
  { icon: RefreshCw, title: 'Folyamatos optimalizálás', description: 'Naponta monitorozzuk és optimalizáljuk a kampányokat.' },
  { icon: FileText, title: 'Havi riport', description: 'Részletes havi jelentés az eredményekről és következő lépésekről.' },
]

export default function FacebookHirdetesekPage() {
  return (
    <div>
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-cyan-light text-cyan font-semibold text-sm px-4 py-1.5 rounded-full mb-6">Facebook hirdetések</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              Célzott hirdetések, <span className="text-gradient">valódi ügyfelek</span>
            </h1>
            <p className="text-lg text-muted mb-8">Meta kampányok amelyek elérik a potenciális vevőidet — Bács-Kiskun megyében és az egész országban.</p>
            <Button href="/kapcsolat" size="lg">Ingyenes konzultáció</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Szolgáltatás" title="Amit kínálunk" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                  <div className="w-10 h-10 bg-cyan-light rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-dark mb-2">{f.title}</h3>
                  <p className="text-sm text-muted">{f.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="GYIK" title="Kérdések a Facebook hirdetésről" />
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Kezdjük el a hirdetést!</h2>
          <p className="text-gray-400 mb-8">Ingyenes konzultáció — megmutatjuk milyen eredmény érhető el a te iparágadban.</p>
          <Button href="/kapcsolat" size="lg">Ajánlatot kérek</Button>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 5: Ellenőrzés**

```bash
npm run dev
```

Elvárt: `/weboldalak`, `/webshopok`, `/facebook-hirdetesek` mind megnyitható, tartalom látható.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/app/weboldalak src/app/webshopok src/app/facebook-hirdetesek
git commit -m "feat: add homepage and 3 service pages"
```

---

## Task 10: Csomagok + Referenciák + Kapcsolat oldalak

**Files:**
- Create: `src/app/csomagok/page.tsx`
- Create: `src/app/referenciak/page.tsx`
- Create: `src/app/kapcsolat/page.tsx`
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/app/api/contact/route.ts`

- [ ] **Step 1: `src/app/csomagok/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { websitePackages, webshopPackages } from '@/data/packages'
import { Package } from '@/types'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Csomagok és árak — Weboldal, Webshop',
  description: 'Weboldal és webshop csomagok egyszeri díjas és havidíjas konstrukcióban. Áttekinthető árak, rugalmas feltételek.',
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className={cn('bg-white rounded-2xl p-8 shadow-card flex flex-col', pkg.highlighted && 'border-2 border-cyan shadow-card-hover')}>
      {pkg.highlighted && (
        <span className="self-start text-xs bg-cyan text-white px-3 py-1 rounded-full mb-4 font-semibold">Népszerű</span>
      )}
      <h3 className="text-2xl font-display font-bold text-dark mb-2">{pkg.name}</h3>
      <p className="text-muted text-sm mb-6">{pkg.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-secondary rounded-xl">
        <div className="text-center">
          <div className="text-xs text-muted mb-1">Egyszeri díj</div>
          <div className="font-display font-bold text-dark">{pkg.oneTimePrice}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-muted mb-1">Havidíj</div>
          <div className="font-display font-bold text-dark">{pkg.monthlyPrice}</div>
          {pkg.monthlyUpdates && <div className="text-xs text-cyan mt-1">{pkg.monthlyUpdates} frissítés/hó</div>}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <Button href="/kapcsolat" variant={pkg.highlighted ? 'primary' : 'outline'} className="w-full">
        Ajánlatot kérek
      </Button>
    </div>
  )
}

export default function CsomagokPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Csomagok"
          title="Átlátható árak, rugalmas feltételek"
          description="Minden csomagnál választhatsz egyszeri díjas vagy havidíjas konstrukció között."
        />

        <section className="mb-20">
          <h2 className="text-2xl font-display font-bold text-dark mb-8 text-center">Weboldal csomagok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {websitePackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display font-bold text-dark mb-8 text-center">Webshop csomagok</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webshopPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </section>

        <div className="mt-16 text-center bg-secondary rounded-2xl p-10">
          <h3 className="text-2xl font-display font-bold text-dark mb-3">Nem találod amit keresel?</h3>
          <p className="text-muted mb-6">Egyedi igényekre egyedi megoldást adunk. Vedd fel velünk a kapcsolatot!</p>
          <Button href="/kapcsolat" size="lg">Egyedi ajánlat kérése</Button>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: `src/app/referenciak/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { references } from '@/data/references'

export const metadata: Metadata = {
  title: 'Referenciák — Ügyfelek akikkel dolgoztunk',
  description: 'NEZOR referenciák — weboldalak és webshopok amiket elkészítettünk. Nézd meg a munkáinkat!',
}

export default function ReferenciakPage() {
  const weboldal = references.filter((r) => r.category === 'weboldal')
  const webshop = references.filter((r) => r.category === 'webshop')

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Büszke vagyunk az ügyfeleinkre"
          description="Nézd meg kikkel dolgoztunk eddig."
        />

        <section className="mb-16">
          <h2 className="text-xl font-display font-bold text-dark mb-6">Weboldalak</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weboldal.map((ref) => (
              <div key={ref.id} className="border border-gray-100 rounded-2xl p-6 hover:border-cyan hover:shadow-card transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-dark text-lg">{ref.name}</h3>
                  {ref.url !== '#' && (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted">{ref.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-display font-bold text-dark mb-6">Webshopok</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webshop.map((ref) => (
              <div key={ref.id} className="border border-gray-100 rounded-2xl p-6 hover:border-cyan hover:shadow-card transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-dark text-lg">{ref.name}</h3>
                  {ref.url !== '#' && (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cyan transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted">{ref.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: `src/components/contact/ContactForm.tsx` létrehozása**

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Add meg a nevedet'),
  email: z.string().email('Érvényes email cím szükséges'),
  phone: z.string().optional(),
  service: z.enum(['weboldalak', 'webshopok', 'facebook', 'egyeb'], { required_error: 'Válassz szolgáltatást' }),
  message: z.string().min(10, 'Legalább 10 karakter szükséges'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Hiba történt')
      setSubmitted(true)
    } catch {
      setError('Hiba történt az üzenet küldésekor. Próbálkozz újra, vagy írj emailt a nezorweb@gmail.com címre.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4" />
        <h3 className="text-2xl font-display font-bold text-dark mb-2">Üzenet elküldve!</h3>
        <p className="text-muted">24 órán belül felvesszük veled a kapcsolatot.</p>
      </div>
    )
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-dark placeholder:text-gray-400 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input {...register('name')} placeholder="Neved *" className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>
      <div>
        <input {...register('email')} type="email" placeholder="Email cím *" className={inputClass} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <input {...register('phone')} placeholder="Telefonszám (opcionális)" className={inputClass} />
      </div>
      <div>
        <select {...register('service')} className={inputClass} defaultValue="">
          <option value="" disabled>Milyen szolgáltatás érdekel? *</option>
          <option value="weboldalak">Weboldal készítés</option>
          <option value="webshopok">Webshop fejlesztés</option>
          <option value="facebook">Facebook hirdetések</option>
          <option value="egyeb">Egyéb / Nem tudom</option>
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>
      <div>
        <textarea {...register('message')} placeholder="Üzenet — írj pár sort a vállalkozásodról *" rows={5} className={inputClass} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>
      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">{error}</p>}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
      </Button>
    </form>
  )
}
```

- [ ] **Step 4: `src/app/api/contact/route.ts` létrehozása**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(['weboldalak', 'webshopok', 'facebook', 'egyeb']),
  message: z.string().min(10),
})

const serviceLabels: Record<string, string> = {
  weboldalak: 'Weboldal készítés',
  webshopok: 'Webshop fejlesztés',
  facebook: 'Facebook hirdetések',
  egyeb: 'Egyéb',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'NEZOR Kapcsolat <onboarding@resend.dev>',
      to: 'nezorweb@gmail.com',
      subject: `Új érdeklődő: ${data.name} — ${serviceLabels[data.service]}`,
      html: `
        <h2>Új kapcsolatfelvétel a nezor.hu-ról</h2>
        <p><strong>Név:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Szolgáltatás:</strong> ${serviceLabels[data.service]}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${data.message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Hiba történt' }, { status: 500 })
  }
}
```

- [ ] **Step 5: `src/app/kapcsolat/page.tsx` létrehozása**

```typescript
import type { Metadata } from 'next'
import { Mail, Clock, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Kapcsolat — Ingyenes konzultáció',
  description: 'Vedd fel velünk a kapcsolatot! Ingyenes konzultáció, 24 órán belüli válasz. Weboldal, webshop és Facebook hirdetés ajánlat.',
}

export default function KapcsolatPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Kapcsolat"
          title="Írj nekünk!"
          description="Az első konzultáció ingyenes és kötelezettség nélküli. 24 órán belül válaszolunk."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="bg-secondary rounded-2xl p-6">
              <h3 className="font-display font-bold text-dark mb-4">Elérhetőség</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted">
                  <Mail className="w-5 h-5 text-cyan" />
                  <a href="mailto:nezorweb@gmail.com" className="hover:text-cyan">nezorweb@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <Clock className="w-5 h-5 text-cyan" />
                  <span>Válasz 24 órán belül</span>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <MapPin className="w-5 h-5 text-cyan" />
                  <span>Bács-Kiskun megye, Magyarország</span>
                </li>
              </ul>
            </div>
            <div className="bg-dark text-white rounded-2xl p-6">
              <h3 className="font-display font-bold mb-3">Ingyenes konzultáció</h3>
              <p className="text-gray-400 text-sm">Minden projekthez ingyenes, kötelezettség nélküli konzultációt kínálunk. Megismerjük az igényeidet és pontos ajánlatot adunk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/app/csomagok src/app/referenciak src/app/kapcsolat src/components/contact src/app/api
git commit -m "feat: add csomagok, referenciak, kapcsolat pages and contact API route"
```

---

## Task 11: SEO — JSON-LD + Sitemap

**Files:**
- Create: `src/lib/structured-data.ts`
- Create: `next-sitemap.config.js`
- Modify: `src/app/layout.tsx` (JSON-LD hozzáadása)

- [ ] **Step 1: `src/lib/structured-data.ts` létrehozása**

```typescript
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NEZOR',
    description: 'Professzionális weboldal és webshop készítés, Facebook hirdetés kezelés.',
    url: 'https://nezor.hu',
    email: 'nezorweb@gmail.com',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bács-Kiskun megye' },
      { '@type': 'Country', name: 'Magyarország' },
    ],
    serviceType: ['Weboldal készítés', 'Webshop fejlesztés', 'Facebook hirdetés kezelés'],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function blogPostSchema(post: { title: string; description: string; date: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://nezor.hu/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'NEZOR', url: 'https://nezor.hu' },
  }
}
```

- [ ] **Step 2: JSON-LD hozzáadása a root layouthoz**

`src/app/layout.tsx`-ben a `<body>` tagben a `<Navbar />` előtt add hozzá:

```typescript
// Importáld a függvényt:
import { localBusinessSchema } from '@/lib/structured-data'

// A return-ben a <body> tagbe add hozzá:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
/>
```

- [ ] **Step 3: FAQ JSON-LD hozzáadása a főoldalhoz**

`src/app/page.tsx`-ben:

```typescript
import { faqSchema } from '@/lib/structured-data'
import { homeFAQ } from '@/data/faq'

// A return-ben a többi szekció előtt:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQ)) }}
/>
```

- [ ] **Step 4: `next-sitemap.config.js` létrehozása**

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nezor.hu',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/weboldalak', priority: 0.9, changefreq: 'monthly' },
    { loc: '/webshopok', priority: 0.9, changefreq: 'monthly' },
    { loc: '/facebook-hirdetesek', priority: 0.9, changefreq: 'monthly' },
    { loc: '/csomagok', priority: 0.8, changefreq: 'weekly' },
    { loc: '/referenciak', priority: 0.7, changefreq: 'monthly' },
  ],
}
```

- [ ] **Step 5: `package.json` scripts kiegészítése**

A `scripts` szekciókba add hozzá:
```json
"postbuild": "next-sitemap"
```

- [ ] **Step 6: Ellenőrzés — build**

```bash
npm run build
```

Elvárt: build sikeresen lefut, `public/sitemap.xml` és `public/robots.txt` generálódik.

- [ ] **Step 7: Commit**

```bash
git add src/lib/structured-data.ts next-sitemap.config.js src/app/layout.tsx src/app/page.tsx package.json
git commit -m "feat: add JSON-LD structured data and sitemap generation"
```

---

## Task 12: Deployment konfiguráció

**Files:**
- Create: `vercel.json`
- Create: `DEPLOYMENT.md`

- [ ] **Step 1: `vercel.json` létrehozása**

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "regions": ["fra1"]
}
```

- [ ] **Step 2: `DEPLOYMENT.md` létrehozása — telepítési útmutató**

```markdown
# Deployment útmutató — NEZOR

## 1. Vercel account
- Regisztrálj: https://vercel.com
- Kapcsold össze a GitHub accountoddal

## 2. GitHub repo létrehozása
- Hozz létre egy új repo-t a GitHub-on (pl. nezor-website)
- Push a kódot:
  git remote add origin https://github.com/FELHASZNALONEVED/nezor-website.git
  git push -u origin main

## 3. Vercel projekt importálása
- Vercel dashboardon: "Add New Project"
- Válaszd ki a GitHub repo-t
- Framework: Next.js (automatikusan felismeri)

## 4. Környezeti változók beállítása Vercelben
- Project Settings → Environment Variables
- Add hozzá:
  - RESEND_API_KEY = (Resend.com-on regisztrálva kapott API key)
  - NEXT_PUBLIC_FB_PAGE_ID = (Facebook Page ID — Page Settings → About → Page ID)
  - NEXT_PUBLIC_SITE_URL = https://nezor.hu

## 5. Resend beállítás
- Regisztrálj: https://resend.com
- API Keys → Create API Key
- Domain beállítás: Add domain → nezor.hu (DNS TXT rekord hozzáadás szükséges)
- Ha a domain nincs beállítva, használd az onboarding@resend.dev feladót tesztelésre

## 6. Domain beállítás
- Vercel → Project → Settings → Domains
- Add: nezor.hu
- DNS beállítás a domain registrárodnál:
  - A rekord: 76.76.21.21 → nezor.hu
  - CNAME: cname.vercel-dns.com → www.nezor.hu

## 7. Referencia URL-ek frissítése
- src/data/references.ts fájlban az url: '#' értékeket cseréld le a valódi URL-ekre

## 8. Facebook Messenger Widget
- Hozz létre vagy használj egy meglévő Facebook Page-et
- Page ID: Facebook Page → About → Page Transparency → Page ID
- Állítsd be a NEXT_PUBLIC_FB_PAGE_ID env változót
```

- [ ] **Step 3: Végső build ellenőrzés**

```bash
npm run build
npm run start
```

Böngészőben `http://localhost:3000` — minden oldal megnyílik, navigáció működik, form látható.

- [ ] **Step 4: TypeScript típusellenőrzés**

```bash
npx tsc --noEmit
```

Elvárt: nincs hiba.

- [ ] **Step 5: Final commit**

```bash
git add vercel.json DEPLOYMENT.md
git commit -m "feat: add Vercel deployment config and deployment guide"
```

---

## Összefoglalás — elvégzendő lépések deployment előtt

1. `src/data/references.ts` — valódi URL-ek megadása
2. `src/data/packages.ts` — valódi árak kitöltése
3. `public/logo.png` — NEZOR logo feltöltése (1200x630px OG képpel együtt: `public/og-image.png`)
4. Footer közösségi linkek (`src/components/layout/Footer.tsx`) — valódi Facebook/Instagram URL-ek
5. Resend regisztráció + API key + domain beállítás
6. Facebook Page ID megadása az env változóba
