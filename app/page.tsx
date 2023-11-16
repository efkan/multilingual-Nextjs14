"use client"

import Main from './components/Main';
import { Locale } from '../i18n-config'
import { getDictionary } from '@/get-dictionary';

type Props = {params:{lang: Locale}}

export default async function IndexPage ({params}: Readonly<{params: {locale: Locale}}>) {
  console.log('HIT to IndexPage !!! - params: ', params);

  const dictionary = await getDictionary(params.locale)

  return (
    <Main t={dictionary} />
  )
}