# 🎬 Flujo TV Chile

Landing page de Flujo TV para Chile (Astro). Ángulo de venta Chile: **calidad de imagen (HD/4K) + fluidez + soporte**.

## 🌐 Dominio

- **Canonical / Producción**: `https://cl.flujooficial.com`
- El SEO usa `site.canonical` como fuente única.

## 💰 Planes (USD)

| Duración | Precio | Nota |
|---|---:|---|
| 1 mes | 9 | — |
| 3 meses | 27 | — |
| 6 meses | 49 | Incluye 1 mes gratis |
| 12 meses | 95 | Incluye 2 meses gratis |

Los planes se centralizan en `src/config/site.ts`.

## ✅ Dispositivos compatibles (reglas)

- Android (móvil y tablet)
- TV Box
- Fire Stick
- Google TV
- Xiaomi Stick

Si tu TV es Samsung/LG (sistema nativo), necesitas un TV Box o un Stick compatible.

Requiere internet estable.

## 🔎 SEO (resumen)

- Canonical dinámico por ruta (basado en `site.canonical`).
- OpenGraph/Twitter consistentes con `title/description`.
- JSON-LD (Organization/WebSite/WebPage/Service) + ofertas con precios.
- Keywords incluyen búsquedas relacionadas como **“Magis TV”** y **“Magis 4K”** sin remover la marca Flujo.
	- Nota: se usa como término de búsqueda, no implica afiliación con otras marcas.

## 🧩 Dónde editar

- Config general: `src/config/site.ts` (dominio, canonical, soporte, WhatsApp, planes)
- SEO global: `src/layouts/Layout.astro`
- Página: `src/pages/index.astro`
- Componentes: `src/components/*`

## 🧪 Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 📝 Cambios recientes (2026-01-28)

- Precios actualizados a 9/27/49/95 USD (manteniendo promos de meses gratis).
- Footer actualizado con copy de confianza (equipo de ventas/soporte) + disclaimer.
- FAQ reescritas con texto propio (sin HTML en respuestas) y alineadas a dispositivos compatibles.
- `site.pricing` agregado para centralizar ofertas y facilitar SEO.

## 📞 Contacto

- WhatsApp: +51 921 445 800
- Email: soporte@flujooficial.com

## 📄 Licencia

© 2026 Flujo TV. Todos los derechos reservados.
