'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/data/portfolioData';

const LINKS = [
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min((window.scrollY / total) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-[0_2px_16px_-8px_rgba(15,23,42,0.12)] backdrop-blur-xl'
          : 'border-b border-transparent bg-white'
      }`}
    >
      {/* Barra de progreso de scroll */}
      <div className="absolute inset-x-0 top-0 h-0.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Branding */}
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-black text-white shadow-glow-indigo transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            N
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            NEXUS<span className="text-indigo-600">STUDIO</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-600/5 hover:text-indigo-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppLink('Hola, NEXUS STUDIO! Quiero cotizar mi web.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-bold text-white shadow-glow-indigo transition-all hover:scale-[1.03] hover:shadow-lift sm:inline-flex"
          >
            Cotiza ahora
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-colors hover:border-indigo-400 hover:text-indigo-600 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Drawer móvil */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300`}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-72 flex-col border-l border-slate-200 bg-white p-5 shadow-lift transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-900">Menú</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-600/5 hover:text-indigo-700"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-glow-indigo transition-transform hover:scale-[1.02]"
            >
              Cotiza tu web gratis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
