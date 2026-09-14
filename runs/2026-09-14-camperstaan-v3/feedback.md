# Feedback — 2026-09-14-camperstaan-v3

toets: 1  
oordeel: akkoord  
toetser_run: bc-86f077d2-f599-5d4f-9f95-ffbfa32ab5a9  
bouwer_run: cursor/harden-pagination-gate-6dd1 (PR #11, commit cb19e52)

## her-run

Toets 1 op wees-header-gate + herprint Camperstaan v3. Inhoud/P-badges/werklijst 1:1 met PR #10 (geen audit-herschrijf). Vorige akkoord (fcf1aa1) gold de P-telling, niet deze print-geometrie.

## wat_mis

—

## wat_goed

- **Wees-koppen weg:** Markt p.4 met tabel; Zoektermen p.5 met tabel. Base-PDF (PR #10) had kop+intro onderaan, tabel op de volgende pagina.
- **Gate fail-closed:** `check-pagination.js` OK (10 pag.); `npm run test:pagination` faalt bewust op `orphan-heading.html`.
- **Flow:** geen hoofdstuk-per-pagina; Beslissingen drie kaarten op p.8; A+B samen p.10.
- **Inhoud 1:1:** run-diff alleen print HTML/PDF; badges P0/P0/P1/P1/P2/P1/P2; werklijst 1–7.
- **Packets / denylist / GBP / %-belofte:** ongewijzigd in orde.

## kleine_aandacht (geen afkeur)

- `heading-keep` duwt een hele tabel mee: p.4 heeft onderaan witruimte (beter dan een wees-kop).
- Callout noemt “Toets”; werklijst-sectie verwijst naar `werklijst.md`.
- `mix.md` / intern / packets: run-id nog `2026-09-13-camperstaan-v2`.

## regel_kandidaat

—

## herhaling_count

0

## tag

wees-header-paginatie

## eigenaar_initialen
