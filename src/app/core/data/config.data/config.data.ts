export const APP_CONFIG = {
  whatsappNumber: '51987654321',
  defaultMessage: '¡Hola! Quisiera más información sobre sus productos.',
  whatsappMessage: (productName: string, size: string) =>
    `Hola! Me interesa: *${productName}*\nTalla: ${size || 'Por confirmar'}\n¿Está disponible?`
};
