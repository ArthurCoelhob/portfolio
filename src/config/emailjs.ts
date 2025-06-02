const config = {
  serviceId: process.env.VUE_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.VUE_APP_EMAILJS_PUBLIC_KEY,
};

// Verifica se todas as variáveis de ambiente necessárias estão definidas
if (!config.serviceId || !config.templateId || !config.publicKey) {
  throw new Error('EmailJS environment variables are not properly configured');
}

export const emailjsConfig = config; 