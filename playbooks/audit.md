# Playbook — Audit

## Doel

SKU **Audit**: feiten → strategie → kader → mix → klantrapport + werklijst + packets.  
Dit is één SKU in [docs/PIJPLIJN.md](../docs/PIJPLIJN.md), niet de hele zaaklijn.

## Onderzoeksvolgorde (rapporteren in deze volgorde)

1. Crawl & indexatie  
2. Rendering (skip met reden als NVT)  
3. Architectuur / templates / interne links  
4. Content & intentie  
5. Performance (kern-templates)  
6. Structured data (alleen passend bij sitetype)  
7. Local/GBP — alleen lokale zaak; niet bij nationaal directory/platform zonder kader-reden  
8. Links/autoriteit — alleen met data; anders “onbekend”  
9. AI-vindbaarheid — steekproef; nooit vervanging van 1–8  

## Sitetype

| Type | Local/GBP |
| --- | --- |
| Lokale dienst | relevant |
| Directory/platform | meestal n.v.t. |
| Content/merk | zelden |

## Finding-contract (elke bevinding)

```text
id: F-###
laag: 1-9
observatie: string
bewijs: URL | meting | extract-id
bewijs_label: gemeten | afgeleid | onbekend
gevolg_zaak: string
actie: string
eigenaar: wij | jullie | gedeeld
effort: S | M | L
prio: P0 | P1 | P2 | P3
meetpunt: string | "geen zonder baseline"
afhankelijk_van: F-###[] | []
```

## Dieptenorm (minimaal)

- ≥1 architectuur- of template-inzicht  
- ≥1 content-besluit: prune / merge / rewrite / hub  
- Conflict Feiten↔Strategie expliciet in `mix.md`  
- Top 3 acties gekoppeld aan gevolg voor de zaak; niet alleen `onbekend`  
- Bijlage B: afgewezen scanner-tips  
- Elke Uitvoer-kandidaat (code=ja) heeft een packet: URL, huidige/gewenste staat, herstel, acceptatie  

## Output

Zie [docs/PIJPLIJN.md](../docs/PIJPLIJN.md). Verplicht: `next.md` → Toetser ([toets.md](toets.md)). Bouwer stopt; de pijplijn niet.
