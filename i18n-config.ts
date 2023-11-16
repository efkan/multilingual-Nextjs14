export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'de', 'en-US', 'en-GB'],
} as const

export type Locale = (typeof i18n)['locales'][number]