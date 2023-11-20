import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { Locale, i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { countryCodeLocaleMapping, countryCodes, domainLocaleMapping, localeCountryCodeMapping } from './app/utils/constants'


function getLocale(request: NextRequest): Locale {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  // Determining the default locale according to the URL
  const domain = extractDomainFromRequest(request)
  const defaultLocaleByDomain = domainLocaleMapping[domain]

  const locale = matchLocale(languages, locales, defaultLocaleByDomain)

  return locale as Locale
}

const extractDomainFromRequest = (request: NextRequest) => {
  const host = request.headers.get('host')
  const domain = host?.split(':')[0] as keyof typeof domainLocaleMapping

  return domain
}

const isLocaleBelongsToDomain = (request: NextRequest, locale: Locale) => {
  const domain = extractDomainFromRequest(request)
  const result = domainLocaleMapping[domain] === locale

  return result
}

export function middleware(request: NextRequest) {
  // NOTE that when the user's default language the same with locale, the country code is not present in the address
  // and the request is hooked by this middleware function

  const pathname = request.nextUrl.pathname
  const locale = getLocale(request)
  const countryCode = localeCountryCodeMapping[locale]

  if (isLocaleBelongsToDomain(request, locale)) {
    return NextResponse.next()
  }

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      // Your other files in `public`
      '/next.svg',
    ].includes(pathname)
  ) return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingCountryCode = countryCodes.every(
    // use the countryCode instead the locale ("us" instead "en-US")
    (countryCode) => !pathname.startsWith(`/${countryCode}/`) && pathname !== `/${countryCode}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingCountryCode) {
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${countryCode}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}