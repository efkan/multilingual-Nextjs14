import Main from '@/app/components/Main';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { countryCodeLocaleMapping } from '../utils/constants';


export default async function Page ({params}: Readonly<{params: {countryCode: keyof typeof countryCodeLocaleMapping}}>) {
  const locale = countryCodeLocaleMapping[params.countryCode] as Locale
  const dictionary = await getDictionary(locale)

  return (
    <Main t={dictionary} />
  )
}
