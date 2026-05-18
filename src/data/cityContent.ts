import { City } from './cities'

// Deterministic variation selector — minden városhoz más kombináció
export function pick<T>(arr: T[], city: City, offset = 0): T {
  const index = (city.slug.charCodeAt(0) + city.slug.length + offset) % arr.length
  return arr[index]
}

// ─── WEBOLDAL TARTALOM ───────────────────────────────────────────────

export const weboldalIntro = [
  (c: City) => `Ha ${c.adjective} vállalkozásodnak nincs még weboldala, vagy a meglévő elavult, most itt az idő váltani. A NEZOR csapata ${c.inCity} és egész Magyarországon készít modern, gyors és keresőbarát weboldalakat — olyan oldalakat, amelyek valódi érdeklődőket hoznak, nem csak jól néznek ki. Minden projektünket az egyedi igények alapján tervezzük: felmérjük a célközönséget, az iparágat és a versenytársakat, majd egy olyan weboldalt építünk, amely kiemelkedik a ${c.adjective} piacon. Az átadástól számított 30 napig ingyenes supportot biztosítunk, és a határidőt írásban vállaljuk.`,
  (c: City) => `${c.name} vállalkozói egyre jobban felismerik: a digitális jelenlét ma már nem luxus, hanem alapkövetelmény. Ha valaki ${c.inCity} keres szolgáltatókat vagy termékeket, először Google-on néz utána. Ha nincs weboldalad, vagy az elavult, a potenciális ügyfelek egyszerűen a versenytársadhoz mennek. A NEZOR csapata segít ebben: gyors, mobilbarát és SEO-optimalizált weboldalakat készítünk, amelyek ${c.inCity} és az egész országban megtalálhatók a keresőkben. Nem sablonokon dolgozunk — minden oldalt az adott vállalkozás igényeire szabunk.`,
  (c: City) => `Weboldal nélkül ma már szinte láthatatlan egy vállalkozás — különösen ${c.inCity}, ahol a digitális verseny évről évre erősödik. A NEZOR digitális ügynökség ${c.adjective} és országos ügyfeleknek egyaránt készít professzionális weboldalakat, amelyek nemcsak szépek, hanem eredményeket is hoznak. Modern technológiával, gondosan megtervezett UX-szel és teljes SEO-optimalizálással dolgozunk, hogy a te ${c.adjective} weboldalad a Google első oldalán legyen azoknál a keresési kifejezéseknél, amelyek az ügyfeleidet hozzák.`,
  (c: City) => `A ${c.adjective} piac folyamatosan fejlődik — és azok a vállalkozások maradnak versenyelőnyben, amelyek időben lépnek az online térbe. A NEZOR csapata ${c.inCity} is teljes körű weboldal-fejlesztési szolgáltatást nyújt: az első konzultációtól a kész oldal átadásáig minden lépést átláthatóan és határidőre teljesítünk. Weboldalainkat Google PageSpeed tesztjén 90+ pontszámra optimalizáljuk, és minden eszközön — telefon, tablet, desktop — tökéletesen működnek.`,
]

