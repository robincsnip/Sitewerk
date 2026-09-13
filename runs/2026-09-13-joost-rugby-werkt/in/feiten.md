# Feitenlaag — Joost

## Rugby Werkt (13 sep 2026)

- `https://rugbywerkt.nl/` 200, WordPress/PHP 8.1, Apache. Geen HSTS-header.
- Titel: `Rugby Werkt – Clinics & More`. **Geen meta description.**
- **0 H1.** Veel H2’s, o.a. rugbyclinic, scrum college, haka workshop, top rugby (meerdere keren dezelfde “top rugby”-kop).
- Interne dienst-URL’s: sitemap-pagina’s = **alleen home**. Posts: ` /2020/06/09/voorbeeld-artikel-2/` (titel in HTML: Clinic APG) en `/2023/04/19/clinic-nsecure/`.
- 3 beelden, **3 zonder alt**. Geen `tel:` of `mailto:` terwijl het nummer `+31 (0)6 15 89 06 44` in de tekst staat. Geen JSON-LD.
- Link naar `http://www.scrumcollege.nl`. Eigen site ScrumCollege bestaat (titel: Scrum & Agile training op het rugbyveld).
- robots.txt wijst naar `wp-sitemap.xml`.

## Nature Sports (13 sep 2026)

- `https://nature-sports.nl/` 200, Cloudflare, Canva-export (`app-name: export_website`). HSTS aan. `x-robots-tag: all`.
- Titel: `Nature Sports & events`. Meta noemt Maastricht, bootcamp, PT, yoga, small group.
- **Geen H1, geen canonical.** Zichtbare woorden in eerste HTML-fetch: **4**. Geen interne links in de ruwe HTML.
- `robots.txt` **404**. Sitemap: 1 URL (home), lastmod 2024-10-08.

## Dossier (citaat, geen nieuwe crawl) — 25–27 aug 2026

Handmatige SERP (Wikoro, google.nl): Nature Sports ~7–8 op “bootcamp maastricht”, niet in local pack; “personal training maastricht” afwezig; “nature sports maastricht” site #1 maar geen bedrijfspaneel. Rugby Werkt niet in top 20 op “rugby clinic bedrijfsuitje” / “rugby clinic limburg”; afwezig op “haka workshop bedrijven”. **Geen volumes, geen GSC.**
