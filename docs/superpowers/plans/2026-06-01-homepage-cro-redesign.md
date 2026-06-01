# Homepage CRO Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the NEZOR homepage to communicate "we bring you more customers" instead of "we build websites", with stronger CRO, social proof, and positioning.

**Architecture:** Modify `src/app/page.tsx` to remove weak sections and add new ones. Rewrite `Hero.tsx` copy. Create 3 new components: `SocialProof.tsx`, `HowWeWork.tsx`, `ResultsCTA.tsx`. Update headlines in `ServicesSection.tsx` and `PackagesTeaser.tsx`.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, framer-motion, lucide-react

---

## File Map

| Action | File |
|--------|------|
| Modify | `src/app/page.tsx` |
| Modify | `src/components/home/Hero.tsx` |
| Create | `src/components/home/SocialProof.tsx` |
| Modify | `src/components/home/ServicesSection.tsx` |
| Create | `src/components/home/HowWeWork.tsx` |
| Modify | `src/components/home/PackagesTeaser.tsx` |
| Create | `src/components/home/ResultsCTA.tsx` |

---

### Task 1: Rewrite Hero section

**Files:**
- Modify: `src/components/home/Hero.tsx`

**Context:** Current hero has `highlights` array with ["Ingyenes konzultáció", "24 órán belüli válasz", "Bács-Kiskun megye"] and headline "Professzionális weboldal. Több ügyfél. Gyorsabb növekedés." — both are generic. We need outcome-focused messaging.

- [ ] **Step 1: Replace the entire Hero.tsx content**

```tsx
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HeroPhones } from '@/components/home/HeroPhones'

const trustSignals = [
  '24h válasz',
  'Garanciával',
  'Bács-Kiskun + egész ország',
]

const clients = ['Neked Sütöm', 'Estur Épker', 'Hellinger Kft.']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14 lg:py-16 flex items-center min-h-0">
      {/* Background */}
      <div className="dot-grid-bg absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,207,255,0.55) 1.8px, transparent 1.8px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-cyan-light/20 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 bg-cyan-light text-cyan font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
              Weboldal · Webshop · Facebook hirdetés
            </span>

            <h1 className="animate-fade-up-delay-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-4">
              Minden hónapban{' '}
              <span className="text-gradient">több érdeklődőt</span>{' '}
              hozunk a vállalkozásodnak.
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-muted mb-6 leading-relaxed">
              Weboldal, webshop, Facebook hirdetés — egy céllal: hogy a legjobb ügyfelek téged keressenek meg, ne a konkurensedet.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 mb-6">
              <Button href="/csomagok" size="lg" className="glow-pulse w-full sm:w-auto">
                Mutasd hogyan működik
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kapcsolat" variant="outline" size="lg" className="w-full sm:w-auto">
                Ingyen megnézem a vállalkozásom
              </Button>
            </div>

            <div className="animate-fade-up-delay-4 space-y-3">
              <p className="text-xs text-muted uppercase tracking-widest">Ügyfeleink</p>
              <p className="text-sm font-display font-semibold text-dark">
                {clients.join(' · ')}
              </p>
              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
                {trustSignals.map((text) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <HeroPhones />

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: rewrite hero — outcome-focused messaging, stronger CTAs"
```

---

### Task 2: Create SocialProof component

