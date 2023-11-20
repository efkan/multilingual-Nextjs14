import { countryCodeLocaleMapping } from "../../utils/constants";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type countryCodeType = keyof typeof countryCodeLocaleMapping

export default async function Page ({params}: Readonly<{params:{countryCode: countryCodeType}}>) {
  const locale = countryCodeLocaleMapping[params.countryCode] as Locale;
  const t = (await getDictionary(locale)).docsPage

  return (
    <div className="my-10 mx-10">
      <h1 className="mb-5 font-bold">{t.title}</h1>
      <p>{t.explanation}</p>
    </div>
  )
}