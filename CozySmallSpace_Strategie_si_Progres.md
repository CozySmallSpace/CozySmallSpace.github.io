# CozySmallSpace — Strategie și Progres Proiect

*Document actualizat: 20 august 2026 (TOATE cele 24 de categorii / 96 de produse au acum linkuri Amazon reale — 97/97 cu tot cu salteaua recomandată — poze hero complete pe toate paginile, layout lărgit și optimizări de accesibilitate/SEO aplicate pe tot site-ul)*

---

## 1. Informații generale despre proiect

| | |
|---|---|
| **Nume site** | CozySmallSpace |
| **URL live** | https://cozysmallspace.github.io |
| **Repo GitHub** | `CozySmallSpace/cozysmallspace.github.io` |
| **Nișă** | Decor și organizare pentru spații mici / apartamente |
| **Model de monetizare** | Amazon Associates (comision din vânzări) |
| **Stack tehnic** | HTML/CSS static, găzduit gratuit pe GitHub Pages — cost zero |
| **Proprietar** | Albert Szakacs (albertzsoltszakacs1978@gmail.com) |

---

## 2. Cont Amazon Associates — configurat complet ✅

| | |
|---|---|
| **Associate ID / Tracking ID** | `cozysmalls0e4-20` |
| **Store ID** | `cozysmallspace` |
| **Status fiscal (W-8BEN)** | Completed — rată de reținere aplicabilă: **0.0%** |
| **Metodă de plată** | Cont bancar Revolut (IBAN RO..., terminație ****048) — activ, fără acțiuni suplimentare |
| **Program înscris** | Doar Amazon.com (SUA) — nu și UK/Germania/alte piețe (vezi secțiunea de strategie) |
| **Termen limită PA-API** | 3 vânzări confirmate necesare până la ~mijlocul lui februarie 2027 (180 zile de la înscriere) |

---

## 3. Structura site-ului (actualizată)

- **Homepage** (`index.html`) — grid cu 24 carduri (toate articolele), amestecate intenționat (nu grupate ieftin→scump, ci interliniate) ca vizitatorul să descopere și categoriile mai scumpe
- **24 articole publicate** (16 originale + 4 categorii noi "renter/storage" + 4 categorii premium noi, cu produse scumpe — vezi 6e), fiecare cu 4 produse recomandate = **96 produse în total, TOATE cu linkuri de afiliat reale, verificate manual** (rating, recenzii, fără avertismente Amazon) — plus o **saltea recomandată separat** (linkuri reale = 97 în total, vezi categoria Bedroom Furniture Sets)
- **Fiecare articol are acum, pe lângă produse (nou, implementat 17 august):**
  - **poză hero** sus, relevantă pentru categorie (poză stock liberă de drepturi, aceeași folosită și pentru pinul de Pinterest)
  - **tabel comparativ rapid** (Produs / Nivel preț / Pentru cine e bun) imediat sub introducere, ca vizitatorul să poată compara dintr-o privire fără să citească tot articolul
  - **secțiune FAQ** cu 3 întrebări/răspunsuri specifice fiecărui produs (greutate suportată, siguranță pentru chiriași, timp de montaj, etc.) — bun și pentru SEO (Google favorizează conținut de tip Q&A)
  - **secțiune "You might also like"** cu 3 articole conexe la final, pentru navigare internă (crește timpul petrecut pe site și numărul de pagini vizitate per vizită)
- **Pagină nouă `about.html`** — cine suntem, cum alegem produsele (criterii: recenzii, rating, badge-uri Amazon), cum câștigăm bani — răspunde la lipsa de încredere pe care o poate simți un vizitator nou; link "About" adăugat în navigare pe toate paginile
- **Homepage — hero banner cu poză** (nou, 18 august): secțiunea de sus a homepage-ului a fost înlocuită cu un banner mare, cu poză reală de fundal (`multifunctional-furniture-studio.jpg`) și text alb suprapus ("Make your small space feel like home"), cu gradient întunecat reglat astfel încât textul să rămână lizibil fără să întunece prea tare poza — testat și confirmat OK pe desktop și telefon
- **Meniu "Categories"** — buton lângă "Home" în navigare, cu meniu dropdown pe 2 coloane care listează toate cele 16 ghiduri grupate pe categorie (Storage & Organization, Multi-functional Furniture, Lighting, Renter-Friendly) — implementat complet responsive (pe mobil se reordonează și rămâne pe ecran)
- **Buton "Check price on Amazon"** — stil premium (gradient, umbră, efect hover), aplicat unitar pe toate paginile (bug vechi de CSS lipsă, reparat)
- **Pagini legale** — `affiliate-disclosure.html`, `privacy-policy.html` (variante simple, de rescris mai detaliat — rămâne pe listă)
- **Stylesheet comun** — `style.css`, cache-busting la `?v=18` (crescut de fiecare dată când s-a modificat CSS-ul — v=12 la adăugarea About, v=13/v=14 la hero banner, v=15-16 la cele 8 categorii noi, v=17 la fix-urile de accesibilitate, v=18 la lărgirea layout-ului)
- **Layout lărgit (20 august)** — container principal mărit de la 1200px la 1680px, ca site-ul să folosească mai bine ecranele late; grid-ul de pe homepage aranjat explicit pe 6 carduri/rând pe desktop (4 rânduri × 6 = 24), cu mai mult spațiu pe fiecare card ca să nu mai pară înghesuit
- **Optimizări accesibilitate/SEO (20 august), din raportul PageSpeed Insights** — adăugat landmark semantic `<main>` pe toate cele 28 de pagini (lipsea complet); reparat contrastul de culoare la etichetele de categorie (verde/auriu/roz erau prea deschise pe fundal, sub pragul WCAG AA); adăugat `aria-label` descriptiv la linkul "Learn more" din banner-ul de disclosure (apărea pe toate paginile, text prea generic pentru screen readere)
- **Verificare FlexOffers adăugată** (18 august) — etichetă `<meta name="fo-verify" content="5258257e-eb83-4478-aecd-1d6e6bb52056" />` în `<head>`-ul `index.html` — **cerere respinsă** ulterior (vezi 6d), eticheta a rămas în cod fără efect, nu deranjează nimic
- **Google Analytics 4 instalat pe toate cele 24 de pagini** (19 august) — cod `gtag.js` cu Measurement ID **`G-3JDT662GT5`**, inserat imediat după `<head>` pe fiecare pagină; confirmat funcțional prin Realtime (vizită de test detectată). Motiv: separă traficul real (Google Analytics, instalat direct pe site) de cifrele Pinterest, care includ și click-urile proprii de test

---

## 4. Linkuri de afiliat — STATUS: 96/96 COMPLET ✅🎉 (97/97 cu salteaua)

### Cele 8 articole originale (produse ieftine, buget general)

**1. `no-drill-wall-shelves.html`**
- Command Display Ledges — `https://amzn.to/4csHQ51`
- Wisfame Small Adhesive Wall Shelves (Set of 3) — `https://amzn.to/465IzFE`
- Yieach 15" Acrylic Shelves (4-Pack) — `https://amzn.to/4wxreQP`
- Wisfame Black Metal Floating Shelves (Set of 2) — `https://amzn.to/4csKhEH`

