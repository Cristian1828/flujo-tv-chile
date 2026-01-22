export const site = {
  domain: 'cl.flujooficial.com',
  canonical: 'https://cl.flujooficial.com',
  brand: {
    name: 'Flujo TV',
    premiumLabel: 'Premium'
  },
  supportEmail: 'soporte@flujooficial.com',
  whatsappNumber: '51921445800'
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
