import { useState } from "react"

export const useLocale = () => {
  const [locale, setLocale] = useState()

  const copy = (copyText: string) => {
    Clipboard.setString(copyText)
  }

  return {copy}
}
