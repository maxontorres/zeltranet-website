export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** Each page's URL in every language. Spanish pages use Spanish slugs. */
export const routes = {
  home: { en: '/', es: '/es/' },
  services: { en: '/services/', es: '/es/servicios/' },
  work: { en: '/work/', es: '/es/proyectos/' },
  automator: {
    en: '/work/ai-automator/',
    es: '/es/proyectos/ai-automator/',
  },
  mxnUsd: { en: '/work/mxn-usd/', es: '/es/proyectos/mxn-usd/' },
  experience: { en: '/experience/', es: '/es/experiencia/' },
  about: { en: '/about/', es: '/es/nosotros/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
} as const satisfies Record<string, Record<Locale, string>>;
export type RouteKey = keyof typeof routes;

export const languages = {
  en: { short: 'EN', name: 'English', ogLocale: 'en_US' },
  es: { short: 'ES', name: 'Español', ogLocale: 'es_MX' },
} as const satisfies Record<Locale, unknown>;

/** Strings shared by the layout and small components. */
export const ui = {
  en: {
    skip: 'Skip to content',
    home: 'Zeltranet home',
    mainNav: 'Main navigation',
    language: 'Language',
    nav: {
      home: 'Home',
      services: 'Services',
      work: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
    },
    footerTagline: 'Independent software engineering.',
    footerBase: 'Based in Mexico and Laos.',
    talk: 'Let’s talk',
    discuss: 'Discuss your project',
    bandTitle: ['Good systems start with', 'a clear conversation.'],
    exampleTools: 'Example platforms and tools',
  },
  es: {
    skip: 'Saltar al contenido',
    home: 'Inicio de Zeltranet',
    mainNav: 'Navegación principal',
    language: 'Idioma',
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      work: 'Proyectos',
      experience: 'Experiencia',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    footerTagline: 'Ingeniería de software independiente.',
    footerBase: 'Con sede en México y Laos.',
    talk: 'Hablemos',
    discuss: 'Hablemos de su proyecto',
    bandTitle: ['Los buenos sistemas empiezan', 'con una conversación clara.'],
    exampleTools: 'Plataformas y herramientas de ejemplo',
  },
} as const satisfies Record<Locale, unknown>;
