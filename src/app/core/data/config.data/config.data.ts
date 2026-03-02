export const APP_CONFIG = {
  whatsappNumber: '51924911967',
  defaultMessage: '¡Hola! Quisiera más información sobre sus productos.',
  whatsappMessage: (productName: string, size: string) =>
    `Hola! Me interesa: *${productName}*\nTalla: ${size || 'Por confirmar'}\n¿Está disponible?`
};
