# Toets — 2026-09-13-camperstaan-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-13903083-e4f2-5731-8b74-d1f2428534dd · 2026-09-13  
**Bouwer-run:** cursor/camperstaan-audit-31a1 (PR #6)

## Oordeel

- [ ] akkoord
- [x] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001/F-003/F-004 volledig in `rapport-intern.md`; top-3 in klantproza + werklijst |
| Bewijslabels eerlijk | ja | F-007/F-008 als onbekend/afgeleid; niet in top-3; geen feit zonder label |
| Packets compleet (T1) | nee | Werklijst #5 (JSON-LD, code=ja) mist `taken/T-5.md` |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Sitemap/canonical-architectuur; gast-eerst + BE/DE-hub-besluit |
| Taal / denylist | ja | Geen denylist-trefwoorden |
| Print (T1) | ja | Cover Sitewerk + klant + datum; tabellen; conclusiekoppen; PDF aanwezig |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | nee | `werklijst.md` #3 (regio→hub, F-002) ≠ `rapport-klant.md` “deze maand” #3 (cache, F-004) |

## Spot-check (13 sep 2026)

- `cache-control: private, no-store` op home en `/plaatsen` — bevestigd
- `/plaatsen` body 1.411.613 bytes — bevestigd (F-004)
- `/plaatsen` 293 unieke listing-hrefs; sitemap 306 `/plaatsen/` — bevestigd (F-001)
- Homepage bevat “306” — bevestigd (F-001)

## Afkeurzin (verplicht bij afkeur)

> Werklijst en klantrapport zijn niet dezelfde opdracht: rij 3 wijkt (regio-filter vs cache) en code=ja-rij 5 mist packet `taken/T-5.md`.

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` geschreven.

## Volgende

Zie `next.md` → Bouwer herstelt werklijst-sync en packet T-5; daarna opnieuw Toets 1.