**2. `no-wiring-lighting-ideas.html`**
- Govee LED Strip Lights — `https://amzn.to/3UC4odm`
- Philips Hue Essential Smart Bulb — `https://amzn.to/4gbUI0u`
- Globe Electric Plug-In Pendant Light — `https://amzn.to/463rOLd`
- Koopala Rechargeable LED Wall Sconces — `https://amzn.to/3U0Hr3r`

**3. `multifunctional-furniture-studio.html`**
- SONGMICS Folding Storage Ottoman Cube — `https://amzn.to/4wXFHGI`
- HOJINLINERO Round Lift-Top Coffee Table — `https://amzn.to/3TYZlUo`
- VASAGLE Folding Drop Leaf Dining Table — `https://amzn.to/4gcY9Eh`
- COMAX Futon Sofa Bed — `https://amzn.to/4g1xwDj`

**4. `small-bedroom-storage-ideas.html`**
- Vtopmart Clear Plastic Drawer Organizers (25-Piece Set) — `https://amzn.to/4wAZV8r`
- Homelux Theory Over-the-Door Hanging Organizer (6-Tier) — `https://amzn.to/4gh8hMj`
- IRIS USA Under-Bed Storage Bin (3-Pack, 53 Qt) — `https://amzn.to/4xI3URl`
- Simple Houseware Adjustable Closet Hanging Rod — `https://amzn.to/4zmXBnZ`

**5. `mirrors-for-small-rooms.html`**
- Wood Framed Full-Length Floor Mirror (55"x28") — `https://amzn.to/3UCxqJV`
- Self-Adhesive Acrylic Mirror Tiles (4-Pack) — `https://amzn.to/4gd0LSB`
- Elements Round Wall Mirror Set (7 pieces) — `https://amzn.to/4xNGVoc`
- Arched Metal-Frame Wall Mirror (24"x36") — `https://amzn.to/4qmvgKj`

**6. `kitchen-storage-small-apartments.html`**
- Expandable Kitchen Cabinet Organizer Shelf (2-Pack) — `https://amzn.to/4wAXxhV`
- Kitsure Adjustable Over-the-Sink Dish Drying Rack — `https://amzn.to/463s9xs`
- Simple Houseware 3-Tier Stackable Can Organizer — `https://amzn.to/4cKy5iG`
- Heavy Duty Pot & Pan Rack Organizer — `https://amzn.to/4hCawft`

**7. `room-dividers-studio-apartments.html`**
- No-Drilling Tension Rod Curtain Divider — `https://amzn.to/4g18tAj`
- Freestanding Folding Privacy Screen — `https://amzn.to/4zqrgNa`
- VASAGLE 5-Tier Bookcase Room Divider — `https://amzn.to/3SxW5ih`
- Kokorona Rolling Folding Privacy Screen with Lockable Wheels — `https://amzn.to/3S7T8ov`

**8. `small-bathroom-storage-ideas.html`**
- Livilord 3-Tier Over-the-Toilet Storage — `https://amzn.to/4bRrdjl`
- Adhesive Shower Caddy, Stainless Steel (7-Pack) — `https://amzn.to/3RXbicy`
- Clear Stackable Acrylic Storage Drawers (4-Pack) — `https://amzn.to/3UgZeU3`
- CANYAVE Over-the-Door Towel Rack — `https://amzn.to/4gfU0zc`

### Cele 8 articole noi (produse cu preț mai mare, $150-500 — comision mai mare per vânzare)

**9. `space-saving-beds-with-storage.html`**
- Bestier Queen Size Bed Frame with Headboard Shelf & LED — `https://amzn.to/4wQPfmh`
- AFI Concord Queen Platform Bed with Storage Drawers, Walnut — `https://amzn.to/4qo6VnF`
- Merax Multifunctional Wood Daybed with Drawers & Sofa Storage Bed — `https://amzn.to/4cDTOJ1`
- AFI Acadia Twin Wood Daybed with 2 Storage Drawers, White — `https://amzn.to/3S8F5iv`

**10. `compact-wardrobes-closet-systems.html`**
- Whitmor Modern Wardrobe — `https://amzn.to/3SF42lI`
- VIPEK V5C Heavy Duty Covered Clothes Rack — `https://amzn.to/4qiRInA`
- ClosetMaid SuiteSymphony Wood Closet Organizer System — `https://amzn.to/4ziSsxj`
- Oggi DOI 3-Door Wardrobe, Sonoma Oak — `https://amzn.to/4wzmDO9`

**11. `modular-convertible-sofas-small-living-rooms.html`**
- COMFA Sofa Bed, Convertible Sofa Bed, Folding Loveseat Couch — `https://amzn.to/4xHZhH1`
- Rwatjairex 93" L-Shaped Modular Sectional Sofa — `https://amzn.to/4qjWsJR`
- 3-Seater Boneless Couch Sofa Bed, Corduroy Oversized Loveseat — `https://amzn.to/4wsyc9F`
- 79" 5-in-1 Convertible Sofa Bed Couch, Modular Sectional, Loveseat — `https://amzn.to/4xaM7CI`

**12. `small-space-home-office-desks.html`**
- TEMI Small Computer Desk Folding Table, No Assembly, with Power Outlet — `https://amzn.to/4qnbsqm`
- Small Folding Desk with Outlets, Fold-Out Murphy Desk Craft Table — `https://amzn.to/4qiTrJA`
- JOY worker Small Electric Standing Desk with Monitor Stand & Storage — `https://amzn.to/3SyMAiR`
- VITAHOME 60" L-Shaped Corner Desk with Power Lift & LED — `https://amzn.to/4hDVHci`

**13. `balcony-small-patio-furniture.html`**
- 3-Piece Bistro Set, Anti-Rust Cast Aluminum Table & Chairs — `https://amzn.to/3UhPSaD`
- Quality Outdoor Living Hermosa 3-Piece Chair Set, Aluminum & Wicker — `https://amzn.to/4bU0NgV`
- Christopher Knight Home Hanging Egg Chair with Stand — `https://amzn.to/4xJ9S4o`
- Outdoor Daybed with Canopy, Patio Loveseat Sofa Set — `https://amzn.to/4cMEdqH`

**14. `space-saving-dining-sets.html`**
- HOOBRO 3-Piece Industrial Dining Table Set — `https://amzn.to/4xOzM76`
- Tangkula 3-Piece Bar Set with 2 Bar Stools — `https://amzn.to/4zsnGSO`
- Solid Wood Small Dining Table, 23.6"-47.2" Expandable — `https://amzn.to/4qtFVTK`
- Folding Dining Table with Storage, Kitchen Table for Small Space — `https://amzn.to/4bUySxd`

**15. `entryway-storage-benches.html`**
- Hzuwwh Shoe Storage Bench with Cushion, 18 Cubbies — `https://amzn.to/4hxXPCh`
- AQMUELE Hall Tree with Bench, Shoe Storage & 11 Hooks — `https://amzn.to/4gBzcUd`
- Linon Laredo Storage Bench — `https://amzn.to/3RQKJWs`
- SIMPLIHOME Kingsley 44" Wide Vegan Leather Storage Ottoman — `https://amzn.to/4x6h76J`

