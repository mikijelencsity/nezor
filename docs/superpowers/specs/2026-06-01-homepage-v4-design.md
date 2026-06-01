# NEZOR Homepage v4 — Design Spec

**Date:** 2026-06-01
**Goal:** Konvertáló főoldal — egyértelmű, nagy képek, direct response stílus, lime zöld akcent

---

## Színpaletta

| Szín | Hex | Használat |
|------|-----|-----------|
| Sötétkék (primary) | `#0a1f44` | Hero háttér, Final CTA háttér, szöveg |
| Cyan | `#00cfff` | Section labelek, idézet border, trust checkmark |
| Lime zöld (akcent) | `#AAFF00` | CTA gombok, pain pont jelölők, step számok, badge-ek |
| Fehér | `#ffffff` | Fő háttér, szöveg sötét bg-n |
| Világosszürke | `#f4f7fb` | Hogyan csináljuk bg, pain kártya bg |

---

## Struktúra — 5 szekció

```
Navbar
1. Hero
2. Pain (Fájdalompontok)
3. HowWeWork (3 lépés)
4. References (Referenciák)
5. FinalCTA
```

---

## Navbar

- Logo: `NEZOR` — `font-bold text-dark`
- Linkek: Weboldalak · Webshopok · Hirdetés (desktop only, hidden mobile)
- CTA gomb: `"Ingyenes audit →"` → `/kapcsolat` — `bg-[#AAFF00] text-dark font-bold rounded-lg`
- Sticky top, fehér háttér, border-bottom

---

## 1. Hero szekció

**Layout:** 2 oszlop — bal szöveg, jobb kép. Mobilon: szöveg felül, kép alul (stack).

**Háttér:** `#0a1f44` (sötétkék)

**Bal oszlop:**
- Badge: `"Weboldal · Hirdetés · Több ügyfél"` — `bg-[#AAFF00] text-dark` pill
- H1: `"Nincs weboldalad? Vagy van, de nem hoz egyetlen ügyfelet sem?"`
  - `"egyetlen ügyfelet sem"` → `text-[#00cfff]`
  - Méret: `text-4xl md:text-5xl font-black leading-tight`
- Subheadline: `"Weboldalat és Facebook hirdetést készítünk — hogy a legjobb ügyfelek téged hívjanak, ne a konkurensedet."` — `text-white/65`
- CTA gomb: `"Ingyenes weboldal audit →"` → `/kapcsolat` — `bg-[#AAFF00] text-dark font-black text-lg px-7 py-4 rounded-lg`
- Apróbetű: `"Visszahívunk 24 órán belül · Kötelezettség nélkül"` — `text-white/35`

**Jobb oszlop — böngésző keret:**
- Böngésző mockup komponens (`BrowserMockup`):
  - Sötét title bar (3 dot + URL mező `estur.hu`)
  - Belső kép: `<Image>` placeholder, Next.js `next/image`, aspect ratio 16/10
  - Képhely: `src/public/screenshots/estur.jpg` — ha nincs, szürke placeholder
- 2 értesítő badge (absolute pozíció):
  - `"Új ajánlatkérés érkezett"` — lime zöld dot, fehér kártya, shadow
  - `"Új telefonhívás"` — cyan dot, fehér kártya, shadow

**Trust bar** (hero alatt, sötét bg folytatás):
- 3 item: `✓ 24h visszahívás` · `✓ Pénzvisszatérítési garancia` · `✓ Neked Sütöm · Estur Épker · Hellinger Kft.`
- Checkmark szín: `#AAFF00`

---

## 2. Pain szekció

**Háttér:** fehér
**Padding:** `py-16`

- Label: `"Ismerős valamelyik?"` — `text-[#00cfff] uppercase tracking-widest text-xs font-bold`
- H2: `"Így veszíted el az ügyfeleket minden nap."` — `text-3xl md:text-4xl font-black text-dark`
- 4 fájdalom kártya:
  ```
  ✗ Nem találnak meg Google-ben — a konkurensed igen
  ✗ Weboldalad van, de senki nem kér ajánlatot
  ✗ Hirdetsz Facebookon, de nincs mérhető eredmény
  ✗ Minden ügyfeled ajánlásból jön — kiszámíthatatlan
  ```
  - Kártya design: `bg-[#f8fff0] border-l-4 border-[#AAFF00] rounded-lg px-5 py-4`
  - ✗ jel: `bg-[#AAFF00] text-dark` kerek badge (28x28px)
  - Szöveg: `text-base font-bold text-dark`

