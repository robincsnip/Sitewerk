# Sitewerk lab → robincsnip/Sitewerk

Plak dit blok in Terminal op je Mac. Niets vervangen.

```bash
cd ~
rm -rf ideas-sitewerk-transfer sitewerk-push
git clone --branch cursor/sitewerk-lab-transfer-7f21 --single-branch --depth 1 https://github.com/Visionairs/ideas.git ideas-sitewerk-transfer
cp -R ideas-sitewerk-transfer/sitewerk-lab sitewerk-push
cd sitewerk-push
git init
git add .
git commit -m "Sitewerk lab: fase 0-1 scaffold"
git branch -M main
git remote add origin https://github.com/robincsnip/Sitewerk.git
git push -u origin main --force
```

Klaar als GitHub `main` op https://github.com/robincsnip/Sitewerk de Sitewerk-lab bestanden toont.