**16. `tv-stands-media-consoles.html`**
- WAVE 58" TV Stand, Mid Century Modern Entertainment Center — `https://amzn.to/4comrtG`
- Corner Entertainment Center for 55-65 Inch TV — `https://amzn.to/4wvWu2w`
- Winsome Kola Cappuccino TV Stand — `https://amzn.to/4gABp2f`
- Wooden Floating TV Cabinet Stand, Wall Mounted — `https://amzn.to/4zlJNKh`

**Notă:** fiecare produs a fost verificat manual — rating peste 4.3, recenzii multe, fără avertisment "Frequently Returned Item" sau "No featured offers available". La categoriile noi, mixul e gândit ca 1 variantă buget ($80-200) + 3 variante mid/premium ($150-500), ca să crească plafonul de comision per vânzare, nu doar traficul.

### 4 categorii noi "renter/storage" — LINKURI REALE COMPLETE (19 august) ✅

**17. `dorm-room-storage-organization-ideas.html`** (articol de sezon, back-to-school SUA)
- Amazon Basics Underbed Storage Bag (2-Pack) — `https://amzn.to/3U61m0V`
- JARLINK Over-the-Door Organizer (5-Shelf) — `https://amzn.to/4ihvEI3`
- Bed Risers Heavy Duty (4-Pack) — `https://amzn.to/4gsgLAm`
- Portable Shower Caddy Tote, Top Reviewed for Spaciousness — `https://amzn.to/4xLNLKF`

**18. `command-hooks-adhesive-wall-organizers.html`**
- Command Large Utility Hooks (7-Hooks, 12-Strips) — `https://amzn.to/3UGMHcF`
- Command 15 lb Heavyweight Wall Hook — `https://amzn.to/4zpYQTr`
- Command Small Wire Toggle Hooks (32-Pack) — `https://amzn.to/4hHoEUL`
- Command Medium Cabinet Organizer (2-Pack) — `https://amzn.to/4ihAW6n`

**19. `no-drill-curtain-rods-tension-rods.html`**
- EZFurni Tension Curtain Rod (42"–76") — `https://amzn.to/4bTw57E`
- ALLZONE Heavy Duty Tension Shower Curtain Rod (42"–83") — `https://amzn.to/4wx9c13`
- ENJOYBASICS Tension Curtain Rod, 2-Pack (32"–64") — `https://amzn.to/4xaTlXf`
- Cupboard Bars Tension Rods (6-Pack, 9.8"–15.7") — `https://amzn.to/4xaTBWd`

**20. `under-sink-storage-organizers.html`**
- SimpleHouseware Under Sink 2-Tier Expandable Organizer — `https://amzn.to/3SiRq3t`
- YouCopia SinkSuite Under-Sink Turntable — `https://amzn.to/4qoD3rd`
- madesmart Mini 2-Tier Multi-Purpose Organizer — `https://amzn.to/4xOWc8b`
- Command Under Sink Organization Essentials (4 Hooks, 6 Strips) — `https://amzn.to/4cReCgj`

**Notă avertismente Amazon:** la mai multe produse candidate (mai ales bare de perdea) a apărut eticheta "Frequently returned" — toate au fost sărite sistematic, înlocuite cu alternative curate.

### 4 categorii premium noi — LINKURI REALE COMPLETE (20 august) ✅

Categorii alese special pentru comision mai mare per vânzare (vezi 6e pentru explicația ratelor reale de comision Amazon — la 3%, produsele scumpe aduc mult mai mult per vânzare). Poze hero adăugate din Pexels, procesate și montate pe toate 4.

**21. `murphy-wall-beds-small-bedrooms.html`**
- Create-A-Bed Queen Deluxe Murphy Bed Hardware Kit (DIY/Budget) — `https://amzn.to/4xUMuBj`
- Arason Creden-ZzZ Cabinet Bed in Traditional Pekoe, Queen (Complete, fără montaj pe perete) — `https://amzn.to/3S2MBvk`
- Night & Day Furniture Murphy Cube Cabinet Bed with Mattress, Cherry (saltea inclusă) — `https://amzn.to/3U1LwVa`
- Twin Size Deluxe Murphy Bed Kit, Horizontal (studiouri mici) — `https://amzn.to/3UGuYSI`

**22. `electric-fireplace-tv-stands.html`**
- BREEZEHEAT Electric Fireplace TV Stand, 36" Fireplace, până la TV 80" ("Overall Pick") — `https://amzn.to/4cQsQhs`
- 48" TV Stand with 18" Electric Fireplace Insert, până la TV 55" — `https://amzn.to/4iinwXG`
- Furinno LED Fireplace Corner TV Stand, până la TV 55" ("Overall Pick") — `https://amzn.to/4xPFNjU`
- OneBlis 90" TV Stand with 50" Electric Fireplace, până la TV 100" ("Overall Pick") — `https://amzn.to/4g2wcQE`

**23. `compact-sectional-sofas-small-living-rooms.html`**
- 73" Small Sectional Sofa with Reversible Chaise, Linen Fabric (73" lățime) — `https://amzn.to/4xMXal4`
- 84" Convertible Sectional Sofa with Reversible Chaise & Storage Ottoman — `https://amzn.to/4xMl4xb`
- HUILA ACHE Modular Sectional, 6-Seater with Storage (piese separate) — `https://amzn.to/4qnrdNM`
- Roll & Cast 80" Sectional Sleeper Sofa Couch (funcție de pat) — `https://amzn.to/4xQgNZK`

**24. `bedroom-furniture-sets-small-apartments.html`**
- Evermaigh Bedroom Set, Queen Floating Bed Frame & Nightstands (Starter, 3 piese) — `https://amzn.to/3Smf5jz`
- 5-Piece Farmhouse Queen Bedroom Set with Nightstands & Dresser ("Overall Pick") — `https://amzn.to/4zub7Gu`
- New Classic Valentine 4-Piece Wood Queen Bedroom Set with Mirror — `https://amzn.to/4ycBwHx`
- Qizoon Upholstered Bed Frame with 2 LED Nightstands, 3-Piece Set (Premium) — `https://amzn.to/4xbclom`
- **Bonus — saltea recomandată separat** (niciun set de mobilă de pe Amazon nu vine cu saltea inclusă, e nevoie de un produs separat): Nectar 12" Memory Foam Mattress, Queen ("Overall Pick", 161.663 recenzii) — `https://amzn.to/4qtp97a`, menționată direct în articol lângă produsul 2, cu link propriu de afiliat

**Notă importantă descoperită la această categorie (20 august):** adresa de livrare din contul Amazon era setată pe România, ceea ce făcea multe produse să arate fals ca indisponibile ("No featured offers available" / "cannot be shipped to your selected delivery location"). Rezolvat prin schimbarea adresei de livrare pe un cod poștal din SUA (10001, New York) — după asta, ofertele reale au apărut normal. **Recomandare pentru orice căutare viitoare de produse:** verifică mereu că adresa de livrare din cont e setată pe SUA, altfel riști să respingi produse bune doar din cauza restricției de livrare din România.

---

## 5. Procesul pas-cu-pas pentru fiecare produs (reamintire, pentru articole viitoare)

