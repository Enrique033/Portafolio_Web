/**
 * portfolioData.js — Configuración global de NEXUS STUDIO:
 * paquetes, addons, planes de mantenimiento, comparativa, métricas y proyectos.
 */

// ───────────────────────── Marca y contacto ─────────────────────────

export const AGENCY_NAME = 'NEXUS STUDIO';
export const AGENCY_TAGLINE = 'Diseño y desarrollo de páginas web';

export const WHATSAPP_PHONE = process.env.WHATSAPP_PHONE || '51900000000';
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'hola@nexusstudio.dev';
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
  { icon: 'MessageCircle', value: '<24h', label: 'Respuesta por WhatsApp' },
  { icon: 'LifeBuoy', value: '30 días', label: 'Soporte post-entrega' },
  { icon: 'Globe', value: '24/7', label: 'Tu web siempre en línea' },
];

// ───────────────────────── Paquetes de diseño web ─────────────────────────

export const packages = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 499,
    oldPrice: 1490,
    tag: 'Ideal para despegar',
    delivery: '7 días',
    description:
      'Una página de alta conversión diseñada para presentar tu negocio y captar leads o ventas inmediatas.',
    accent: 'indigo',
    features: [
      '1 página con diseño premium a medida',
      'Diseño responsive (móvil / tablet / desktop)',
      'Copywriting orientado a conversión',
      'Formularios + botón de WhatsApp',
      'SEO técnico básico y velocidad optimizada',
      'Analytics y pixel de conversión',
      '30 días de soporte post-entrega',
    ],
  },
  {
    id: 'corporativa',
    name: 'Web Corporativa',
    price: 699,
    oldPrice: 2890,
    tag: 'El más elegido',
    delivery: '15 días',
    description:
      'Sitio multisección que proyecta confianza: servicios, equipo, testimonios, blog y formas de contacto.',
    accent: 'violet',
    isPopular: true,
    features: [
      'Hasta 8 páginas + blog integrado',
      'Panel administrable (publica contenido tú mismo)',
      'Galerías, testimonios y mapa interactivo',
      'Formularios avanzados con notificaciones',
      'SEO técnico + optimización on-page',
      'Google Analytics + Search Console',
      'Capacitación y 60 días de soporte',
    ],
  },
  {
    id: 'ecommerce',
    name: 'Tienda E-commerce',
    price: 999,
    oldPrice: 4990,
    tag: 'Vende 24/7',
    delivery: '30 días',
    description:
      'Tienda virtual completa para vender online: catálogo, carrito, cupones, stock y pedidos por WhatsApp o pasarelas de pago.',
    accent: 'indigo',
    features: [
      'Catálogo de productos ilimitado',
      'Carrito + cupones de descuento',
      'Checkout por pasarelas (Yape, Tarjeta, PayPal)',
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

export const comparisonFeatures = [
  { feature: 'Diseño responsive', landing: true, corporativa: true, ecommerce: true },
  { feature: 'Panel de administración', landing: false, corporativa: true, ecommerce: true },
  { feature: 'Blog integrado', landing: false, corporativa: true, ecommerce: false },
  { feature: 'Carrito / checkout', landing: false, corporativa: false, ecommerce: true },
  { feature: 'Cupones de descuento', landing: false, corporativa: false, ecommerce: true },
  { feature: 'Pasarela de pagos', landing: false, corporativa: false, ecommerce: true },
  { feature: 'WhatsApp / cotización', landing: true, corporativa: true, ecommerce: true },
  { feature: 'SEO técnico y velocidad', landing: true, corporativa: true, ecommerce: true },
  { feature: 'Contenidos / blog', landing: false, corporativa: true, ecommerce: false },
  { feature: 'Soporte post-entrega', landing: true, corporativa: true, ecommerce: true },
];

// ───────────────────── Proyectos destacados del portafolio ─────────────────────
// status: 'online' → la demo es real: el href apunta a la web en producción.
// status: 'pronto' → aún en construcción; muestra aviso "Próximamente".
// category se usa para los filtros personalizados del showcase.

export const portfolioProjects = [
  {
    slug: 'informativa',
    name: 'Web Informativa',
    brand: 'AURA · Consultores',
    category: 'web',
    tagline: 'Corporativa con slider hero, servicios y mapa real',
    description:
      'Patrón ideal para empresas de servicios: hero deslizante, ficha de servicios interactiva, testimonios y Google Maps integrado.',
    href: '#',
    status: 'pronto',
    accent: 'informativa',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Slider hero con autoplay', 'Servicios con alcance y entregables', 'Google Maps (vista Mapa / Satélite)'],
  },
  {
    slug: 'catalogo',
    name: 'Catálogo Digital',
    brand: 'LUMINA · Decoración & Hogar',
    category: 'catalogo',
    tagline: 'Vitrina interactiva con cotización masiva por WhatsApp',
    description:
      'Una vitrina premium para mostrar productos, con filtros avanzados y exportación de cotizaciones en lote. Perfecto para rubros que venden por pedido.',
    href: '#',
    status: 'pronto',
    accent: 'catalogo',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Filtros por categoría y precio', 'Cotización masiva por WhatsApp', 'Vista rápida con variantes y colores'],
  },
  {
    slug: 'tienda',
    name: 'Tienda Virtual (E-commerce)',
    brand: 'CUMBRE · Tostaduría de café',
    category: 'ecommerce',
    tagline: 'Demo en vivo: checkout con carrito, cupones y envíos',
    description:
      'E-commerce real y en producción para una tostaduría de café de especialidad: catálogo, carrito persistente, cupones de descuento y pedidos que llegan directos por WhatsApp.',
    href: 'https://cumbretostaduria.vercel.app/',
    status: 'online',
    accent: 'tienda',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
    bullets: ['Carrito persistente y checkout completo', 'Cupones de descuento reales', 'Pedidos que llegan a WhatsApp'],
  },
];

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
    quote: 'NEXUS STUDIO convirtió nuestra tienda física en un canal digital que ya es el 40% de nuestras ventas.',
    name: 'Camila Torres',
    role: 'Fundadora · Mesa y Decor',
  },
  {
    quote: 'El equipo entendió el negocio a la primera. Página web corporativa entregada en tiempo récord y con excelente posicionamiento.',
    name: 'Jorge Salinas',
    role: 'Gerente General · Grupo Andino',
  },
  {
        quote: 'El portafolio de NEXUS STUDIO es exactamente lo que contratamos: una landing que genera leads todas las semanas.',
    name: 'Lucía Fernández',
    role: 'CMO · Fitlab Perú',
  },
];