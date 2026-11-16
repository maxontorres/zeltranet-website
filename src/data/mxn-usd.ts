import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';

export type MxnUsdScreenKey = 'dashboard' | 'breakdown' | 'advisor' | 'phone';

type Step = { title: string; detail: string; alt: string };

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/mxn-usd/*.{png,jpg}',
  { eager: true },
);

/** Screenshot of the MXN to USD Transfer Intelligence tool. */
export function mxnUsdScreen(key: MxnUsdScreenKey): ImageMetadata {
  const file = Object.entries(files).find(
    ([path]) => path.endsWith(`/${key}.png`) || path.endsWith(`/${key}.jpg`),
  );
  if (!file) throw new Error(`Missing MXN to USD screenshot: ${key}`);
  return file[1].default;
}

export const mxnUsd: {
  name: string;
  screens: MxnUsdScreenKey[];
  copy: Record<
    Locale,
    {
      card: string;
      summary: string;
      stack: string;
      note: string;
      steps: Record<MxnUsdScreenKey, Step>;
    }
  >;
} = {
  name: 'MXN to USD Transfer Intelligence',
  screens: ['dashboard', 'breakdown', 'advisor', 'phone'],
  copy: {
    en: {
      card: 'Shows the MXN to USD rate, whether it is a good time to send, and what a bank transfer costs after fees.',
      summary:
        'Enter an amount in MXN and see how many USD arrive after all fees. It also shows the official rate and whether USD is cheap or expensive right now.',
      stack:
        'Made with Angular and TypeScript. No backend. English and Spanish.',
      note: 'Unofficial. Not affiliated with or endorsed by BBVA, BCEL, Banco de México or any other bank. Rates and fees are estimates and can be out of date. Not financial advice.',
      steps: {
        dashboard: {
          title: 'Today’s rate',
          detail:
            'The official daily rate from Banco de México and the last few days. A signal says if USD is cheap or expensive compared with the past year. It uses past prices only.',
          alt: 'Dashboard with the current MXN per USD rate, recent daily changes, a WAIT signal with its reasons, and price statistics for the past year.',
        },
        breakdown: {
          title: 'What you pay',
          detail:
            'Every step from MXN sent to USD received: exchange markup, bank sending fee, fees from banks along the way, and the receiving fee. Enter the MXN you send, or the USD you want to receive.',
          alt: 'Six steps from 10,000 MXN sent to the estimated USD received, with the cost of each step.',
        },
        advisor: {
          title: 'AI advisor (not live)',
          detail:
            'Plain advice based on the numbers above. It is not connected yet. This screen is an example, not a real answer.',
          alt: 'AI advisor card marked as a preview, with example advice to wait for a better rate and a note that it never moves money.',
        },
        phone: {
          title: 'On a phone',
          detail: 'The same tool on a small screen, in one column.',
          alt: 'Cost breakdown on a phone-width screen, showing the amount to send and the exchange, sending, and receiving fees in two columns.',
        },
      },
    },
    es: {
      card: 'Muestra el tipo de cambio de MXN a USD, si es buen momento para enviar y cuánto cuesta una transferencia bancaria con todo y comisiones.',
      summary:
        'Escribe un monto en MXN y ve cuántos USD llegan después de todas las comisiones. También muestra el tipo de cambio oficial y si el USD está barato o caro ahora.',
      stack: 'Hecho con Angular y TypeScript. Sin servidor. Inglés y español.',
      note: 'No oficial. No está afiliado ni respaldado por BBVA, BCEL, Banco de México ni ningún otro banco. Las tasas y comisiones son estimaciones y pueden estar desactualizadas. No es asesoría financiera.',
      steps: {
        dashboard: {
          title: 'El tipo de cambio de hoy',
          detail:
            'El tipo de cambio oficial del día del Banco de México y los últimos días. Una señal indica si el USD está barato o caro comparado con el último año. Usa solo precios pasados.',
          alt: 'Panel con el tipo de cambio actual de MXN por USD, los cambios diarios recientes, una señal de esperar con sus razones y estadísticas de precios del último año.',
        },
        breakdown: {
          title: 'Lo que pagas',
          detail:
            'Cada paso desde los MXN enviados hasta los USD recibidos: margen del tipo de cambio, comisión de envío del banco, comisiones de bancos intermedios y comisión de recepción. Escribe los MXN que envías o los USD que quieres recibir.',
          alt: 'Seis pasos desde 10,000 MXN enviados hasta los USD estimados recibidos, con el costo de cada paso.',
        },
        advisor: {
          title: 'Asesor de IA (no activo)',
          detail:
            'Consejos sencillos basados en las cifras anteriores. Todavía no está conectado. Esta pantalla es un ejemplo, no una respuesta real.',
          alt: 'Tarjeta del asesor de IA marcada como vista previa, con un consejo de ejemplo para esperar un mejor tipo de cambio y una nota de que nunca mueve dinero.',
        },
        phone: {
          title: 'En el teléfono',
          detail:
            'La misma herramienta en una pantalla pequeña, en una columna.',
          alt: 'Desglose de costos en una pantalla del ancho de un teléfono, con el monto a enviar y las comisiones de cambio, envío y recepción en dos columnas.',
        },
      },
    },
  },
};
