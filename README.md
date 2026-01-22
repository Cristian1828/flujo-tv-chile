# Flujo TV Chile

Landing de conversión para **Flujo TV Chile** (enfoque: **calidad de imagen HD/4K**), construida con Astro y salida estática.

## ¿Qué incluye esta landing?

- Hero con CTA principal a WhatsApp (icono, sin mostrar el número)
- Sección de beneficios y highlights
- Pasos de instalación/uso
- Tabla de planes con precios fijos
- Dispositivos compatibles
- FAQ + datos estructurados (JSON-LD) para SEO
- Footer con soporte

## Datos comerciales (Chile)

- Dominio canónico: `https://cl.flujooficial.com`
- Soporte: `soporte@flujooficial.com`
- WhatsApp (interno, oculto en UI): `51921445800`

Estos valores viven en `src/config/site.ts`.

## Planes (precios fijos)

- 1 mes: **$9**
- 3 meses: **$29**
- 6 meses: **$49** (incluye 1 mes gratis)
- 12 meses: **$99** (incluye 2 meses gratis)

## Compatibilidad (reglas estrictas)

Compatibles:

- Android (móvil/tablet)
- TV Box
- Fire Stick
- Google TV
- Xiaomi Stick
- Smart TV con Android
- Computadora/Laptop con emulador Android

No mencionar como compatibles:

- iOS/iPhone/iPad/Apple TV
- Roku
- Smart TV Samsung/LG nativo (sin TV Box)

## Estructura (dónde editar)

- Página principal: `src/pages/index.astro`
- Layout/SEO (meta tags + JSON-LD): `src/layouts/Layout.astro`
- Config de sitio (dominio/soporte/WhatsApp): `src/config/site.ts`
- Componentes: `src/components/*`
- Assets públicos: `public/*` (incluye `hero-chile.jpg`, `logo_flujo.png`, `robots.txt`, `sitemap.xml`)

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

Importante para no “confundir” a Google:

- El **canonical** y el **sitemap** apuntan a `https://cl.flujooficial.com`.
- En Netlify, configura el **dominio final** (`cl.flujooficial.com`) o al menos el custom domain antes de solicitar indexación.

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

## Checklist rápido antes de publicar

- `npm run build` sin errores
- Netlify desplegando desde `dist/`
- Dominio `cl.flujooficial.com` configurado (para que canonical/sitemap coincidan)
- Sitemap enviado en Search Console
