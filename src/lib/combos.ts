/**
 * Practice × city "combo" landing pages (e.g. "Oxnard Divorce Attorney").
 * These target high-intent local searches. To stay on the right side of
 * Google's doorway-page guidelines, each page blends genuinely unique content:
 * a city+practice-specific intro, the city's own local context, matching local
 * reviews, and blended FAQs — plus a clear link to the authoritative practice
 * page so the combo pages support (not cannibalize) the pillars.
 *
 * Tiered coverage:
 *   - "full" cities (top 5)  → every combo practice (family + criminal + injury)
 *   - "family" cities (rest) → the family-law practices only
 */

export type ComboCategory = "family" | "criminal" | "injury";

export type ComboPractice = {
  /** URL segment used under /areas-we-serve/[city]/[practice]. */
  slug: string;
  /** Path to the full practice page this combo supports. */
  practicePath: string;
  category: ComboCategory;
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
    category: "family",
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
    category: "family",
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
    category: "family",
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
    slug: "child-support",
    practicePath: "family-law/support",
    category: "family",
    label: "Child Support",
    noun: "child and spousal support",
    hook: "Support orders affect your household every single month — and the gap between an accurate order and an inflated one adds up fast.",
    whyBullets: [
      "Accurate guideline calculations — neither inflated nor understated",
      "Full income disclosure enforced, including for the self-employed",
      "Modifications and aggressive enforcement when you're owed",
    ],
  },
  {
    slug: "restraining-orders",
    practicePath: "family-law/domestic-violence",
    category: "family",
    label: "Restraining Order",
    noun: "restraining order",
    hook: "A restraining order moves fast and carries serious consequences — whether you need protection or you've been falsely accused.",
    whyBullets: [
      "Fast action to secure protection when you're in danger",
      "A careful defense against false or exaggerated allegations",
      "Protection for your custody, firearm, and housing rights",
    ],
  },
  {
    slug: "criminal-defense",
    practicePath: "criminal-defense",
    category: "criminal",
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
    category: "criminal",
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
    category: "injury",
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

/** Cities that get the full combo suite (family + criminal + injury). */
export const fullComboCitySlugs = [
  "ventura",
  "oxnard",
  "camarillo",
  "thousand-oaks",
  "simi-valley",
] as const;

/** Surrounding cities that get the family-law combo suite only. */
export const familyComboCitySlugs = [
  "ojai",
  "santa-paula",
  "moorpark",
  "port-hueneme",
  "fillmore",
] as const;

const familyPractices = comboPractices.filter((p) => p.category === "family");

export const comboPracticeBySlug = new Map(comboPractices.map((p) => [p.slug, p]));

export function getComboPractice(slug: string): ComboPractice | undefined {
  return comboPracticeBySlug.get(slug);
}

/** The combo practices available for a given city, based on its tier. */
export function getCityComboPractices(citySlug: string): ComboPractice[] {
  if ((fullComboCitySlugs as readonly string[]).includes(citySlug)) {
    return comboPractices;
  }
  if ((familyComboCitySlugs as readonly string[]).includes(citySlug)) {
    return familyPractices;
  }
  return [];
}

export function isComboCity(slug: string): boolean {
  return (
    (fullComboCitySlugs as readonly string[]).includes(slug) ||
    (familyComboCitySlugs as readonly string[]).includes(slug)
  );
}

/** All valid {city, practice} param pairs for static generation. */
export function getComboParams(): { city: string; practice: string }[] {
  const params: { city: string; practice: string }[] = [];
  for (const city of [...fullComboCitySlugs, ...familyComboCitySlugs]) {
    for (const p of getCityComboPractices(city)) {
      params.push({ city, practice: p.slug });
    }
  }
  return params;
}

/** Guards against rendering a practice not offered for a city's tier. */
export function isValidCombo(citySlug: string, practiceSlug: string): boolean {
  return getCityComboPractices(citySlug).some((p) => p.slug === practiceSlug);
}
