'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Sparkles, X } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolioData';
import { ACCENT_THEMES } from '@/data/themeConfig';
import Reveal from '@/components/shared/Reveal';

/**
 * Showcase de proyectos de NEXUS STUDIO.
 * - Filtros 100% personalizados (píldoras interactivas, sin <select> nativos).
 * - status 'online' → abre la demo real en nueva pestaña.
 * - status 'pronto' → toast de "Próximamente".
 */
const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Webs corporativas' },
  { id: 'catalogo', label: 'Catálogos' },
  { id: 'ecommerce', label: 'E-commerce' },
];

/** Devuelve solo el host (sin www.) de una URL absoluta; si no es válida, un texto genérico. */
function getHost(href) {
  try {
    return new URL(href).host.replace(/^www\./, '');
  } catch {
    return 'demo en vivo';
  }
}

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState('todos');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const visible = useMemo(
    () => (filter === 'todos' ? portfolioProjects : portfolioProjects.filter((d) => d.category === filter)),
    [filter]
  );

  const handleComingSoon = (e, name) => {
    e.preventDefault();
    setToastMsg(`${name} aún está en construcción. ¡Vuelve pronto!`);
    setToastOpen(true);
    setTimeout(() => setToastOpen(false), 4000);
  };

  return (
    <section id="portafolio" className="relative scroll-mt-24 overflow-hidden py-20">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-violet-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-violet-600/20 bg-violet-600/5 px-3 py-1 text-xs font-bold text-violet-700">
            Portafolio de proyectos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              reales
            </span>
            , demos navegables
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explora las demos en vivo de las webs que construimos y cotiza tu sitio en menos de 1 minuto.
          </p>
        </div>

        {/* Filtros personalizados (no nativos) */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filtrar proyectos por tipo"
            className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-soft"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'scale-[1.02] bg-white text-slate-900 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_10px_24px_-10px_rgba(79,70,229,0.45)] ring-1 ring-indigo-600/20'
                      : 'text-slate-500 hover:bg-white/80 hover:text-slate-900'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visible.map((d, i) => {
            const accent = ACCENT_THEMES[d.accent];
            const isLive = d.status === 'online';
            const isComingSoon = d.status === 'pronto';
            return (
              <Reveal key={d.slug} delay={i * 90} className="h-full">
                <a
                  href={d.href}
                  target={isLive ? '_blank' : undefined}
                  rel={isLive ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (isComingSoon) handleComingSoon(e, d.name);
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  {/* Badge de estado */}
                  {isLive && (
                    <span className="absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                      </span>
                      En vivo
                    </span>
                  )}
                  {isComingSoon && (
                    <span className="absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                      </span>
                      Próximamente
                    </span>
                  )}

                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm backdrop-blur">
                      {d.brand}
                    </span>
                    {isLive && (
                      <span className="absolute bottom-3 right-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow">
                        <ArrowUpRight className="h-3 w-3 text-emerald-600" /> {getHost(d.href)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-extrabold text-slate-900">{d.name}</h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">{d.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{d.description}</p>

                    <ul className="mt-4 space-y-1.5">
                      {d.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className={`h-3.5 w-3.5 shrink-0 ${accent.text}`} /> {b}
                        </li>
                      ))}
                    </ul>

                    <span
                      className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${
                        isLive ? 'text-emerald-600' : isComingSoon ? 'text-amber-600' : accent.text
                      }`}
                    >
                      {isLive ? 'Explorar demo en vivo' : isComingSoon ? 'Próximamente' : 'Explorar proyecto'}
                      {!isComingSoon && (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </span>
                  </div>

                  {/* Brillo sutil en hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-600/[0.05] to-transparent" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Toast: aviso de "Próximamente" */}
      <div
        className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-2xl border border-amber-500/30 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-lift transition-all duration-300 ${
          toastOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        role="status"
      >
        <div className="flex items-center gap-2.5">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span>{toastMsg}</span>
          <button
            type="button"
            onClick={() => setToastOpen(false)}
            className="rounded-lg p-1 text-slate-400 hover:text-slate-700"
            aria-label="Cerrar notificación"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
