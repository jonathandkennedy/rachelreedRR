/**
 * Central configuration for Rachel Reed Law, PC.
 * NAP (Name / Address / Phone) lives here so it stays identical
 * site-wide — a core local-SEO requirement.
 */

export const site = {
  name: "Rachel Reed Law, PC",
  attorney: "Rachel Reed",
  shortName: "Rachel Reed Law",
  url: "https://www.rachelreedlaw.com",
  domain: "rachelreedlaw.com",
  tagline: "Ventura County's Fierce Advocate for Family & Criminal Cases",
  description:
    "Rachel Reed is a Ventura, CA family law, criminal defense, and personal injury attorney known as a bulldog in the courtroom. Honest answers, relentless advocacy, and a free, confidential case review. Call (805) 585-5330.",

  // Bar admission — confirmed by client
  barAdmittedDate: "2016-12-06",
  barAdmittedYear: 2016,

  phone: {
    display: "(805) 585-5330",
    href: "tel:+18055855330",
    e164: "+18055855330",
  },

  // Lead email — TODO[CONFIRM]: swap for the real inbox + live Formspree form ID.
  email: "intake@rachelreedlaw.com",

  // Formspree endpoint — TODO[CONFIRM]: replace "yourFormId" with the real ID
  // from https://formspree.io after the account/form is created.
  formspreeEndpoint: "https://formspree.io/f/yourFormId",

  address: {
    street: "674 County Square Drive, Suite 103",
    city: "Ventura",
    region: "CA",
    regionName: "California",
    postalCode: "93003",
    country: "US",
    full: "674 County Square Drive, Suite 103, Ventura, CA 93003",
    // Approx coordinates for County Square Dr, Ventura — refine if needed.
    geo: { lat: 34.2554, lng: -119.2098 },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=674+County+Square+Drive+Suite+103+Ventura+CA+93003",
    mapsEmbed:
      "https://www.google.com/maps?q=674%20County%20Square%20Drive%20Suite%20103%20Ventura%20CA%2093003&output=embed",
  },

  hours: [
    { day: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
    { day: "Saturday – Sunday", time: "By appointment" },
  ],
  // Schema.org openingHours
  openingHours: ["Mo-Fr 08:30-17:30"],

  languages: ["English"], // TODO[CONFIRM]: add "Spanish" if Se habla español

  profiles: {
    avvo: "https://www.avvo.com/attorneys/93010-ca-rachel-reed-4850929.html",
    yelp: "https://www.yelp.com/biz/rachel-reed-law-pc-ventura",
    // TODO[CONFIRM]: add Google Business Profile, Facebook, Instagram, LinkedIn URLs.
    google: "",
    facebook: "",
    instagram: "",
  },

  ratingValue: "5.0",
  reviewCount: 5,
} as const;

export const images = {
  logo: "/images/rachelreedlogo.png",
  portraitSuited: "/images/rachelreedlawherstanding.png",
  portraitCasual: "/images/rachelreedlawstanding.png",
  portraitWalking: "/images/rachelreedlawwalking.png",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Family Law",
    href: "/family-law",
    children: [
      { label: "Divorce", href: "/family-law/divorce", blurb: "Contested & uncontested divorce in Ventura County." },
      { label: "Child Custody", href: "/family-law/child-custody", blurb: "Protect your time and your children." },
      { label: "Child & Spousal Support", href: "/family-law/support", blurb: "Fair, accurate support orders." },
      { label: "Domestic Violence", href: "/family-law/domestic-violence", blurb: "Restraining orders & defense." },
    ],
  },
  {
    label: "Criminal Defense",
    href: "/criminal-defense",
    children: [
      { label: "DUI Defense", href: "/criminal-defense/dui", blurb: "First-time & repeat DUI charges." },
      { label: "Felonies", href: "/criminal-defense/felonies", blurb: "Serious charges, serious defense." },
      { label: "Misdemeanors", href: "/criminal-defense/misdemeanors", blurb: "Protect your record and future." },
      { label: "Domestic Violence", href: "/criminal-defense/domestic-violence", blurb: "PC 273.5 & related charges." },
    ],
  },
  {
    label: "Personal Injury",
    href: "/personal-injury",
    children: [
      { label: "Car Accidents", href: "/personal-injury/car-accidents", blurb: "Recover what you're owed." },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Cities targeted for local SEO across Ventura County. */
export const serviceAreas = [
  "Ventura",
  "Oxnard",
  "Camarillo",
  "Thousand Oaks",
  "Simi Valley",
  "Ojai",
  "Santa Paula",
  "Fillmore",
  "Moorpark",
  "Port Hueneme",
] as const;
