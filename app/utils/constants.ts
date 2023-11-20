const turkeyDomain = 'support.monsternotebook.com'
const germanyDomain = 'support.tulparnotebook.de'
const ukDomain = 'support.tulparnotebook.co.uk'
const usDomain = 'support.tulparnotebook.com'

export const trCountry = 'Turkey'
export const deCountry = 'Germany'
export const ukCountry = 'United Kingdom'
export const usCountry = 'United States'

export const domainLocaleMapping = {
  [turkeyDomain]: 'tr',
  [germanyDomain]: 'de',
  [ukDomain]: 'en-GB',
  [usDomain]: 'en-US',
}

export const domainCountryNameMapping = {
  [turkeyDomain]: trCountry,
  [germanyDomain]: deCountry,
  [ukDomain]: ukCountry,
  [usDomain]: usCountry,
}

export const countryNameDomainMapping = {
  [trCountry]: turkeyDomain,
  [deCountry]: germanyDomain,
  [ukCountry]: ukDomain,
  [usCountry]: usDomain,
}

export const countryNameCountryCodeMapping = {
  [trCountry]: 'tr',
  [deCountry]: 'de',
  [ukCountry]: 'uk',
  [usCountry]: 'us',
}

export const domainCountryCodeMapping = {
  [turkeyDomain]: 'tr',
  [germanyDomain]: 'de',
  [ukDomain]: 'uk',
  [usDomain]: 'us',
}

export const localeCountryCodeMapping = {
  'tr': 'tr',
  'tr-TR': 'tr',
  'de': 'de',
  'de-DE': 'de',
  'en-US': 'us',
  'en-GB': 'uk',
}

export const countryCodeLocaleMapping = {
  'tr': 'tr',
  'de': 'de',
  'us': 'en-US',
  'uk': 'en-GB',
}

export const countryCodes = ['tr', 'de', 'us', 'uk']

export const languageCodeCookieName = 'language-code';
export const languageIdCookieName = 'language-id';

export const countryCodeCookieName = 'country-code';
export const countryIdCookieName = 'country-id';

