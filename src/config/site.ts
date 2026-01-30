export const site = {
  domain: 'cl.flujooficial.com',
  canonical: 'https://cl.flujooficial.com',
  brand: {
    name: 'Flujo TV',
    premiumLabel: 'Premium'
  },
  supportEmail: 'soporte@flujooficial.com',
  whatsappNumber: '51914326729',
  pricing: {
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: '1 mes',
        price: 9
      },
      {
        id: '3m',
        name: '3 meses',
        price: 27
      },
      {
        id: '6m',
        name: '6 meses',
        price: 49
      },
      {
        id: '12m',
        name: '12 meses',
        price: 95
      }
    ]
  }
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
