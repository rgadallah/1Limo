// One entry per service landing page (all 7 are built, src/pages/services/).
// Keeping this as data means the homepage grid, the services overview page,
// and the footer all stay in sync from one source of truth.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroBlurb: string;
  cardBlurb: string;
  /** Unsplash photo ID (no query string) used for the card thumbnail. */
  imageId: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: 'airport-transportation',
    name: 'Airport Transportation',
    shortName: 'Airport',
    metaTitle: 'DFW & Love Field Airport Limo Service | 1Limo Dallas-Fort Worth',
    metaDescription:
      'Reliable chauffeured airport transportation to and from DFW and Dallas Love Field. Flight tracking, meet-and-greet service, and on-time arrivals guaranteed.',
    heroBlurb:
      'Flight-tracked pickups, a chauffeur waiting at the curb, and a smooth ride to or from DFW or Love Field — every time.',
    cardBlurb: 'Flight-tracked pickups at DFW and Love Field, every time you land.',
    imageId: '1542296332-2e4473faf563',
    imageAlt: 'Airplane at the gate on the tarmac at sunset',
  },
  {
    slug: 'corporate-transportation',
    name: 'Corporate Transportation',
    shortName: 'Corporate',
    metaTitle: 'Corporate Car Service Dallas-Fort Worth | 1Limo',
    metaDescription:
      'Executive chauffeured transportation for DFW business travel — client pickups, roadshows, and daily executive service with discretion and precision.',
    heroBlurb:
      'Executive-level transportation for client visits, roadshows, and daily business travel across DFW.',
    cardBlurb: 'Executive travel that keeps your schedule — and your clients — on time.',
    imageId: '1603087462214-2aadc739429c',
    imageAlt: 'Businessman in a suit with a pocket square leaning against a black car',
  },
  {
    slug: 'weddings-special-events',
    name: 'Weddings & Special Events',
    shortName: 'Weddings',
    metaTitle: 'Wedding Limo & Special Event Transportation | 1Limo DFW',
    metaDescription:
      'Elegant chauffeured transportation for weddings and special events in Dallas-Fort Worth. Immaculate vehicles and a seamless day-of experience.',
    heroBlurb: 'Elegant, on-time transportation for the most photographed day of your life.',
    cardBlurb: 'Immaculate cars and a seamless timeline for your wedding day.',
    imageId: '1618418721668-0d1f72aa4bab',
    imageAlt: 'Polished black luxury car parked for a special event',
  },
  {
    slug: 'meetings-events',
    name: 'Meetings & Events',
    shortName: 'Meetings & Events',
    metaTitle: 'Group & Event Transportation Dallas-Fort Worth | 1Limo',
    metaDescription:
      'Coordinated chauffeured transportation for conferences, corporate meetings, and group events across the DFW Metroplex.',
    heroBlurb: 'Coordinated, multi-vehicle transportation for conferences and corporate events.',
    cardBlurb: 'Group logistics handled for conferences and corporate events.',
    imageId: '1740485863419-0ac115772a95',
    imageAlt: 'Business professional stepping into a chauffeured vehicle',
  },
  {
    slug: 'casino-transportation',
    name: 'Casino Transportation',
    shortName: 'Casino',
    metaTitle: 'Casino Shuttle & Limo Service DFW | 1Limo',
    metaDescription:
      'Comfortable, door-to-door chauffeured transportation to Oklahoma and North Texas casinos from Dallas-Fort Worth.',
    heroBlurb: 'Relax on the way there and the way back — door-to-door casino transportation.',
    cardBlurb: 'Door-to-door comfort for your next casino trip.',
    imageId: '1503376780353-7e6692767b70',
    imageAlt: 'Black luxury sedan driving on a highway at dusk',
  },
  {
    slug: 'wheelchair-accessible',
    name: 'Wheelchair-Accessible Transportation',
    shortName: 'Accessible',
    metaTitle: 'Wheelchair-Accessible Limo Service Dallas-Fort Worth | 1Limo',
    metaDescription:
      'ADA-compliant, wheelchair-accessible chauffeured transportation across Dallas-Fort Worth, built around comfort, dignity, and safety.',
    heroBlurb: 'Accessible, dignified transportation built around your comfort and safety.',
    cardBlurb: 'ADA-compliant vehicles with the same premium standard.',
    imageId: '1732194439331-08ec61c4df4f',
    imageAlt: 'Wheelchair-accessible van with ramp lift in use',
  },
  {
    slug: 'hourly-chauffeur',
    name: 'Standard / Hourly Chauffeur Service',
    shortName: 'Hourly Service',
    metaTitle: 'Hourly Chauffeur Service Dallas-Fort Worth | 1Limo',
    metaDescription:
      'Book a private chauffeur by the hour across Dallas-Fort Worth — flexible, on-demand transportation for however your day unfolds.',
    heroBlurb: 'A private chauffeur on your schedule, billed by the hour.',
    cardBlurb: 'Flexible, on-demand chauffeur service billed by the hour.',
    imageId: '1607642857266-88f5f03e66c6',
    imageAlt: 'Chauffeur in a suit driving a luxury vehicle',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
