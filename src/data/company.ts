import type { Locale } from '../i18n';
import type { LogoName } from './logos';

type Copy<T> = Record<Locale, T>;

export const whatsapp = {
  display: '+856 20 52 373 435',
  href: 'https://wa.me/8562052373435',
};

export const services: {
  logos: LogoName[];
  copy: Copy<{ title: string; text: string; detail: string }>;
}[] = [
  {
    logos: ['android', 'apple', 'windows', 'googlechrome'],
    copy: {
      en: {
        title: 'Business Applications',
        text: 'Purpose-built software for the way your business works. Internal tools, operational platforms, and customer-facing applications.',
        detail:
          'Bring day-to-day operations into a focused application, with clear workflows and dependable access to the information your team needs.',
      },
      es: {
        title: 'Aplicaciones empresariales',
        text: 'Software hecho a la medida de cómo funciona su empresa. Herramientas internas, plataformas operativas y aplicaciones para sus clientes.',
        detail:
          'Llevar las operaciones diarias a una aplicación enfocada, con flujos de trabajo claros y acceso confiable a la información que su equipo necesita.',
      },
    },
  },
  {
    logos: ['n8n', 'make', 'googleappsscript'],
    copy: {
      en: {
        title: 'Workflow Automation',
        text: 'Reduce repetitive work. Connect the steps between people, processes, and software.',
        detail:
          'Identify manual handoffs, define the rules, and automate repeatable tasks with visibility into failures and exceptions.',
      },
      es: {
        title: 'Automatización de procesos',
        text: 'Reduzca el trabajo repetitivo. Conecte los pasos entre personas, procesos y software.',
        detail:
          'Identificar los traspasos manuales, definir las reglas y automatizar tareas repetibles, con visibilidad sobre fallas y excepciones.',
      },
    },
  },
  {
    logos: ['openapiinitiative', 'graphql', 'postgresql'],
    copy: {
      en: {
        title: 'Systems Integration',
        text: 'Make your systems work together. APIs, connected services, and reliable data exchange.',
        detail:
          'Connect existing applications through well-defined interfaces, with attention to data consistency, error handling, and maintainability.',
      },
      es: {
        title: 'Integración de sistemas',
        text: 'Haga que sus sistemas trabajen en conjunto. APIs, servicios conectados e intercambio confiable de datos.',
        detail:
          'Conectar aplicaciones existentes mediante interfaces bien definidas, cuidando la consistencia de los datos, el manejo de errores y la mantenibilidad.',
      },
    },
  },
  {
    logos: ['php', 'dotnet', 'typescript'],
    copy: {
      en: {
        title: 'Software Modernization',
        text: 'Move existing software forward without losing the knowledge built into it.',
        detail:
          'Take over unfinished, slow, or fragile software. Review it, stabilise what is urgent, then improve it in manageable steps that respect business continuity.',
      },
      es: {
        title: 'Modernización de software',
        text: 'Haga evolucionar su software existente sin perder el conocimiento que contiene.',
        detail:
          'Hacerse cargo de software inconcluso, lento o frágil. Revisarlo, estabilizar lo urgente y después mejorarlo en pasos manejables que respeten la continuidad del negocio.',
      },
    },
  },
  {
    logos: ['claude', 'googlegemini', 'huggingface'],
    copy: {
      en: {
        title: 'AI Integration',
        text: 'Put AI to practical use inside your business processes, with people in control.',
        detail:
          'Evaluate useful applications for AI, integrate them into existing workflows, and define human review and data-handling boundaries.',
      },
      es: {
        title: 'Integración de IA',
        text: 'Ponga la IA a trabajar de forma práctica en sus procesos de negocio, con personas al mando.',
        detail:
          'Evaluar usos útiles de la IA, integrarlos en los flujos de trabajo existentes y definir límites de revisión humana y manejo de datos.',
      },
    },
  },
  {
    logos: ['amazonaws', 'googlecloud', 'cloudflare', 'docker'],
    copy: {
      en: {
        title: 'Cloud Engineering',
        text: 'Build a dependable foundation for deployment, operation, and future growth.',
        detail:
          'Design practical cloud environments and deployment workflows, with attention to observability, security, and operating costs.',
      },
      es: {
        title: 'Ingeniería en la nube',
        text: 'Construya una base confiable para el despliegue, la operación y el crecimiento futuro.',
        detail:
          'Diseñar entornos en la nube y flujos de despliegue prácticos, cuidando la observabilidad, la seguridad y los costos de operación.',
      },
    },
  },
];

