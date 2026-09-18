import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://nexus-studio.vercel.app'),
  title: {
    default: 'NEXUS STUDIO — Diseño y Desarrollo Web & Soluciones Digitales',
    template: '%s | NEXUS STUDIO',
  },
  description:
    'Diseño y desarrollo de páginas web en Lima: landing pages, sitios corporativos y tiendas e-commerce llave en mano. Demos reales, cotizador inteligente y atención por WhatsApp.',
  keywords: [
    'desarrollo web',
    'diseño web',
    'e-commerce',
    'landing page',
    'freelance',
    'diseño de páginas web',
    'páginas web',
    'tienda online',
    'Lima',
    'NEXUS STUDIO',
  ],
  openGraph: {
    title: 'NEXUS STUDIO — Creamos webs que convierten',
    description:
      'Explora nuestro portafolio de proyectos reales y cotiza tu página web en menos de 1 minuto.',
    type: 'website',
    locale: 'es_PE',
    siteName: 'NEXUS STUDIO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS STUDIO — Creamos webs que convierten',
    description:
      'Portafolio de proyectos de NEXUS STUDIO: webs reales y cotización por WhatsApp.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
