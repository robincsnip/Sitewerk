# Playbook — Orchestratie

Dit is de regel die de vorige runs brak: de pijplijn is een **lus**, geen stapel PDF’s.

## Mag nooit

- Een Bouwer-run “klaar” of “door de pijplijn” noemen zonder Toets 1 van een **andere** agent-run.
- Toets-akkoord in dezelfde run als `rapport-klant.md` of `werklijst.md`.
- Stoppen na print/PDF als `brief.md` SKU Uitvoer, Nameting of Nieuw heeft (of default-pakket).
- Scout, Uitvoer of Nameting overslaan zonder **skip-met-reden** in `brief.md`.

## Verplichte overdracht

Elke rol eindigt met `runs/<id>/next.md`:

```text
klaar_fase: scout | audit | toets-0 | toets-1 | uitvoer | toets-2 | atelier | nameting | toets-3
volgende_rol: Toetser | Bouwer | Uitvoer | Nameting | Atelier | Eigenaren | stop
reden_stop:                            # alleen als volgende_rol=stop
toets_run_id:                          # verplicht als deze run Toets was
```

`volgende_rol=stop` mag alleen als:

1. alle in de brief gekozen SKU’s een Toets-akkoord of skip-met-reden hebben, **en**
2. locked acties nog steeds geblokkeerd zijn zonder Eigenaren-ja.

## Wie start de volgende run

De huidige agent **is** niet de volgende rol. Parent (mens of orchestrator) start een **nieuwe** agent-run met het playbook van `volgende_rol`. De huidige run zegt dat hard in de PR/samenvatting. Zwijgen = contractbreuk, tag `kandidaat-code` in Naslag.

## Afkeurlus (hard)

```text
Toets afkeur → feedback.md (verplichte zin) → Naslag-bullet
             → nieuwe Bouwer/Uitvoer-run die die zin adresseert
Her-run zonder die zin = ongeldig.
```
