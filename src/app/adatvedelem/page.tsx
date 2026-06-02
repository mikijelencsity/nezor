import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató — NEZOR',
  description: 'A NEZOR digitális ügynökség adatvédelmi tájékoztatója és cookie szabályzata.',
  robots: { index: true, follow: true },
}

export default function AdatvedelemPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-cyan mb-8 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" /> Vissza a főoldalra
        </Link>

        <h1 className="text-3xl font-display font-bold text-dark mb-2">Adatvédelmi tájékoztató</h1>
        <p className="text-muted text-sm mb-10">Utolsó frissítés: 2026. június 2.</p>

        <div className="prose prose-sm max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-cyan">

          <h2>1. Az adatkezelő</h2>
          <p>
            <strong>Neve:</strong> NEZOR Digitális Ügynökség<br />
            <strong>Email:</strong> info@nezor.hu<br />
            <strong>Székhely:</strong> Bács-Kiskun megye, Magyarország
          </p>

          <h2>2. Milyen adatokat kezelünk?</h2>
          <p>A <strong>nezor.hu</strong> weboldalon az alábbi személyes adatokat kezeljük:</p>
          <ul>
            <li><strong>Kapcsolatfelvételi form:</strong> Név, e-mail cím, telefonszám (opcionális), üzenet szövege, kiválasztott szolgáltatás</li>
            <li><strong>Hírlevél / lead magnet feliratkozás:</strong> E-mail cím — az építőiparosoknak szóló ingyenes útmutatóhoz való hozzáféréssel együtt</li>
            <li><strong>Sütik (cookie-k):</strong> Technikai sütik a weboldal működéséhez, analitikai sütik a látogatottság méréséhez</li>
          </ul>

          <h2>3. Az adatkezelés célja és jogalapja</h2>
          <ul>
            <li><strong>Kapcsolatfelvétel feldolgozása:</strong> Az Ön megkeresésének megválaszolása és ajánlatadás. Jogalap: az Ön hozzájárulása (GDPR 6. cikk (1) a) pont)</li>
            <li><strong>Hírlevél küldése:</strong> Az ingyenes útmutatóhoz való hozzáférés biztosítása és kapcsolódó tájékoztatók küldése. Jogalap: hozzájárulás. Bármikor leiratkozhat az emailek alján található linkre kattintva.</li>
            <li><strong>Weboldalunk működtetése:</strong> Technikai sütik. Jogalap: jogos érdek</li>
            <li><strong>Látogatottsági statisztika:</strong> Google Analytics. Jogalap: hozzájárulás</li>
          </ul>

          <h2>4. Adatmegőrzési idő</h2>
          <p>A kapcsolatfelvételi form útján beérkező adatokat legfeljebb <strong>2 évig</strong> tároljuk, ezt követően töröljük. Kérésére bármikor hamarabb töröljük.</p>

          <h2>5. Adattovábbítás</h2>
          <p>Adatait harmadik félnek nem adjuk át, kivéve:</p>
          <ul>
            <li><strong>Resend (email küldés):</strong> A kapcsolatfelvételi üzenet kézbesítéséhez. Az adatot csak a kézbesítés céljára használjuk.</li>
            <li><strong>Google Analytics:</strong> Anonim látogatottsági adatok elemzésére.</li>
            <li><strong>Hatóságok:</strong> Jogszabályi kötelezés esetén.</li>
          </ul>

          <h2>6. Az Ön jogai</h2>
          <p>Az adatvédelmi jogszabályok alapján Önnek joga van:</p>
          <ul>
            <li><strong>Hozzáféréshez</strong> — tájékoztatást kérhet a kezelt adatairól</li>
            <li><strong>Helyesbítéshez</strong> — kérheti a pontatlan adatok javítását</li>
            <li><strong>Törléshez</strong> — kérheti adatai törlését ("elfeledtetéshez való jog")</li>
            <li><strong>Adathordozhatósághoz</strong> — kérheti adatai géppel olvasható formátumban</li>
            <li><strong>Tiltakozáshoz</strong> — tiltakozhat az adatkezelés ellen</li>
          </ul>
          <p>Jogai gyakorlásához írjon a <a href="mailto:info@nezor.hu">info@nezor.hu</a> címre. Panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (naih.hu).</p>

          <h2 id="sutik">7. Sütik (Cookie-k)</h2>
          <p>A weboldal az alábbi sütiket használja:</p>

          <h3>Szükséges sütik</h3>
          <p>Ezek a sütik a weboldal alapvető működéséhez szükségesek. Hozzájárulás nélkül is aktívak.</p>
          <table>
            <thead><tr><th>Süti neve</th><th>Cél</th><th>Lejárat</th></tr></thead>
            <tbody>
              <tr><td>nezor_cookie_consent</td><td>Cookie hozzájárulás tárolása</td><td>1 év</td></tr>
            </tbody>
          </table>

          <h3>Analitikai sütik (hozzájárulás szükséges)</h3>
          <p>Ezeket csak az Ön hozzájárulásával alkalmazzuk a weboldal látogatottságának méréséhez.</p>
          <table>
            <thead><tr><th>Süti neve</th><th>Cél</th><th>Lejárat</th></tr></thead>
            <tbody>
              <tr><td>_ga, _ga_*</td><td>Google Analytics látogatottság</td><td>2 év</td></tr>
            </tbody>
          </table>

          <h2>8. Adatbiztonság</h2>
          <p>Az adatokat SSL/HTTPS titkosítással védjük. A weboldalon beküldött adatok titkosított csatornán kerülnek továbbításra.</p>

          <h2>9. Változások</h2>
          <p>Fenntartjuk a jogot az adatvédelmi tájékoztató módosítására. Lényeges változás esetén a weboldalon értesítünk.</p>

          <h2>10. Kapcsolat</h2>
          <p>Adatvédelmi kérdéseivel forduljon hozzánk: <a href="mailto:info@nezor.hu">info@nezor.hu</a></p>

        </div>
      </div>
    </div>
  )
}
