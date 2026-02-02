# Mane SPA

Single-page site for Mane SPA with a Sanity-powered content layer.

## Tech
- React + Vite
- Tailwind CSS
- Sanity (content studio in `/sanity`)
- Swiper, React-Leaflet

## Local setup
1) Install frontend deps
```
npm install
```

2) Create env file (root)
```
# .env.local
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_WEB3FORMS_KEY=your_web3forms_key
```

3) Run frontend
```
npm run dev
```

## Sanity Studio
The studio lives in `sanity/` and defines all schemas.

1) Install studio deps
```
cd sanity
npm install
```

2) Run studio
```
npm run dev
```

## Content model (Sanity)
Schemas are in `sanity/schemaTypes/`.

- `hero`:
  - slide image + eyebrow/title/subtitle/paragraphs
  - buttons are fixed in code
- `servicesWall`:
  - service name, price, image, category
  - layout/styles stay in code
- `aboutHero`:
  - background image + texts
  - eyebrow + logo are fixed in code
- `workGallery`:
  - gallery items with image + title

## Project structure
- `src/components/sections/` section components
- `src/components/ui/` reusable UI components (Lightbox, buttons, etc.)
- `src/styles/` custom CSS (gallery loop, etc.)
- `src/lib/sanity.js` Sanity client + image helper

## Notes
- Image optimization is handled via Sanity image URLs (responsive sizes + lazy loading).
- Lightbox is customized to match the `ljusaitodos` project behavior.
