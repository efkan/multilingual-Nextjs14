import Docs from '@/app/pages/docs';
import { countryCodeLocaleMapping } from '../../utils/constants';

type countryCodeType = keyof typeof countryCodeLocaleMapping

export default async function Page ({params}: Readonly<{params:{countryCode: countryCodeType}}>) {
  return (
    <Docs countryCode={params.countryCode} />
  )
}