export const weboldalWhyOnline = [
  (c: City) => `${c.name} üzleti életében a vásárlók több mint 80%-a online keres rá a helyi szolgáltatókra, mielőtt dönt. Egy profi weboldal nem csak láthatóságot ad — bizalmat is épít. Ha valaki rátalál a vállalkozásodra a neten, és egy modern, informatív oldalt lát, sokkal nagyobb valószínűséggel veszi fel veled a kapcsolatot, mintha csak egy névjegykártyát kapna. A NEZOR weboldalak ezt a bizalmat már az első másodpercben megteremtik: tiszta design, gyors betöltés, egyértelmű üzenetek.`,
  (c: City) => `${c.inCity} a helyi keresések száma évente több tízezer "weboldal készítés", "asztalos ${c.inCity}", "fodrász ${c.inCity}" típusú kifejezéssel bővül. Azok a vállalkozások, amelyeknek van SEO-ra optimalizált weboldaluk, ezekből a keresésekből ingyenes, folyamatos érdeklődőket kapnak. Ez a legjobb hosszú távú befektetés: egy profi weboldal évekig dolgozik érted, hozza az ügyfeleket — hirdető büdzsé nélkül.`,
  (c: City) => `Ma már az emberek telefonon keresnek mindent — és ha az oldal lassan tölt be vagy mobilon nehéz kezelni, azonnal visszanavigálnak. ${c.inCity} is igaz: a mobilos keresések dominálnak. A NEZOR minden weboldalt "mobile-first" elvvel készít — először a telefon felületet tervezi meg, majd ezből buildeli fel a desktopos verziót. Így garantált, hogy ${c.adjective} ügyfeleid minden eszközön tökéletes élményt kapnak.`,
  (c: City) => `Egy jó weboldal ${c.inCity} 24 órán át, heti 7 napban "dolgozik" helyetted: bemutatja a szolgáltatásaidat, válaszol a leggyakoribb kérdésekre, és érdeklődőket gyűjt — akkor is, amikor te nem érsz rá. A NEZOR weboldalak erre vannak optimalizálva: stratégiailag elhelyezett CTA gombok, egyértelmű üzenetek és gyors elérhetőségek biztosítják, hogy a látogató valóban felvegye veled a kapcsolatot.`,
]

export const weboldalTypes = [
  (c: City) => `**Bemutatkozó weboldal** ${c.inCity}: ideális önálló vállalkozóknak, kisebb cégeknek, akik szeretnének professzionális online jelenlétet. 1-5 aloldalas, informatív struktúra, kapcsolatfelvételi form és Google Térkép integrációval.\n\n**Céges weboldal**: közepes és nagyobb vállalkozásoknak, több szolgáltatással és aloldallal. Blog modul, GYIK, referencia galéria és teljes SEO optimalizálás.\n\n**Landing page**: egyetlen termékre vagy szolgáltatásra fókuszált, konverzióra optimalizált oldal — hirdetési kampányokhoz ideális.\n\n**Portfólió weboldal**: kreatív szakembereknek, fotósoknak, designereknek, akik vizuálisan szeretnék bemutatni munkáikat.`,
  (c: City) => `${c.inCity} a legkeresettebb weboldal típusok: **bemutatkozó oldalak** helyi iparosoknak és szakembereknek, **szolgáltatói weboldalak** fodrászoknak, kozmetikusoknak, ügyvédeknek — és **céges weboldalak** nagyobb vállalkozásoknak. A NEZOR mindegyik típust teljeskörűen elkészíti: az első designtervtől a kész oldal átadásáig. Különösen erősek vagyunk a helyi SEO-ban: ${c.adjective} keresési kifejezésekre tudunk rangsorolni.`,
  (c: City) => `Minden vállalkozásnak más típusú weboldal illik. **Kis vállalkozás ${c.inCity}**: egy letisztult, 3-5 oldalas bemutatkozó weboldal a legjobb választás — gyors, olcsó, mégis professzionális. **Szakember vagy önálló vállalkozó**: portfólió oldal saját arculattal. **Növekvő cég**: teljes céges weboldal blog modullal, ami segít a Google rangsorolásban. **E-kereskedő**: webshop megoldás. A NEZOR minden méretű projektben jártas — és mindig az igényedre szabott megoldást javasolja.`,
]

export const weboldalProcess = [
  (c: City) => `Az együttműködés egy ingyenes konzultációval indul, ahol megismerjük a vállalkozásodat, céljaidat és a ${c.adjective} piac sajátosságait. Ezután elkészítjük a design tervet — amelyet te jóváhagysz, mielőtt nekiállnánk a fejlesztésnek. A kész oldalt minden eszközön teszteljük, majd élesítjük. Az átadás után 30 napig ingyenes supportot biztosítunk, és betanítunk az adminisztrációra.`,
  (c: City) => `Munkánk négy fázisból áll. **Konzultáció**: felmérjük az igényeidet és a ${c.adjective} piacot. **Tervezés**: elkészítjük a vizuális tervet, amelyet jóváhagysz. **Fejlesztés**: megépítjük az oldalt, minden eszközön teszteljük. **Átadás**: betanítjuk a kezelést, 30 napig ingyenes support vár. Alap weboldalak 1-2 héten belül elkészülnek.`,
  (c: City) => `Nem dolgozunk hónapokig — az alapweboldalak 1-2 hét alatt elkészülnek ${c.inCity} is. A folyamat: először egy részletes briefet töltesz ki, majd mi elkészítjük a designtervet. Ha jóváhagyod, belekezdünk a fejlesztésbe. Átadás előtt minden részletet ellenőrzünk — mobilon, tableten, asztali gépen. Az élesítés után 30 napig bármit módosíthatunk ingyen.`,
]

