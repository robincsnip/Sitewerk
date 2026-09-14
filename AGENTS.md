# AGENTS.md — Sitewerk

Je werkt in **Sitewerk**. Eén voordeur. Brief in → artifact uit.

Zie [docs/PIJPLIJN.md](docs/PIJPLIJN.md).

## Rollen

| Rol | Bestand | Wanneer |
| --- | --- | --- |
| **Bouwer** | [agents/bouwer.md](agents/bouwer.md) | Rapport + werklijst + print maken |
| **Toetser** | [agents/toetser.md](agents/toetser.md) | Toets 1 (rapport) en Toets 2 (preview) — **aparte run** |
| **Uitvoer** | [playbooks/uitvoer.md](playbooks/uitvoer.md) | Taken/PRs ná Toets 1 akkoord |
| **Naslag** | [playbooks/naslag.md](playbooks/naslag.md) | Na afkeur of gemeten uitkomst |
| **Atelier** | [agents/atelier.md](agents/atelier.md) · [playbooks/atelier.md](playbooks/atelier.md) | Preview-spoor (drie huiden) of klant-Atelier ná redesign-gate |

## Isolatie (hard)

1. Bouwer schrijft nooit `toets.md` met `akkoord`.
2. Toetser draait in een **nieuwe** agent-run; ziet het rapport, herschrijft het niet om te “winnen”.
3. Zelfde-run Bouwer+Toetser-akkoord = **ongeldige Toets**. Opnieuw Toetser starten.

## Gate (hard)

Zonder eigenaren: geen mail, geld, publiceren, live. Rapport-akkoord (Toets 1) is geen live.

Verboden: cijfers zonder bron; drie waarheden naast elkaar; legacy-generatornamen in klantoutput.

## Playbooks

| Playbook | Pad |
| --- | --- |
| Audit | [playbooks/audit.md](playbooks/audit.md) |
| Toets | [playbooks/toets.md](playbooks/toets.md) |
| Rapport/PDF | [playbooks/rapport-pdf.md](playbooks/rapport-pdf.md) |
| Naslag | [playbooks/naslag.md](playbooks/naslag.md) |
| Uitvoer | [playbooks/uitvoer.md](playbooks/uitvoer.md) |
| Atelier | [playbooks/atelier.md](playbooks/atelier.md) |

## Leren

Playbooks alleen **append/amend**. Skill pas na drie echte herhalingen én een test. Zie [lessons/README.md](lessons/README.md).
