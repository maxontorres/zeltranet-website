import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';

export type ToolScreenKey = 'dashboard' | 'breakdown' | 'advisor' | 'phone';

type Step = { title: string; detail: string; alt: string };

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/tools/mxn-usd/*.{png,jpg}',
  { eager: true },
);

/** Screenshot of the MXN to USD tool. */
export function toolScreen(key: ToolScreenKey): ImageMetadata {
  const file = Object.entries(files).find(
    ([path]) => path.endsWith(`/${key}.png`) || path.endsWith(`/${key}.jpg`),
  );
  if (!file) throw new Error(`Missing tool screenshot: ${key}`);
  return file[1].default;
}

/** Zeltranet tool for planning an MXN to USD bank transfer. */
export const mxnUsd: {
  name: string;
  screens: ToolScreenKey[];
  copy: Record<
    Locale,
    {
      summary: string;
      stack: string;
      note: string;
      steps: Record<ToolScreenKey, Step>;
    }
  >;
} = {
  name: 'MXN to USD Transfer Intelligence',
  screens: ['dashboard', 'breakdown', 'advisor', 'phone'],
  copy: {
    en: {
      summary:
        'A dashboard for planning an international bank transfer from MXN to USD: the official daily rate, a simple cheap-or-expensive signal, and a step-by-step estimate of what arrives after fees.',
      stack:
        'Built with Angular and TypeScript. Static site with no backend, in English and Spanish.',
      note: 'Unofficial and independent. Not affiliated with or endorsed by BBVA, BCEL, Banco de México or any other bank. Rates and fees are estimates and may be out of date. Not financial advice.',
      steps: {
        dashboard: {
          title: 'Rate and signal',
          detail:
            'The official daily rate from Banco de México, the previous trading days, and a plain-language signal based on past prices only. Every number is tagged as verified, estimate, or forecast.',
          alt: 'Dashboard showing the current MXN per USD rate, recent daily changes, a WAIT signal with its reasons, and price statistics for the past year.',
        },
        breakdown: {
          title: 'Cost breakdown',
          detail:
            'Every step from the MXN sent to the USD received: exchange markup, sending fee, fees from banks along the way, and the receiving fee. It works in both directions, from the MXN you send or the USD you want to receive.',
          alt: 'Six-step money trajectory from 10,000 MXN sent to the estimated USD received, with the cost of each step.',
        },
        advisor: {
          title: 'AI advisor (preview)',
          detail:
            'Plain-language advice on the numbers above. The AI connection is not live yet, so this screen is a preview with example text, not a real result.',
          alt: 'AI advisor card marked as a preview, with example advice to wait for a better rate and a note that it never moves money.',
        },
        phone: {
          title: 'Built for phones',
          detail:
            'The layout reflows from a multi-column desktop grid to a single column on small screens, with the same cost breakdown.',
          alt: 'Cost breakdown on a phone-width screen, showing the amount to send and the exchange, sending, and receiving fees in two columns.',
        },
      },
    },
    es: {
      summary:
        'Un panel para planear una transferencia bancaria internacional de MXN a USD: el tipo de cambio oficial del día, una señal sencilla de barato o caro, y una estimación paso a paso de lo que llega después de las comisiones.',
      stack:
        'Hecho con Angular y TypeScript. Sitio estático sin servidor, en inglés y español.',
      note: 'No oficial e independiente. No está afiliado ni respaldado por BBVA, BCEL, Banco de México ni ningún otro banco. Las tasas y comisiones son estimaciones y pueden estar desactualizadas. No es asesoría financiera.',
      steps: {
        dashboard: {
          title: 'Tipo de cambio y señal',
          detail:
            'El tipo de cambio oficial del día del Banco de México, los días hábiles anteriores y una señal en lenguaje sencillo basada solo en precios pasados. Cada cifra se marca como verificada, estimada o pronóstico.',
          alt: 'Panel con el tipo de cambio actual de MXN por USD, los cambios diarios recientes, una señal de esperar con sus razones y estadísticas de precios del último año.',
        },
        breakdown: {
          title: 'Desglose de costos',
          detail:
            'Cada paso desde los MXN enviados hasta los USD recibidos: margen del tipo de cambio, comisión de envío, comisiones de los bancos intermedios y comisión de recepción. Funciona en ambos sentidos, desde los MXN que envía o los USD que quiere recibir.',
          alt: 'Trayectoria del dinero en seis pasos, desde 10,000 MXN enviados hasta los USD estimados recibidos, con el costo de cada paso.',
        },
        advisor: {
          title: 'Asesor de IA (vista previa)',
          detail:
            'Consejos en lenguaje sencillo sobre las cifras anteriores. La conexión con IA todavía no está activa, así que esta pantalla es una vista previa con texto de ejemplo, no un resultado real.',
          alt: 'Tarjeta del asesor de IA marcada como vista previa, con un consejo de ejemplo para esperar un mejor tipo de cambio y una nota de que nunca mueve dinero.',
        },
        phone: {
          title: 'Pensado para teléfonos',
          detail:
            'El diseño pasa de una cuadrícula de varias columnas en escritorio a una sola columna en pantallas pequeñas, con el mismo desglose de costos.',
          alt: 'Desglose de costos en una pantalla del ancho de un teléfono, con el monto a enviar y las comisiones de cambio, envío y recepción en dos columnas.',
        },
      },
    },
  },
};
