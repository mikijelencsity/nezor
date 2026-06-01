# NEZOR Homepage v3 — Design Spec

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Date:** 2026-06-01  
**Goal:** Lead generáló főoldal — brutálisan direkt, 4 szekció, röhelyesen nagy szövegek, egyetlen cél: ingyen audit kérés  
**Stílus:** Fehér háttér, fekete szöveg, kék CTA gombok (`text-cyan` / NEZOR design tokenek megtartva), nagy tipográfia

---

## Alapelvek

- **4 szekció, semmi több.** Minden egyéb ki.
- **Szövegméretek:** H1 = `text-6xl md:text-7xl lg:text-8xl`, H2 = `text-4xl md:text-5xl lg:text-6xl`, body = `text-xl md:text-2xl`
- **CTA:** Minden szekció végén van egy gomb → `/kapcsolat`
- **Nincs animáció a szövegen** — azonnal látható, nem fade-in
- **Megtartott elemek:** Navbar, Footer, Button komponens, design tokenek (bg-dark, text-cyan, stb.)
- **Törölt komponensek:** HeroPhones, SocialProof, ServicesSection, HowWeWork, BenefitsSection, CaseStudies, WebsiteComparison, AuditOffer, PackagesTeaser, ResultsCTA (mind lecserélve az új 4 szekcióra)

---

## Fájlstruktúra

| Fájl | Változás |
|------|----------|
| `src/app/page.tsx` | Teljes csere — csak az új 4 komponens |
| `src/components/home/Hero.tsx` | Teljes újraírás |
| `src/components/home/PainSection.tsx` | Megtartva, frissítve |
| `src/components/home/ReferencesSection.tsx` | ÚJ (régi SocialProof helyett) |
| `src/components/home/FinalCTA.tsx` | ÚJ |

---

## 1. Navbar (változatlan)

A jelenlegi Navbar megmarad. Nincs változás.

---

## 2. Hero szekció (`src/components/home/Hero.tsx`)

**Teljes újraírás — nincs telefon mockup, nincs animáció, teljes szélességű szöveg.**

**Label (kis caps):**
> `Weboldal · Webshop · Facebook hirdetés`

**H1 (röhelyesen nagy):**
> "Téged nem találnak meg online.  
> A konkurensed igen."

- Kék kiemelés: "A konkurensed igen." → `text-cyan` vagy `text-gradient`
- Méretek: `text-5xl md:text-6xl lg:text-7xl`, `font-bold`, `leading-tight`

**Subheadline:**
> "Weboldalat és Facebook hirdetést készítünk — hogy a legjobb ügyfelek téged hívjanak, ne a konkurensedet."
- Méret: `text-xl md:text-2xl`, `text-muted`

**Egyetlen CTA gomb:**
> "Ingyenes weboldal audit kérése →" → `/kapcsolat`
- Méret: nagy, `size="lg"`, `glow-pulse`, `text-lg px-10 py-5`

**Trust sor (gomb alatt):**
> `Ügyfeleink: Neked Sütöm · Estur Épker · Hellinger Kft. · 24h visszahívás · Garancia`
- `text-sm text-muted`

**Design:** fehér háttér, dot-grid háttér megmarad, `max-w-4xl`, `py-20 md:py-28 lg:py-36`

---

## 3. Fájdalom szekció (`src/components/home/PainSection.tsx`)

**Label:**
> `Ismerős valamelyik?`

**H2:**
> "Lehet, hogy most is ügyfeleket veszítesz."
- Méret: `text-4xl md:text-5xl lg:text-6xl`, `font-bold`

**4 fájdalom kártya** (piros bal szegély, fehér háttér):

```
✗  Nem találnak meg Google-ben — a konkurensed igen
✗  Weboldalad van, de nem hoz ajánlatkéréseket
✗  Hirdetsz Facebookon, de nincs mérhető eredmény
✗  Minden ügyfeled ajánlásból jön — kiszámíthatatlan
```

- Kártya: `bg-red-50 border-l-4 border-red-500 rounded-xl px-6 py-5`
- ✗ jel: `text-2xl font-black text-red-500`
- Szöveg: `text-xl md:text-2xl font-bold text-dark`

**CTA gomb szekció végén:**
> "Nézd meg ingyen mi a helyzet →" → `/kapcsolat`

**Háttér:** fehér (`bg-white`)

---

## 4. Referenciák szekció (`src/components/home/ReferencesSection.tsx`) — ÚJ

**Label:**
> `Akiknek már segítettünk`

**H2:**
> "Magyar vállalkozások, akik már előrébb járnak."
- Méret: `text-4xl md:text-5xl lg:text-6xl`, `font-bold`

**3 referencia kártya** (border, nagy szöveg):

```
Neked Sütöm
Lángosozó · Baja
"Végre az interneten is megtalálnak. A NEZOR mindent megcsinált, mi csak a sütésre koncentráltunk."
→ nekedsutom.hu

Estur Épker Kft.
Generálkivitelező · Baja
"Végre van egy oldalunk, ami tényleg képvisel minket. Már online is megtalálnak az ügyfelek."
→ estur.hu

Hellinger Kft.
Építőipar · Dél-Dunántúl
"25 éve dolgozunk, de az online jelenlétünk nem mutatta ezt. Most már igen."
→ hellingerkft.hu
```

- Kártya: `bg-white border-2 border-gray-200 rounded-2xl p-8`
- Ügyfél neve: `text-2xl md:text-3xl font-bold text-dark`
- Kategória: `text-sm uppercase tracking-widest text-muted`
- Idézet: `text-lg md:text-xl text-dark italic border-l-4 border-cyan pl-5`
- Link: `text-base text-cyan font-semibold hover:underline`
- Layout: `grid grid-cols-1 gap-5` (stack, nem 3 hasáb — hogy nagy maradjon)

**Háttér:** `bg-secondary`

---

## 5. Final CTA szekció (`src/components/home/FinalCTA.tsx`) — ÚJ

**Háttér:** `bg-dark` (sötét)

**H2:**
> "Ne hagyd, hogy a konkurensed vigye el az ügyfeleket."
- Méret: `text-4xl md:text-5xl lg:text-6xl`, `font-bold`, `text-white`
- Kiemelés: "vigye el az ügyfeleket." → `text-gradient` vagy `text-cyan`

**Subheadline:**
> "30 perces ingyenes átvizsgálás. Megmutatjuk mi megy rosszul és hogyan lehetne több ügyfeled. Kötelezettség nélkül."
- `text-xl text-gray-400`

**CTA gomb:**
> "Ingyenes weboldal audit kérése →" → `/kapcsolat`
- Nagy gomb, `glow-pulse`

**Apróbetű alatta:**
> "Visszahívunk 24 órán belül · Pénzvisszatérítési garancia"
- `text-sm text-gray-500`

---

## page.tsx struktúra

```tsx
<Hero />
<PainSection />
<ReferencesSection />
<FinalCTA />
```

FAQSection, PackagesTeaser, és minden egyéb szekció **ki** az oldalról.

---

## Amire figyelni kell implementációkor

- A `HeroPhones` komponens **nem** kerül bele — a Hero szöveg kitölti a teljes szélességet
- Nincs `'use client'` a Hero-ban — nem kell Framer Motion a Hero-ba
- A `PainSection` már létezik, csak frissíteni kell a szövegméreteket
- `ReferencesSection` és `FinalCTA` új fájlok
- A `Button` komponens és design tokenek (`text-cyan`, `bg-dark`, `text-gradient`, `glow-pulse`) változatlanul használandók
