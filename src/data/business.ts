// Central place for business info used across the site (nav, footer, JSON-LD,
// contact page). Update everything here before launch — nothing else in the
// codebase should hardcode the phone number, email, or address.

export const business = {
  name: '1Limo',
  legalName: '1Limo Chauffeured Transportation',
  tagline: 'We Are More Than A Limousine Company',

  // PLACEHOLDER — replace with the real production values before launch.
  phone: '817-703-8497',
  phoneHref: 'tel:+18177038497',
  email: 'reservation@1limo.net',

  // PLACEHOLDER — street address for LocalBusiness schema / Google Business
  // Profile consistency (NAP). Fill in once available; leave city/region/zip
  // as a service-area fallback if the company doesn't publish a street address.
  address: {
    streetAddress: '',
    addressLocality: 'Dallas-Fort Worth',
    addressRegion: 'TX',
    postalCode: '',
    addressCountry: 'US',
  },

  geo: {
    // Approximate DFW-area coordinates — replace with the exact office location.
    latitude: 32.8998,
    longitude: -97.0403,
  },

  hours: {
    opens: '00:00',
    closes: '23:59',
    // Chauffeured transportation runs 24/7 — kept as a single always-open range.
    label: 'Available 24 hours a day, 7 days a week',
  },

  priceRange: '$$$',

  serviceAreaSummary: 'Dallas-Fort Worth, Plano, and surrounding North Texas',

  social: {
    // PLACEHOLDER — add real profile URLs when available.
    facebook: '',
    instagram: '',
  },
} as const;

export type ServiceArea = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroBlurb: string;
  intro: string;
  landmarks: string[];
  imageId: string;
  imageAlt: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    metaTitle: 'Dallas Limo & Chauffeur Service | 1Limo',
    metaDescription:
      'Chauffeured transportation throughout Dallas — Downtown, Uptown, and the Design District. Airport transfers, corporate travel, and event service.',
    heroBlurb: 'Chauffeured transportation across every corner of Dallas, from Downtown to Uptown.',
    intro:
      "Dallas is our busiest service area, and it shows in the details — chauffeurs who know the fastest route out of Downtown at rush hour, which Uptown venues have valet and which don't, and how to time a pickup around a Dallas Love Field departure. Whether it's a client dinner in the Design District or a night out in Deep Ellum, we get you there without the stress of parking or surge pricing.",
    landmarks: ['Downtown Dallas', 'Uptown', 'Design District', 'Deep Ellum', 'Dallas Love Field'],
    imageId: '1625950019503-cae6a7825762',
    imageAlt: 'Downtown Dallas skyline at dusk',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    metaTitle: 'Fort Worth Limo & Chauffeur Service | 1Limo',
    metaDescription:
      'Chauffeured transportation throughout Fort Worth — Downtown, Sundance Square, and the Cultural District. Weddings, corporate travel, and events.',
    heroBlurb: 'Chauffeured transportation across Fort Worth, from Sundance Square to the Stockyards.',
    intro:
      "From a wedding at a Cultural District venue to a corporate dinner near Sundance Square, Fort Worth has a different rhythm than Dallas — and our chauffeurs treat it that way. We route around Stockyards event traffic, know the hotel loading areas Downtown, and keep every Fort Worth pickup on schedule regardless of what's happening at the convention center that weekend.",
    landmarks: ['Downtown Fort Worth', 'Sundance Square', 'Cultural District', 'Fort Worth Stockyards', 'TCU'],
    imageId: '1641084700019-f2db3e6cb66c',
    imageAlt: 'Fort Worth downtown skyline',
  },
  {
    slug: 'plano',
    name: 'Plano',
    metaTitle: 'Plano Limo & Chauffeur Service | 1Limo',
    metaDescription:
      'Chauffeured transportation throughout Plano — Legacy West, corporate campuses, and residential communities across Collin County.',
    heroBlurb: 'Chauffeured transportation for Plano and the corporate campuses of Collin County.',
    intro:
      "Plano's corporate campuses — Legacy West and the headquarters clustered along the Sam Rayburn Tollway — generate some of our most consistent business travel. We handle daily executive transportation, client roadshows, and airport transfers for companies based in Plano, along with weddings and events across Collin County's residential communities.",
    landmarks: ['Legacy West', 'Sam Rayburn Tollway corridor', 'Historic Downtown Plano', 'Collin Creek'],
    imageId: '1543892607-04657ef3a279',
    imageAlt: 'Modern corporate office building exterior',
  },
  {
    slug: 'dfw-metroplex',
    name: 'DFW Metroplex',
    metaTitle: 'DFW Metroplex Chauffeured Transportation | 1Limo',
    metaDescription:
      'Chauffeured transportation across the entire Dallas-Fort Worth Metroplex — Dallas, Fort Worth, Plano, Arlington, Irving, and beyond.',
    heroBlurb: 'One chauffeured transportation standard, everywhere across North Texas.',
    intro:
      "Beyond Dallas, Fort Worth, and Plano, we regularly serve Arlington, Irving, Las Colinas, Frisco, McKinney, and the rest of the DFW Metroplex. If your pickup or drop-off falls somewhere in North Texas, call our dispatch line to confirm coverage — chances are we already know the address.",
    landmarks: ['Arlington', 'Irving & Las Colinas', 'Frisco', 'McKinney', 'Grapevine'],
    imageId: '1621904878414-d4ca4756bd7e',
    imageAlt: 'Elevated view of the Dallas skyline by day',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

// PLACEHOLDER testimonials — structured so real reviews can be dropped in
// later without touching any page markup. Swap the array contents only.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our driver was waiting at baggage claim, tracked our delayed flight without us saying a word, and had us at the hotel in under 30 minutes. This is how corporate travel should feel.",
    author: 'S. Whitfield',
    context: 'Corporate Client, Las Colinas',
    rating: 5,
  },
  {
    quote:
      "From the first call to the ride home at midnight, everything about our wedding transportation was flawless. The car was spotless and the chauffeur treated us like royalty.",
    author: 'M. & J. Reyes',
    context: 'Wedding Party, Fort Worth',
    rating: 5,
  },
  {
    quote:
      "I book 1Limo for every client visit now. Punctual, professional, and the vehicles are always immaculate. It reflects well on our firm.",
    author: 'D. Coleman',
    context: 'Executive Assistant, Dallas',
    rating: 5,
  },
];
