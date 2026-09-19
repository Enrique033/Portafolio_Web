# NEXUS STUDIO — Portafolio web

Sitio de una sola página (Next.js 14 + App Router + Tailwind CSS) con portafolio de demos
reales, paquetes de precios, proceso de trabajo, planes de mantenimiento y cotizador
inteligente con envío por formulario o WhatsApp.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción para **Vercel / Node** (incluye `/api/contact`) |
| `npm run build:pages` | Export estático para **GitHub Pages** (carpeta `out/`, basePath `/Portafolio_Web`) |
| `npm start` | Sirve el build de Vercel/Node en local |
| `npm run lint` | Lint de Next.js |

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta:

| Variable | Ámbito | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Cliente + servidor | WhatsApp internacional sin `+` (ej. `51987654321`). **La usan los botones del navegador**, por eso es `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Cliente + servidor | Correo mostrado en el sitio. |
| `NEXT_PUBLIC_SITE_URL` | Cliente + servidor | URL pública (metadata/Open Graph). |
| `CONTACT_EMAIL` | Solo servidor | Destino de las notificaciones de `/api/contact`. |
| `RESEND_API_KEY` | Solo servidor | (Opcional) envío real de correos con Resend. |

> ️ Si no defines `NEXT_PUBLIC_WHATSAPP_PHONE`, los botones usan el placeholder
> `51900000000`. Defínela antes de publicar.

## Despliegue

### Vercel (recomendado)

1. En [vercel.com/new](https://vercel.com/new) importa el repositorio `Enrique033/Portafolio_Web`.
2. Framework: **Next.js** (detectado automáticamente) · Build: `npm run build` · Output: `.next`.
3. En *Settings → Environment Variables* agrega `NEXT_PUBLIC_WHATSAPP_PHONE`,
   `NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_SITE_URL`.
4. Deploy. El endpoint `/api/contact` funciona en este destino (no en GitHub Pages).

### GitHub Pages (sitio estático)

El workflow `.github/workflows/deploy-pages.yml` publica en
<https://enrique033.github.io/Portafolio_Web/> en cada push a `main`.

En *Settings → Pages* deja **Source: GitHub Actions** (el workflow estático genera `out/`).

Notas de este destino:

- `output: 'export'` + `basePath`/`assetPrefix` `/Portafolio_Web` + imágenes sin optimizar
  (todo se activa con `npm run build:pages`, no afecta al build de Vercel).
- No hay `/api/contact`: si el envío del formulario falla, el sitio ofrece continuar
  por WhatsApp con el resumen ya redactado.
- Opcional: define la variable de repositorio `NEXT_PUBLIC_WHATSAPP_PHONE`
  (*Settings → Secrets and variables → Actions → Variables*) para que el export use
  tu número real.

## Estructura

```
app/                 Rutas App Router (page.jsx, layout.jsx, api/contact/route.js)
components/home/     Secciones de la portada
components/shared/   Reveal, Icon, WhatsAppFloating
data/                portfolioData.js (paquetes, proyectos, contacto) y themeConfig.js
scripts/             build-pages.mjs (export estático para GitHub Pages)
public/.nojekyll     Evita que Jekyll procese `_next` en GitHub Pages
```