1. Caută numele produsului pe Amazon.com (logat cu contul de Associate)
2. Intră pe **pagina individuală a produsului** (nu rămâne pe rezultate de căutare)
3. Verifică: rating bun (peste 4.3 ideal), recenzii multe, **fără avertisment "Frequently Returned Item"** sau "No featured offers available"
4. Apasă **"Get Link"** din bara SiteStripe (sus)
5. **Dezactivează comutatorul "Show local matches"** (altfel vizitatorii din afara SUA sunt redirecționați spre magazine locale unde NU se ia comision)
6. Selectează **Short Link** → apasă **"Copy affiliate link"**
7. Link-ul se inserează în articol ca buton "Check price on Amazon →"

---

## 6. Strategia de monetizare — explicată

### De ce nu există poze reale de PRODUS pe site (situație confirmată, definitivă)
- SiteStripe a eliminat opțiunea de embed imagini din **decembrie 2023**
- **Native Shopping Ads** (altă soluție posibilă, investigată) a fost **eliminat de Amazon din septembrie 2023** — nu mai funcționează deloc
- Concluzie: **nu există nicio variantă legitimă și gratuită** de a afișa poze reale de produs Amazon înainte de acces PA-API
- Alternativă legală, deja folosită pe Pinterest (vezi secțiunea 6b): poze stock generice, libere de drepturi, care NU pretind a fi produsul exact — doar ilustrează atmosfera/camera

### De ce nu există prețuri fixe pe site
- Amazon interzice afișarea de prețuri fixe, scrise manual (se schimbă des; un preț greșit poate duce la suspendarea contului)
- Se folosește doar butonul generic **"Check price on Amazon →"**

### Compensare prin text (implementat)
- Casetele "Based on our research" din fiecare articol menționează numărul real de recenzii și badge-uri oficiale Amazon ("Overall Pick", "Top Reviewed for...", etc.)
- Textul homepage explică metoda de selecție (rating-uri reale, nu aspect vizual)

### Calea spre automatizare completă (poze + prețuri live)
- Necesită acces PA-API, condiționat de **3 vânzări confirmate în primele 180 de zile** (termen: ~mijlocul lui februarie 2027)
- Pentru a MENȚINE accesul după prima aprobare, e nevoie de vânzări constante lunar (reguli variabile, de verificat la momentul respectiv)

### Comision din afara SUA
- Contul e înscris DOAR în programul Amazon.com (SUA)
- Vizitator din UK/Germania redirecționat automat spre magazin local (OneLink) care cumpără acolo → **NU generează comision**
- Ai spus că vrei să te înscrii și pe Amazon.ca (Canada) — pasul rămâne de făcut: presupune un tracking ID separat + un interviu fiscal separat, la portalul `affiliate-program.amazon.ca` (nu la cel de SUA). Status curent: SUA = "Completed", Canada = "Incomplete" în contul tău — deocamdată doar informativ, nu blochează nimic din câștigurile din SUA.

### Reclame pe site (AdSense) — discutat, neimplementat
- Ai întrebat dacă poți pune și reclame Google AdSense pe lângă linkurile de afiliat — răspuns: da, tehnic sunt compatibile (multe site-uri de affiliate marketing rulează ambele), dar AdSense are prag minim de trafic/calitate pentru aprobare, iar la traficul actual (sub 400 afișări/lună) veniturile ar fi neglijabile. Rămâne o opțiune de reevaluat după ce traficul crește semnificativ.
- Reevaluat pe 18 august: AdSense nu mai are prag oficial de trafic/vechime pentru aprobare, dar tot n-are sens acum — reclame afișate pe un site cu trafic ~0 aduc 0 venit, doar încarcă vizual paginile degeaba. Rețele fără prag minim de trafic: **Ezoic**. Rețele cu prag minim: **Mediavine** (~50.000 sesiuni/lună), **AdThrive** (~100.000 pageviews/lună) — de reevaluat abia după ce site-ul are trafic organic real.

---

## 6d. Extindere monetizare — alte programe de afiliere (discutat/în lucru, 18 august)

### Comision Amazon confirmat pentru categoriile site-ului
- Categoriile "Furniture" și "Home" au comision **3.00%** la Amazon Associates (redus față de anii trecuți) — la un preț mediu de produs ~80-150$, o vânzare aduce ~2,50-4,50$
- Cookie-ul Amazon ține **24 de ore** (89 de zile doar pentru produse puse în coș) — comisionul se ia pe TOT ce cumpără vizitatorul în fereastra respectivă, nu doar pe produsul din link

### Regula "3 vânzări în 180 de zile" — clarificată
- Confirmat: regula e reală și activă și în 2026. Dacă nu sunt atinse 3 vânzări calificate în primele 180 de zile, Amazon **închide contul de afiliat**
- **Important:** site-ul propriu-zis NU e afectat, doar contul de afiliat Amazon — se poate reaplica oricând mai târziu, odată ce există trafic real
- Comisioanele deja câștigate înainte de închidere nu sunt automat pierdute (forfeitarea se aplică mai ales la închideri din motive de încălcare a regulilor, nu la simpla inactivitate)

### Wayfair prin FlexOffers — RESPINS ❌ (19 august)
- Wayfair nu are program propriu — se accesa prin rețeaua **FlexOffers** (gratuit, fără taxă de intrare)
- Comision Wayfair: **până la 7%** (peste dublu față de cei 3% de la Amazon pentru mobilier), cookie **7 zile**
- **Status 18 august:** cont FlexOffers creat cu succes (publisher individual, nu companie), sursă de trafic adăugată (`https://cozysmallspace.github.io`), site verificat prin eticheta `<meta name="fo-verify">` adăugată în `index.html`
- **Status 19 august: cererea a fost RESPINSĂ** de FlexOffers (confirmat prin captură de ecran din panoul de cont) — Wayfair prin FlexOffers **eliminat din plan**. Eticheta `fo-verify` a rămas în cod, fără efect, nu deranjează nimic
- Motivul respingerii nu a fost explicat de FlexOffers (practică obișnuită la conturi noi/fără trafic) — nu se reaplică acum; se poate reîncerca peste câteva luni, după ce site-ul are trafic real

### CJ Affiliate (Commission Junction) — cont creat și activat integral ✅ (19 august)
- Alternativă găsită după respingerea FlexOffers — rețea mare de afiliere, gratuită la înscriere
- Cont publisher creat, **activat integral**: W-8BEN completat, metodă de plată configurată (cont Revolut, IBAN/SWIFT)
- **Wayfair North America NU e disponibil pe CJ** (verificat direct în catalogul de branduri) — există doar "Wayfair UK", irelevant pentru un site orientat spre SUA
- În loc de Wayfair, aplicat la **VIGO Industries** (mobilier baie/bucătărie, categorie Furniture/Bed & Bath) — comision **6%**, dublu față de cei 3% de la Amazon pentru aceeași categorie
- **Status aplicare VIGO:** Pending Application (în așteptarea aprobării brandului, nu doar a contului CJ, care e deja activ)
- Pas următor, după aprobare: generare linkuri VIGO prin panoul CJ, inserate ca buton `buy-btn` suplimentar (sau alternativă) pe produsele relevante, plus actualizare `affiliate-disclosure.html` să menționeze și CJ Affiliate/VIGO

