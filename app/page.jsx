'use client';

import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import ServicesPricing from '@/components/home/ServicesPricing';
import ProcessSteps from '@/components/home/ProcessSteps';
import MaintenancePlans from '@/components/home/MaintenancePlans';
import ContactForm from '@/components/home/ContactForm';
import SiteFooter from '@/components/home/SiteFooter';
import WhatsAppFloating from '@/components/shared/WhatsAppFloating';
import { ACCENT_THEMES } from '@/data/themeConfig';

/** Sección de contacto (estática). ContactForm resuelve ?paquete= en el cliente. */
function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/70 bg-slate-50 py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center rounded-full border border-indigo-600/20 bg-indigo-600/5 px-3 py-1 text-xs font-bold text-indigo-700">
              Empieza hoy
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Hablemos de tu{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                proyecto web
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
              Cuéntanos qué necesitas y recibe una cotización clara en menos de 24 horas.
              Sin compromisos: primero conocemos tu negocio, luego proponemos la solución.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {[
                'Respuesta garantizada en menos de 24 h',
                'Propuesta con precio fijo sin sorpresas',
                'Diseño premium y desarrollo de alto rendimiento',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600/10 text-xs text-indigo-600">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm accent={ACCENT_THEMES.indigo} />
        </div>
      </div>
    </section>
  );
}

/** Portada de NEXUS STUDIO (App Router /) — tema claro. */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioShowcase />
        <ServicesPricing />
        <ProcessSteps />
        <MaintenancePlans />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloating />
    </>
  );
}