**Files:**
- Create: `src/components/home/SocialProof.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const clients = [
  {
    name: 'Neked Sütöm',
    category: 'Lángosozó, Baja',
    result: 'Online megrendelési lehetőség + helyi közönség elérése Facebook hirdetéssel.',
    url: 'nekedsutom.hu',
    href: 'https://nekedsutom.hu',
  },
  {
    name: 'Estur Épker Kft.',
    category: 'Generálkivitelező, Baja',
    result: 'Professzionális megjelenés, ajánlatkérési űrlap, Google-ban is megtalálható.',
    url: 'estur.hu',
    href: 'https://estur.hu',
  },
  {
    name: 'Hellinger Kft.',
    category: 'Építőipar, Dél-Dunántúl',
    result: '25 éves tapasztalat — most már online is megtalálják az ügyfelek.',
    url: 'hellingerkft.hu',
    href: 'https://hellingerkft.hu',
  },
]

export function SocialProof() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Referenciák"
          title="Magyar vállalkozások, akik több ügyfelet szereznek velünk."
          description="Ezeknek a cégeknek készítettük el a weboldalát — hogy online is megtalálják őket."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 flex flex-col"
            >
              <div className="mb-4">
                <p className="font-display font-bold text-dark text-lg">{client.name}</p>
                <p className="text-xs text-muted uppercase tracking-widest mt-0.5">{client.category}</p>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-grow mb-5">
                "{client.result}"
              </p>

              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cyan font-semibold hover:underline"
              >
                {client.url}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/SocialProof.tsx
git commit -m "feat: add SocialProof section with 3 client references"
```

---

### Task 3: Update ServicesSection headlines

**Files:**
- Modify: `src/components/home/ServicesSection.tsx`

**Context:** Only the section heading text changes. The `<SectionHeading>` is rendered around line 288-292.

- [ ] **Step 1: Update the heading in ServicesSection**

In `src/components/home/ServicesSection.tsx`, find the `<SectionHeading>` call (around line 289) and replace it:

Old:
```tsx
          <SectionHeading label="Szolgáltatások" title="Probléma → Megoldás" />
```

New (note: SectionHeading accepts `label`, `title`, `description`):
```tsx
          <SectionHeading
            label="Szolgáltatások"
            title="Így hozunk neked több ügyfelet."
            description="Válassz szolgáltatást és nézd meg pontosan mit jelent a vállalkozásodnak."
          />
```

- [ ] **Step 2: Remove the inline `<p>` subtitle** that currently follows the heading (the `<p className="text-muted mt-3...">` element), since description is now in SectionHeading.

Find and remove:
```tsx
          <p className="text-muted mt-3 max-w-xl mx-auto">Nézd meg mi a különbség NEZOR nélkül és NEZOR-ral.</p>
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/home/ServicesSection.tsx
git commit -m "feat: update services section headline to outcome-focused messaging"
```

---

### Task 4: Create HowWeWork component

**Files:**
- Create: `src/components/home/HowWeWork.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Megértjük a vállalkozásod',
    description: 'Nem sablont rakunk össze. Megnézzük ki a célügyféled, mi a versenytársad, és mi az az egy dolog ami téged megkülönböztet. Erre épül minden.',
  },
  {
    number: '02',
    title: 'Weboldalad ügyfélszerzőre tervezzük',
    description: 'Nem szép oldalakat csinálunk. Olyan oldalakat, ahol a látogató azonnal megérti mit kínálsz és miért bízzon benned. Minden elem az érdeklődő → ügyfél útvonalon van.',
  },
  {
    number: '03',
    title: 'Hirdetéssel forgalmat hozunk rá',
    description: 'Egy jó weboldal önmagában kevés. Facebook hirdetéssel célzottan hozzuk azokat, akiknek most van szükségük rád — nem mindenkinek, hanem a tiednek.',
  },
]

export function HowWeWork() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">
            A folyamat
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Így hozunk ügyfeleket a vállalkozásodnak.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Nem sablont adunk el. Egy rendszert, ami működik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 28, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-display font-bold text-white/10 mb-4 leading-none">
                {step.number}
              </div>
              <div className="w-8 h-0.5 bg-cyan mb-4" />
              <h3 className="font-display font-bold text-white text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/kapcsolat" size="lg">
            Ingyenes weboldal audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/HowWeWork.tsx
git commit -m "feat: add HowWeWork section — 3-step client acquisition process"
```

---

### Task 5: Update PackagesTeaser headlines

**Files:**
- Modify: `src/components/home/PackagesTeaser.tsx`

