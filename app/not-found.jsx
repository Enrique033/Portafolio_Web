import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

/** Página 404 — se exporta también como 404.html en GitHub Pages. */
export const metadata = {
  title: 'Página no encontrada',
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-20">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-violet-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-lg text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-600/20 bg-violet-600/5 px-3 py-1 text-xs font-bold text-violet-700">
          <Compass className="h-3.5 w-3.5" /> Error 404
        </span>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Esta página{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            no existe
          </span>
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio para ver
          nuestro portafolio y cotizar tu web.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
      </div>
    </main>
  );
}