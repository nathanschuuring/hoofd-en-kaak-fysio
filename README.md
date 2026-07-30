# De Hoofd & Kaak Fysio — hoofdenkaakfysio.nl

Next.js 15 (App Router) + Tailwind CSS v4. Volledig statisch gegenereerd (SSG), self-hosted fonts (Fontsource, geen Google-calls), JSON-LD structured data en SEO-slugs op rootniveau.

## Lokaal draaien
```bash
npm install
npm run dev
```

## Deployen (GitHub + Vercel)
1. Maak een GitHub-repo en push deze map.
2. Importeer de repo in Vercel (framework wordt automatisch herkend).
3. Koppel het domein hoofdenkaakfysio.nl in Vercel → Settings → Domains.

## Content aanpassen
- Alle klachtenteksten: `content/klachten-1.ts` en `content/klachten-2.ts`
- Praktijkgegevens, locaties, FAQ, netwerken: `content/site.ts`
- Nieuwe klacht toevoegen = één object toevoegen aan de data; pagina, sitemap en kaarten volgen automatisch.

## Nog aan te leveren door Lysanne
- Definitieve privacyverklaring (`app/privacyverklaring/page.tsx`)
- Definitieve klachtenregeling (`app/klachtenregeling/page.tsx`)
- Eventueel een portretfoto voor de Over mij-pagina
