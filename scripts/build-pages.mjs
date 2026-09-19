/**
 * build-pages.mjs — Genera el sitio estático para GitHub Pages en `out/`.
 *
 * Uso:  npm run build:pages
 * Base path por defecto: /Portafolio_Web  (override con PAGES_BASE_PATH)
 *
 * Diferencias con `npm run build` (Vercel/Node):
 *  - output: 'export' → HTML estático, sin servidor Node ni /api/contact.
 *  - basePath /Portafolio_Web (URL del project page de GitHub Pages).
 *  - imágenes sin optimizar y redirects/headers desactivados.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const basePath = process.env.PAGES_BASE_PATH || '/Portafolio_Web';

if (existsSync(path.join(root, 'out'))) {
  rmSync(path.join(root, 'out'), { recursive: true, force: true });
  console.log('· Carpeta out/ anterior eliminada');
}

console.log(`· Export estático para GitHub Pages (basePath: ${basePath})`);

const result = spawnSync(
  process.execPath,
  [path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next'), 'build'],
  {
    stdio: 'inherit',
    env: { ...process.env, GITHUB_PAGES: 'true', NEXT_PUBLIC_GITHUB_PAGES: 'true', PAGES_BASE_PATH: basePath },
  }
);

if (result.status !== 0) {
  console.error('× Falló el export estático para GitHub Pages');
  process.exit(result.status ?? 1);
}

console.log('✓ Listo: sube el contenido de out/ como artefacto de GitHub Pages');