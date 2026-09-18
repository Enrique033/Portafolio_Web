'use client';

import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { AGENCY_NAME, CONTACT_EMAIL, WHATSAPP_PHONE, getWhatsAppLink } from '@/data/portfolioData';

const YEAR = new Date().getFullYear();

const links = [
  { label: 'Proyectos destacados', href: '#portafolio' },
  { label: 'Servicios y precios', href: '#servicios' },
  { label: 'Método de trabajo', href: '#proceso' },
  { label: 'Cotización inmediata', href: '#contacto' },
];

const projectLinks = [
  { label: 'Web Informativa', href: '#', soon: true },
  { label: 'Catálogo Digital', href: '#', soon: true },
  { label: 'Tienda Virtual · CUMBRE Café', href: 'https://cumbretostaduria.vercel.app/', soon: false },
];

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white shadow-glow-indigo">
                N
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                NEXUS<span className="text-indigo-600">STUDIO</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Agencia de desarrollo web &amp; soluciones digitales. Diseñamos, construimos y hacemos crecer
              sitios que convierten.
            </p>
            <div className="mt-4 flex gap-2">
              <a href="#footer" aria-label="Instagram" className="rounded-xl border border-slate-200 p-2 text-slate-500 transition-colors hover:border-indigo-400 hover:text-indigo-600"><Instagram className="h-4 w-4" /></a>
              <a href="#footer" aria-label="Facebook" className="rounded-xl border border-slate-200 p-2 text-slate-500 transition-colors hover:border-indigo-400 hover:text-indigo-600"><Facebook className="h-4 w-4" /></a>
              <a href="#footer" aria-label="LinkedIn" className="rounded-xl border border-slate-200 p-2 text-slate-500 transition-colors hover:border-indigo-400 hover:text-indigo-600"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Navegación</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-600 transition-colors hover:text-indigo-700">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Proyectos destacados */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Proyectos</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projectLinks.map((l) => (
                <li key={l.label}>
                  {l.soon ? (
                    <a href="#portafolio" className="group inline-flex items-center text-slate-600 transition-colors hover:text-indigo-700">
                      <span className="mr-1.5 inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500">
                        Próximamente
                      </span>
                      {l.label}
                    </a>
                  ) : (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-indigo-700"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-indigo-600" />
                <a href={getWhatsAppLink('Hola, NEXUS STUDIO!')} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-indigo-700">
                  +{WHATSAPP_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-600" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-indigo-700">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-600" /> Lima, Perú · Atención remota mundial
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-indigo-600" /> Lun — Sáb · 9:00 — 20:00
              </li>
            </ul>
            <a
              href="#contacto"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-glow-indigo transition-all hover:scale-[1.02]"
            >
              Cotiza tu web gratis
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {YEAR} {AGENCY_NAME}. Todos los derechos reservados.</p>
          <p>Hecho con Next.js 14 · Tailwind CSS · Lucide Icons</p>
        </div>
      </div>
    </footer>
  );
}