### Etsy — respins deocamdată (cere plată)
- Etsy funcționează prin rețeaua **Awin**, care cere o taxă de înscriere de 5$ (rambursabilă după prima vânzare, dar tot presupune o plată inițială cu cardul)
- Ai cerut explicit variantă fără nicio plată → Etsy prin Awin **eliminat din plan** pentru moment
- Alternativă fără taxă, de investigat pe viitor: **Sovrn Commerce** sau **Skimlinks** — rețele de "auto-monetizare" care transformă automat linkurile către mii de magazine (Etsy inclus) în linkuri de afiliat, fără înscriere separată la fiecare brand; iau un mic procent din comision ca taxă de intermediere, dar fără cost din buzunar

### Notă despre linkurile Amazon și geo-redirect (confuzie clarificată)
- Testând linkurile Amazon din România, ele redirecționează spre `amazon.co.uk` cu o căutare generică (nu produsul exact) — **nu e o eroare a site-ului**, e comportamentul normal al Amazon (OneLink) pentru vizitatori din țări fără magazin propriu (România nu are `amazon.ro`)
- Un vizitator real din SUA, publicul țintă al site-ului, ajunge direct pe pagina exactă a produsului, fără nicio redirecționare
- Verificare posibilă: VPN pe locație SUA, sau rugat pe cineva din SUA/Canada să testeze un link

### Estimare venit realist (ordin de mărime, nu promisiune)
- La trafic ~2.000-8.000 vizitatori/lună (rezultat modest, realist după ~6-12 luni de muncă constantă), venitul tipic din Amazon Associates pentru un site de nișă similar: **~50-250$/lună**
- Acum, cu trafic aproape zero, venitul real e 0$/lună — normal la acest stadiu, nu un eșec
- Timeline tipic din industrie: prima comisie de obicei la 60-90 de zile (cu audiență deja existentă, mai mult fără); venit constant abia la 6-12 luni

---

## 6e. Ratele oficiale de comision Amazon — verificate direct de pe pagina Amazon (19 august)

Cerință explicită: comisioanele reale, nu estimări de pe bloguri. Sursă unică folosită: pagina oficială Amazon Associates, tabelul „Standard Onsite Associates" (`affiliate-program.amazon.com/help/node/topic/G4ARBJC7Z2NK48CA`). Surse terțe (bloguri gen azonpress.com, earnifyhub.com) au dat cifre umflate/contradictorii (ex. pretindeau 10% la mobilier) — **ignorate**, nu se mai folosesc ca referință.

| Categorie Amazon | Comision oficial | Relevanță pentru site |
|---|---|---|
| **Furniture, Home, Home Improvement, Lawn & Garden, Pets Products** | **3.00%** | Rata-plafon reală pentru nișa site-ului — toate cele 24 de categorii se încadrează aici |
| Tools | 1.75% | — |
| Kitchen | 1.25% | — |
| Sports | 1.25% | — |
| Appliances (intră la "All Other Categories") | 1.00% | — |
| Mattresses (intră la "All Other Categories") | 1.00% | — |
| Outdoors | 0.75% | — |
| Baby Products | 0.50% | — |
| Physical Books | 0.50% | — |

**Concluzia care ghidează strategia de conținut de acum înainte:** nu există o categorie "secretă" cu comision mai mare — 3% e plafonul real, deja atins de toate articolele site-ului. Singura pârghie rămasă pentru comision mai mare per vânzare e **prețul produsului**, nu procentul. De-asta cele 4 categorii premium noi (secțiunea 4) țintesc produse de $250-2500, nu produse noi la un procent mai bun — la 3%, un Murphy bed de $1200 aduce ~36$ comision dintr-o singură vânzare, față de ~0,20$ la un cârlig Command de $6.99.

---

## 6b. Trafic — SEO tehnic + Pinterest

### Google Search Console
- Proprietate `https://cozysmallspace.github.io/` verificată (metodă: fișier HTML de verificare, încărcat pe repo)
- `sitemap.xml` și `robots.txt` create și publicate la rădăcina site-ului, trimise oficial în Search Console (Sitemaps → Success) — actualizate cu toate cele 16 articole
- Indexare cerută manual ("Request indexing") pentru homepage și pentru articole — accelerează apariția în Google

### Diagnostic 18 august — sitemap "Couldn't fetch" + indexare cerută
- Search Console arăta sitemap-ul cu status **"Couldn't fetch"** — verificat direct (fetch manual al `https://cozysmallspace.github.io/sitemap.xml`): fișierul e perfect valid, XML corect, 21 de URL-uri, `robots.txt` corect configurat. Concluzie: status vechi/eronat din partea Google, nu o problemă reală
- Rezolvat prin **resubmitere manuală** a sitemap-ului în Search Console (Sitemaps → adăugat din nou `sitemap.xml` → "Sitemap submitted successfully")
- Verificat cu **URL Inspection** pentru homepage: crawl reușit pe 16 august (`Page fetch: Successful`, `Indexing allowed: Yes`), dar status "Crawled – currently not indexed" — normal pentru un site nou fără backlink-uri
- Apăsat **"Request Indexing"** pentru homepage — cerere trimisă cu succes ("URL was added to a priority crawl queue")
- **Important, clarificat:** propriile vizite ale proprietarului pe site NU apar nicăieri în Search Console (GSC nu e contor de vizitatori) — Search Console arată doar activitatea Googlebot (indexare) și impresii/click-uri din rezultate reale de căutare Google, nu vizite directe
- La data de 18 august, `site:cozysmallspace.github.io` pe Google încă nu întoarce rezultate — normal, indexarea unei pagini cerute manual durează de obicei câteva ore până la 1-2 zile; de reverificat peste 3-4 zile dacă tot nu apare nimic

### Pinterest — 16 pinuri live, toate cu design premium (poză + text)
- Cont business **CozySmallSpace** (email `jolti2006@yahoo.com`), categorie "Autor de conținut", brand focus "Design și artă"
- Site revendicat oficial (`p:domain_verify` adăugat în `index.html`)
- **Design de pin actualizat**: fiecare pin folosește acum o poză stock reală (lifestyle, cameră/apartament cozy, liberă de drepturi — Pexels) ca fundal, cu un gradient întunecat jos pentru lizibilitate, plus eticheta de categorie, titlul articolului și branding-ul suprapuse — înlocuiește vechiul design simplu cu puncte colorate
- **Toate cele 16 articole au acum pin propriu**, cu link direct spre pagina corespunzătoare:

