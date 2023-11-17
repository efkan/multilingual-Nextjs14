import Main from './components/Main';
import { headers } from 'next/headers'
import { Locale } from '../i18n-config'
import { getDictionary } from '@/get-dictionary';
import { domainLocaleMapping } from './utils/constants';


export default async function IndexPage () {
  const domain = headers().get('host')?.split(':')[0] as keyof typeof domainLocaleMapping

  const defaultLocale = domainLocaleMapping[domain] as Locale
  const dictionary = await getDictionary(defaultLocale)

  return (
    <Main t={dictionary} />
  )
}