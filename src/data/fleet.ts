export type Vehicle = {
  slug: string;
  name: string;
  passengers: string;
  luggage: string;
  bestFor: string;
  description: string;
  imageId: string;
  imageAlt: string;
};

// Placeholder fleet copy/photos — replace imageId with real fleet photography
// (see src/lib/unsplash.ts) and adjust passenger/luggage counts to match the
// actual vehicles once confirmed.
export const fleet: Vehicle[] = [
  {
    slug: 'executive-sedan',
    name: 'Executive Sedan',
    passengers: 'Up to 3',
    luggage: '2-3 bags',
    bestFor: 'Airport transfers, single-executive corporate travel',
    description:
      'A polished, understated sedan for the trips where discretion matters most — a solo airport run or a one-on-one client pickup.',
    imageId: '1485291571150-772bcfc10da5',
    imageAlt: 'Black executive sedan silhouette',
  },
  {
    slug: 'luxury-suv',
    name: 'Luxury SUV',
    passengers: 'Up to 6',
    luggage: '5-6 bags',
    bestFor: 'Small groups, families, extra luggage',
    description:
      'More room for passengers and luggage without losing the sedan-level comfort — our most-booked vehicle for small group travel.',
    imageId: '1735620731955-b047a7122892',
    imageAlt: 'Black luxury SUV parked in an upscale setting',
  },
  {
    slug: 'stretch-limousine',
    name: 'Stretch Limousine',
    passengers: 'Up to 10',
    luggage: 'Limited',
    bestFor: 'Weddings, proms, milestone celebrations',
    description:
      "The classic choice for the day you want to arrive in style — plenty of room to celebrate en route, inside and out.",
    imageId: '1676107648535-931375db52e2',
    imageAlt: 'Long black stretch limousine parked for an event',
  },
  {
    slug: 'sprinter-van',
    name: 'Sprinter Van',
    passengers: 'Up to 14',
    luggage: 'Ample',
    bestFor: 'Corporate groups, conference shuttles, wedding parties',
    description:
      'Coach-style comfort in a vehicle that still feels private — built for getting a full group to the same place, together, on time.',
    imageId: '1688619102322-cee55c13f89e',
    imageAlt: 'Sprinter-style passenger van parked on a scenic road',
  },
];
