# Feedback — 2026-09-30-langeveldbouw-v1

toets: 1  
oordeel: afkeur  
toetser_run: bc-de83f19c-357d-57ca-9a3a-cedf15088c13  
bouwer_run: bc-b41688a5-1970-52bb-96d1-6889757ca6b6 (PR #18)

## wat_mis

PDF heeft wees-koppen: h2 “Markt & concurrenten” staat op p.3 met alleen de intro, de concurrententabel begint op p.4; h2 “Werklijst — eerste 90 dagen” staat op p.7 met alleen de intro, de werklijsttabellen beginnen op p.8.

## wat_goed

- Werklijst 8/8 1:1 met klantrapport (Prio, Wat, Wie, Klaar als); P0×3 P1×3 P2×2.
- Packets T-1, T-2, T-3, T-4, T-5, T-7 voor alle code=ja-rijen.
- Live-claims kloppen (0× Alkmaar, dienst-URL’s 404, POST 503 `niet-ingesteld`, sitemap 2, 17 projecten).
- Concurrenten 9/9 Actie of “Geen actie:”; geen denylist, geen GBP-theater, geen %-belofte.
- Finding-contract, mix.md, Bijlage B, klanttaal in het rapport zelf.

## regel_kandidaat

Wees-kop: h2 + intro op pagina N, tabel op N+1 — `check-pagination.js` die alleen `nextElementSibling` (vaak `section-intro`) toetst, laat dit door. Zelfde les als Camperstaan v3 / PR #11; deze run base `main` heeft die wrap niet.

## herhaling_count

2 (Camperstaan v3, nu Langeveld v1)

## tag

kandidaat-code

## eigenaar_initialen

—
