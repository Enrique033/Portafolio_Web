import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// URL pública del sitio (configurable en Vercel; fallback de marca).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexus-studio.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NEXUS STUDIO — Diseño y Desarrollo Web & Soluciones Digitales',
    template: '%s | NEXUS STUDIO',
  },
  description:
    'Diseño y desarrollo de páginas web en Lima: web informativa, catálogo digital y tienda online llave en mano. Mira las 3 demos reales publicadas, cotiza en 1 minuto y consulta por WhatsApp.',
  keywords: [
    'desarrollo web',
    'diseño web',
    'web informativa',
    'catálogo digital',
    'tienda online',
    'e-commerce',
    'freelance',
    'diseño de páginas web',
    'páginas web',
    'Lima',
    'NEXUS STUDIO',
  ],
  authors: [{ name: 'NEXUS STUDIO', url: SITE_URL }],
  creator: 'NEXUS STUDIO',
  openGraph: {
    title: 'NEXUS STUDIO — Creamos webs que convierten',
    description:
      'Explora nuestro portafolio de proyectos reales y cotiza tu página web en menos de 1 minuto.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'NEXUS STUDIO',
    url: SITE_URL,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521693491424-f88a9ae0b2c2?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'NEXUS STUDIO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS STUDIO — Creamos webs que convierten',
    description:
      'Portafolio de proyectos de NEXUS STUDIO: webs reales y cotización por WhatsApp.',
    images: [
      'https://images.unsplash.com/photo-1521693491424-f88a9ae0b2c2?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  icons: {
    icon: [
      { url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="%234F46E5"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="20" font-weight="900" fill="white">N</text></svg>', type: 'image/svg+xml' },
    ],
    apple: [
      { url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="%234F46E5"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="20" font-weight="900" fill="white">N</text></svg>', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="geo.region" content="PE" />
        <meta name="geo.placename" content="Lima" />
        <meta name="business.region" content="PE" />
      </head>
      <body
        className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
