# Feedback — 2026-09-14-camperstaan-atelier

toets: 2  
oordeel: akkoord  
toetser_run: bc-7631d291-0247-5d82-860d-2fe85e50019e  
bouwer_run: bc-b7951f84-0cae-5056-8577-cc749a4b53ac (PR #14, bb7a91d)

## hertoets

Vorige afkeurzin is weg. Zichtbare klant-UI van redactie/gids/compact bevat geen mal, specimen, dossier, hubbesluit, «Niet verzonnen», filter-auditcopy of variantnamen in `<title>`. `/redactie/`, `/gids/`, `/compact/` geven 200. Chooser mag lab-copy; banner blijft. Feiten 293 / Drenthe 19 / Kampen / € 99 1:1. `test:atelier` groen.

## wat_goed

- Drie visueel verschillende huiden (masthead / rail-index / stroken+293); Papier-tokens; geen TypeUI, shadcn, Inter/Roboto, card-soup of zoek-UI op gids.
- Zelfde dossierfeiten; geen verzonnen tel/adres/uren; geen `tel:`.
- Banner + `noindex` op elke pagina; chooser `/` start; nav via slash-routes klikbaar.
- Locked: geen live, mail, GBP, WebGL.

## kleine_aandacht (niet de afkeurzin)

- Compact-home één CTA; `compact/plek-kampen.html` heeft header-CTA plus tekstlink «Meer plekken».
- Chooser toont `npm run atelier:preview` en het feiten-pad — lab, geen klant-huid.

## vorige_afkeurzin (geadresseerd in bb7a91d)

Haal interne atelier- en audit-taal uit de klant-UI van redactie, gids en compact (niet de chooser): geen mal, specimen, dossier, hubbesluit, Niet verzonnen, Filter-hoort-hier-niet-op-/plaatsen, variantnamen in `<title>`; alleen de verplichte preview-banner blijft het interne merkteken. Serveer `/redactie/`, `/gids/` en `/compact/` als 200 (directory-index), niet als 404 `niet gevonden`.
