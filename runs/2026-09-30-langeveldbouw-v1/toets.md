# Toets — 2026-09-30-langeveldbouw-v1

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-de83f19c-357d-57ca-9a3a-cedf15088c13 · 2026-09-30  
**Maker-run:** bc-b41688a5-1970-52bb-96d1-6889757ca6b6 · PR #18 `cursor/langeveldbouw-audit-a6b6`

## Oordeel

- [ ] akkoord
- [x] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-010 in `rapport-intern.md`; topbevindingen 1–3 met observatie/gevolg/voorstel; mix.md vijf conflicten |
| Bewijslabels eerlijk | ja | Top-3 op gemeten F-001/F-002/F-003; F-007 GBP onbekend (geen “jullie hebben geen profiel”); F-010 afgeleid |
| Packets compleet (T1) | ja | code=ja: #1–#5 + #7 → T-1, T-2, T-3, T-4, T-5, T-7 (huidige/gewenste staat, herstel, acceptatie). #6/#8 code=nee |
| Geen %-belofte zonder baseline | ja | Bijlage B wijst bezoekersbelofte af; meetkaart zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | Lokale dienst; #6 jullie ja/nee; geen sterren; Bijlage B “geen theater” |
| Dieptenorm (T1) | ja | Architectuur: 8 diensten / 0 URL’s; content-besluit: drie pagina’s, geen blogreeks |
| Taal / denylist | ja | Geen leverage/unlock/synergie/“Google houdt van”; geen JSON-LD/canonical/SERP in klantrapport |
| Print / bijlagen (T1) | **nee** | Print bestaat (HTML+PDF); cover Sitewerk + Langeveld + 30 sep 2026; Bijlage A+B achteraan p.9. **Wees-koppen:** zie afkeurzin. `check-pagination.js` op deze base: OK (10 pag.) — die gate koppelt h2 aan `section-intro`, niet aan de tabel |
| Bijlage B | ja | Zes afgewezen tips met reden |
| Werklijst = klantrapport | ja | 8/8 rijen identiek (#, Prio, Wat, Wie, Klaar als); P0×3 P1×3 P2×2 |
| Concurrenten-Actie | ja | 9/9: werklijst-# of “Geen actie:” |
| Telling vs lead vs KPI vs badges | ja | Cover 2 / 0× / 17 / open; finding-1 0× Alkmaar; finding-2 8/0; live: sitemap 2 URL’s, 0× Alkmaar, 17 `p-` op `/projecten`, POST 503 `niet-ingesteld` |
| Inhoud herschreven? | nee | Toetser heeft rapport/werklijst/packets niet aangepast |

## Spot-check live (30 sep 2026, Toetser)

| Claim | Uitkomst |
| --- | --- |
| 0× Alkmaar | home + `/projecten`: 0 hits |
| `/aanbouw` e.d. 404 | `/aanbouw`, `/interieurbouw`, `/dakkapel`, `/privacy` → 404 Vercel-plaintekst |
| POST `/api/aanvraag` 503 | 503 `{"ok":false,"fout":"niet-ingesteld"}`; `W3F_KEY=''` |
| 2 pagina’s in overzicht | `sitemap.xml`: `/` + `/projecten` |
| 17 projecten | `/projecten` 17× `id="p-…"`; home-CTA “17 projecten” |
| Oude zoektitel | openbare index: “Bouwbedrijf Langeveld”; live `<title>`: “Langeveld — Ruimte om thuis te zijn” |

## Wees-koppen (PDF, pdf-parse)

| Kop | Kop-pagina | Volgend blok |
| --- | --- | --- |
| Markt & concurrenten | p.3 (kop + intro) | concurrententabel p.4 |
| Werklijst — eerste 90 dagen | p.7 (kop + intro) | tabellen “Deze maand” / “Maand twee” p.8 |

Zelfde patroon als Camperstaan v3 (Markt 3→4) vóór de heading-keep-gate. Deze audit-branch staat op `main` zonder die wrap.

## Afkeurzin (verplicht bij afkeur)

> PDF heeft wees-koppen: h2 “Markt & concurrenten” staat op p.3 met alleen de intro, de concurrententabel begint op p.4; h2 “Werklijst — eerste 90 dagen” staat op p.7 met alleen de intro, de werklijsttabellen beginnen op p.8.

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / werklijst / packets / print geschreven.

## Volgende

Zie `next.md` → Bouwer, met de afkeurzin hierboven. Geen Uitvoer, geen live, geen mail.