| Articol | Titlu Pin |
|---|---|
| no-drill-wall-shelves.html | 5 No-Drill Wall Shelves That Actually Hold Weight |
| no-wiring-lighting-ideas.html | Best No-Wiring Lighting Ideas for Small Apartments |
| multifunctional-furniture-studio.html | Best Multi-Functional Furniture for Studio Apartments |
| small-bedroom-storage-ideas.html | Small Bedroom Storage Ideas That Don't Look Cluttered |
| mirrors-for-small-rooms.html | Best Mirrors to Make a Small Room Look Bigger |
| kitchen-storage-small-apartments.html | Best Space-Saving Kitchen Storage for Small Apartments |
| room-dividers-studio-apartments.html | Best Room Dividers for Studio Apartments |
| small-bathroom-storage-ideas.html | Best Small Bathroom Storage Ideas for Renters |
| space-saving-beds-with-storage.html | Best Space-Saving Beds with Storage for Small Apartments |
| compact-wardrobes-closet-systems.html | Best Compact Wardrobes & Closet Systems for Small Bedrooms |
| modular-convertible-sofas-small-living-rooms.html | Best Modular & Convertible Sofas for Small Living Rooms |
| small-space-home-office-desks.html | Best Small-Space Home Office Desks & Setups |
| balcony-small-patio-furniture.html | Best Balcony & Small Patio Furniture Sets |
| space-saving-dining-sets.html | Best Space-Saving Dining Sets for Studio Apartments |
| entryway-storage-benches.html | Best Entryway Storage Benches for Small Apartments |
| tv-stands-media-consoles.html | Best TV Stands & Media Consoles for Small Living Rooms |

- **Notă tehnică Pinterest:** platforma NU permite schimbarea pozei la un pin deja publicat — doar titlul/descrierea/link-ul/panoul pot fi editate. Pentru orice actualizare de imagine, pinul vechi trebuie șters și republicat ca pin nou, cu aceleași date (titlu/descriere/link/panou).

### Batch 2 — 48 de pinuri noi, 3 strategii diferite per categorie (18 august) ✅
- Livrate: `cozysmallspace-pinterest-pins-batch2.zip` (48 de imagini JPG, 1000×1500px) + `CozySmallSpace_Pinterest_Pins_Batch2.md` (Title/Description/Board/Link pentru fiecare, gata de copy-paste)
- Pentru fiecare din cele 16 categorii, 3 pin-uri cu unghi de marketing diferit:
  - **Strategia A — Problemă**: pornește de la o durere/nevoie directă a chiriașului (ex. "No-Drill Wall Shelves for Renters")
  - **Strategia B — Selecție comparativă**: unghi tip "cele mai bune X, comparate" (ex. "5 No-Drill Wall Shelves Ranked by Weight Capacity")
  - **Strategia C — Aspirațional**: transformare/stil de viață (ex. "Turn a Bare Rental Wall Into Real Storage")
- Poze folosite: poza articolului existent + 16 poze noi (Pexels) trimise de tine, identificate și asociate manual cu categoria potrivită (ex. poza cu dulap deschis → Compact Wardrobes, poza cu paravan din șipci → Room Dividers). Categoria Room Dividers a primit 2 poze noi (2 variante reale de paravan), iar No-Wiring Lighting Ideas a rămas cu o singură poză sursă, folosită cu 3 cadraje/zoom-uri diferite
- Board-uri recomandate, aliniate cu gruparea din meniul "Categories": **Renter-Friendly Apartment Ideas**, **No-Wiring Lighting Ideas**, **Multi-Functional Furniture for Small Spaces**, **Small Space Storage & Organization**
- **Postare recomandată:** 2-3 pin-uri/zi, nu toate deodată — consistența contează mai mult decât ora exactă de postare. Cele mai bune ferestre orare (dacă vrei totuși să optimizezi): seri de weekend, 20:00-23:00
- **Status 18 august:** primele 3 pinuri din categoria "Small-Space Home Office Desks" postate manual de tine și confirmate live pe profil

### Clarificare — vizualizări/impresii Pinterest la început de cont
- Numărul de vizualizări identic pe mai multe pinuri deodată (ex. toate la "11") = aproape sigur propriile vizite ale proprietarului pe profil, nu trafic real — Pinterest contorizează "impresie" ca "de câte ori a fost pinul pe ecran", inclusiv al tău
- Semn real de pin care "prinde" (devine viral): salvările (⚑) cresc mult mai repede decât la restul pinurilor, disproporționat — vizibil clar ca un vârf ascuțit în graficul din analytics.pinterest.com (gratuit), nu doar din cifrele de pe grid-ul de profil

---

## 6c. Site-uri pentru poze — listă pe categorie (pentru pinuri Pinterest sau conținut viitor)

**Reguli legale, importante:**
- ✅ Voie: poze stock generice, de atmosferă/lifestyle (o cameră, un colț de apartament), libere de drepturi, folosite ca fundal ilustrativ
- ❌ Interzis: poza EXACTĂ a produsului de pe pagina Amazon (proprietate Amazon/vânzător, fără drept de refolosire în afara Amazon — SiteStripe foto și Native Shopping Ads sunt discontinuate din 2023)

**Site-uri recomandate, gratuite, fără atribuire obligatorie:**
- **Pexels** — https://www.pexels.com (folosit până acum pentru toate cele 16 pinuri)
- **Unsplash** — https://unsplash.com
- **Pixabay** — https://pixabay.com

Toate trei au licențe similare: gratuite pentru uz comercial, fără nevoie de credit/atribuire, poți edita/decupa liber.

### Linkuri de căutare directă, pe fiecare categorie

| Categorie | Link căutare Pexels |
|---|---|
| No-Drill Wall Shelves | https://www.pexels.com/search/floating%20wall%20shelf/ |
| No-Wiring Lighting Ideas | https://www.pexels.com/search/cozy%20apartment%20lamp/ |
| Multi-Functional Furniture (Studio) | https://www.pexels.com/search/studio%20apartment/ |
| Small Bedroom Storage Ideas | https://www.pexels.com/search/small%20bedroom%20storage/ |
| Mirrors for Small Rooms | https://www.pexels.com/search/mirror%20bedroom/ |
| Kitchen Storage (Small Apartments) | https://www.pexels.com/search/small%20kitchen%20apartment/ |
| Room Dividers (Studio Apartments) | https://www.pexels.com/search/room%20divider/ |
| Small Bathroom Storage Ideas | https://www.pexels.com/search/small%20bathroom/ |
| Space-Saving Beds with Storage | https://www.pexels.com/search/small%20cozy%20bedroom/ |
| Compact Wardrobes & Closet Systems | https://www.pexels.com/search/wardrobe%20closet/ |
| Modular & Convertible Sofas | https://www.pexels.com/search/small%20living%20room%20sofa/ |
| Small-Space Home Office Desks | https://www.pexels.com/search/home%20office%20desk/ |
| Balcony & Small Patio Furniture | https://www.pexels.com/search/balcony%20furniture/ |
| Space-Saving Dining Sets | https://www.pexels.com/search/small%20dining%20table/ |
| Entryway Storage Benches | https://www.pexels.com/search/entryway%20hallway/ |
| TV Stands & Media Consoles | https://www.pexels.com/search/tv%20stand%20living%20room/ |

**Sfat de alegere:** preferă poze pe verticală (portret) sau pătrate — se încadrează cel mai bine în formatul Pinterest (raport 2:3, 1000×1500px). Poze luminoase, calde, cu tonuri crem/terracota se potrivesc cel mai bine cu paleta de culori a site-ului.

---

## 7. Probleme tehnice întâlnite și rezolvate

