'use client';

import { useEffect, useState } from 'react';
import { Check, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react';
import { addons, packages, CONTACT_EMAIL, getWhatsAppLink } from '@/data/portfolioData';

/**
 * Formulario inteligente que calcula totales estimados según
 * paquete + addons seleccionados. Envía a /api/contact, WhatsApp o correo.
 */
export default function ContactForm({ accent, presetPackage = null }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', addons: [] });
  const [pkgId, setPkgId] = useState(
    presetPackage && packages.some((p) => p.id === presetPackage) ? presetPackage : 'landing'
  );
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (presetPackage && packages.some((p) => p.id === presetPackage)) setPkgId(presetPackage);
  }, [presetPackage]);

  const pkg = packages.find((p) => p.id === pkgId) || packages[0];
  const addonsTotal = form.addons.reduce((a, id) => a + (addons.find((x) => x.id === id)?.price || 0), 0);
  const total = pkg.price + addonsTotal;

  const toggleAddon = (id) =>
    setForm((f) => ({
      ...f,
      addons: f.addons.includes(id) ? f.addons.filter((a) => a !== id) : [...f.addons, id],
    }));

  const buildMessage = () =>
    [
      'Hola, NEXUS STUDIO! Quiero cotizar mi página web.',
      '',
      '• Nombre: ' + form.name,
      '• Correo: ' + form.email,
      '• Teléfono: ' + form.phone,
      '• Paquete: ' + pkg.name + ' (S/ ' + pkg.price.toLocaleString('es-PE') + ')',
      form.addons.length
        ? '• Addons: ' + form.addons.map((id) => addons.find((x) => x.id === id)?.name).join(', ')
        : '• Addons: ninguno',
      '• Total estimado: S/ ' + total.toLocaleString('es-PE'),
      '• Mensaje: ' + form.message,
    ].join('\n');

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'quote',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: buildMessage(),
          package: pkg.name,
          total,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
      }
    } catch {
      /* offline: el usuario siempre puede usar WhatsApp/Correo */
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-emerald-600/25 bg-emerald-600/5 p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <h3 className="text-lg font-extrabold text-slate-900">¡Solicitud enviada!</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Te contactaremos en menos de 24 horas con una propuesta personalizada.
        </p>
      </div>
    );
  }

  const inputCls =
    'w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-600/10';

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-xl font-extrabold text-slate-900 sm:text-2xl">Cotización en 1 minuto</h3>
      <p className="mt-2 text-sm text-slate-600">
        Selecciona tu paquete, agrega extras y recibe tu total estimado al instante.
      </p>

      <form onSubmit={handleSend} className="mt-6 grid gap-4">
        {/* Paquete (selector personalizado, no nativo) */}
        <div>
          <label className="text-xs font-semibold text-slate-700">Paquete de diseño web</label>
          <div className="mt-2 grid gap-2">
            {packages.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPkgId(p.id)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                  pkgId === p.id
                    ? 'border-indigo-600/50 bg-indigo-600/5 ring-1 ring-indigo-600/20'
                    : 'border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-600/[0.03]'
                }`}
              >
                <div>
                  <p className="text-sm font-bold text-slate-900">{p.name}</p>
                  <p className="text-[11px] text-slate-500">{p.delivery} de entrega</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-extrabold text-slate-900">S/ {p.price.toLocaleString('es-PE')}</p>
                  {pkgId === p.id && <Check className="ml-auto h-4 w-4 text-emerald-600" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div>
          <label className="text-xs font-semibold text-slate-700">Extras (opcional)</label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {addons.map((a) => (
              <label
                key={a.id}
                className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm transition-colors hover:border-indigo-400 hover:bg-indigo-600/[0.03]"
              >
                <input
                  type="checkbox"
                  checked={form.addons.includes(a.id)}
                  onChange={() => toggleAddon(a.id)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-indigo-600"
                />
                <span className="flex-1">
                  <span className="block font-semibold text-slate-800">{a.name}</span>
                  <span className="block text-[11px] text-slate-500">{a.desc}</span>
                </span>
                <span className="shrink-0 text-xs font-bold text-slate-900">+S/ {a.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Datos */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Nombre *</label>
            <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Tu nombre" className={`mt-1.5 ${inputCls}`} />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-700">Teléfono / WhatsApp *</label>
            <input required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+51 9XX XXX XXX" className={`mt-1.5 ${inputCls}`} />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700">Correo *</label>
          <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="tucorreo@mail.com" className={`mt-1.5 ${inputCls}`} />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-700">Cuéntanos de tu proyecto</label>
          <textarea rows={3} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} placeholder="¿Qué web necesitas? ¿Tienes marca, logo, fotos?" className={`mt-1.5 resize-none ${inputCls}`} />
        </div>

        {/* Total */}
        <div className="flex items-center justify-between rounded-xl border border-indigo-600/20 bg-indigo-600/5 px-4 py-3">
          <span className="text-sm font-medium text-slate-700">Total estimado</span>
          <div className="text-right">
            {addonsTotal > 0 && <p className="text-[11px] text-slate-500">Incluye {form.addons.length} extra(s)</p>}
            <p className="text-xl font-extrabold text-slate-900">S/ {total.toLocaleString('es-PE')}</p>
          </div>
        </div>

        {/* Acciones */}
        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="submit"
            disabled={sending}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all hover:scale-[1.02] ${(accent || { button: 'bg-indigo-600 hover:bg-indigo-700 text-white' }).button} disabled:opacity-60`}
          >
            <Send className="h-4 w-4" /> {sending ? 'Enviando...' : 'Enviar solicitud'}
          </button>
          <a
            href={getWhatsAppLink(buildMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/40 px-4 py-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-600/10"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp directo
          </a>
        </div>

        <button
          type="button"
          onClick={() =>
            window.open(
              'mailto:' + CONTACT_EMAIL + '?subject=Quiero cotizar ' + pkg.name + '&body=' + encodeURIComponent(buildMessage()),
              '_self'
            )
          }
          className="inline-flex items-center justify-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-indigo-700"
        >
          <Mail className="h-3.5 w-3.5" /> ¿Prefieres correo? Escríbenos a {CONTACT_EMAIL}
        </button>
      </form>
    </div>
  );
}

