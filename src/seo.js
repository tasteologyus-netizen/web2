/** Site identity used for SEO / AEO / GEO structured data */
export const site = {
  name: 'Tasteology & Co LLC',
  legalName: 'Tasteology & Co LLC',
  url: 'https://tasteology.us/',
  logo: 'https://tasteology.us/logo/LOGO22.png',
  image: 'https://tasteology.us/logo/updated-logo10.png',
  email: 'info@tasteology.us',
  telephone: '+1-786-946-1362',
  description:
    'Tasteology & Co LLC is a Miami, Florida-based food product development company specializing in food CPG formulation, flavor optimization, and market-ready recipe development for brands worldwide.',
  shortDescription:
    'Food CPG formulation, flavor optimization, and product development services headquartered in Miami, Florida.',
  pageTitle: 'Food CPG Formulation & Product Development | Tasteology USA',
  keywords: [
    'food CPG formulation',
    'recipe formulation services',
    'flavor optimization services',
    'food scientist consulting',
    'market-ready food product development',
    'Miami food formulation lab',
    'clean label product development',
    'functional beverage development',
  ],
  address: {
    streetAddress: '28 W Flagler St Ste 300B #7342',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33130',
    addressCountry: 'US',
  },
  geo: {
    latitude: 25.774268,
    longitude: -80.193659,
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=28+W+Flagler+St+Ste+300B+7342+Miami+FL+33130',
  sameAs: [
    'https://finance.yahoo.com/news/tasteology-co-announces-strategic-expansion-040800143.html',
    'https://markets.businessinsider.com/news/stocks/tasteology-co-announces-strategic-expansion-and-opens-doors-to-new-clean-label-cpg-partnerships-for-q4-2025-launches-1034962385',
    'https://ceotimes.com/tasteology-co-revolutionizes-the-future-of-functional-beverages/',
  ],
  knowsAbout: [
    'Food CPG Formulation',
    'Flavor Optimization',
    'Recipe Development',
    'Functional Foods',
    'Food Science Consulting',
    'Clean Label Product Development',
    'Functional Beverages',
  ],
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Lebanon' },
    { '@type': 'AdministrativeArea', name: 'Florida' },
    { '@type': 'City', name: 'Miami' },
  ],
}

export function buildJsonLd({ services = [], faqs = [] } = {}) {
  const orgId = `${site.url}#organization`
  const localId = `${site.url}#localbusiness`
  const websiteId = `${site.url}#website`
  const webpageId = `${site.url}#webpage`

  const serviceNodes = services.map((s, i) => ({
    '@type': 'Service',
    '@id': `${site.url}#service-${i + 1}`,
    name: s.title,
    description: s.detail || s.summary,
    provider: { '@id': orgId },
    areaServed: { '@type': 'Country', name: 'United States' },
    serviceType: s.title,
  }))

  const faqNode =
    faqs.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${site.url}#faq`,
          mainEntity: faqs.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        }
      : null

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: site.logo,
        image: site.image,
        description: site.description,
        email: site.email,
        telephone: site.telephone,
        address: {
          '@type': 'PostalAddress',
          ...site.address,
        },
        geo: {
          '@type': 'GeoCoordinates',
          ...site.geo,
        },
        knowsAbout: site.knowsAbout,
        hasMap: site.mapUrl,
        areaServed: site.areaServed,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: site.sameAs,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: site.telephone,
            contactType: 'sales',
            email: site.email,
            areaServed: 'US',
            availableLanguage: ['English'],
          },
        ],
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': localId,
        name: site.name,
        image: site.image,
        url: site.url,
        telephone: site.telephone,
        email: site.email,
        priceRange: '$$$',
        parentOrganization: { '@id': orgId },
        address: {
          '@type': 'PostalAddress',
          ...site.address,
        },
        geo: {
          '@type': 'GeoCoordinates',
          ...site.geo,
        },
        hasMap: site.mapUrl,
        areaServed: site.areaServed,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        description:
          'Premier food product development company in Miami, FL specializing in food CPG formulation, flavor optimization, and market-ready recipe development for global brands.',
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.url,
        name: site.name,
        description: site.shortDescription,
        inLanguage: 'en-US',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: site.url,
        name: site.pageTitle,
        description: site.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        primaryImageOfPage: site.image,
        inLanguage: 'en-US',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.seo-speakable', '.section__lede', '.faq__a'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${site.url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${site.url}#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'FAQ',
            item: `${site.url}#faq`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Free Consultation',
            item: `${site.url}#contact`,
          },
        ],
      },
      ...serviceNodes,
      ...(faqNode ? [faqNode] : []),
    ],
  }
}
