import Main from './components/Main';
import { headers } from 'next/headers'
import { getDictionary } from '@/get-dictionary';


export default async function IndexPage () {
  const host = headers().get('host')
  console.log("IndexPage - host:", host);

  const dictionary = await getDictionary('tr')

  return (
    <Main t={dictionary} />
  )
}