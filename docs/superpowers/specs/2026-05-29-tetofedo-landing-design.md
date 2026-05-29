# Tetőfedő Landing Oldal — Design Spec

**Date:** 2026-05-29
**URL:** `nezor.hu/tetofedo`
**Cél:** Tetőfedő szakembereket konvertálni ajánlatkérővé

---

## Az ajánlat

- **Weboldal + 2 ingyenes Facebook hirdetés**
- **Akciós ár:** 100.000 Ft (horgony: ~~250.000 Ft~~)
- **Sürgősség:** "Csak 3 hely maradt ebben a hónapban"
- **Garancia:** Marketing ígéret — "garantált online jelenlét, több megkeresés"

---

## Konverziós stratégia

**Megközelítés:** Fájdalom → Megoldás → Sürgősség (C variáns)

Kutatás alapján a legjobban konvertáló landing oldalak elemei:
- Nincs navbar/footer linkekkel — semmi nem tereli el a figyelmet
- Fájdalompont nyit, nem ajánlat
- Sürgősség (korlátozott helyek)
- Szociális bizonyíték (referenciák)
- Kifogáskezelés
- Telefonszám prominensen (tetőfedők telefonban bíznak)
- Egyetlen CTA irány

---

## Oldal struktúra (felülről lefelé)

### 1. UrgencyBar (sticky, piros/narancs)
> "⚡ Júniusi akció — Csak 3 hely maradt! Weboldal + 2 ingyenes Facebook hirdetés"

### 2. Hero
- **Headline:** "Miközben te offline vagy, a konkurenciád elviszi az ügyfeleid."
- **Alcím:** "Készítünk neked egy profi tetőfedő weboldalt és 2 Facebook hirdetést — 100.000 Ft-ért. Garantált online jelenlét, több megkeresés."
- **CTA 1:** "Kérek ajánlatot" (űrlaphoz scroll)
- **CTA 2:** "Inkább felhívlak: +36 70 455 4703" (tel: link)

### 3. Fájdalom szekció (3 kártya)
- "Nincs weboldalad, az ügyfelek nem találnak meg online"
- "A konkurensed már fent van Facebookon — te még nem"
- "Szezonon kívül alig csörög a telefon"

### 4. Az ajánlat szekció
- Értékhorgony: ~~250.000 Ft~~ → **100.000 Ft**
- Mit tartalmaz: weboldal (5 oldal, mobilbarát, SEO), 2 db Facebook hirdetés megtervezve és feltöltve
- Badge: "Korlátozott ideig"

### 5. Hogyan működik (3 lépés)
1. Kitöltöd az űrlapot (2 perc)
2. Felhívunk és egyeztetünk
3. 2 héten belül élesben az oldalad

### 6. Referenciák
- Neked Sütöm (nekedsutom.hu)
- Estur Épker Kft. (estur.hu)
- Hellinger Kft. (hellingerkft.hu)
- Logók + rövid egy soros leírás

### 7. Kifogáskezelés (accordion vagy kártyák)
- "Drága?" → "Egy új ügyfél munkája megtéríti az árát. Egy tetőcsere ára többszöröse a weboldalnak."
- "Nem értek hozzá?" → "Mi mindent intézünk, neked csak jóvá kell hagyni. Semmi technikai tudás nem kell."
- "Már próbáltam, nem működött?" → "Egy rossz weboldal rosszabb mint semmi. Mi profin csináljuk, konverziósra optimalizálva."

### 8. Végső CTA szekció
- Nagy, hangsúlyos szekció
- Bal oldal: Kapcsolatfelvételi űrlap (Név, Telefonszám, Email, Üzenet opcionális)
- Jobb oldal: Telefonszám nagy méretben: **+36 70 455 4703**
- Sürgősség ismétlése: "Csak 3 hely maradt!"

---

## Technikai megvalósítás

### Új fájlok
| Fájl | Tartalom |
|------|----------|
| `src/app/tetofedo/page.tsx` | Route, metadata, layout (no navbar/footer) |
| `src/components/landing/UrgencyBar.tsx` | Sticky sürgősségi sáv |
| `src/components/landing/TetofedoHero.tsx` | Hero szekció |
| `src/components/landing/TetofedoPainPoints.tsx` | 3 fájdalom kártya |
| `src/components/landing/TetofedoOffer.tsx` | Ajánlat + értékhorgony |
| `src/components/landing/TetofedoHowItWorks.tsx` | 3 lépés |
| `src/components/landing/TetofedoReferences.tsx` | Referenciák |
| `src/components/landing/TetofedoObjections.tsx` | Kifogáskezelés |
| `src/components/landing/TetofedoCTA.tsx` | Végső CTA + űrlap + telefon |

### Layout
- `src/app/tetofedo/page.tsx` saját layout — **nincs Navbar, nincs Footer**
- Csak NEZOR logó bal felső sarokban (link: nezor.hu főoldalra)
- Form: meglévő API route újrafelhasználva, email megy info@nezor.hu-ra

### Vizuális stílus
- Alap: NEZOR dark (#0E0E1A) + cyan (#00CFFF)
- Sürgősség: narancs (#F97316) / piros (#EF4444) elemek
- Tetőfedő szakma: narancs biztonság/szakmaiság érzetet kelt
- Mobilra optimalizált (tetőfedők főleg telefonon böngésznek)

### Telefon
- `+36704554703` — `tel:+36704554703` href linkként
- Prominens megjelenítés: hero-ban + végső CTA-ban

---

## Sikerkritériumok
- Az oldal egyetlen CTA-ra fókuszál (ajánlatkérés)
- Mobilon tökéletesen működik
- Betöltési idő < 2 sec
- Az info@nezor.hu megkapja az űrlap beküldéseket
