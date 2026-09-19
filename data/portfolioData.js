/**
 * portfolioData.js — Configuración global de NEXUS STUDIO:
 * paquetes, addons, planes de mantenimiento, comparativa, métricas y proyectos.
 */

// ───────────────────────── Marca y contacto ─────────────────────────

export const AGENCY_NAME = 'NEXUS STUDIO';
export const AGENCY_TAGLINE = 'Diseño y desarrollo de páginas web';

// Nota: `data/portfolioData.js` se importa también desde componentes de cliente,
// por eso solo se leen variables NEXT_PUBLIC_* (se incrustan en el build).
// El servidor usa CONTACT_EMAIL / RESEND_API_KEY en app/api/contact/route.js.
export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '51900000000';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hola@nexusstudio.dev';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexus-studio.vercel.app';

/** Formatea un número como moneda en soles peruanos. */
export const money = (value) =>
  'S/ ' + Number(value || 0).toLocaleString('es-PE', { maximumFractionDigits: 0 });

/** Helper oficial para armar un link de WhatsApp con mensaje prellenado. */
export function getWhatsAppLink(message) {
  return 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(message);
}

// ─────────────────────────── Hero / métricas ───────────────────────────

export const heroMetrics = [
  { icon: 'Rocket', value: '100%', label: 'Diseño a tu medida' },
  { icon: 'Globe', value: '3', label: 'Demos reales publicadas' },
  { icon: 'MessageCircle', value: '<24h', label: 'Respuesta por WhatsApp' },
  { icon: 'LifeBuoy', value: '30 días', label: 'Soporte post-entrega' },
];

// ───────────────────────── Paquetes de diseño web ─────────────────────────

export const packages = [
  {
    id: 'informativa',
    name: 'Web Informativa',
    demo: { label: 'Estudio Morada', href: 'https://morada-estudio.vercel.app/' },
    price: 499,
    oldPrice: 1490,
    tag: 'Ideal para presentar tu negocio',
    delivery: '7 días',
    description:
      'Sitio de presentación de tu marca: quiénes somos, servicios, galería de trabajos y formulario de contacto. Demo real: Estudio Morada.',
    accent: 'indigo',
    features: [
      'Diseño premium a medida (1 a 3 secciones o páginas)',
      'Responsive: móvil, tablet y desktop',
      'Presentación, servicios y galería con tus fotos',
      'Reseñas de clientes y datos de ubicación',
      'Formulario de contacto + botón de WhatsApp',
      'SEO técnico y velocidad optimizada',
      'Analytics y 30 días de soporte post-entrega',
    ],
  },
  {
    id: 'catalogo',
    name: 'Catálogo Digital',
    demo: { label: 'Lumbre', href: 'https://lumbre-catalogo.vercel.app/' },
    price: 699,
    oldPrice: 2890,
    tag: 'El más elegido',
    delivery: '15 a 20 días',
    description:
      'Vitrina de productos con filtros y cotización en lote por WhatsApp, ideal para negocios que venden por pedido. Demo real: Lumbre.',
    accent: 'violet',
    isPopular: true,
    features: [
      'Catálogo con filtros por categoría y precio',
      'Ficha de producto con variantes y colores',
      'Cotización masiva (varios productos en un solo pedido)',
      'Pedido enviado directo a tu WhatsApp',
      'Buscador, secciones y contenido editable',
      'SEO técnico + optimización on-page',
      'Capacitación y 60 días de soporte',
    ],
  },
  {
    id: 'tienda',
    name: 'Tienda Online',
    demo: { label: 'CUMBRE Tostaduría', href: 'https://cumbretostaduria.vercel.app/' },
    price: 999,
    oldPrice: 4990,
    tag: 'Vende 24/7',
    delivery: '30 a 45 días',
    description:
      'Tienda virtual completa para vender online: catálogo, carrito, cupones y checkout, con pedidos que llegan directos a tu WhatsApp. Demo real: CUMBRE Tostaduría.',
    accent: 'indigo',
    features: [
      'Catálogo de productos ilimitado',
      'Carrito persistente + checkout completo',
      'Cupones de descuento y cálculo de envíos',
      'Pedidos por WhatsApp (pasarela de pagos opcional)',
      'Gestión de stock e inventario',
      'Panel de administración de pedidos',
      'Filtros, buscador y sección "Mi Cuenta"',
      'Capacitación y 90 días de soporte',
    ],
  },
];

// ─────────────────────────────── Addons ───────────────────────────────