**Context:** Only lines 45-47 change (the heading block inside the motion.div).

- [ ] **Step 1: Update the heading block**

In `src/components/home/PackagesTeaser.tsx`, find the heading block (lines 45-47):

Old:
```tsx
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Csomagok</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Válaszd a neked megfelelőt</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Minden csomagnál egyszeri díjas vagy havidíjas konstrukció közül választhatsz.</p>
```

New:
```tsx
          <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-3">Csomagok</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">Befektetés, nem kiadás.</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">Egy új ügyfél általában megtéríti a weboldal árát. A többi tiszta profit.</p>
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/PackagesTeaser.tsx
git commit -m "feat: update packages teaser headline to ROI framing"
```

---

### Task 6: Create ResultsCTA component

**Files:**
- Create: `src/components/home/ResultsCTA.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ResultsCTA() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-cyan font-display font-semibold text-sm uppercase tracking-widest mb-4">
          Kezdjük el
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Készen állsz{' '}
          <span className="text-gradient">több ügyfélre?</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Ingyenes, 30 perces átnézésben megmutatjuk hogyan lehetne a weboldalad több ügyfelet hozni. Kötelezettség nélkül.
        </p>

        <Button href="/kapcsolat" size="lg" className="glow-pulse mb-6">
          Ingyenes weboldal audit
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Shield className="w-4 h-4 text-cyan flex-shrink-0" />
          Ha 30 nap után nem tetszik az oldal, visszaadjuk a pénzt.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ResultsCTA.tsx
git commit -m "feat: add ResultsCTA section with risk reversal guarantee"
```

---

### Task 7: Update page.tsx — new structure

**Files:**
- Modify: `src/app/page.tsx`

**Context:** Remove StatsSection, PartnersMarquee, WhyNezor, BlogPreview. Add SocialProof, HowWeWork, ResultsCTA in correct order.

- [ ] **Step 1: Replace the entire page.tsx**

```tsx
import type { Metadata } from 'next'
import { faqSchema } from '@/lib/structured-data'
import { homeFAQ } from '@/data/faq'
import { Hero } from '@/components/home/Hero'
import { SocialProof } from '@/components/home/SocialProof'
import { ServicesSection } from '@/components/home/ServicesSection'
import { HowWeWork } from '@/components/home/HowWeWork'
import { PackagesTeaser } from '@/components/home/PackagesTeaser'
import { FAQSection } from '@/components/home/FAQSection'
import { ResultsCTA } from '@/components/home/ResultsCTA'

export const metadata: Metadata = {
  title: 'Weboldal, Webshop és Facebook Hirdetés | NEZOR',
  description: 'Több ügyfelet hozunk a vállalkozásodnak — weboldal, webshop és Facebook hirdetés kezelés Bács-Kiskun megyében és egész Magyarországon.',
  openGraph: {
    title: 'NEZOR — Több ügyfelet hozunk a vállalkozásodnak',
    description: 'Weboldal, webshop és Facebook hirdetés — egy céllal: több ügyfél.',
    url: 'https://nezor.hu',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFAQ)) }}
      />
      <Hero />
      <SocialProof />
      <ServicesSection />
      <HowWeWork />
      <PackagesTeaser />
      <FAQSection />
      <ResultsCTA />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: restructure homepage — new section order, remove weak sections, add CRO sections"
```

---

## Done

All changes implement the "több ügyfelet hozunk" positioning:
- ✓ Hero: outcome-focused headline + CTAs + client names instead of weak stats
- ✓ SocialProof: 3 concrete client references
- ✓ ServicesSection: outcome-framed headline
- ✓ HowWeWork: 3-step client acquisition mechanism
- ✓ PackagesTeaser: ROI framing ("befektetés, nem kiadás")
- ✓ ResultsCTA: strong closer with risk reversal
- ✓ Removed: StatsSection, WhyNezor, BlogPreview, PartnersMarquee
