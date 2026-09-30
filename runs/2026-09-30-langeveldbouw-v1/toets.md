# Toets — 2026-09-30-langeveldbouw-v1

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-ffb4dfb8-f5b9-5485-a702-1f78f842cbef · 2026-09-30  
**Maker-run:** PR #18 `cursor/langeveldbouw-audit-a6b6` · print-fix `bb6e58a` (niet deze run)  
**Vorige Toets:** PR #19 afkeur (wees-koppen)

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-010 in `rapport-intern.md`; topbevindingen 1–3 met observatie/gevolg/voorstel; `mix.md` vijf conflicten |
| Bewijslabels eerlijk | ja | Top-3 op gemeten F-001/F-002/F-003; F-007 GBP onbekend (geen “jullie hebben geen profiel”); F-010 afgeleid |
| Packets compleet (T1) | ja | code=ja: #1–#5 + #7 → T-1, T-2, T-3, T-4, T-5, T-7 (huidige/gewenste staat, herstel, acceptatie). #6/#8 code=nee |
| Geen %-belofte zonder baseline | ja | Bijlage B wijst bezoekersbelofte af; meetkaart zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | Lokale dienst; #6 jullie ja/nee; geen sterren; Bijlage B “geen theater” |
| Dieptenorm (T1) | ja | Architectuur: 8 diensten / 0 URL’s; content-besluit: drie pagina’s, geen blogreeks |
| Taal / denylist | ja | Geen leverage/unlock/synergie/“Google houdt van”; geen JSON-LD/canonical/SERP in klantrapport |
| Print / bijlagen (T1) | ja | Cover Sitewerk + Langeveld + 30 sep 2026; Bijlage A+B achteraan p.10. **Wees-koppen weg** (visueel, 11 pag.): zie spot-check. Rapportinhoud = print |
| Bijlage B | ja | Zes afgewezen tips met reden |
| Werklijst = klantrapport | ja | 8/8 rijen identiek (#, Prio, Wat, Wie, Klaar als); P0×3 P1×3 P2×2 |
| Concurrenten-Actie | ja | 9/9: werklijst-# of “Geen actie:” |
| Telling vs lead vs KPI vs badges | ja | Cover 2 / 0× / 17 / open; finding-1 0× Alkmaar; finding-2 8/0; live: sitemap 2 URL’s, 0× Alkmaar, POST 503 `niet-ingesteld` |
| Inhoud herschreven? | nee | Toetser heeft rapport/werklijst/packets niet aangepast |

## Vorige afkeurzin — geadresseerd

> PDF heeft wees-koppen: h2 “Markt & concurrenten” op p.3 zonder tabel (p.4); h2 “Werklijst — eerste 90 dagen” op p.7 zonder tabellen (p.8).

Visueel in `print/rapport.pdf` (pymupdf-pagina’s, niet alleen het gate-script):

| Kop | Was (PR #19) | Nu (bb6e58a) |
| --- | --- | --- |
| Markt & concurrenten | p.3 kop+intro; tabel p.4 | **p.4** kop + intro + hele concurrententabel (9 rijen) |
| Werklijst — eerste 90 dagen | p.7 kop+intro; tabellen p.8 | **p.8** kop + intro + “Deze maand” + “Maand twee / drie” |

p.3 eindigt op de scopetabel (geen Markt-kop). p.7 eindigt op de drie besluitkaarten (geen Werklijst-kop). Geen nieuwe wees-koppen op de overige pagina’s (Zoektermen+tabel p.5; Bevindingen+kaart 1 p.5; meten+kaarten p.9). p.11 is alleen het colofon — geen kop, niet blokkerend.

Gate-script niet opnieuw gedraaid in deze run (`playwright-core` ontbreekt hier). Script-OK was de vorige keer geen vrijgave; dit oordeel rust op de PDF zelf.

## Spot-check live (30 sep 2026, deze Toetser)

| Claim | Uitkomst |
| --- | --- |
| 0× Alkmaar | home-HTML: 0 hits; title `Langeveld — Ruimte om thuis te zijn` |
| `/aanbouw` e.d. 404 | `/aanbouw`, `/interieurbouw`, `/dakkapel`, `/privacy` → 404 `text/plain` Vercel |
| POST `/api/aanvraag` 503 | 503 `{"ok":false,"fout":"niet-ingesteld"}` |
| 2 pagina’s in overzicht | `sitemap.xml`: `/` + `/projecten`, lastmod 2026-09-29 |

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / werklijst / packets / print geschreven. Maker ≠ Toetser.

## Volgende

Zie `next.md` → **Uitvoer**. Brief heeft Uitvoer + Nameting. Deze Toetser start geen Uitvoer, live of mail. Toets 1 akkoord is geen live.
