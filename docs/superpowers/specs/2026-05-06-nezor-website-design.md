# NEZOR Weboldal — Design Specifikáció

**Dátum:** 2026-05-06  
**Technológia:** Next.js + Vercel  
**Domain:** nezor.hu  

---

## 1. Összefoglalás

Új, professzionális weboldal a NEZOR digitális ügynökség számára. A cél egy átlátható, felhasználóbarát, SEO-optimalizált és AI keresők által is jól indexelhető oldal, amely Bács-Kiskun megye és az egész ország piacán hatékonyan szerez ügyfeleket.

---

## 2. Szolgáltatások

1. **Weboldalak** — modern, mobilra optimalizált weboldalak
2. **Webshopok** — teljes e-kereskedelmi megoldások
3. **Facebook hirdetések** — Meta kampánykezelés és célzás

---

## 3. Oldalstruktúra

| URL | Leírás |
|---|---|
| `/` | Főoldal — hero, szolgáltatások, miért NEZOR, referenciák, csomagok teaser, GYIK, blog előnézet, footer |
| `/weboldalak` | Részletes szolgáltatás oldal, folyamat, FAQ |
| `/webshopok` | Részletes szolgáltatás oldal, folyamat, FAQ |
| `/facebook-hirdetesek` | Részletes szolgáltatás oldal, célzás, kampánykezelés, FAQ |
| `/csomagok` | Weboldal csomagok + Webshop csomagok (külön szekciókban) |
| `/referenciak` | 8 ügyfél kártyákon linkekkel |
| `/blog` | SEO cikkek listája |
| `/blog/[slug]` | Egyedi blogbejegyzés oldal |
| `/kapcsolat` | Kapcsolatfelvételi form + Messenger widget + elérhetőségek |

---

## 4. Navigáció

- Logo bal oldalt
- Menüpontok jobbra: Szolgáltatások (dropdown), Csomagok, Referenciák, Blog, Kapcsolat
- Jobb szélen: **"Ajánlatot kérek"** CTA gomb (neon cyan)
- Mobil: hamburger menü

---

## 5. Főoldal szekciói (/)

### Hero
- Főcím: *"Professzionális weboldal. Több ügyfél. Gyorsabb növekedés."*
- Alcím: *"Weboldalak, webshopok és Facebook hirdetések — Bács-Kiskun megyétől az egész országig."*
- Két CTA gomb: "Csomagok megtekintése" (cyan, teli) + "Ingyenes konzultáció" (outline)
- Háttér: enyhe cyan→fehér gradient, NEZOR logóval

### Szolgáltatások
- 3 kártya: Weboldal / Webshop / Facebook hirdetések
- Minden kártyán: ikon, rövid leírás, "Részletek" link

### Miért a NEZOR?
- 4 erősség ikonokkal: gyors átfutás, helyi ismeret, rugalmas árazás, folyamatos support

### Referenciák előnézet
- 4-6 ügyfél kártya/logó
- "Összes referencia megtekintése" gomb

### Csomagok teaser
- Rövid áttekintő, CTA gomb a `/csomagok` oldalra

### GYIK (Gyakori kérdések)
- 6-8 kérdés accordion formátumban
- Példa kérdések:
  - Mennyibe kerül egy weboldal Magyarországon?
  - Mennyi idő alatt készül el a weboldal?
  - Mi a különbség az egyszeri díj és a havidíjas csomag között?
  - Készítetek weboldalt Bács-Kiskun megyében?
  - Mit tartalmaz a havi karbantartás?
  - Segítetek a Facebook hirdetések beállításában is?

### Blog előnézet
- 3 legújabb cikk kártyán (kép, cím, dátum, rövid leírás)

### Footer
- Logo + rövid leírás
- Navigációs linkek
- Elérhetőségek (email, telefon)
- Közösségi linkek
- Copyright

---

## 6. Csomagok oldal (/csomagok)

### Weboldal csomagok szekció
Minden csomagnál két fizetési opció:
- **Egyszeri díj** — egyszer fizet, övé az oldal
- **Havidíjas előfizetés** — alacsonyabb belépő + havi X frissítés beleértve

