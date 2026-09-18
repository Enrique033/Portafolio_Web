'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/portfolioData';

/**
 * Widget flotante permanente SOLO WhatsApp (esquina inferior derecha).
 * Tooltip con branding NEXUS STUDIO al hacer hover/click.
 */
export default function WhatsAppFloating({ position = 'right-5 bottom-5 z-50' }) {
  return (
    <div className={`fixed ${position} group`} data-whatsapp-floating>
      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-20 right-1 mb-2 w-56 rounded-xl border border-slate-200 bg-white p-3 text-xs shadow-xl transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="font-semibold text-slate-900">¿Hablamos? 🚀</p>
        <p className="mt-1 text-slate-500">Cotiza tu web en menos de 15 minutos.</p>
      </div>

      <a
        href={getWhatsAppLink('Hola, NEXUS STUDIO! Quiero cotizar una página web.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:bg-emerald-600 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
      </a>
    </div>
  );
}