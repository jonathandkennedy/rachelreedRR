/**
 * Practice × city "combo" landing pages (e.g. "Oxnard Divorce Attorney").
 * These target high-intent local searches. To stay on the right side of
 * Google's doorway-page guidelines, each page blends genuinely unique content:
 * a city+practice-specific intro, the city's own local context, matching local
 * reviews, and blended FAQs — plus a clear link to the authoritative practice
 * page so the combo pages support (not cannibalize) the pillars.
 *
 * Curated scope: 6 high-value practices × 5 top cities = 30 pages.
 */

export type ComboPractice = {
  /** URL segment used under /areas-we-serve/[city]/[practice]. */
  slug: string;
  /** Path to the full practice page this combo supports. */
  practicePath: string;
  /** Used in H1/title: "{City} {label} Attorney". */
  label: string;
  /** Lowercase noun used in prose, e.g. "divorce", "DUI defense". */
  noun: string;
  /** Practice-specific opening hook (no city — combined with city context). */
  hook: string;
  /** Three reasons to choose Rachel for this practice. */
  whyBullets: string[];
};

export const comboPractices: ComboPractice[] = [
  {
    slug: "family-law",
    practicePath: "family-law",
    label: "Family Law",
    noun: "family law",
    hook: "Divorce, custody, and support decisions will shape your family's finances and your time with your children for years to come.",
    whyBullets: [
      "Honest assessments — never false promises to get you in the door",
      "Relentless preparation that out-works the other side",
      "A calm, decisive guide through mediation, settlement, or trial",
    ],
  },
  {
    slug: "divorce",
    practicePath: "family-law/divorce",
    label: "Divorce",
    noun: "divorce",
    hook: "Whether your divorce is amicable or a fight over everything you've built, the decisions you make early can follow you for decades.",
    whyBullets: [
      "Protection for your finances, your home, and your retirement",
      "Skilled handling of community vs. separate property disputes",
      "Equally comfortable settling or taking your case to trial",
    ],
  },
  {
    slug: "child-custody",
    practicePath: "family-law/child-custody",
    label: "Child Custody",
    noun: "child custody",
    hook: "Few things are more frightening than a fight over your children — and the court decides based on what it can see.",
    whyBullets: [
      "A track record of exposing manipulation and false narratives",
      "Full and equal protection of fathers' and mothers' rights",
      "Strategy built around the best interests of your child",
    ],
  },
  {
    slug: "criminal-defense",
    practicePath: "criminal-defense",
    label: "Criminal Defense",
    noun: "criminal defense",
    hook: "An arrest is not a conviction — but what you do next can shape the rest of your life.",
    whyBullets: [
      "Every stop, search, and arrest scrutinized for violations",
      "Negotiation from strength, fully prepared for trial",
      "Straight answers about exactly what you're facing",
    ],
  },
  {
    slug: "dui",
    practicePath: "criminal-defense/dui",
    label: "DUI",
    noun: "DUI defense",
    hook: "A DUI arrest starts two clocks at once: your criminal case and a DMV deadline that can be as short as 10 days.",
    whyBullets: [
      "Fast action to protect your license at the DMV",
      "Challenges to the stop, the testing, and the procedures",
      "Work to reduce or dismiss the charges where the facts allow",
    ],
  },
  {
    slug: "car-accidents",
    practicePath: "personal-injury/car-accidents",
    label: "Car Accident",
    noun: "car accident",
    hook: "After a crash, the insurance company moves fast to limit what it pays — you need someone who moves faster.",
    whyBullets: [
      "No attorney's fee unless Rachel recovers for you",
      "The insurers handled so you can focus on healing",
      "Full value pursued: medical bills, lost wages, and more",
    ],
  },
];

/** Cities included in the curated combo set (must exist in locations.ts). */
export const comboCitySlugs = [
  "ventura",
  "oxnard",
  "camarillo",
  "thousand-oaks",
  "simi-valley",
] as const;

export const comboPracticeBySlug = new Map(comboPractices.map((p) => [p.slug, p]));

export function getComboPractice(slug: string): ComboPractice | undefined {
  return comboPracticeBySlug.get(slug);
}

/** All valid {city, practice} param pairs for static generation. */
export function getComboParams(): { city: string; practice: string }[] {
  const params: { city: string; practice: string }[] = [];
  for (const city of comboCitySlugs) {
    for (const p of comboPractices) {
      params.push({ city, practice: p.slug });
    }
  }
  return params;
}

export function isComboCity(slug: string): boolean {
  return (comboCitySlugs as readonly string[]).includes(slug);
}
