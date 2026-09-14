# Toets — 2026-09-14-rugby-werkt-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-e30e6d94-8ba7-5818-8e3c-a9cc58856db4 · 2026-09-14  
**Bouwer-run:** cursor/rugby-werkt-audit-6ad5 (PR #9, commit fe05c0d)

## Oordeel

- [ ] akkoord
- [x] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-012 in `rapport-intern.md`; bevindingen 1–7 met observatie/gevolg/voorstel |
| Bewijslabels eerlijk | ja | F-010/F-011 onbekend (werklijst #9 code=nee); top-3 op gemeten (F-001, F-002, F-003) |
| Packets compleet (T1) | ja | T-1 t/m T-7 voor alle code=ja-rijen (1–7) |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; F-009 als dossier-citaat |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Deny-gate + sitemap/anker-architectuur; Scrum-pad + dienst-URL-besluit |
| Conflict Feiten↔Strategie | ja | `mix.md` expliciet; vier conflicten met besluit |
| Taal / denylist | ja | Geen denylist-trefwoorden |
| Klanttaal / single-telling | gedeeltelijk | Bevindingen in gewone taal; werklijst-tabel wijkt af (zie sync) |
| Print / bijlagen (T1) | ja | Bijlage A/B achteraan; paginatie-gate OK — 8 pag.; 0 split failures |
| Bijlage B | ja | Vijf afgewezen tips met reden |
| Werklijst = klantrapport | nee | Alle 7 rijen: `Wat` afgekort t.o.v. `werklijst.md`; rij 5 `Klaar als` mist `besluit +` |

## Werklijst-sync (spot-check 14 sep 2026)

| # | Veld | `werklijst.md` | `rapport-klant.md` | Match |
| --- | --- | --- | --- | --- |
| 1 | Wat | Nature Sports crawlbaar maken | Nature Sports crawlbaar | nee |
| 2 | Wat | Vier Rugby Werkt dienst-URL's | Vier Rugby dienst-URL's | nee |
| 3 | Wat | H1 + meta + koppen home Rugby | H1 + meta home Rugby | nee |
| 4 | Wat | Klikbaar contact Rugby Werkt | Klikbaar contact Rugby | nee |
| 5 | Wat | Scrum College één verkooppad | Scrum College één pad | nee |
| 5 | Klaar als | besluit + één primaire URL | één primaire URL in sitemap | nee |
| 6 | Wat | Alt-teksten + Organization schema | Alt + Organization schema | nee |
| 7 | Wat | APG-case slug opruimen | APG-case slug | nee |

Wie en overige `Klaar als`-velden (rij 1–4, 6–7): wel gelijk.

## Naslag-lesson (Camperstaan PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | **herhaald** — alle rijen `Wat` afgekort; rij 5 `Klaar als` inhoudelijk anders |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check

- Packets T-1..T-7: alle aanwezig voor code=ja
- Cover HTML: geen Bouwer/Toets/SKU/klanttaal/werklijst.md op cover
- Pagination gate: `node scripts/check-pagination.js` → OK (8 pages)
- PDF aanwezig: `print/rapport.pdf`

## Afkeurzin (verplicht bij afkeur)

> Werklijst en klantrapport zijn niet 1:1: alle zeven rijen hebben afwijkende `Wat`-tekst en rij 5 mist `besluit +` in `Klaar als`.

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / `werklijst.md` geschreven.

## Volgende

Zie `next.md` → Bouwer herstelt werklijst-sync; daarna opnieuw Toets 1. Geen Uitvoer, geen live, geen mail.
