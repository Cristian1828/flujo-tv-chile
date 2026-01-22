# Flujo TV Chile

Landing page para Chile (enfoque: calidad de imagen HD/4K) construida con Astro.

## Requisitos

- Node.js 20+
- npm

## Scripts

- `npm install`
- `npm run dev` (desarrollo)
- `npm run build` (build estático a `dist/`)
- `npm run preview` (previsualización local del build)

## Deploy en Netlify

Este proyecto incluye configuración lista para Netlify en `netlify.toml`.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 20 (configurado en `netlify.toml`)

### Opción A: Deploy conectando el repo

1) Crea un repo en GitHub (vacío)
2) Haz push de este proyecto (ver sección “Git”)
3) En Netlify: **Add new site → Import from Git**
4) Selecciona el repo y confirma los valores de build/publish

### Opción B: Deploy manual (drag & drop)

1) Ejecuta `npm run build`
2) Sube la carpeta `dist/` a Netlify (Sites → Deploys → “Drag and drop”)

## SEO e indexación en Google

Ya están incluidos:

- `public/robots.txt` apuntando al sitemap
- `public/sitemap.xml` con la URL canónica del sitio
- `<link rel="canonical">`, Open Graph/Twitter y JSON-LD en `src/layouts/Layout.astro`

Para indexar más rápido:

1) En Google Search Console, agrega la propiedad del dominio/sitio
2) Verifica la propiedad (DNS o método disponible)
3) Envía el sitemap: `https://cl.flujooficial.com/sitemap.xml`

Nota: la indexación depende de Google (puede tardar).

## Datos del sitio

- Dominio canónico: `https://cl.flujooficial.com`
- Soporte: `soporte@flujooficial.com`

## Compatibilidad (reglas)

Soporta: Android (móvil/tablet), TV Box, Fire Stick, Google TV, Xiaomi Stick, Smart TV con Android y computadora/laptop usando emulador Android.

No mencionar como compatibles: iOS/iPhone/iPad/Apple TV, Roku, ni Smart TV Samsung/LG nativo.

## Git (subir a tu repo)

Dentro de esta carpeta:

- `git init`
- `git add -A`
- `git commit -m "..."`

Luego (ejemplo):

- `git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git`
- `git push -u origin master`
