import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getComboParams, getComboPractice } from "@/lib/combos";
import { getLocation } from "@/lib/locations";
import { getPractice } from "@/lib/practices";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import type { FAQ } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentBlocks from "@/components/ContentBlocks";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

// Lock the route to exactly the curated combo set — any other city/practice
// pair (e.g. a non-combo city) returns 404 rather than rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getComboParams();
}

function resolve(citySlug: string, practiceSlug: string) {
  const loc = getLocation(citySlug);
  const combo = getComboPractice(practiceSlug);
  if (!loc || !combo) return null;
  const practice = getPractice(combo.practicePath);
  if (!practice) return null;
  return { loc, combo, practice };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; practice: string }>;
}): Promise<Metadata> {
  const { city, practice } = await params;
  const data = resolve(city, practice);
  if (!data) return {};
  const { loc, combo } = data;
  const title = `${loc.city} ${combo.label} Attorney`;
  return {
    title: `${title} | Rachel Reed Law`,
    description: `${title} Rachel Reed represents ${loc.city}, CA clients in ${combo.noun} matters with honest counsel and fierce advocacy. Free, confidential consultation — call ${site.phone.display}.`,
    keywords: [
      `${loc.city} ${combo.noun} attorney`,
      `${loc.city} ${combo.noun} lawyer`,
      `${combo.noun} attorney ${loc.city} CA`,
    ],
    alternates: { canonical: `/areas-we-serve/${loc.slug}/${combo.slug}` },
  };
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ city: string; practice: string }>;
}) {
  const { city, practice } = await params;
  const data = resolve(city, practice);
  if (!data) notFound();
  const { loc, combo, practice: full } = data;

  const title = `${loc.city} ${combo.label} Attorney`;
  const cityReviews = reviews.filter((r) => loc.reviewCities.includes(r.city));

  // Blend FAQs: a combo-specific one + two from the practice + one city FAQ.
  const faqs: FAQ[] = [
    {
      q: `How much does a ${loc.city} ${combo.noun} attorney cost?`,
      a: `Cost depends on the specifics of your case. Rachel offers a free, confidential consultation to review your ${combo.noun} matter and explain her fees clearly before you decide. Call ${site.phone.display} to schedule.`,
    },
    ...full.faqs.slice(0, 2),
    ...loc.faqs.slice(0, 1),
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${title} — ${combo.label} services in ${loc.city}, CA`,
          description: `Rachel Reed represents ${loc.city} clients in ${combo.noun} matters.`,
          url: `/areas-we-serve/${loc.slug}/${combo.slug}`,
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-x relative pb-14">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Areas We Serve", href: "/areas-we-serve" },
              { name: loc.city, href: `/areas-we-serve/${loc.slug}` },
              { name: combo.label, href: `/areas-we-serve/${loc.slug}/${combo.slug}` },
            ]}
          />
          <p className="eyebrow mb-4 mt-6">
            {loc.city}, CA · {combo.label}
          </p>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.06] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{combo.hook}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold text-base">
              {full.ctaButton}
            </Link>
            <a href={site.phone.href} className="btn-ghost text-base">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_20rem]">
          <article>
            <div className="prose-rrl">
              <p className="text-lg">
                If you&apos;re facing {combo.noun} in {loc.city}, you don&apos;t have
                to go through it alone. Rachel Reed represents {loc.city} clients
                with the honesty and ferocity that have earned her a 5-star
                reputation across Ventura County — telling you the truth about your
                situation and then fighting relentlessly to protect what matters
                most.
              </p>
              <p>
                {loc.intro[1]?.type === "p"
                  ? loc.intro[1].text
                  : `Rachel serves families throughout ${loc.city} and the surrounding area.`}
              </p>
            </div>

            {/* Why Rachel */}
            <h2 className="mt-12 font-display text-2xl text-cream sm:text-3xl">
              Why {loc.city} clients choose Rachel for {combo.noun}
            </h2>
            <ul className="prose-rrl mt-5">
              {combo.whyBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {/* Local context (city-unique) */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-cream sm:text-3xl">
                Local knowledge for {loc.city}
              </h2>
              <div className="mt-4">
                <ContentBlocks blocks={loc.localContext} />
              </div>
            </div>

            {/* Link to authoritative practice page */}
            <div className="card mt-10 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl text-cream">
                  Want the full details on {combo.label.toLowerCase()}?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Read Rachel&apos;s complete guide to {combo.noun} in Ventura County.
                </p>
              </div>
              <Link href={`/${full.path}`} className="btn-ghost shrink-0">
                {combo.label} overview →
              </Link>
            </div>

            {/* City reviews */}
            {cityReviews.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl text-cream sm:text-3xl">
                  What {loc.city} clients say
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {cityReviews.map((r) => (
                    <ReviewCard key={r.name} review={r} full />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <FaqSection
                faqs={faqs}
                heading={`${loc.city} ${combo.label} — Frequently Asked Questions`}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-display text-2xl text-cream">
                {combo.label} help in {loc.city}
              </p>
              <p className="mt-2 text-sm text-muted">
                Free, confidential case review — reviewed by Rachel personally.
              </p>
              <Link href="/contact" className="btn-gold mt-5 w-full">
                {full.ctaButton}
              </Link>
              <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                {site.phone.display}
              </a>
            </div>

            <nav className="card mt-6 p-6" aria-label={`Other ${loc.city} services`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                More in {loc.city}
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <Link
                    href={`/areas-we-serve/${loc.slug}`}
                    className="block rounded px-3 py-2 text-sm text-muted transition-colors hover:bg-gold/10"
                  >
                    {loc.city} overview
                  </Link>
                </li>
                {/* Sibling combos for this city are linked from the city page. */}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
