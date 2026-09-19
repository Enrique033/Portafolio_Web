'use client';

import { ArrowUpRight, Check, X, Zap } from 'lucide-react';
import { comparisonColumns, comparisonFeatures, packages } from '@/data/portfolioData';
import { ACCENT_THEMES } from '@/data/themeConfig';
import Reveal from '@/components/shared/Reveal';

export default function ServicesPricing() {
  return (
    <section id="servicios" className="relative scroll-mt-24 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-600/20 bg-indigo-600/5 px-3 py-1 text-xs font-bold text-indigo-700">
            Precios transparentes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Paquetes de diseño web
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Tres paquetes, tres demos reales publicadas. Precios fijos en soles, sin letra
            pequeña: incluyen diseño premium, desarrollo, capacitación y soporte post-entrega.
          </p>
        </div>

        {/* Tarjetas de paquetes */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => {
            const accent = ACCENT_THEMES[p.accent] || ACCENT_THEMES.indigo;
            return (
              <Reveal key={p.id} delay={i * 90} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                    p.isPopular
                      ? 'border-indigo-600/30 shadow-glow-indigo ring-1 ring-indigo-600/10'
                      : 'border-slate-200 shadow-soft'
                  }`}
                >
                  {p.isPopular ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-glow-indigo">
                      {p.tag}
                    </span>
                  ) : (
                    <span className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent.chip}`}>
                      {p.tag}
                    </span>
                  )}

                  <h3 className="mt-3 text-base font-bold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.description}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900">
                      S/ {p.price.toLocaleString('es-PE')}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      S/ {p.oldPrice.toLocaleString('es-PE')}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">Entrega en {p.delivery}</p>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`} /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid gap-2">
                    <a
                      href={`?paquete=${p.id}#contacto`}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all hover:scale-[1.02] ${accent.button} ${accent.glow}`}
                    >
                      Cotizar {p.name} <Zap className="h-4 w-4" />
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition-colors hover:border-emerald-500 hover:text-emerald-700"
                      >
                        Ver demo real: {p.demo.label} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Matriz comparativa (#precios) — las 3 columnas son las 3 demos reales */}
        <div id="precios" className="mt-16 scroll-mt-24 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-soft">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Característica</th>
                {comparisonColumns.map((c) => (
                  <th key={c.key} className="px-4 py-4 text-center align-top">
                    <span className={`block text-xs font-bold uppercase tracking-wider ${c.color}`}>
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 underline-offset-2 transition-colors hover:text-emerald-700 hover:underline"
                    >
                      Demo: {c.demo} <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/70">
                  <td className="px-6 py-3.5 font-medium text-slate-700">{row.feature}</td>
                  {comparisonColumns.map((c) => (
                    <td key={c.key} className="px-4 py-3.5 text-center">
                      {row[c.key] ? (
                        <Check className="mx-auto h-[18px] w-[18px] text-emerald-500" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-slate-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cada columna corresponde a una web real en producción */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Demos reales:</span>
          {comparisonColumns.map((c) => (
            <a
              key={c.key}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {c.label} · {c.demo}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
