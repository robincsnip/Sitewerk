# Feedback — 2026-09-14-camperstaan-atelier

toets: 2  
oordeel: afkeur  
toetser_run: bc-256f8a88-a16c-5dbe-877e-e116b6ff9390  
bouwer_run: bc-b7951f84-0cae-5056-8577-cc749a4b53ac (PR #14, 96e8012)

## wat_mis

Haal interne atelier- en audit-taal uit de klant-UI van redactie, gids en compact (niet de chooser): geen mal, specimen, dossier, hubbesluit, Niet verzonnen, Filter-hoort-hier-niet-op-/plaatsen, variantnamen in `<title>`; alleen de verplichte preview-banner blijft het interne merkteken. Serveer `/redactie/`, `/gids/` en `/compact/` als 200 (directory-index), niet als 404 `niet gevonden`.

Zichtbaar o.a. in: `redactie/plaatsen.html` (mal/specimen), elke redactie-footer («dossier»), `gids/over.html` + compact contact («Niet verzonnen»), `gids/provincie-drenthe.html` (audit-filtercopy), `<title>Camperstaan — redactie|gids|compact`. Curl: `/redactie/` → 404.

## wat_goed

- Drie visueel verschillende huiden (masthead / rail-index / stroken+293); Papier-tokens; geen TypeUI, shadcn, Inter/Roboto, card-soup of zoek-UI op gids.
- Zelfde dossierfeiten: 293, Drenthe 19, Kampen, claim «Dit is van mij» € 99; geen verzonnen tel/adres/uren; geen `tel:`.
- Banner + `noindex` op elke pagina; `npm run test:atelier` groen; chooser `/` start; nav via `index.html` klikbaar.
- Locked: geen live, mail, GBP, WebGL.

## kleine_aandacht (niet de afkeurzin)

- Compact-home heeft één CTA; `compact/plek-kampen.html` heeft er twee (header + «Meer plekken»).
- Chooser toont `npm run atelier:preview` — lab, geen klant-huid.

## regel_kandidaat

Klant-UI van een Atelier-huid mag geen generator- of audit-jargon dragen (mal, specimen, dossier, hubbesluit, Toets-zin «Niet verzonnen»); preview-banner is het enige interne merkteken.

## herhaling_count

1

## tag

playbook-only

## eigenaar_initialen
