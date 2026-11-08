import type { Locale } from '../i18n';

/** Screens in `src/assets/work/<locale>/<key>.png`, in workflow order. */
export type ScreenKey =
  | 'whatsapp'
  | 'requests'
  | 'rfqs'
  | 'replies'
  | 'history'
  | 'quotes'
  | 'reports';

type Step = { title: string; summary: string; detail: string; alt: string };

/** Zeltranet's flagship product. Its screens use an example workspace. */
export const automator: {
  name: string;
  app: string;
  screens: ScreenKey[];
  copy: Record<
    Locale,
    { summary: string; open: string; steps: Record<ScreenKey, Step> }
  >;
} = {
  name: 'AI Automator for Quotes and Purchasing',
  app: '/ai-automator/',
  screens: [
    'whatsapp',
    'requests',
    'rfqs',
    'replies',
    'history',
    'quotes',
    'reports',
  ],
  copy: {
    en: {
      summary:
        'From customer enquiry to supplier quotes, pricing, and purchase order. One connected workflow for trading companies, with people approving every step that matters.',
      open: 'Try it live',
      steps: {
        whatsapp: {
          title: 'Receive the enquiry',
          summary:
            'Customer messages arrive by WhatsApp, email, a customer portal, or a file.',
          detail:
            'Conversations and attachments are gathered in one inbox. A customer message becomes a quotation request in one step, linked back to the original conversation.',
          alt: 'WhatsApp inbox with a customer asking for a quotation on bolts, nuts, and gloves, and a button to create a quotation request.',
        },
        requests: {
          title: 'Extract the products',
          summary: 'AI turns the request into structured product lines.',
          detail:
            'Descriptions, quantities, units, and categories are extracted for review. Unclear specifications are flagged, and duplicate or revised requests are detected before work starts.',
          alt: 'Customer request with three extracted product lines, each with quantity, category, and review status.',
        },
        rfqs: {
          title: 'Request supplier prices',
          summary: 'Quotation requests are drafted for each supplier category.',
          detail:
            'Each supplier receives only the lines it can quote, with an Excel reply template. Customer identity and selling prices are never included. Drafts are approved before sending, and reminders follow up on missing replies.',
          alt: 'Supplier quotation request email for fasteners, addressed to two suppliers, with an Excel reply template and reminder button.',
        },
        replies: {
          title: 'Compare offers',
          summary:
            'Replies are converted to one currency and compared line by line.',
          detail:
            'Prices are compared per unit, including configured cost uplifts, with delivery, minimum order, and validity side by side. Anomalies and substitute brands are highlighted, and the best eligible offers can be selected in one click.',
          alt: 'Supplier follow-up table and price comparison for a bolt, with landed unit prices, delivery times, and the selected supplier.',
        },
        history: {
          title: 'Check price history',
          summary:
            'Previous purchases and quotations for similar products appear beside each line.',
          detail:
            'See the last purchase price, the last price given to this customer, and the closest matching descriptions with their outcomes, so earlier prices can be reused once specifications are confirmed.',
          alt: 'Price history for a bolt and a nut, listing similar products, match percentages, past costs and selling prices, and outcomes.',
        },
        quotes: {
          title: 'Price and send the quotation',
          summary:
            'Selling prices follow customer type, credit terms, and minimum margin.',
          detail:
            'Margins can be adjusted line by line, and lines below the minimum margin need an approved exception. The quotation is previewed, approved, and sent to the customer as a PDF.',
          alt: 'Customer quotation with three lines, margins, selling prices, the quotation total, and the approved customer email.',
        },
        reports: {
          title: 'Confirm the order',
          summary:
            'Purchase orders are matched to the quotation, and results are reported.',
          detail:
            'An incoming purchase order is checked against the sent quotation before the order is confirmed. Reports show win rate, order value, margin, response times, and the full quotation register.',
          alt: 'Orders and reports screen with quotation totals, a purchase order matched to its quotation, and operating results.',
        },
      },
    },
    es: {
      summary:
        'Desde la solicitud del cliente hasta las cotizaciones de proveedores, los precios y la orden de compra. Un flujo conectado para empresas comerciales, con personas aprobando cada paso importante.',
      open: 'Pruébelo en vivo',
      steps: {
        whatsapp: {
          title: 'Recibir la solicitud',
          summary:
            'Los mensajes de clientes llegan por WhatsApp, correo, un portal de clientes o un archivo.',
          detail:
            'Las conversaciones y los archivos se reúnen en una sola bandeja. Un mensaje del cliente se convierte en una solicitud de cotización en un solo paso, vinculada a la conversación original.',
          alt: 'Bandeja de WhatsApp con un cliente que pide una cotización de pernos, tuercas y guantes, y un botón para crear la solicitud de cotización.',
        },
        requests: {
          title: 'Extraer los productos',
          summary:
            'La IA convierte la solicitud en líneas de producto estructuradas.',
          detail:
            'Las descripciones, cantidades, unidades y categorías se extraen para su revisión. Las especificaciones poco claras se marcan y las solicitudes duplicadas o revisadas se detectan antes de empezar.',
          alt: 'Solicitud de cliente con tres líneas de producto extraídas, cada una con cantidad, categoría y estado de revisión.',
        },
        rfqs: {
          title: 'Solicitar precios a proveedores',
          summary:
            'Se preparan solicitudes de cotización por categoría de proveedor.',
          detail:
            'Cada proveedor recibe solo las líneas que puede cotizar, con una plantilla de respuesta en Excel. Nunca se incluyen la identidad del cliente ni los precios de venta. Los borradores se aprueban antes de enviarse y los recordatorios dan seguimiento a las respuestas pendientes.',
          alt: 'Correo de solicitud de cotización de tornillería dirigido a dos proveedores, con plantilla de respuesta en Excel y botón de recordatorio.',
        },
        replies: {
          title: 'Comparar ofertas',
          summary:
            'Las respuestas se convierten a una sola moneda y se comparan línea por línea.',
          detail:
            'Los precios se comparan por unidad, incluidos los costos adicionales configurados, con entrega, pedido mínimo y vigencia lado a lado. Se destacan precios atípicos y marcas sustitutas, y las mejores ofertas válidas se seleccionan con un clic.',
          alt: 'Tabla de seguimiento a proveedores y comparación de precios de un perno, con precio puesto en destino, tiempos de entrega y el proveedor seleccionado.',
        },
        history: {
          title: 'Consultar el historial de precios',
          summary:
            'Las compras y cotizaciones anteriores de productos similares aparecen junto a cada línea.',
          detail:
            'Vea el último precio de compra, el último precio dado a este cliente y las descripciones más parecidas con su resultado, para reutilizar precios anteriores una vez confirmadas las especificaciones.',
          alt: 'Historial de precios de un perno y una tuerca, con productos similares, porcentaje de coincidencia, costos y precios anteriores, y resultados.',
        },
        quotes: {
          title: 'Fijar precios y enviar la cotización',
          summary:
            'Los precios de venta siguen el tipo de cliente, las condiciones de crédito y el margen mínimo.',
          detail:
            'Los márgenes se ajustan línea por línea y las líneas por debajo del margen mínimo requieren una excepción aprobada. La cotización se revisa, se aprueba y se envía al cliente en PDF.',
          alt: 'Cotización al cliente con tres líneas, márgenes, precios de venta, el total y el correo al cliente aprobado.',
        },
        reports: {
          title: 'Confirmar el pedido',
          summary:
            'Las órdenes de compra se vinculan con la cotización y se reportan los resultados.',
          detail:
            'La orden de compra entrante se compara con la cotización enviada antes de confirmar el pedido. Los informes muestran tasa de éxito, valor de pedidos, margen, tiempos de respuesta y el registro completo de cotizaciones.',
          alt: 'Pantalla de pedidos e informes con totales de cotizaciones, una orden de compra vinculada a su cotización y resultados operativos.',
        },
      },
    },
  },
};