| Problemă | Cauză | Soluție |
|---|---|---|
| CSS nu se aplica pe majoritatea paginilor | Cache vechi/incomplet la nivel de server/CDN pentru `style.css` | Cache-busting cu `?v=N`, crescut la fiecare schimbare CSS (acum la v=11) |
| Butonul "Check price on Amazon" arăta ca link simplu, nestilizat | `.buy-btn`/`.buy-row` nu erau niciodată definite în `style.css` — bug sitewide nedescoperit multă vreme | Adăugat stil premium (gradient, umbră, hover) în `style.css` |
| Meniul "Categories" nu arăta toate cele 16 ghiduri | Prima variantă avea doar 4 linkuri de filtrare, nu articolele individuale | Rescris ca mega-meniu pe 2 coloane cu toate cele 16 linkuri, grupate pe categorie |
| Meniul "Categories" ieșea din ecran pe telefon | Poziționare CSS `absolute` legată de buton, nu de lățimea ecranului | Pe mobil, meniul se întinde acum pe toată lățimea barei de navigare |
| "Home" apărea sub logo pe telefon, layout dezordonat | Header-ul nu avea reguli specifice de mobil | Logo pe rând propriu sus, navigarea (Home/Disclosure/Categories) pe rând separat, grupată compact |
| Buton "Categories" nealiniat vertical cu restul linkurilor | `<button>` are `line-height` implicit diferit de `<a>` în browsere | `line-height` egalizat explicit pe toate elementele din navigare |
| Produse din articolele inițiale nu mai existau pe Amazon sau aveau recenzii slabe | Produse alese generic, fără verificare inițială pe Amazon live | Înlocuite cu cele mai bune variante reale găsite; text actualizat pentru acuratețe |
| Produse cu avertisment "Frequently Returned Item" | Amazon ascunde/descurajează promovarea produselor cu retururi multe | Evitate sistematic, înlocuite cu alternative curate |
| Pinterest nu permite schimbarea pozei la un pin deja publicat | Limitare de platformă, nu bug | Pinul vechi se șterge și se republică nou, cu aceleași date |
| Eroare HTTP 503 la upload pe GitHub | Server GitHub temporar suprasolicitat | Reîncercare ("Try again") — s-a rezolvat de la a doua încercare |
| Pozele hero nu apăreau pe articole după upload (icon de imagine lipsă) | La drag-and-drop pe GitHub, folderul `pins/sources/` a fost "aplatizat" — pozele au ajuns direct în rădăcina repo-ului, nu în subfolder | Cele 16 articole actualizate să caute pozele direct în rădăcina site-ului (path `/nume-poza.jpg`), acolo unde au ajuns de fapt — fără să mai fie nevoie de structură de foldere |

**Notă specială:** fișierul `no-drill-wall-shelves.html` are stilurile CSS incluse DIRECT în pagină (`<style>` în `<head>`), din motive istorice — orice modificare de stil pentru butoane trebuie făcută și acolo separat, nu doar în `style.css`.

---

## 8. Roadmap complet — pașii planului original

| Pas | Descriere | Status |
|---|---|---|
| 1-3 | Site, articole pilot, design homepage | ✅ Complet |
| 4 | Aplicare + configurare Amazon Associates (cont, taxe, plată) | ✅ Complet |
| 4b | Generare linkuri de afiliat reale pentru toate cele 16 articole (64 produse) | ✅ **Complet — 64/64** |
| 4c | Text homepage actualizat pentru încredere (fără poze de produs) | ✅ Complet |
| 5 | Automatizare poze/prețuri via PA-API (Python) | ⬜ Blocat — necesită 3 vânzări în 180 zile |
| 6 | Rescriere completă pagini legale (disclosure, privacy policy) | ⬜ Neînceput |
| 7 | Cercetare cuvinte cheie SEO | ⬜ Neînceput |
| 8 | Promovare Pinterest — cont business, site revendicat, 16 pinuri publicate cu design premium | ✅ Complet |
| 9 | Google Search Console + sitemap.xml + robots.txt + indexare cerută manual | ✅ Complet |
| 10 | Extindere catalog — 8 categorii noi, produse cu preț mai mare | ✅ Complet |
| 11 | Redesign navigare (meniu Categories) + buton premium + fix mobil | ✅ Complet |
| 12 | Îmbunătățire credibilitate/conversie: poză hero, tabel comparativ, FAQ, articole conexe pe fiecare pagină + pagină About | ✅ Complet |
| 13 | Înregistrare PFA în România (după venituri reale) | ⬜ Neînceput — necesită consultare contabil |
| 14 | Hero banner cu poză reală pe homepage (18 august) | ✅ Complet |
| 15 | Pinterest batch 2 — 48 de pinuri noi, 3 strategii diferite per categorie (18 august) | ✅ Complet — livrate, primele 3 postate |
| 16 | Diagnostic + rezolvare sitemap "Couldn't fetch" în Search Console, resubmitere, Request Indexing homepage (18 august) | ✅ Complet |
| 17 | Extindere monetizare — cont FlexOffers creat pentru programul Wayfair, site verificat (18 august) | ❌ Respins (19 august) |
| 18 | CJ Affiliate — cont creat și activat integral, aplicare VIGO Industries (19 august) | ⏳ Cont activ, aplicare VIGO Pending |
| 19 | Google Analytics 4 instalat pe toate paginile, Measurement ID `G-3JDT662GT5`, verificat prin Realtime (19 august) | ✅ Complet |
| 20 | Cercetare rate oficiale de comision Amazon direct de pe pagina oficială (19 august) | ✅ Complet |
| 21 | Extindere catalog — 4 categorii noi "renter/storage" (Command Hooks, Curtain Rods, Under-Sink, Dorm Room), linkuri reale complete (19 august) | ✅ Complet — 16/16 produse |
| 22 | Extindere catalog — 4 categorii premium noi, țintă comision mai mare per vânzare (19-20 august) | ✅ Complet — conținut, poze hero și linkuri reale |
| 23 | Toate cele 96 de produse din cele 24 de categorii au linkuri Amazon reale, plus saltea recomandată separat (20 august) | ✅ Complet — 97/97 |
| 24 | Layout lărgit (1200px → 1680px) + optimizări accesibilitate/SEO din raportul PageSpeed Insights (20 august) | ✅ Complet |

---

## 9. Următorii pași imediați (în ordine de prioritate)

1. **Așteptare + verificare indexare Google** — verifică din când în când în Search Console (secțiunea "Pages") câte din cele 16 pagini au fost indexate
2. **Pinning constant pe Pinterest** — algoritmul recompensează activitatea regulată; ideal e să mai adaugi pin-uri noi la câteva zile, nu doar rundele deja făcute
3. **Monitorizare periodică** în Amazon Associates Central (secțiunea de rapoarte) pentru click-uri/vânzări, și în Pinterest Analytics + Google Search Console (secțiunea "Performance") pentru trafic
4. **După primele 3 vânzări** → aplicare pentru acces PA-API → automatizare completă poze/prețuri
5. **Rescriere pagini legale** (`affiliate-disclosure.html`, `privacy-policy.html`)
6. **Articole noi suplimentare**, pentru autoritate SEO în timp
7. **PFA în România** — după apariția veniturilor reale, cu ajutorul unui contabil