// ─── WEBSHOP TARTALOM ────────────────────────────────────────────────

export const webshopIntro = [
  (c: City) => `${c.inCity} is egyre több vállalkozó ismeri fel: az online értékesítés nem a jövő, hanem a jelen. Egy jól felépített webshop ${c.inCity} és egész Magyarországon eléri a potenciális vásárlókat — 0-24 órában, heti 7 napban. A NEZOR csapata teljes körű webshop megoldásokat kínál: SimplePay és Barion fizetési integrációval, automatikus rendeléskezeléssel és mobilbarát designnal. Minden webshopunkat a vállalkozás igényeire szabjuk, és az átadás után betanítjuk a kezelést is.`,
  (c: City) => `Ha ${c.inCity} webshopot szeretnél indítani, a NEZOR a legjobb választás: teljes körű e-kereskedelmi fejlesztéssel, fizetési rendszer integrációval és folyamatos supporttal dolgozunk. A webshopod ${c.adjective} és országos vásárlókat egyaránt elér — és amíg te alszol, a rendelések automatikusan beérkeznek. Minden webshopunkhoz biztosítunk betanítást, hogy magabiztosan kezeld a termékkatalógust, a rendeléseket és a szállítást.`,
  (c: City) => `Az online kiskereskedelem ${c.inCity} is robbanásszerűen növekszik — és azok a vállalkozások, amelyek most lépnek be, komoly előnyt szereznek. A NEZOR webshop megoldásai nem csupán egy "kosár és fizetés" funkciót adnak: teljes értékesítési ökoszisztémát építünk — raktárkezeléssel, automatikus számlázással, szállítási integrációval és SEO-optimalizálással. ${c.adjective.charAt(0).toUpperCase() + c.adjective.slice(1)} vásárlóid a Google-on is megtalálják a webshopod.`,
  (c: City) => `Miért fizetsz bérleti díjat egy fizikai üzlethelyiségért ${c.inCity}, ha egy webshoppal egész Magyarország a piacod? A NEZOR professzionális webshopokat épít — SimplePay, Barion és bankkártyás fizetéssel, GLS és DPD szállítással, automatikus Számlázz.hu integrációval. Az első rendeléstől a kiszállításig minden folyamat automatizált, hogy te az üzletfejlesztésre koncentrálhass.`,
]

export const webshopWhyNow = [
  (c: City) => `A magyarok online vásárlási szokásai drámaian megváltoztak az elmúlt évek során. ${c.inCity} és környékén is egyre többen rendelnek online — ruhát, élelmiszert, háztartási cikket, de akár helyi kézműves termékeket is. Ha nincs webshopod, ezeket a vásárlókat elveszíted. A jó hír: egy profi webshoppal nemcsak ${c.adjective} vásárlókat érsz el, hanem az egész országot — sőt, határon túlra is terjeszkedhetsz.`,
  (c: City) => `${c.inCity} a legjobb idő webshopot indítani az volt, amikor mindenki más is elindult — a második legjobb idő most van. Az online értékesítés nem merül ki a "rendelés felvételben": egy jól felépített webshop SEO-forgalmat hoz, email listát épít, és upsell lehetőségeket kínál. A NEZOR minden webshopot konverzióra optimalizál — hogy a látogatókból vásárlók legyenek.`,
  (c: City) => `Egy fizikai üzlet naponta 8-10 órát van nyitva, és csak ${c.inCity} érhető el. Egy webshop 24/7 nyitva van, és egész Magyarország a piacod. A NEZOR webshopjai mobilra optimalizáltak — a rendelések több mint 60%-a telefonról érkezik. Mobilbarát design, gyors betöltés és egyszerű checkout folyamat garantálja, hogy a ${c.adjective} vásárlók ne hagyják félbe a rendelést.`,
]

