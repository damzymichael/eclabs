/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ADMIN_EMAIL: string
  readonly ADMIN_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
