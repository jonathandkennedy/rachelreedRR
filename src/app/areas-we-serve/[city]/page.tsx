import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/lib/locations";
import { getPillars } from "@/lib/practices";
import { getCityComboPractices, isComboCity } from "@/lib/combos";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentBlocks from "@/components/ContentBlocks";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import JsonLd from "@/components/JsonLd";
import { serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical: `/areas-we-serve/${loc.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const pillars = getPillars();
  const cityReviews = reviews.filter((r) => loc.reviewCities.includes(r.city));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Family Law, Criminal Defense & Personal Injury Attorney in ${loc.city}, CA`,
          description: loc.metaDescription,
          url: `/areas-we-serve/${loc.slug}`,
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
            ]}
          />
          <p className="eyebrow mb-4 mt-6">Ventura County · {loc.city}</p>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.06] sm:text-5xl">
            {loc.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{loc.heroSub}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold text-base">
              Get Rachel On Your Side
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
              {loc.intro.map((b, i) =>
                b.type === "p" ? <p key={i} className="text-lg">{b.text}</p> : null
              )}
            </div>

            {/* Practice areas for this city */}
            <h2 className="mt-12 font-display text-2xl text-cream sm:text-3xl">
              How Rachel helps {loc.city} families
            </h2>
            {isComboCity(loc.slug) ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {getCityComboPractices(loc.slug).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/areas-we-serve/${loc.slug}/${c.slug}`}
                    className="card group p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
                  >
                    <h3 className="text-lg text-cream">
                      {loc.city} {c.label} Attorney
                    </h3>
                    <span className="mt-2 inline-block text-sm font-semibold text-gold-light">
                      {c.label} in {loc.city} →
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {pillars.map((p) => (
                  <Link
                    key={p.path}
                    href={`/${p.path}`}
                    className="card group p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
                  >
                    <h3 className="text-lg text-cream">{p.navLabel}</h3>
                    <span className="mt-2 inline-block text-sm font-semibold text-gold-light">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* Local context */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-cream sm:text-3xl">
                Local knowledge that works for you
              </h2>
              <div className="mt-4">
                <ContentBlocks blocks={loc.localContext} />
              </div>
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
              <FaqSection faqs={loc.faqs} heading={`${loc.city} — Frequently Asked Questions`} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-display text-2xl text-cream">Serving {loc.city}</p>
              <p className="mt-2 text-sm text-muted">
                Free, confidential case review — reviewed by Rachel personally.
              </p>
              <Link href="/contact" className="btn-gold mt-5 w-full">
                Get Rachel On Your Side
              </Link>
              <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                {site.phone.display}
              </a>
              <address className="mt-5 border-t border-line pt-4 not-italic text-sm text-muted">
                <span className="block font-semibold text-cream">{site.name}</span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </div>

            <nav className="card mt-6 p-6" aria-label="Other areas">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Other areas we serve
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {locations
                  .filter((l) => l.slug !== loc.slug)
                  .map((l) => (
                    <li key={l.slug}>
                      <Link
                        href={`/areas-we-serve/${l.slug}`}
                        className="inline-block rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-gold hover:text-cream"
                      >
                        {l.city}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
