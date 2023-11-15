export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'de', 'en'],
} as const

export type Locale = (typeof i18n)['locales'][number]