/** @type {import('next').NextConfig} */

// handling paths like /docs /drivers /docs/abra-a7 /drivers/abra-a7
const subpathRegEx = '/:path(docs|docs\\/.*|drivers|drivers\\/.*)'

const nextConfig = {
  async rewrites() {
    return [
      // rewriting root "/" URL using country code like /countryCode/ - e.g. / -> /tr
      // Note that this doesn't replace the valid URL only replace header values
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'support.monsternotebook.com',
          },
        ],
        destination: '/tr',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.de',
          },
        ],
        destination: '/de',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.co.uk',
          },
        ],
        destination: '/uk',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.com',
          },
        ],
        destination: '/us',
      },
      // rewriting /path using country code like /countryCode/path - e.g. /drivers -> /tr/drivers
      {
        source: subpathRegEx,
        has: [
          {
            type: 'host',
            value: 'support.monsternotebook.com',
          },
        ],
        destination: '/tr/:path',
      },
      {
        source: subpathRegEx,
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.de',
          },
        ],
        destination: '/de/:path',
      },
      {
        source: subpathRegEx,
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.co.uk',
          },
        ],
        destination: '/uk/:path',
      },
      {
        source: subpathRegEx,
        has: [
          {
            type: 'host',
            value: 'support.tulparnotebook.com',
          },
        ],
        destination: '/us/:path',
      },
    ]
  },
  // i18n: {
  //   locales: ['tr-TR', 'en-US', 'de-DE'],
  //   defaultLocale: 'tr-TR',
  //   localeDetection: false,
  //   domains: [
  //     {
  //       domain: 'support.monsternotebook.com',
  //       defaultLocale: 'tr-TR',
  //       locales: ['tr', 'tr-CY'],
  //     },
  //     {
  //       domain: 'support.tulparnotebook.de',
  //       defaultLocale: 'de-DE',
  //     },
  //     {
  //       domain: 'support.tulparnotebook.com',
  //       defaultLocale: 'en-US',
  //       // specify other locales that should be redirected
  //       // to this domain
  //       locales: ['en', 'en-GB'],
  //     },
  //     {
  //       domain: 'support.tulparnotebook.co.uk',
  //       defaultLocale: 'uk',
  //       locales: ['en-GB'],
  //     },
  //     {
  //       domain: 'support.tulparnotebook.ca',
  //       defaultLocale: 'en-CA'
  //     },
  //   ],
  // },
}

module.exports = nextConfig