export const addons = [
  { id: 'copywriting', name: 'Copywriting profesional', price: 35, desc: 'Textos que convierten visitantes en clientes.' },
  { id: 'seo', name: 'Pack SEO inicial', price: 55, desc: 'Palabras clave, sitemap y optimización on-page.' },
  { id: 'blog', name: 'Blog integrado', price: 75, desc: 'Publica artículos y atrae tráfico orgánico.' },
  { id: 'whatsapp-api', name: 'WhatsApp Business API', price: 25, desc: 'Botones de cotización y compra directa.' },
  { id: 'crm', name: 'CRM / formularios avanzados', price: 45, desc: 'Captura y organiza leads automáticamente.' },
  { id: 'fotografia', name: 'Sesión fotográfica de producto', price: 95, desc: 'Fotos profesionales para tu catálogo.' },
  { id: 'pagos', name: 'Pasarela de pagos', price: 60, desc: 'Cobros con tarjeta, Yape y transferencias.' },
  { id: 'mant-3m', name: 'Mantenimiento mensual (×3 meses)', price: 30, desc: 'Actualizaciones, backups y reportes.' },
];

// ─────────────────────── Planes de mantenimiento ───────────────────────

export const maintenancePlans = [
  {
    name: 'Básico',
    price: 99,
    desc: 'Protección esencial para tu web',
    features: ['Backups semanales', 'Actualizaciones de seguridad', 'Monitoreo de uptime', 'Soporte por correo'],
  },
  {
    name: 'Pro',
    price: 199,
    desc: 'Mantenimiento proactivo trimestral',
    isPopular: true,
    features: ['Todo lo de Básico', 'Actualizaciones de contenido', 'Informes de tráfico/SEO', 'Soporte prioritario WhatsApp', 'Ajustes menores (hasta 2 h/mes)'],
  },
  {
    name: 'Premium',
    price: 349,
    desc: 'El sitio crece contigo',
    features: ['Todo lo de Pro', 'Optimización de conversión', 'Redacción + SEO mensual', 'Horas extra de desarrollo', 'Respuesta en menos de 2 h'],
  },
];

// ───────────────────── Matriz comparativa de características ─────────────────────

// Las 3 columnas son exactamente los 3 tipos de web que tenemos en demo real:
//   informativa → Estudio Morada · catalogo → Lumbre · tienda → CUMBRE Tostaduría.
// Se renderiza en components/home/ServicesPricing.jsx (#precios).

export const comparisonColumns = [
  {
    key: 'informativa',
    label: 'Informativa',
    demo: 'Morada Estudio',
    href: 'https://morada-estudio.vercel.app/',
    color: 'text-indigo-600',
  },
  {
    key: 'catalogo',
    label: 'Catálogo',
    demo: 'Lumbre',
    href: 'https://lumbre-catalogo.vercel.app/',
    color: 'text-violet-600',
  },
  {
    key: 'tienda',
    label: 'Tienda online',
    demo: 'CUMBRE',
    href: 'https://cumbretostaduria.vercel.app/',
    color: 'text-cyan-600',
  },
];

export const comparisonFeatures = [
  { feature: 'Demo real navegable en vivo', informativa: true, catalogo: true, tienda: true },
  { feature: 'Diseño responsive (móvil / tablet / desktop)', informativa: true, catalogo: true, tienda: true },
  { feature: 'Secciones de marca: inicio, servicios, contacto', informativa: true, catalogo: true, tienda: true },
  { feature: 'Galería de trabajos / portafolio', informativa: true, catalogo: false, tienda: false },
  { feature: 'Reseñas de clientes y ubicación', informativa: true, catalogo: true, tienda: true },
  { feature: 'Vitrina de productos con filtros y buscador', informativa: false, catalogo: true, tienda: true },
  { feature: 'Ficha de producto con variantes y colores', informativa: false, catalogo: true, tienda: true },
  { feature: 'Cotización / pedido por WhatsApp', informativa: true, catalogo: true, tienda: true },
  { feature: 'Cotización masiva (varios productos a la vez)', informativa: false, catalogo: true, tienda: false },
  { feature: 'Carrito persistente y checkout', informativa: false, catalogo: false, tienda: true },
  { feature: 'Cupones de descuento y cálculo de envíos', informativa: false, catalogo: false, tienda: true },
  { feature: 'Gestión de stock e inventario', informativa: false, catalogo: false, tienda: true },
  { feature: 'SEO técnico y velocidad optimizada', informativa: true, catalogo: true, tienda: true },
  { feature: 'Soporte post-entrega incluido', informativa: true, catalogo: true, tienda: true },
];