export const webshopFeatures = [
  (c: City) => `A NEZOR webshop megoldások tartalmazzák: **SimplePay és Barion** fizetési integrációt, **GLS, DPD és Magyar Posta** szállítást, **automatikus raktárkezelést** és értesítőket, **Számlázz.hu és Billingo** integrációt, **kupon és akció kezelőt**, valamint **teljes mobil optimalizálást**. ${c.inCity} és egész Magyarországon értékesíthetsz — mindenféle extra beállítás nélkül.`,
  (c: City) => `Minden ${c.adjective} webshopunkhoz biztosítjuk: egykattintásos fizetési megoldásokat (SimplePay, Barion, bankkártya, utánvét), automatikus rendelés-visszaigazolást emailben, raktárkészlet-kezelést és alacsony készlet értesítőket, integrált számlázást, és mobilra optimalizált termékoldalakat. ${c.inCity} vásárlóid zökkenőmentes élményt kapnak — tőled pedig csak a csomagolás marad.`,
]

export const webshopProcess = [
  (c: City) => `A webshop fejlesztés 4 fázisból áll. **Konzultáció ${c.inCity}**: felmérjük a termékeid, szállítási igényeid és célközönségedet. **Tervezés**: elkészítjük a webshop vizuális tervét. **Fejlesztés**: felépítjük a webshopot, integráljuk a fizetési és szállítási rendszereket, teszteljük. **Átadás és betanítás**: élesítjük, betanítunk a termékfeltöltésre és rendeléskezelésre. Alap webshopok 2-4 héten belül indulnak.`,
  (c: City) => `${c.inCity} webshop indítása egyszerűbb mint gondolnád. Első lépés: ingyenes konzultáció, ahol pontosan meghatározzuk az igényeidet. Második: design és funkciótérkép jóváhagyása. Harmadik: fejlesztés és tesztelés. Negyedik: élesítés és betanítás. Az egész folyamat 2-4 hét — és utána te kezeled a webshopod tőlünk kapott segítséggel.`,
]

// ─── FACEBOOK TARTALOM ───────────────────────────────────────────────

export const facebookIntro = [
  (c: City) => `Facebook és Instagram hirdetések ${c.inCity} — a NEZOR csapata célzott Meta kampányokat kezel, amelyek pontosan a te potenciális ügyfeleidet érik el. Nemcsak beállítjuk a hirdetéseket: naponta monitorozzuk, optimalizáljuk és finomítjuk az eredmények alapján. Havi részletes riportot küldünk, így mindig tudod, mire megy a büdzsé. ${c.inCity} és egész Magyarországon kezelünk kampányokat — minden iparágban.`,
  (c: City) => `Ha ${c.inCity} vállalkozásodnak gyorsan kellene új ügyfeleket szerezni, a Facebook és Instagram hirdetés a leghatékonyabb módszer. A NEZOR csapata különböző iparágakban szerzett tapasztalattal optimalizálja a kampányaidat — pontos célközönség-beállítással, vonzó kreatívokkal és napi optimalizálással. Napi 1000-2000 Ft-tal is érdemi eredmény érhető el ${c.inCity} helyi célzással.`,
  (c: City) => `${c.name} és Magyarország más városaiban a Meta hirdetési rendszer az egyik leghatékonyabb ügyfélszerzési eszköz kis- és középvállalkozásoknak. A NEZOR professzionális hirdetéskezelése ${c.inCity} is elérhető: célközönség-meghatározástól a kampány futtatásán át a havi riportig mindent elvégzünk. Te az üzletedre koncentrálhatsz — mi kezeljük a hirdetéseket.`,
  (c: City) => `Facebook hirdetés ${c.inCity} — ez az egyik legtöbb ${c.adjective} kis- és középvállalkozás által keresett digitális marketing szolgáltatás. A NEZOR csapata tapasztalt hirdetéskezelőkből áll: ismerjük a Meta algoritmusát, a hatékony kreatívok titkait és a ${c.adjective} célközönség elérésének legjobb módszereit. Átlátható árazással, napi munkával és mérhető eredményekkel dolgozunk.`,
]

