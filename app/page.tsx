"use client"

import Main from './components/Main';
import { Locale } from '../i18n-config'

type Props = {params:{lang: Locale}}

export default function Home({params: {lang}}: Readonly<Props>) {
  console.log('HIT to root page.tsx - locale: ', lang);

  return (
    <Main />
  )
}
