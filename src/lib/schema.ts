/**
 * Schema.org JSON-LD builders. Rich structured data is a major local-SEO
 * lever for law firms (LegalService + Attorney, AggregateRating, FAQPage,
 * BreadcrumbList, Article). All builders return plain objects that get
 * injected via the <JsonLd> component.
 */
import { site, serviceAreas } from "./site";
import type { FAQ } from "./content";

const ORG_ID = `${site.url}/#organization`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: `${site.url}${"/images/rachelreedlawherstanding.png"}`,
    logo: `${site.url}/images/rachelreedlogo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
    areaServed: serviceAreas.map((c) => ({
      "@type": "City",
      name: `${c}, CA`,
    })),
    knowsAbout: [
      "Family Law",
      "Divorce",
      "Child Custody",
      "Child Support",
      "Criminal Defense",
      "DUI Defense",
      "Domestic Violence",
      "Personal Injury",
    ],
    founder: {
      "@type": "Person",
      name: site.attorney,
      jobTitle: "Attorney",
      alumniOf: "State Bar of California",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.reviewCount,
      bestRating: "5",
    },
    sameAs: [site.profiles.avvo, site.profiles.yelp].filter(Boolean),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#rachel-reed`,
    name: site.attorney,
    jobTitle: "Attorney at Law",
    worksFor: { "@id": ORG_ID },
    url: `${site.url}/about`,
    image: `${site.url}/images/rachelreedlawstanding.png`,
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
    },
    alumniOf: "State Bar of California",
    knowsLanguage: site.languages,
    sameAs: [site.profiles.avvo, site.profiles.yelp].filter(Boolean),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    description: opts.description,
    url: `${site.url}${opts.url}`,
    provider: { "@id": ORG_ID },
    areaServed: serviceAreas.map((c) => `${c}, CA`),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: `${site.url}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: `${site.url}${opts.url}`,
    author: {
      "@type": "Person",
      name: site.attorney,
      url: `${site.url}/about`,
    },
    publisher: { "@id": ORG_ID },
  };
}
