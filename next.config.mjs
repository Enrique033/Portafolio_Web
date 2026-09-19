/** @type {import('next').NextConfig} */
//
// Dos destinos de despliegue:
//  1) Vercel / Node (por defecto): `npm run build`
//  2) GitHub Pages (sitio estático): `npm run build:pages`
//     → output:'export', basePath '/Portafolio_Web', imágenes sin optimizar y
//       sin redirects/headers (no soportados en export estático).
const isPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' || process.env.GITHUB_PAGES === 'true';
const pagesBasePath = process.env.PAGES_BASE_PATH || '/Portafolio_Web';

/** Configuración específica del export estático (GitHub Pages). */
const pagesConfig = {
  output: 'export',
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  trailingSlash: true,
};

/** Rutas personalizadas y cabeceras: solo existen en el servidor (Vercel/Node). */
const serverRoutes = {
  async redirects() {
    return [
      {
        source: '/morada-estudio',
        destination: 'https://morada-estudio.vercel.app/',
        permanent: true,
      },
      {
        source: '/lumbre-catalogo',
        destination: 'https://lumbre-catalogo.vercel.app/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

const nextConfig = {
  reactStrictMode: true,
  ...(isPages ? pagesConfig : {}),
  images: {
    // Requerido por `output: 'export'`: no hay optimizador de imágenes sin servidor.
    unoptimized: isPages,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
    ],
  },
  ...(isPages ? {} : serverRoutes),
};

export default nextConfig;