---

## 3. HowWeWork szekció

**Háttér:** `#f4f7fb`
**Padding:** `py-16`

- Label: `"Hogyan csináljuk"` — cyan
- H2: `"3 lépés, és több ügyfelet kapsz."` — dark, font-black
- 3 lépés (lista, dividerrel elválasztva):
  ```
  01 — Megértjük a vállalkozásod
       Ki a célügyfeled, ki a konkurensed, és mi az, ami téged megkülönböztet. Erre épül minden.

  02 — Felépítjük az ügyfélszerző rendszert
       Weboldal + Google megjelenés + Facebook hirdetés — egy célra hangolva: ajánlatkérések.

  03 — Több hívás, több ajánlatkérés
       A rendszer a háttérben dolgozik — te arra koncentrálsz, amihez igazán értesz.
  ```
  - Szám: `text-5xl font-black text-[#AAFF00]` (text-shadow: lime glow)
  - Cím: `text-lg font-black text-dark`
  - Leírás: `text-sm text-muted`

---

## 4. References szekció

**Háttér:** fehér
**Padding:** `py-16`

- Label: `"Akiknek már megcsináltuk"` — cyan
- H2: `"Magyar vállalkozók, akik már előrébb járnak."` — dark, font-black
- 3 referencia kártya (stack, teljes szélesség):

  Minden kártyán:
  - **Nagy kép** (200px magas) — `next/image`, `object-cover`, placeholder gradient ha nincs kép
    - URL badge jobb alul: `bg-dark text-[#AAFF00] text-xs font-bold px-2 py-1 rounded`
  - **Kártya body:**
    - Ügyfél neve: `text-lg font-black text-dark`
    - Kategória: `text-xs uppercase tracking-widest text-muted`
    - Idézet: `text-sm italic border-l-3 border-[#00cfff] pl-3 text-dark/80`

  **Képek:**
  - `public/screenshots/nekedsutom.jpg` (placeholder ha nincs)
  - `public/screenshots/estur.jpg` (placeholder ha nincs)
  - `public/screenshots/hellinger.jpg` (placeholder ha nincs)

---

## 5. FinalCTA szekció

**Háttér:** `#0a1f44`
**Padding:** `py-16` text-center

- H2: `"Ne hagyd, hogy a konkurensed vigye el az ügyfeleket."` — `text-white`, `"az ügyfeleket"` → `text-[#AAFF00]`
- Subheadline: `"30 perces ingyenes átvizsgálás..."` — `text-white/55`
- CTA gomb: `"Ingyenes weboldal audit kérése →"` → `/kapcsolat` — `bg-[#AAFF00] text-dark font-black text-xl px-12 py-5 rounded-lg`
- Apróbetű: `"Visszahívunk 24 órán belül"` — `text-white/30`
- Garancia sor: `"🛡️ Ha 30 nap után nem tetszik az oldal, visszaadjuk a pénzt."` — kis kártya `bg-white/5 border border-white/10`

---

## Fájl változások

| Fájl | Változás |
|------|----------|
| `src/app/page.tsx` | Teljes csere — új 5 komponens |
| `src/components/home/Hero.tsx` | Teljes újraírás — 2 oszlop, browser mockup, trust bar |
| `src/components/home/PainSection.tsx` | Frissítés — lime akcent |
| `src/components/home/HowWeWork.tsx` | Frissítés — lime számok |
| `src/components/home/ReferencesSection.tsx` | Frissítés — nagy képek, URL badge |
| `src/components/home/FinalCTA.tsx` | Frissítés — lime gomb |
| `src/components/home/BrowserMockup.tsx` | ÚJ — böngésző keret komponens |

---

## Képek

Ideiglenesen gradient placeholder jelenik meg. A valódi screenshotokat ide kell elhelyezni:
- `public/screenshots/estur.jpg`
- `public/screenshots/nekedsutom.jpg`
- `public/screenshots/hellinger.jpg`

---

## Tailwind config — új token

Az `#AAFF00` lime zöldet fel kell venni a Tailwind configba:
```js
// tailwind.config.ts
colors: {
  lime: '#AAFF00',
  // ...existing tokens
}
```
