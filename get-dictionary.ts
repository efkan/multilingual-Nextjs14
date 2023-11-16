import 'server-only'
import type { Locale } from './i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  tr: () => import('./dictionaries/tr').then((module) => module.default),
  de: () => import('./dictionaries/de').then((module) => module.default),
  'en-US': () => import('./dictionaries/us').then((module) => module.default),
  'en-GB': () => import('./dictionaries/uk').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.tr()