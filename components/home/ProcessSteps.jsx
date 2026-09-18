import { processSteps } from '@/data/portfolioData';
import Icon from '@/components/shared/Icon';
import Reveal from '@/components/shared/Reveal';

export default function ProcessSteps() {
  return (
    <section id="proceso" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-600/20 bg-indigo-600/5 px-3 py-1 text-xs font-bold text-indigo-700">
            Método NEXUS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            De la idea al lanzamiento en{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              4 pasos
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Un proceso claro y transparente: siempre sabes en qué estado está tu proyecto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} className="h-full">
              <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600/30 hover:shadow-lift">
                <span className="absolute right-5 top-4 text-4xl font-black text-slate-200/80 transition-colors duration-300 group-hover:text-indigo-600/20">
                  {s.step}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-glow-indigo transition-transform duration-300 group-hover:scale-110">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