---

## 10. Cum verifici vizualizări și vânzări

### Trafic (vizualizări, click-uri)
| Sursă | Unde | Ce vezi | Cât durează să apară date |
|---|---|---|---|
| **Google Search Console** | search.google.com/search-console → secțiunea **"Performanță"** | Afișări (câte ori a apărut site-ul în căutări), click-uri, ce cuvinte cheie exacte au adus oameni | 3-14 zile pentru primele date |
| **Pinterest Analytics** | Hub Business → **"Analizează performanța"** → "Statistici generale" | Impresii, salvări, și "outbound clicks" (click-uri reale către site) | 24-48 ore |

### Vânzări — o singură sursă reală
**Amazon Associates Central** (associates.amazon.com) → **Reports** (Rapoarte). Acolo, și doar acolo, vezi click-uri, comenzi și câștiguri reale. Nici Google, nici Pinterest nu arată dacă s-a vândut ceva.

Detaliu important despre cum funcționează comisionul: dacă cineva dă click pe link-ul tău, iei comision pentru **orice** cumpără în următoarele **24 de ore** — nu doar produsul recomandat exact. Dacă pune ceva în coș fără să cumpere, fereastra se extinde la **89 de zile** pentru acel produs din coș.

**Recomandare:** verifică Associates Central o dată pe săptămână (nu zilnic — la trafic mic, verificarea zilnică doar stresează fără să existe date noi de fiecare dată).

---

## 11. La ce să fii atent pe termen lung

- **Termenul PA-API** — 3 vânzări confirmate necesare până la ~mijlocul lui februarie 2027 (180 zile de la înscriere)
- **Cuvinte cheie câștigătoare** — urmărește în Search Console ce căutări aduc trafic real; dacă un subiect aduce constant mai mult decât altele, acolo merită investit în articole suplimentare
- **Categoriile scumpe vs. ieftine** — urmărește în Associates Central dacă categoriile noi (paturi, canapele, birouri — $150-500) chiar aduc comision mai mare per vânzare față de cele vechi, sau dacă rata de conversie e mai mică la prețuri mari; ajustează strategia de conținut în funcție de date reale, nu presupuneri
- **Respectarea regulilor Amazon Associates** — fără formulări gen "dă click pe link-ul meu ca să mă ajuți" (sugerează manipularea comisionului), fără cumpărare prin propriile linkuri, disclosure-ul rămâne vizibil peste tot (deja implementat)
- **Consistență pe Pinterest** — algoritmul recompensează activitatea regulată, nu o singură rundă de pin-uri

---

## 12. Cum adaugi produse și categorii noi

### Produs nou la un articol existent
1. Cauți produsul pe Amazon.com (logat cu contul de Associate)
2. Intri pe **pagina individuală a produsului** (nu rămâi pe rezultate de căutare)
3. Verifici: rating bun (peste 4.3 ideal), recenzii multe, **fără avertisment "Frequently Returned Item"**
4. Apeși **"Get Link"** din SiteStripe → dezactivezi **"Show local matches"** → **Copy affiliate link**
5. Trimiți link-ul, se inserează în articolul potrivit ca buton "Check price on Amazon →"

### Articol / categorie nouă
1. Alegem subiectul (aceeași nișă — spații mici) și plaja de preț țintă (buget sau premium, în funcție de comisionul dorit)
2. Cercetăm 4 produse reale, cu linkuri generate ca mai sus
3. Se creează fișierul HTML nou, cu structura identică celorlalte 16 articole (inclusiv meniul Categories în navigare)
4. Se adaugă cardul nou pe homepage (`index.html`), în meniul Categories (pe toate paginile) și în `sitemap.xml`
5. Se generează o poză stock (vezi lista din secțiunea 6c) și o imagine de Pin nouă (folosind `pins/make_pin_photo.py`), publicată pe Pinterest în board-ul potrivit

**Idei de subiecte neacoperite (lista inițială din 18 august, actualizată 19 august):**

| # | Categorie propusă | Status |
|---|---|---|
| 1 | Command Hooks & Adhesive Wall Organizers | ✅ Publicat, linkuri reale (19 august) |
| 2 | No-Drill Curtain Rods & Tension Rods | ✅ Publicat, linkuri reale (19 august) |
| 3 | Over-the-Door Storage Organizers | 🔴 Rămas neacoperit |
| 4 | Under-Sink Storage & Organizers | ✅ Publicat, linkuri reale (19 august) |
| 5 | Floor & Table Plant Stands | Normală |
| 6 | Blackout & Privacy Curtains for Renters | Normală |
| 7 | Closet Curtains Instead of Doors | Normală |
| 8 | Foldable & Stackable Guest Seating | Normală |
| 9 | Narrow Console Tables & Slim Furniture | Normală |
| 10 | Non-Slip Area Rugs Safe for Renters | Normală |

Plus, publicat **în afara acestei liste inițiale** pe 19 august: **Dorm Room Storage & Organization Ideas** (articol de sezon, back-to-school SUA, linkuri reale complete) și **4 categorii premium noi** — Murphy Wall Beds, Electric Fireplace TV Stands, Compact Sectional Sofas, Bedroom Furniture Sets (conținut complet, linkuri și poze hero de adăugat ulterior) — vezi secțiunea 4 pentru detalii complete.

Rămase de acoperit din lista inițială, ca următor pas de conținut ieftin/rapid: **Over-the-Door Storage Organizers** (#3) și ideile "Normală" (#5-10), utile mai ales pentru autoritate SEO și trafic suplimentar spre categoriile scumpe prin linkuri interne.

---

## 13. Conturile folosite — referință rapidă

*(fără parole — doar ca să știi ce cont e legat de ce serviciu)*

| Serviciu | Cont / username | Notă |
|---|---|---|
| **GitHub** (hosting site) | repo `CozySmallSpace/cozysmallspace.github.io` | — |
| **Amazon Associates** | Tracking ID `cozysmalls0e4-20`, Store ID `cozysmallspace` | Plată prin cont Revolut, terminație ****048 |
| **Google Search Console** | `albertzsoltszakacs1978@gmail.com` | Cont Gmail, folosit și pentru verificarea site-ului |
| **Pinterest** | `jolti2006@yahoo.com` (username afișat: `jolti2006`) | Cont business "CozySmallSpace" |
| **FlexOffers** (pt. Wayfair) | `jolti2006@yahoo.com` | Cont creat 18 august, site verificat — **cerere respinsă 19 august**, eliminat din plan |
| **CJ Affiliate (Commission Junction)** | Plată prin cont Revolut (IBAN/SWIFT) | Cont creat și activat integral 19 august (W-8BEN completat), aplicare **VIGO Industries** (6% comision) — status: Pending Application |
| **Google Analytics 4** | `albertzsoltszakacs1978@gmail.com` | Measurement ID `G-3JDT662GT5`, instalat pe toate cele 24 de pagini, verificat prin Realtime (19 august) |
| **Claude / Cowork** | `albertzsoltszakacs1978@gmail.com` | Auto-reload dezactivat manual (fără taxare automată) |

---

*Acest document poate fi actualizat pe măsură ce proiectul avansează — cere-mi oricând o versiune nouă.*
