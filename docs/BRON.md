# Herkomst van deze import

Deze repo haalt Sitewerk-materiaal uit de visionairs-v2-run **nieuw seo systeem**, niet uit een Build van VisionairsBV.

## Cursor-run

- Run: https://cursor.com/agents/bc-37d81020-2b6d-4cde-9173-bf2970e97f21
- Agent-id: `bc-37d81020-2b6d-4cde-9173-bf2970e97f21`
- Git-ref in de export: `refs/heads/cursor/sitewerk-7f21`
- Tip-commit in de export: `6f844c828002643744bd2e9f5c0c09f84afc34f5`
- Pack in de export: git bundle v2, 96 objecten, ~427.6 KB

Deze run zit in een andere Cloud Agent-omgeving. Transcript + branch zijn vanuit *deze* Sitewerk-omgeving niet opvraagbaar via `list-cloud-agents` / `batch-fetch-details`.

## Slack

Specificatie (tekst, volledig geïmporteerd):

- Bestand: `Sitewerk-specificatie-audit-ready.md`
- File id: `F0C2B8XAUE4` (kopie in #agentic-development: `F0C2B91C3EU`)
- Kanalen:
  - https://visionairs.slack.com/archives/C0BSA4FTMB8/p1789297257068799 (`#besluiten`)
  - https://visionairs.slack.com/archives/C0BT6U8PRH6/p1789297345295959 (`#agentic-development`)

Git-bundle (binair, niet schoon te klonen via Slack MCP):

- URL: https://visionairs.slack.com/files/U0BS4M9MGLS/F0C1HGE66SE/sitewerk-cursor-sitewerk-7f21.bundle
- File id: `F0C1HGE66SE`
- MIME: `application/octet-stream`
- Slack MCP levert dit bestand als UTF-8 met replacement characters; de PACK-bytes zijn daardoor onbruikbaar voor `git clone --mirror` / `git bundle unbundle`.

## Slack-thread (niet in het bundle-bestand)

Na het plaatsen van de spec in `#agentic-development`:

- Robin: symptomen in §1.1 slaan op wat al gebouwd was.
- Robin: zet plan-mode output van anderen ook in het kanaal, om plannen naast elkaar te leggen.
- perkyg.w: wil méér dan hoofdstuk 9 (Atelier) voor de volgende stap — website verbeteren; analyse en uitvoering op elkaar afstemmen voor gestandaardiseerde output.

## Status

PLAN ONLY. Geen VisionairsBV-implementatie tot eigenaren-akkoord op de specificatie, conform stopregel §19.
