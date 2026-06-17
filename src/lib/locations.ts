import type { Block, FAQ } from "./content";

/**
 * Per-city local landing pages for Ventura County. Each city has genuinely
 * unique content (local geography, courthouse routing, neighborhoods) to avoid
 * thin/duplicate-content SEO penalties.
 *
 * Note: all Ventura County family law and criminal cases are heard at the
 * Ventura Superior Court (Hall of Justice, 800 S. Victoria Ave, Ventura) —
 * we reference that per-city with the local route/drive.
 */

export type Location = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  heroSub: string;
  /** Which review cities (from reviews.ts) to surface on this page. */
  reviewCities: string[];
  intro: Block[];
  localContext: Block[];
  faqs: FAQ[];
};

export const locations: Location[] = [
  {
    slug: "ventura",
    city: "Ventura",
    metaTitle: "Ventura Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Rachel Reed is a Ventura, CA attorney handling family law, criminal defense, and personal injury — with an office on County Square Drive. Free consultation: (805) 585-5330.",
    keywords: ["Ventura attorney", "Ventura family law attorney", "Ventura criminal defense lawyer"],
    h1: "Ventura Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Rachel Reed's office is right here in Ventura on County Square Drive — minutes from the courthouse and ready to fight for you.",
    reviewCities: ["Ventura, CA"],
    intro: [
      {
        type: "p",
        text: "Ventura is home. Rachel Reed Law sits on County Square Drive, just off Victoria Avenue and a short drive from the Ventura County Hall of Justice where family law and criminal cases are heard. That proximity isn't just convenient — it means Rachel is in these courtrooms regularly and knows how local judges and prosecutors operate.",
      },
      {
        type: "p",
        text: "Whether you live near the Ventura Pier and downtown, up in the hillside neighborhoods, or out toward the east end, Rachel handles divorce, custody, criminal defense, and injury cases for your community with honest advice and relentless advocacy.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Ventura residents have their family and criminal cases heard at the Ventura Superior Court on South Victoria Avenue — essentially in Rachel's backyard. Being local means faster meetings, deep familiarity with the courthouse, and an attorney who understands the community you're part of.",
      },
    ],
    faqs: [
      {
        q: "Where is Rachel Reed Law located in Ventura?",
        a: "The firm's office is at 674 County Square Drive, Suite 103, Ventura, CA 93003 — just off Victoria Avenue and close to the Ventura County Hall of Justice. Call (805) 585-5330 to schedule a free consultation.",
      },
      {
        q: "Does Rachel Reed handle cases at the Ventura courthouse?",
        a: "Yes. Rachel regularly appears at the Ventura Superior Court, where Ventura County family law and criminal cases are heard, and uses that local familiarity to her clients' advantage.",
      },
    ],
  },
  {
    slug: "oxnard",
    city: "Oxnard",
    metaTitle: "Oxnard Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Oxnard, CA family law, criminal defense, and personal injury attorney Rachel Reed. Honest answers and fierce advocacy for Oxnard families. Free consultation: (805) 585-5330.",
    keywords: ["Oxnard attorney", "Oxnard family law attorney", "Oxnard divorce lawyer", "Oxnard criminal defense"],
    h1: "Oxnard Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "From RiverPark to the Channel Islands Harbor, Rachel Reed represents Oxnard families with honest counsel and a bulldog's resolve.",
    reviewCities: ["Oxnard, CA"],
    intro: [
      {
        type: "p",
        text: "As the largest city in Ventura County, Oxnard sees its share of family and criminal cases — and its residents deserve an attorney who treats each one personally. Rachel Reed has earned the trust of Oxnard clients, several of whom have shared their gratitude publicly after she helped them through divorce, custody, and other difficult matters.",
      },
      {
        type: "p",
        text: "Whether you're near downtown, RiverPark, the Channel Islands Harbor, or out by the agricultural fields that define the Oxnard Plain, Rachel is a short drive away and ready to help.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Oxnard family law and criminal cases are filed and heard at the Ventura County courthouse, a quick trip up Highway 101 from Oxnard. Rachel's office in nearby Ventura makes in-person meetings easy, and her familiarity with the local court system benefits Oxnard clients at every stage.",
      },
      {
        type: "quote",
        text: "My anxiety was through the roof before I got Rachel to represent us. Thanks to her we won our case and even got more than expected.",
        cite: "Jorge B., Oxnard — Yelp review",
      },
    ],
    faqs: [
      {
        q: "Do I have to travel to Ventura for my Oxnard case?",
        a: "Most Oxnard family law and criminal cases are heard at the Ventura County courthouse, a short drive up Highway 101. Rachel's office is in nearby Ventura, making meetings convenient for Oxnard clients.",
      },
      {
        q: "Does Rachel Reed represent clients throughout Oxnard?",
        a: "Yes. Rachel serves families across Oxnard — from RiverPark and downtown to the Channel Islands Harbor area — in family law, criminal defense, and personal injury matters.",
      },
    ],
  },
  {
    slug: "camarillo",
    city: "Camarillo",
    metaTitle: "Camarillo Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Camarillo, CA family law, criminal defense, and personal injury attorney Rachel Reed. Fierce, honest representation for Camarillo families. Free consultation: (805) 585-5330.",
    keywords: ["Camarillo attorney", "Camarillo family law attorney", "Camarillo divorce lawyer", "Camarillo criminal defense"],
    h1: "Camarillo Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Rachel Reed brings honest counsel and relentless advocacy to Camarillo families, just a short drive down the 101.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Camarillo families navigating divorce, custody, or criminal charges need an attorney who is both compassionate and unrelenting. Rachel Reed is exactly that — known for telling clients the truth and then fighting harder than the other side expects.",
      },
      {
        type: "p",
        text: "From the neighborhoods near CSU Channel Islands to the communities around the Camarillo Premium Outlets and Old Town, Rachel serves clients throughout the city in family law, criminal defense, and personal injury matters.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Camarillo sits along the Highway 101 corridor between Ventura and Thousand Oaks, with cases heard at the Ventura County courthouse a short drive to the west. Rachel's Ventura office is easy to reach for Camarillo residents, and her knowledge of the local courts works to your benefit.",
      },
    ],
    faqs: [
      {
        q: "Where will my Camarillo family law case be heard?",
        a: "Camarillo family law and criminal cases are handled at the Ventura County courthouse, a short drive west on Highway 101. Rachel's nearby Ventura office makes consultations convenient for Camarillo clients.",
      },
      {
        q: "Does Rachel Reed take cases throughout Camarillo?",
        a: "Yes. Rachel represents clients across Camarillo, from Old Town to the communities near CSU Channel Islands, in family law, criminal defense, and personal injury matters.",
      },
    ],
  },
  {
    slug: "thousand-oaks",
    city: "Thousand Oaks",
    metaTitle: "Thousand Oaks Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Thousand Oaks, CA family law, criminal defense, and personal injury attorney Rachel Reed. Honest, aggressive representation in the Conejo Valley. Call (805) 585-5330.",
    keywords: ["Thousand Oaks attorney", "Thousand Oaks family law attorney", "Thousand Oaks divorce lawyer", "Conejo Valley attorney"],
    h1: "Thousand Oaks Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Serving the Conejo Valley with the same fierce, honest advocacy that has earned Rachel Reed 5-star reviews across Ventura County.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Thousand Oaks and the broader Conejo Valley sit at the eastern edge of Ventura County, where many residents are surprised to learn how much is at stake in a divorce, custody dispute, or criminal charge. Rachel Reed gives Thousand Oaks clients a clear, honest picture of their situation and a determined advocate to see it through.",
      },
      {
        type: "p",
        text: "From the neighborhoods near The Oaks and Newbury Park to the communities bordering Westlake Village, Rachel handles family law, criminal defense, and personal injury cases throughout the area.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Thousand Oaks lies along Highway 101 near the Los Angeles County line, with Ventura County cases heard at the Ventura courthouse to the northwest. While that's a longer drive than for west-county residents, Rachel makes the process manageable and keeps Thousand Oaks clients informed every step of the way.",
      },
    ],
    faqs: [
      {
        q: "Are Thousand Oaks cases heard in Ventura County?",
        a: "Yes. Thousand Oaks is part of Ventura County, so its family law and criminal cases are generally heard at the Ventura County courthouse. Rachel represents Conejo Valley clients there and keeps them informed throughout.",
      },
      {
        q: "Does Rachel Reed serve the Conejo Valley?",
        a: "Yes. Rachel represents clients in Thousand Oaks, Newbury Park, and the surrounding Conejo Valley communities in family law, criminal defense, and personal injury matters.",
      },
    ],
  },
  {
    slug: "simi-valley",
    city: "Simi Valley",
    metaTitle: "Simi Valley Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Simi Valley, CA family law, criminal defense, and personal injury attorney Rachel Reed. Honest answers and aggressive advocacy. Free consultation: (805) 585-5330.",
    keywords: ["Simi Valley attorney", "Simi Valley family law attorney", "Simi Valley divorce lawyer", "Simi Valley criminal defense"],
    h1: "Simi Valley Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Rachel Reed represents Simi Valley families with the honesty and ferocity her clients across Ventura County have come to count on.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Simi Valley sits in the eastern reaches of Ventura County, and its residents deserve an attorney who will fight for them as hard as they'd fight for their own family. Rachel Reed brings that energy to every divorce, custody battle, and criminal case she takes on.",
      },
      {
        type: "p",
        text: "From the neighborhoods near the Reagan Library to the communities along the 118 corridor, Rachel handles family law, criminal defense, and personal injury matters for Simi Valley clients.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Simi Valley is connected to the rest of Ventura County by Highway 118, with cases heard at the Ventura County courthouse. Although it's one of the farther cities from Rachel's Ventura office, she makes communication and scheduling easy so distance is never a barrier to strong representation.",
      },
    ],
    faqs: [
      {
        q: "Will my Simi Valley case be heard in Ventura?",
        a: "Yes. Simi Valley is in Ventura County, so family law and criminal cases are generally heard at the Ventura County courthouse. Rachel represents Simi Valley clients there and keeps the process convenient.",
      },
      {
        q: "Does Rachel Reed represent clients in Simi Valley?",
        a: "Yes. Rachel serves families throughout Simi Valley in family law, criminal defense, and personal injury matters, with honest counsel and aggressive advocacy.",
      },
    ],
  },
  {
    slug: "ojai",
    city: "Ojai",
    metaTitle: "Ojai Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Ojai, CA family law, criminal defense, and personal injury attorney Rachel Reed. Personal, honest representation for the Ojai Valley. Free consultation: (805) 585-5330.",
    keywords: ["Ojai attorney", "Ojai family law attorney", "Ojai divorce lawyer", "Ojai Valley attorney"],
    h1: "Ojai Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Personal, honest representation for the Ojai Valley — just a short drive up Highway 33 from Rachel Reed's Ventura office.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "The Ojai Valley is a close-knit community, and when a family or criminal matter arises, people want an attorney who is both discreet and tenacious. Rachel Reed offers Ojai clients exactly that: a personal relationship with their lawyer and a fierce advocate in the courtroom.",
      },
      {
        type: "p",
        text: "From the downtown arcade and Meiners Oaks to the surrounding valley, Rachel handles divorce, custody, criminal defense, and personal injury cases for Ojai residents.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Ojai sits just north of Ventura along scenic Highway 33, making Rachel's Ventura office an easy trip for Ojai Valley residents. Cases are heard at the Ventura County courthouse, where Rachel regularly appears.",
      },
    ],
    faqs: [
      {
        q: "How far is Rachel Reed's office from Ojai?",
        a: "Rachel's office is in Ventura, a short drive south of Ojai on Highway 33. Ojai cases are heard at the Ventura County courthouse, which Rachel attends regularly.",
      },
      {
        q: "Does Rachel Reed represent Ojai Valley clients?",
        a: "Yes. Rachel serves clients throughout the Ojai Valley, including Meiners Oaks and the surrounding area, in family law, criminal defense, and personal injury matters.",
      },
    ],
  },
  {
    slug: "santa-paula",
    city: "Santa Paula",
    metaTitle: "Santa Paula Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Santa Paula, CA family law, criminal defense, and personal injury attorney Rachel Reed. Fierce, honest representation along the Highway 126 corridor. Call (805) 585-5330.",
    keywords: ["Santa Paula attorney", "Santa Paula family law attorney", "Santa Paula divorce lawyer", "Santa Paula criminal defense"],
    h1: "Santa Paula Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Rachel Reed represents Santa Paula families with the heart and ferocity that earned her a glowing review from a Santa Paula client.",
    reviewCities: ["Santa Paula, CA"],
    intro: [
      {
        type: "p",
        text: "Santa Paula's tight-knit community and citrus heritage give it a character all its own — and its families deserve an attorney who treats them like neighbors, not case numbers. Rachel Reed has earned heartfelt praise from Santa Paula clients for her passion, integrity, and results.",
      },
      {
        type: "p",
        text: "Whether your matter involves divorce, a custody dispute, criminal charges, or an injury, Rachel offers Santa Paula residents honest guidance and a determined advocate.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Santa Paula sits along Highway 126 in the Santa Clara River Valley, a straightforward drive to the Ventura County courthouse where its cases are heard. Rachel's Ventura office is easily reachable for Santa Paula clients.",
      },
      {
        type: "quote",
        text: "Hiring Rachel Reed was the single best decision I made during the most challenging chapter of my life. Rachel Reed fights — and she wins.",
        cite: "Norma B., Santa Paula — Yelp review",
      },
    ],
    faqs: [
      {
        q: "Where are Santa Paula cases heard?",
        a: "Santa Paula family law and criminal cases are heard at the Ventura County courthouse, a direct drive west on Highway 126. Rachel's Ventura office is convenient for Santa Paula clients.",
      },
      {
        q: "Does Rachel Reed represent clients in Santa Paula?",
        a: "Yes — and Santa Paula clients have publicly praised her work. Rachel handles family law, criminal defense, and personal injury matters throughout the city.",
      },
    ],
  },
  {
    slug: "moorpark",
    city: "Moorpark",
    metaTitle: "Moorpark Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Moorpark, CA family law, criminal defense, and personal injury attorney Rachel Reed. Honest, aggressive representation for Moorpark families. Call (805) 585-5330.",
    keywords: ["Moorpark attorney", "Moorpark family law attorney", "Moorpark divorce lawyer", "Moorpark criminal defense"],
    h1: "Moorpark Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Rachel Reed brings honest counsel and relentless advocacy to Moorpark families across Ventura County.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Moorpark's growing community spans young families and longtime residents alike, and Rachel Reed represents them all with the same straightforward honesty and courtroom ferocity. When the stakes are your children or your freedom, you want someone who won't back down.",
      },
      {
        type: "p",
        text: "Rachel handles divorce, custody, support, criminal defense, and personal injury cases for clients throughout Moorpark.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Moorpark sits in eastern Ventura County near the junction of Highways 23 and 118, with cases heard at the Ventura County courthouse. Rachel keeps the process organized and communication easy for Moorpark clients despite the drive.",
      },
    ],
    faqs: [
      {
        q: "Is Moorpark in Ventura County?",
        a: "Yes. Moorpark is part of Ventura County, so its family law and criminal cases are generally heard at the Ventura County courthouse, where Rachel regularly appears.",
      },
      {
        q: "Does Rachel Reed serve Moorpark?",
        a: "Yes. Rachel represents Moorpark families in family law, criminal defense, and personal injury matters with honest advice and aggressive advocacy.",
      },
    ],
  },
  {
    slug: "port-hueneme",
    city: "Port Hueneme",
    metaTitle: "Port Hueneme Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Port Hueneme, CA family law, criminal defense, and personal injury attorney Rachel Reed. Honest, fierce representation for the coastal community. Call (805) 585-5330.",
    keywords: ["Port Hueneme attorney", "Port Hueneme family law attorney", "Port Hueneme divorce lawyer"],
    h1: "Port Hueneme Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Serving Port Hueneme and the surrounding coastal community with honest, determined representation.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Port Hueneme's coastal community — including the many families connected to Naval Base Ventura County — deserves an attorney who understands the pressures they face and fights for them without hesitation. Rachel Reed provides Port Hueneme clients with honest guidance and steadfast advocacy.",
      },
      {
        type: "p",
        text: "Rachel handles divorce, custody, criminal defense, and personal injury matters for residents of Port Hueneme and the surrounding area.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Port Hueneme sits on the coast adjacent to Oxnard, a short drive up Highway 101 to the Ventura County courthouse where its cases are heard. Rachel's Ventura office is easily accessible for Port Hueneme clients.",
      },
    ],
    faqs: [
      {
        q: "Does Rachel Reed represent military families in Port Hueneme?",
        a: "Rachel represents Port Hueneme residents, including families connected to Naval Base Ventura County, in family law, criminal defense, and personal injury matters. Reach out for a free, confidential consultation.",
      },
      {
        q: "Where are Port Hueneme cases heard?",
        a: "Port Hueneme family law and criminal cases are heard at the Ventura County courthouse, a short drive up Highway 101. Rachel's Ventura office is convenient for Port Hueneme clients.",
      },
    ],
  },
  {
    slug: "fillmore",
    city: "Fillmore",
    metaTitle: "Fillmore Family Law & Criminal Defense Attorney | Rachel Reed Law",
    metaDescription:
      "Fillmore, CA family law, criminal defense, and personal injury attorney Rachel Reed. Personal, honest representation along Highway 126. Call (805) 585-5330.",
    keywords: ["Fillmore attorney", "Fillmore family law attorney", "Fillmore divorce lawyer"],
    h1: "Fillmore Attorney — Family Law, Criminal Defense & Personal Injury",
    heroSub:
      "Small-town Fillmore deserves big-time advocacy. Rachel Reed delivers honest counsel and a relentless fight.",
    reviewCities: [],
    intro: [
      {
        type: "p",
        text: "Fillmore's small-town character means word travels fast — and Rachel Reed's reputation as a fierce, honest advocate has reached families across the Santa Clara River Valley. When your family or freedom is on the line, you want that reputation on your side.",
      },
      {
        type: "p",
        text: "Rachel handles divorce, custody, criminal defense, and personal injury matters for Fillmore residents.",
      },
    ],
    localContext: [
      {
        type: "p",
        text: "Fillmore sits along Highway 126 at the eastern end of the Santa Clara River Valley, with cases heard at the Ventura County courthouse to the west. Rachel keeps communication simple and the process clear for Fillmore clients.",
      },
    ],
    faqs: [
      {
        q: "Are Fillmore cases heard in Ventura?",
        a: "Yes. Fillmore is part of Ventura County, so its family law and criminal cases are generally heard at the Ventura County courthouse, a drive west on Highway 126.",
      },
      {
        q: "Does Rachel Reed serve Fillmore?",
        a: "Yes. Rachel represents Fillmore families in family law, criminal defense, and personal injury matters with personal attention and aggressive advocacy.",
      },
    ],
  },
];

export const locationBySlug = new Map(locations.map((l) => [l.slug, l]));

export function getLocation(slug: string): Location | undefined {
  return locationBySlug.get(slug);
}
