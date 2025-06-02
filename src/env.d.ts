/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace NodeJS {
  interface ProcessEnv {
    VUE_APP_EMAILJS_SERVICE_ID: 'service_u186408'
    VUE_APP_EMAILJS_TEMPLATE_ID: 'template_5jyg3q9'
    VUE_APP_EMAILJS_PUBLIC_KEY: 'mdg7httltH-WabJE_'
  }
} 