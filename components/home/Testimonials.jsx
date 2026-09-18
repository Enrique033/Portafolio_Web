'use client';

import { Quote, Star } from 'lucide-react';
import { agencyTestimonials } from '@/data/portfolioData';
import Reveal from '@/components/shared/Reveal';

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-600/20 bg-indigo-600/5 px-3 py-1 text-xs font-bold text-indigo-700">
            Clientes felices
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen de{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Resultados reales de negocios que ya venden y captan clientes por internet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {agencyTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600/25 hover:shadow-lift">
                <Quote className="h-7 w-7 text-indigo-600/20" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white shadow-glow-indigo">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <span className="ml-auto flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
