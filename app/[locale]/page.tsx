import Main from '@/app/components/Main';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';


export default async function Page ({params}: Readonly<{params: {locale: Locale}}>) {
  const dictionary = await getDictionary(params.locale)

  return (
    <Main t={dictionary} />
  )
}
