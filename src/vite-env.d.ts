/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Mixpanel project token. Set in Vercel → Project Settings → Environment Variables. Empty disables Mixpanel. */
  readonly VITE_MIXPANEL_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
