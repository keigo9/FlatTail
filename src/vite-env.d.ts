/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KINTONE_API_KEY: string;
  readonly VITE_KINTONE_DOMAIN: string;
  readonly VITE_KINTONE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
