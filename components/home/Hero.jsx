'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { heroMetrics } from '@/data/portfolioData';
import Icon from '@/components/shared/Icon';

/** Contador animado (ease-out cúbico) que arranca cuando el elemento es visible. */
function useCountUp(target, active, duration = 1300) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function Metric({ metric, active }) {
  const match = metric.value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const num = useCountUp(target, active);
  const display = match ? `${num}${suffix}` : metric.value;

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600/30 hover:shadow-lift">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 transition-transform duration-300 group-hover:scale-110">
        <Icon name={metric.icon} className="h-5 w-5" />
      </div>
      <p className="mt-2.5 text-xl font-extrabold tabular-nums text-slate-900">{display}</p>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{metric.label}</p>
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(false);
  const metricsRef = useRef(null);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Halos y grilla decorativa suaves */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-600/[0.06] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 bg-dots-light [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-1.5 rounded-full border border-indigo-600/20 bg-white px-3.5 py-1.5 text-xs font-bold text-indigo-700 shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" /> Agencia de desarrollo web · Lima
          </span>

          <h1
            className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Creamos webs que{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              convierten visitas
            </span>{' '}
            en clientes
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Diseño premium, desarrollo de alto rendimiento y estrategia de conversión en cada pixel.
            Explora nuestro{' '}
            <span className="font-semibold text-slate-900">portafolio de proyectos reales</span> y
            cotiza tu proyecto en menos de 1 minuto.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-glow-indigo transition-all hover:scale-[1.03] hover:shadow-lift active:scale-[0.98]"
            >
              Ver proyectos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:border-indigo-500 hover:bg-indigo-600/5 hover:text-indigo-700"
            >
              <Zap className="h-4 w-4 text-indigo-600" /> Cotizar proyecto
            </a>
          </div>

          {/* Métricas con contador animado */}
          <div ref={metricsRef} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroMetrics.map((m) => (
              <Metric key={m.label} metric={m} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