// ───────────────────── Proyectos destacados del portafolio ─────────────────────
// Aquí SOLO van las demos reales y en producción (status: 'online'):
//   1) Web informativa  → Morada Estudio
//   2) Catálogo digital → Lumbre
//   3) Tienda online    → CUMBRE Tostaduría
// `type`    es la etiqueta visible del tipo de web.
// `category` alimenta los filtros personalizados del showcase.
// Si algún día una demo deja de estar publicada, cambia su `status` a 'pronto'.

export const portfolioProjects = [
  {
    slug: 'informativa-morada',
    type: 'Web informativa',
    name: 'Estudio Morada',
    brand: 'Morada · Diseño de interiores',
    category: 'informativa',
    tagline: 'Fachada online del estudio con galería y contacto',
    description:
      'Sitio corporativo para un estudio de diseño de interiores: presentación, galería de proyectos reales, reseñas y formulario de captación directo.',
    href: 'https://morada-estudio.vercel.app/',
    status: 'online',
    accent: 'informativa',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Galería de proyectos reales', 'Reseñas de clientes', 'Contacto directo por formulario'],
  },
  {
    slug: 'catalogo-lumbre',
    type: 'Catálogo digital',
    name: 'Catálogo Lumbre',
    brand: 'Lumbre · Decoración & Hogar',
    category: 'catalogo',
    tagline: 'Vitrina interactiva con cotización masiva por WhatsApp',
    description:
      'Una vitrina premium para mostrar productos, con filtros avanzados y exportación de cotizaciones en lote. Perfecto para rubros que venden por pedido.',
    href: 'https://lumbre-catalogo.vercel.app/',
    status: 'online',
    accent: 'catalogo',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Filtros por categoría y precio', 'Cotización masiva por WhatsApp', 'Vista rápida con variantes y colores'],
  },
  {
    slug: 'tienda-cumbre',
    type: 'Tienda online',
    name: 'CUMBRE Tostaduría',
    brand: 'CUMBRE · Tostaduría de café',
    category: 'tienda',
    tagline: 'Checkout en vivo: carrito, cupones y envíos',
    description:
      'E-commerce real y en producción para una tostaduría de café de especialidad: catálogo, carrito persistente, cupones de descuento y pedidos que llegan directos por WhatsApp.',
    href: 'https://cumbretostaduria.vercel.app/',
    status: 'online',
    accent: 'tienda',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Carrito persistente y checkout completo', 'Cupones de descuento reales', 'Pedidos que llegan a WhatsApp'],
  },
];

// ────────────────────────────────────────────────────────────────────────────────
// Alias de compatibilidad: las secciones extra usan el mismo catálogo real
// (sin proyectos duplicados ni inventados).
// ────────────────────────────────────────────────────────────────────────────────
export const portfolioProjectsExtended = portfolioProjects;

// ───────────────────── Proceso de trabajo (sección extra) ─────────────────────

export const processSteps = [
  {
    icon: 'Search',
    step: '01',
    title: 'Descubrimiento',
    desc: 'Entrevista estratégica para entender tu negocio, audiencia y objetivos de conversión.',
  },
  {
    icon: 'PenTool',
    step: '02',
    title: 'Diseño',
    desc: 'Wireframes y mockups premium. Iteramos contigo hasta el pixel perfecto.',
  },
  {
    icon: 'Code2',
    step: '03',
    title: 'Desarrollo',
    desc: 'Programación responsive, rápida y con SEO técnico desde el primer despliegue.',
  },
  {
    icon: 'Rocket',
    step: '04',
    title: 'Lanzamiento',
    desc: 'Publicación, capacitación y soporte post-entrega para crecer sin límites.',
  },
];

// ───────────── Testimonios (sección desactivada por ahora) ─────────────

export const agencyTestimonials = [
  {
    quote:
      'Publicamos nuestro estudio online en una semana: galería de proyectos, reseñas y formulario de contacto. Ahora nos llegan consultas todos los días.',
    name: 'Paloma Rivera',
    role: 'Directora · Morada Estudio (web informativa)',
  },
  {
    quote:
      'El catálogo digital cambió nuestra forma de vender: el cliente arma su pedido y nos llega la cotización completa por WhatsApp en segundos.',
    name: 'Rodrigo Salcedo',
    role: 'Propietario · Lumbre Decoración (catálogo digital)',
  },
  {
    quote:
      'La tienda online ya es nuestro canal de ventas principal: carrito, cupones y pedidos que llegan directo al WhatsApp del equipo.',
    name: 'Camila Torres',
    role: 'Fundadora · CUMBRE Tostaduría (tienda online)',
  },
];