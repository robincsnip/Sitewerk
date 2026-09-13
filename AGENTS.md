# AGENTS.md — Sitewerk

Je werkt in **Sitewerk**. Eén zaaklijn: brief in → de in de brief gekozen SKU’s uit.

Zie [docs/PIJPLIJN.md](docs/PIJPLIJN.md) en [playbooks/orchestratie.md](playbooks/orchestratie.md).

## Rollen

| Rol | Bestand | Wanneer |
| --- | --- | --- |
| **Scout** | [playbooks/scout.md](playbooks/scout.md) | Optionele kandidaatscan (SKU Scout) |
| **Bouwer** | [agents/bouwer.md](agents/bouwer.md) | Audit: rapport + werklijst + packets + print |
| **Toetser** | [agents/toetser.md](agents/toetser.md) | Toets 0–3 — **altijd aparte run** |
| **Uitvoer** | [playbooks/uitvoer.md](playbooks/uitvoer.md) | Packets ná Toets 1 akkoord |
| **Nameting** | [playbooks/nameting.md](playbooks/nameting.md) | Zelfde IDs, voor/na |
| **Naslag** | [playbooks/naslag.md](playbooks/naslag.md) | Na afkeur of nameting |
| **Atelier** | [playbooks/atelier.md](playbooks/atelier.md) | SKU Nieuw ná redesign-gate |

## Isolatie (hard)

1. Bouwer schrijft nooit `toets.md` met `akkoord`.
2. Toetser draait in een **nieuwe** agent-run; herschrijft het rapport niet om te “winnen”.
3. Zelfde-run Bouwer+Toetser-akkoord = **ongeldige Toets**. Opnieuw Toetser starten.
4. “Door de pijplijn” zonder de Toets-lus van de gekozen SKU’s = **ongeldige oplevering**.

## Gate (hard)

Zonder eigenaren: geen mail, geld, publiceren, live. Toets 1 is geen live en geen klantmail.

Verboden: cijfers zonder bron; drie waarheden naast elkaar; legacy-generatornamen in klantoutput.

## Playbooks

| Playbook | Pad |
| --- | --- |
| Orchestratie | [playbooks/orchestratie.md](playbooks/orchestratie.md) |
| Scout | [playbooks/scout.md](playbooks/scout.md) |
| Audit | [playbooks/audit.md](playbooks/audit.md) |
| Toets | [playbooks/toets.md](playbooks/toets.md) |
| Rapport/PDF | [playbooks/rapport-pdf.md](playbooks/rapport-pdf.md) |
| Uitvoer | [playbooks/uitvoer.md](playbooks/uitvoer.md) |
| Nameting | [playbooks/nameting.md](playbooks/nameting.md) |
| Naslag | [playbooks/naslag.md](playbooks/naslag.md) |
| Atelier | [playbooks/atelier.md](playbooks/atelier.md) |

## Leren

Playbooks alleen **append/amend**. Skill pas na drie echte herhalingen én een test. Zie [lessons/README.md](lessons/README.md).
