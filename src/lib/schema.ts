import { business } from '../data/business';

const SITE_URL = 'https://1limo.net';

/** Sitewide LocalBusiness structured data. Included on every page via Layout. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LimousineService',
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    legalName: business.legalName,
    description:
      'Chauffeured limousine and luxury transportation serving Dallas-Fort Worth, including airport transfers, corporate travel, weddings, and special events.',
    url: SITE_URL,
    telephone: business.phoneHref.replace('tel:', ''),
    email: business.email,
    priceRange: business.priceRange,
    // TODO: replace with a real branded photo once available.
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=630&q=80',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress || undefined,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode || undefined,
      addressCountry: business.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Dallas' },
      { '@type': 'City', name: 'Fort Worth' },
      { '@type': 'City', name: 'Plano' },
      { '@type': 'AdministrativeArea', name: 'DFW Metroplex' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: business.hours.opens,
      closes: business.hours.closes,
    },
    sameAs: [business.social.facebook, business.social.instagram].filter(Boolean),
  };
}

/** Per-service Service schema. Pass the built page's URL path (e.g. "/services/airport-transportation/"). */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      '@type': 'LimousineService',
      name: business.name,
      telephone: business.phoneHref.replace('tel:', ''),
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Dallas-Fort Worth Metroplex',
    },
  };
}

export type FAQItem = { question: string; answer: string };

/** FAQPage schema for any page with an on-page FAQ block. */
export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
