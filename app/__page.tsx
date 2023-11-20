import Main from './components/Main';
import { headers } from 'next/headers'
import { Locale } from '../i18n-config'
import { getDictionary } from '@/get-dictionary';
import { domainCountryCodeMapping, countryCodeLocaleMapping } from './utils/constants';


export default async function IndexPage () {
  const domain = headers().get('host')?.split(':')[0] as keyof typeof domainCountryCodeMapping

  const defaultCountryCode = domainCountryCodeMapping[domain] as keyof typeof countryCodeLocaleMapping
  const defaultLocale = countryCodeLocaleMapping[defaultCountryCode] as Locale
  const dictionary = await getDictionary(defaultLocale)

  return (
    <Main t={dictionary} />
  )
}