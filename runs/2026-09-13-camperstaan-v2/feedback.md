# Feedback — 2026-09-13-camperstaan-v2

toets: 1  
oordeel: akkoord  
toetser_run: bc-2e8f1650-852f-511c-943c-ce39fcfc2d6e  
bouwer_run: cursor/klanttaal-camperstaan-2ee8 (PR #8, bijlagen-achteraan b280d55)

## her-run

Toets 1 her-run na verplaatsing Bijlage A/B naar einde PDF (commit b280d55). Bouwt voort op klanttaal + layout-flow (PR #8).

## wat_goed

- **Bijlagen achteraan:** hoofdtekst eindigt met “Hoe we weten of het werkt” (p7); Bijlage A + B op p8 met page-break vóór eerste bijlage.
- **Paginatie-gate:** `check-pagination.js` OK — 8 pag.; 0 split failures.
- **Single-telling:** cijfers 306/293/13 alleen in mini-KPI binnen bevinding 1.
- **Werklijst-sync:** rijen 1–6 identiek aan `werklijst.md` (naslag-lesson gehaald).
- **Packets:** T-1 t/m T-5 compleet voor code=ja.
- **Klanttaal:** bevindingen in gewone taal; scope-tabel vertaald; geen denylist.
- **Playbook:** mix.md-conflicten, diepte, Bijlage B, geen GBP-theater, geen %-belofte.
- **Fictieve runs:** 30d/90d apart en gelabeld fictief — niet als live resultaat behandeld.

## kleine_aandacht (geen afkeur)

- Callout p.2 noemt nog “Toets” (interne pipeline-term); cover is schoon.
- Werklijst-sectie in print verwijst naar `werklijst.md` — intern pad.
- Werklijst-tabel en Bijlage A behouden technische labels (sitemap, JSON-LD) — sync met `werklijst.md` gaat voor klanttaal-vertaling.

## regel_kandidaat

—

## herhaling_count

0

## tag

bijlagen-achteraan

## eigenaar_initialen