Csomagszintek (pl. Alap / Pro / Prémium) — árak a tulajdonos által töltendők ki.

### Webshop csomagok szekció
Külön szekció webshop csomagokkal, hasonló struktúrában.

---

## 7. Referenciák oldal (/referenciak)

8 ügyfél kártyákon:
1. Neked Sütöm
2. Hellinger Kft.
3. Cruiser Shop
4. InShape-Diet
5. ZT Épületgépészet
6. Estur Kft.
7. Korona Gomba
8. DoverSolution
9. Kisállatkereskedés Baja

Minden kártyán: cégnév, rövid leírás (milyen típusú oldal), link az oldalra.

---

## 8. Blog (/blog)

- Cikkek listája kártyákon (kép, cím, dátum, kategória, rövid leírás)
- Kategóriák: Weboldal, Webshop, Facebook hirdetések, Tippek
- SEO fókuszú cikkek: városok (Kecskemét, Baja, Kalocsa...) + témák

---

## 9. Kapcsolat (/kapcsolat)

- Kapcsolatfelvételi form: Név, Email, Telefonszám, Szolgáltatás (dropdown), Üzenet
- Facebook Messenger widget (Chat Plugin)
- Elérhetőségek: email, telefonszám
- Válaszidő kiemelve: 24 órán belül

---

## 10. Vizuális Design

### Színpaletta
| Szerep | Szín |
|---|---|
| Háttér (fő) | Fehér `#FFFFFF` |
| Háttér (másodlagos) | Halvány szürke `#F5F7FA` |
| Akcentus / CTA | Neon cyan `#00CFFF` |
| Szöveg (fő) | Sötétszürke `#1A1A2E` |
| Szöveg (másodlagos) | Közepes szürke `#6B7280` |
| Kis elemek (szegélyek, ikonok) | Fekete `#0D0D0D` |

### Tipográfia
- Főcímek: **Space Grotesk** (Google Fonts)
- Szövegtörzs: **Inter** (Google Fonts)

### Stílus
- Fehér/világos háttér dominál
- Levegős elrendezés, sok whitespace
- Lekerekített kártyák enyhe árnyékkal
- Neon cyan csak kiemelésekre, gombokra, hover effektekre
- Hero szekció: enyhe cyan→fehér gradient a logo stílusát visszaidézve

---

## 11. SEO és AI Kereshetőség

### Technikai SEO
- Egyedi `title`, `meta description`, `og:image` minden oldalon
- JSON-LD strukturált adatok: `LocalBusiness`, `Service`, `FAQPage`, `BlogPosting`
- `sitemap.xml` automatikus generálás (next-sitemap)
- `robots.txt` beállítva
- Képek: WebP formátum, `alt` szövegekkel
- Core Web Vitals optimalizálás

### Kulcsszó stratégia
| Oldal | Fő kulcsszavak |
|---|---|
| `/` | weboldal készítés Magyarország, digitális ügynökség |
| `/weboldalak` | weboldal készítés Bács-Kiskun, weboldal készítés Kecskemét |
| `/webshopok` | webshop készítés Magyarország, online bolt fejlesztés |
| `/facebook-hirdetesek` | Facebook hirdetés kezelés, Meta reklám Magyarország |
| `/blog` | long-tail kulcsszavak városonként és témánként |

### AI kereshetőség
- GYIK szekciók minden aloldalon strukturált Q&A formátumban
- `LocalBusiness` schema Bács-Kiskun megyei geolokációval
- Tömör, egyértelmű szövegek az AI idézhetőség érdekében

---

## 12. Technikai Stack

| Rész | Technológia |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Animációk | Framer Motion |
| Blog | MDX (markdown fájlok, nincs külön CMS szükséges) |
| Ikonok | Lucide React |
| Sitemap | next-sitemap |
| Deployment | Vercel (ingyenes) |
| Domain | nezor.hu (DNS Vercelre irányítva) |

---

## 13. Kapcsolat és Widget

- **Messenger Chat Widget:** Facebook Chat Plugin beágyazva a layoutba
- **Form:** React Hook Form + email küldés (Resend vagy Nodemailer)
- **Email cím:** nezorweb@gmail.com
