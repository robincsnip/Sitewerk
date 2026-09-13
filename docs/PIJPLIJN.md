# Sitewerk-pijplijn

Sitewerk is **één zaaklijn**, geen rapportgenerator.

```text
brief (SKU-keuze)
  → [optioneel] Scout          Toets 0
  → Audit (Bouwer)             rapport + werklijst + print
  → Toetser                    Toets 1
        afkeur → Naslag → Bouwer opnieuw (met afkeurzin)
        akkoord → SKU-splits:
            A. Uitvoer (bestaande site)
                 → Toets 2 (preview)
                 → Eigenaren  ja live
                 → Nameting  Toets 3
            B. Atelier (nieuwe site)
                 → Toets 2 (preview)
                 → Eigenaren  ja live
                 → Nameting  Toets 3
```

Een Bouwer-run is **geen** einde van de pijplijn. Zie [playbooks/orchestratie.md](../playbooks/orchestratie.md).

## SKU’s (brief kiest er minstens één)

| SKU | Wat de klant koopt | Klaar als |
| --- | --- | --- |
| **Scout** | optionele kandidaatscan | KEEP ja/nee + gat dat een gast ziet; Toets 0 |
| **Audit** | analyse + rapport + takenlijst | Toets 1 akkoord |
| **Uitvoer** | afgesproken wijzigingen op de bestaande site | Toets 2 + (live alleen Eigenaren) |
| **Nameting** | dezelfde meetpunten als de audit, voor/na | Toets 3 |
| **Nieuw** | nieuwe site (Atelier) | redesign-gate + Toets 2 |

Standaard commercieel pakket: **Audit → Uitvoer → Nameting**.  
Scout alleen als de brief het vraagt. Nieuw is een **alternatief** voor Uitvoer op een bestaande sterke site, geen stille upgrade.

## Zaakmap

Eén id van scout tot nameting (niet per PDF een nieuwe waarheid):

```text
runs/<id>/
  brief.md                 # SKU’s, skip-met-reden
  next.md                  # verplichte volgende rol; Bouwer vult dit, sluit niet af
  scout.md                 # of skip
  in/feiten.md
  in/strategie.md
  in/kader.md
  mix.md
  rapport-klant.md
  rapport-intern.md
  werklijst.md             # packets; bron voor Uitvoer
  taken/T-<n>.md           # één uitvoerpakket per taak
  toets.md                 # Toets 0/1/2/3; nooit akkoord in Bouwer-run
  feedback.md              # verplicht bij afkeur
  reflect.md
  print/rapport.html
  print/rapport.pdf
  uitvoer/                 # diffs, preview-URL, herstelbewijs
  nameting.md
  atelier/                 # alleen bij SKU Nieuw
```

## Conflictregel

feit > vorm > wens. Restant = Toets-vraag, geen tweede PDF.

## Eigenaren

Locked (live, externe mail, geld, publiceren): unaniem 3/3 tenzij anders besloten.  
Stilte ≠ ja.  
Toets 1 akkoord is geen live en geen mail naar de klant.
