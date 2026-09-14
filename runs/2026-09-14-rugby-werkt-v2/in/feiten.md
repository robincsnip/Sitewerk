# Feitenlaag — Joost

Peildatum live: 14 september 2026

## Rugby Werkt (rugbywerkt.nl)

- `https://rugbywerkt.nl/` HTTP 200, WordPress/Elementor, PHP 8.1, Apache. Geen Strict-Transport-Security-header.
- Titel: `Rugby Werkt – Clinics & More`. **Geen meta description.**
- **0 H1.** 29 H2's, waaronder herhaalde koppen (`top rugby`, `Rugby school`, `rugbyclinic`, `scrum college`, `haka workshop`).
- Navigatie: alleen ankerlinks (`#Home`, `#Activiteiten`, `#Nieuws`, `#Contact`) — geen aparte URL per dienst.
- Pagina-overzicht voor Google: **alleen home** in `wp-sitemap-posts-page-1.xml`. Posts: `/2020/06/09/voorbeeld-artikel-2/` (titel: Clinic APG) en `/2023/04/19/clinic-nsecure/`.
- Woorden in ruwe HTML-fetch home: **~796**. 3 afbeeldingen, **3 zonder alt-tekst**.
- Telefoon `+31 (0)6 15 89 06 44` en `Info@rugbywerkt.nl` in tekst; **geen `tel:` of `mailto:` links.**
- Geen extra gegevens voor Google (JSON-LD) in HTML.
- Link naar `http://www.scrumcollege.nl` (eigen site ScrumCollege live: "Scrum & Agile training op het rugbyveld").
- `robots.txt` wijst naar `wp-sitemap.xml`. Home canonical: `https://rugbywerkt.nl/`.
- Lab: home ~94 kB, TTFB ~1,4 s (14 sep 2026).

## Nature Sports (nature-sports.nl)

- `https://nature-sports.nl/` HTTP 200, Cloudflare, Canva-export (`app-name: export_website`).
- Titel: `Nature Sports & events`. Meta description noemt Maastricht, bootcamp, PT, yoga, small group.
- **Geen H1, geen canonical.** Zichtbare woorden in eerste HTML-fetch: **4**. Geen interne links in ruwe HTML.
- `robots.txt` **404**. Sitemap: 1 URL (home), lastmod 2024-10-08.
- Lab: home ~204 kB, TTFB ~0,03 s (14 sep 2026).

## Dossier (citaat, geen nieuwe crawl) — 25–27 aug 2026

Handmatige zoeksteekproef (Wikoro, google.nl): Nature Sports ~7–8 op "bootcamp maastricht", niet in local pack; "personal training maastricht" afwezig; "nature sports maastricht" site #1 maar geen bedrijfspaneel. Rugby Werkt niet in top 20 op "rugby clinic bedrijfsuitje" / "rugby clinic limburg"; afwezig op "haka workshop bedrijven". **Geen volumes, geen GSC.**
