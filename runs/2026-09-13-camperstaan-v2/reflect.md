# Reflect — 2026-09-13-camperstaan-v2

**Trigger:** Toets 1 afkeur (bc-13903083) · hersteld en opnieuw akkoord (bc-b7a857f6)  
**Naslag-run:** bc-43290cb2 · 2026-09-13  
**PR:** #6 · branch `cursor/camperstaan-audit-31a1`

## Wat ging mis (afkeur)

1. **Tweede waarheid — werklijst ≠ klantrapport**  
   `werklijst.md` #3 = regio-filter → provincie-hub (F-002).  
   `rapport-klant.md` samenvatting “deze maand” #3 = cache + /plaatsen (F-004).  
   Oorzaak: Bouwer herordende acties op tijdslijn (“deze maand” / “maand 2/3”) i.p.v. 1:1 rijnummering met de werklijst.

2. **Packet-gap — code=ja zonder `taken/T-5.md`**  
   Werklijst #5 (JSON-LD, code=ja) had geen packet; T-1 t/m T-4 wel.  
   Oorzaak: laatste code=ja-rij niet meegenomen in packet-pass vóór Toets 1.

## Wat hielp bij herstel

- Bouwer aligneerde samenvattingstabellen 1:1 met `werklijst.md` (#3 regio, #4–6 cache/JSON-LD/hub).
- `taken/T-5.md` toegevoegd; Toets 1 checklist “Packets compleet” + “Werklijst = klantrapport” groen.

## Les (occurrence 1)

- **Werklijst is bron; klantrapport-samenvatting volgt rijnummer, niet eigen tijdslijn.** Tijdsindeling (“deze maand”) mag in proza, niet als andere #3.
- **Packet-pass:** tel code=ja-rijen in `werklijst.md` en controleer `taken/T-<n>.md` vóór `next.md → Toetser`.

## Naslag-acties

| Actie | Bestand | Status |
| --- | --- | --- |
| Reflect | `reflect.md` | dit bestand |
| Outcome | `lessons/outcomes.md` | append |
| Kandidaat-code | `lessons/kandidaten-code.md` | 2× signal (count 1) |
| Skill | — | **niet** (occurrence 1; ≥3 + test vereist) |

## Herhaling_count

1 (eerste echte run met deze contractbreuk)