export const experience: {
  icon: string;
  copy: Copy<{ title: string; text: string }>;
}[] = [
  {
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 8v8M8 12h8',
    copy: {
      en: {
        title: 'Healthcare platforms',
        text: 'Founder experience working on software in healthcare settings, where clear workflows and careful handling of information matter.',
      },
      es: {
        title: 'Plataformas de salud',
        text: 'Experiencia del fundador trabajando en software para entornos de salud, donde importan los flujos de trabajo claros y el manejo cuidadoso de la información.',
      },
    },
  },
  {
    icon: 'M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3ZM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3',
    copy: {
      en: {
        title: 'Data collection systems',
        text: 'Founder experience with systems for capturing, organizing, and making collected data useful.',
      },
      es: {
        title: 'Sistemas de recolección de datos',
        text: 'Experiencia del fundador con sistemas para capturar, organizar y aprovechar los datos recolectados.',
      },
    },
  },
  {
    icon: 'M3 5h18v14H3zM3 9h18M8 9v10',
    copy: {
      en: {
        title: 'Business applications',
        text: 'Founder experience building applications that support day-to-day business processes, including production systems for property sales and online education.',
      },
      es: {
        title: 'Aplicaciones empresariales',
        text: 'Experiencia del fundador creando aplicaciones que apoyan los procesos diarios de negocio, incluidos sistemas en producción para venta de propiedades y educación en línea.',
      },
    },
  },
  {
    icon: 'M7 18a4 4 0 0 1-.6-7.95 6 6 0 0 1 11.5-1.6A4.5 4.5 0 0 1 17.5 18H7Z',
    copy: {
      en: {
        title: 'Cloud deployments',
        text: 'Founder experience deploying software to cloud environments and supporting its operation.',
      },
      es: {
        title: 'Despliegues en la nube',
        text: 'Experiencia del fundador desplegando software en entornos de nube y dando soporte a su operación.',
      },
    },
  },
  {
    icon: 'M3 9l9-5 9 5M5 9v8M10 9v8M14 9v8M19 9v8M3 20h18',
    copy: {
      en: {
        title: 'Banking tools',
        text: 'Founder experience as a developer for a bank in Bangkok, building cloud-based tools including a face recognition application with AWS Rekognition.',
      },
      es: {
        title: 'Herramientas bancarias',
        text: 'Experiencia del fundador como desarrollador para un banco en Bangkok, creando herramientas en la nube, incluida una aplicación de reconocimiento facial con AWS Rekognition.',
      },
    },
  },
  {
    icon: 'M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14',
    copy: {
      en: {
        title: 'APIs and legacy systems',
        text: 'Founder experience building APIs, speeding up older PHP systems, and taking over existing codebases.',
      },
      es: {
        title: 'APIs y sistemas heredados',
        text: 'Experiencia del fundador creando APIs, acelerando sistemas PHP antiguos y haciéndose cargo de código existente.',
      },
    },
  },
  {
    icon: 'M9 3h6v5H9zM4 16h6v5H4zM14 16h6v5h-6zM12 8v4M7 16v-4h10v4',
    copy: {
      en: {
        title: 'Project leadership',
        text: 'Founder experience planning and overseeing software projects, and the developers working on them, for a technology company in Vientiane.',
      },
      es: {
        title: 'Liderazgo de proyectos',
        text: 'Experiencia del fundador planeando y supervisando proyectos de software, y a los desarrolladores que trabajaban en ellos, para una empresa de tecnología en Vientián.',
      },
    },
  },
  {
    icon: 'M2 9l10-5 10 5-10 5L2 9ZM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6',
    copy: {
      en: {
        title: 'Teaching',
        text: 'Founder experience teaching web development at universities in China and Laos.',
      },
      es: {
        title: 'Docencia',
        text: 'Experiencia del fundador enseñando desarrollo web en universidades de China y Laos.',
      },
    },
  },
];