export const facebookWhyMeta = [
  (c: City) => `Miért érdemes Facebook hirdetést indítani ${c.inCity}? Mert több mint 3,8 millió magyar Facebook-felhasználóból pontosan azokat éred el, akik a te célközönséged — életkor, helyszín, érdeklődési kör és viselkedés alapján. ${c.inCity} és 50 km-es körzetében akár napi 1000 célzott felhasználót is elérhet a hirdetésed. Ezek nem véletlenszerű emberek — hanem pontosan azok, akik a legjobban konvertálnak.`,
  (c: City) => `A Meta hirdetési rendszer (Facebook + Instagram) ${c.inCity} is az egyik legjobb ROI-val bíró marketing eszköz. Miért? Mert a célzás pontossága páratlan: meghatározhatod, hogy csak ${c.adjective} 25-45 éves, vállalkozás iránt érdeklődő emberek lássák a hirdetésedet. Egy jól optimalizált kampánynál a kattintási költség akár 50-100 Ft is lehet — messze a hagyományos hirdetési csatornák alatt.`,
  (c: City) => `Az Instagram és Facebook együttes használata ${c.inCity} lehetővé teszi, hogy a potenciális ügyfeleidet ott érd el, ahol a legtöbb időt töltik. A Meta Audience Network ráadásul +40% extra elérést biztosít az applikációkon belül is. A NEZOR kampányai mindkét platformon futnak — optimalizálva az adott célközönségre és formátumra (feed, story, reels).`,
]

export const facebookTypes = [
  (c: City) => `**Márkaismertségi kampányok**: ${c.inCity} vállalkozásod nevét és szolgáltatásait mutatjuk be a célközönségnek — ideális induló vállalkozásoknak. **Lead generáló kampányok**: közvetlenül érdeklődőket gyűjtünk — nevet, emailt, telefonszámot. **Weboldal forgalom kampányok**: hirdetéssel terelünk látogatókat a weboldaladra. **Remarketing kampányok**: az oldaladat már meglátogató felhasználókat szólítjuk meg újra — ezek a legjobb konverziós arányú kampányok.`,
  (c: City) => `${c.inCity} a legeredményesebb kampánytípusok: **helyi célzású forgalom kampányok** (pl. "étterem ${c.inCity}" keresők elérése), **lead form kampányok** (érdeklődők adatainak közvetlen gyűjtése a Facebookon belül), és **retargeting kampányok** (akik már jártak a weboldaladon). A NEZOR az iparágad és céljaid alapján ajánlja a legjobb kombinációt.`,
]

export const facebookProcess = [
  (c: City) => `Az együttműködés egy ingyenes konzultációval indul, ahol megismerjük a vállalkozásodat, célközönségedet és hirdetési céljaidat ${c.inCity}. Ezután elkészítjük a kampánystratégiát, a szövegeket és vizuálokat, majd elindítjuk a hirdetéseket. Az első héttől naponta optimalizálunk — módosítjuk a célzást, teszteljük a kreatívokat és finomítjuk a büdzsét. Havi részletes riportban összefoglaljuk az eredményeket.`,
  (c: City) => `**Hét 1**: célközönség meghatározás és kampánystratégia ${c.inCity}. **Hét 2**: kreatívok és szövegek elkészítése, kampány indítás. **Hét 3-4**: optimalizálás az első adatok alapján. **Hónap vége**: részletes riport — elérés, kattintások, leadek, konverziók, büdzsé felhasználás. Ezután folyamatosan finomítjuk a kampányokat a legjobb eredményért.`,
]
