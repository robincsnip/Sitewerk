# Reflect — 2026-09-14-rugby-werkt-v2

**Trigger:** Toets 1 afkeur (bc-e30e6d94) · nog niet hersteld  
**Naslag-run:** bc-81093b1f · 2026-09-14  
**PR:** #9 · branch `cursor/rugby-werkt-audit-6ad5` (Bouwer — niet aangepast in deze naslag)

## Wat ging mis (afkeur)

1. **Tweede waarheid — werklijst ≠ klantrapport (alle 7 rijen)**  
   Elke `Wat`-cel in `rapport-klant.md` is afgekort t.o.v. `werklijst.md` (bijv. #1 “crawlbaar” i.p.v. “crawlbaar maken”; #2 “Rugby” i.p.v. “Rugby Werkt”).  
   Rij 5 `Klaar als`: rapport mist `besluit +` — alleen “één primaire URL in sitemap”.  
   Oorzaak: Bouwer parafraseerde werklijst-tekst in de samenvattingstabel i.p.v. letterlijk kopiëren per rijnummer.

## Wat níet herhaald (Camperstaan-lesson gehaald)

- **Packet-pass:** T-1 t/m T-7 compleet voor alle code=ja-rijen.

## Les (occurrence 2)

- **Werklijst is bron; `#`, `Wat`, `Wie`, `Klaar als` in klantrapport letterlijk gelijk — geen afkorting, geen parafrase.**  
  Tijdsindeling (“deze maand”) mag in proza, niet als andere tekst op hetzelfde rijnummer.

## Naslag-acties

| Actie | Bestand | Status |
| --- | --- | --- |
| Reflect | `reflect.md` | dit bestand |
| Outcome | `lessons/outcomes.md` | append |
| Kandidaat-code | `lessons/kandidaten-code.md` | werklijst-sync count **2** |
| Skill | — | **niet** (occurrence 2; ≥3 + test vereist) |

## Herhaling_count

2 (tweede echte run met werklijst↔klantrapport contractbreuk; Camperstaan was #1)
