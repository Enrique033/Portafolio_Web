'use client';

import { Check, ShieldCheck } from 'lucide-react';
import { maintenancePlans, getWhatsAppLink } from '@/data/portfolioData';
import Reveal from '@/components/shared/Reveal';

export default function MaintenancePlans() {
  return (
    <section className="relative border-y border-slate-200/70 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-600/5 px-3 py-1 text-xs font-bold text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5" /> Soporte continuo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Planes de mantenimiento
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Tu web lista no es el final: la protegemos, actualizamos y hacemos crecer cada mes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {maintenancePlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  p.isPopular
                    ? 'border-emerald-500/40 shadow-soft ring-1 ring-emerald-500/20'
                    : 'border-slate-200 shadow-soft'
                }`}
              >
                {p.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30">
                    Recomendado
                  </span>
                )}
                <h3 className="text-base font-bold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{p.desc}</p>
                <p className="mt-4 text-2xl font-extrabold text-slate-900">
                  S/ {p.price}
                  <span className="text-sm font-medium text-slate-400">/mes</span>
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink('Hola, NEXUS STUDIO! Quiero el plan de mantenimiento ' + p.name + '.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl border border-emerald-600/30 bg-white px-4 py-2.5 text-sm font-bold text-emerald-700 transition-all hover:border-emerald-600/50 hover:bg-emerald-600/10"
                >
                  Contratar plan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
