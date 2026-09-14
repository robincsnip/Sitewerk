# Feitenlaag — Maickels Broodjes

Live fetch **14 september 2026**. Geen GSC/GA. Geen Maps-login. User-agent SitewerkAudit/curl.

## Host & techniek

| Meting | Waarde | Bron |
| --- | --- | --- |
| `https://www.maickelsbroodjes.nl/` | HTTP/2 200, `text/html`, 21 521 bytes | curl -I/-O |
| Apex `https://maickelsbroodjes.nl/` | 307 → www | curl -I |
| `http://maickelsbroodjes.nl/` | 308 → https apex → 307 www | curl -I |
| Server | Vercel | header `server` |
| HSTS | `max-age=63072000` | header |
| Prerender | `x-nextjs-prerender: 1` | header |
| CDN | `x-vercel-cache: HIT`, `age: 2028161` (~23,5 dagen) | header 14 sep ~16:00 UTC |
| Cache-Control HTML | `public, max-age=0, must-revalidate` | header |
| Canonical-tag | afwezig | view-source home |
| `robots.txt` | 404, Next 404-HTML, `noindex` | curl |
| `sitemap.xml` / `sitemap_index.xml` / `sitemap.txt` | 404 | curl |
| JSON-LD | 0× `ld+json` | view-source |

## Home HTML (zonder JS)

- `<title>Maickels Broodjes</title>` — geen plaats, geen dienst.
- Meta description: bio Maickel Bouw, “woonachtig in Beek en Donk”, horeca als passie — geen aanbod, geen rooster, geen “waar staat de kar”.
- H1: “Verse broodjes op vaste plekken in de stad”.
- H2: Schema · Sauzen van het huis · Contact / Boekingen.
- Zichtbare woorden (tags gestript, scripts/stijl eruit): **50**.
- Sectie `#locaties`: tekst **“Schema laden…”** + figcaption “Wekelijks schema”.
- Geen `tel:`, geen `mailto:`.
- Formulier: naam, e-mail, telefoon, bericht → POST `/api/send` (GET `/api/send` = 405).
- Social: Instagram, Facebook, TikTok (`/maickelsbroodjes`).
- Hero-alt: “Slide 0”, “Slide 1”, “Slide 2”. Logo-alt: “Maickels Broodjes logo”. Sauzen hebben beschrijvende alt.
- Extra paden 404: `/menu`, `/locaties`, `/contact`, `/schema`, `/boekingen`, `/over`, `/catering`, `/foodtruck`.

## Weekschema (JS, 14 sep)

Bron `page-*.js`: `fetch("/api/weekschema-version", {cache:"no-store"})` daarna beeld  
`https://f1ngm7zxkekrdydv.public.blob.vercel-storage.com/weekschema.jpg?v=…`

| Meting | Waarde |
| --- | --- |
| `/api/weekschema-version` | 200 JSON `{"v":1789401747777}`, `cache-control: no-store` |
| `weekschema.jpg` | 200, `image/jpeg`, **1 619 469 bytes**, 4500×5625 |
| Alt ná load (in JS) | “Wekelijks schema zoals geplaatst op socials” |
| Inhoud JPEG (visueel 14 sep) | kop “WEEKLY AGENDA / DEZE WEEK”, dagen **8–12 september** |

JPEG-regels (niet in HTML):

- Di 8 sep — Gate 54 Eindhoven, 12:00–13:30, Luchthavenweg 54, 5657 EB
- Wo 9 sep — Karwei Bouwmarkt Gemert, 12:00–13:30, Industrieweg 50, 5422 VK
- Do 10 sep — IT Connectie Asten 12:00–13:30 (Stikker 18) **en** Oranjeplein Mariahout 16:00–19:00
- Vr 11 sep — Sanders Heftrucks Helmond, 12:00–13:30, Varenschut 19
- Za 12 sep — Unibrew Zuid-Nederland, 12:00–15:00, Beekerheide 15a, 5741 HB Beek en Donk

Peildatum is **maandag 14 september 2026**. Het beeld is de week daarvóór.

## Directories (derden, 14 sep) — niet site-NAP

Niet overnemen als feit voor de eigen zaak tot Maickel bevestigt.

- Land van de Peel: Auwerstraat 4a, 5741 RN Beek en Donk; `info@mbfoodpassion.nl`; +31 6 55 80 07 31; “foodtruck met diverse vaste verkoopplaatsen”.
- het-menu.nl / Bottin: zelfde adres + openingstijden (di–za, wisselende uren). **Niet** geverifieerd tegen het weekschema-beeld.
- Foodtruckbooking: Pulled Pork, Smokey Chicken, Chicken Truffle; KvK 74354698; ~€ 6,50; 130 servings/uur; heel Nederland.
- FestiFood Group: boekingspagina, 085 792 4577, bookings@festifoodgroup.com; ~120 broodjes/uur.
- Intents Festival: menu-allergenen (Pulled Pork, Smokey Chicken, Chicken Truffel, Chicken Teriyaki, Smoked Jack).

## Concurrent / zoeksteekproef (web search 14 sep)

Geen Google-positiecijfers. Geen GSC.

- Query **“broodjes Beek en Donk”**: Broodjes enzo (Piet van Thielplein 2a, tel 0492-380422) in de getoonde hits; Maickels via directories, **niet** de eigen home als winnaar in deze steekproef.
- Query **“Maickels Broodjes”**: eigen site + directories + FestiFood/foodtruckbooking.
- Query **“Maickels Broodjes foodtruck boeken”**: foodtruckbooking.nl en festifoodgroup.com vóór of naast de eigen site.
- Query **`site:maickelsbroodjes.nl`**: alleen de homepage in de getoonde hits.
- Broodjes enzo home: plaats + tel + mail in HTML; `robots.txt` 200 met sitemap-index (Yoast).

## Earned media (bestaan gemeten, geen ranking)

- ED.nl Laarbeek: GoPro/Brabantse tongval, foodtruck Maickel Bouw Beek en Donk.
- Omroep Brabant / Oozo: 72-uurs actie Piet van Thielplein (augustus 2026 in Oozo-datum).

## Bewust niet gemeten

- Lighthouse / Core Web Vitals
- Google Maps-dashboard, reviewcijfers
- Search Console, inkomende links-export
- AI-overzichten (ChatGPT/Gemini-steekproef)

## PR #2 (13 sep) — citaat, niet hermeten als extra waarheid

Oude run `runs/2026-09-13-maickelsbroodjes` noteerde o.a. title-alleen-merk, bio-meta, robots/sitemap 404, “Schema laden…”, geen tel:. **14 sep bevestigt die observaties opnieuw.** Nieuwe metingen deze run: blob-JPEG, week 8–12 sep op het beeld, 1,62 MB, directory-NAP vs standplaatsen, concurrentietabel.
