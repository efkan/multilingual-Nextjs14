'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {useParams} from 'next/navigation'

import LanguageSelect from './LanguageSelect'
import CountrySelect from './CountrySelect'
import { Dictionaries } from '@/dictionaries/type'
import { domainCountryNameMapping } from '../utils/constants'


export default function Main({t}: Readonly<{t: Dictionaries}>) {
  const anchorClassName = "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
  const params = useParams()
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
  }, [])

  if (!didMount) return null

  const domain = window.location.hostname as keyof typeof domainCountryNameMapping
  const countryName = domainCountryNameMapping[domain]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex">
        <div className='flex gap-y-3 flex-col justify-center'>
          <p className="fixed left-0 top-0 flex w-full justify-start border-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
            {t.Country}&nbsp;
            <code className="font-mono font-bold">{countryName}</code>
          </p>
          <p className="fixed left-0 top-0 flex w-full justify-center border-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
            {t.SelectedLocale}&nbsp;
            <code className="font-mono font-bold">{params.locale.toString().toUpperCase()}</code>
          </p>
        </div>
        <div className='flex gap-y-3 flex-row justify-center'>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <CountrySelect currentDomain={domain} currentCountry={countryName} />
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <LanguageSelect />
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={anchorClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            {t.Docs + ' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className={anchorClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            {t.Learn + ' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={anchorClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            {t.Templates + ' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={anchorClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            {t.Deploy + ' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  )
}
