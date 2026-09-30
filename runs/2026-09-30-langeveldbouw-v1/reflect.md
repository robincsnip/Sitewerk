# Reflect — 2026-09-30-langeveldbouw-v1

**Trigger:** Toets 1 afkeur (bc-de83f19c) · nog niet hersteld  
**Naslag-run:** bc-cf623ec4 · 2026-09-30  
**PR (audit):** #18 · `cursor/langeveldbouw-audit-a6b6`  
**PR (toets):** #19 · `cursor/langeveldbouw-toets-1-8c13`

Bouwer-input (niet herschreven):

- Statische Vercel-merksite (één dag oud): sitemap 2 URL’s, sterke vorm, lokale signalen nul.
- Leadformulier-UI zonder backend (503 `niet-ingesteld`) is een conversie-P0, geen “SEO-tip”.
- Eenmanszaak: directory-adres ≠ publicatieplicht; plaats eerst.
- Zoeksnippets liepen een dag achter op de nieuwe title — niet als GSC-grafiek opvoeren.
- Concurrentietabel 1:1 naar werklijst (# of “Geen actie”) hield de lat van de opdracht zonder andere klanten te kopiëren.

## Wat ging mis (afkeur)

1. **Wees-koppen in de PDF**  
   h2 “Markt & concurrenten” op p.3 met alleen de intro; concurrententabel op p.4.  
   h2 “Werklijst — eerste 90 dagen” op p.7 met alleen de intro; werklijsttabellen op p.8.  
   `check-pagination.js` gaf OK (10 pag.). De gate koppelt h2 aan `nextElementSibling` (`section-intro`), niet aan het eerste inhoudelijke blok (tabel).

## Wat níet herhaald (inhoud OK)

- Werklijst 8/8 1:1; packets T-1–T-5 en T-7; live-claims; geen denylist / GBP-theater / %-belofte.

## Les (occurrence 2)

- **Paginatie-gate ≠ visuele vrijgave.** Script-OK is geen Toets 1-akkoord als kop+intro op pagina N staan en de tabel/kaart op N+1. Gate moet kop vs het volgende **inhoudelijke** blok vangen (`section-intro` telt niet). PDF visueel nalopen blijft verplicht.
- Zelfde klasse als Camperstaan v3 / PR #11 (wees-koppen over pagina-einden). Deze audit stond op `main` zonder die wrap.

## Naslag-acties

| Actie | Bestand | Status |
| --- | --- | --- |
| Feedback | `feedback.md` | sync vanaf #19 + naslag-regel |
| Reflect | `reflect.md` | dit bestand |
| Playbook | `playbooks/rapport-pdf.md` | één bullet |
| Outcome | `lessons/outcomes.md` | append |
| Kandidaat-code | `lessons/kandidaten-code.md` | wees-kop count **2** |
| Skill | — | **niet** (occurrence 2; ≥3 + test vereist) |

## Herhaling_count

2 (tweede echte Toets-blocker wees-kop; Camperstaan v3 / PR #11 was #1)
