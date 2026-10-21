interface ImportMetaEnv {
  /** GA4 measurement ID, e.g. G-XXXXXXXXXX. Optional. */
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
