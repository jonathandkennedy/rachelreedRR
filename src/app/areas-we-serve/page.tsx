import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve | Ventura County Attorney | Rachel Reed Law",
  description:
    "Rachel Reed serves families across Ventura County — Ventura, Oxnard, Camarillo, Thousand Oaks, Simi Valley, Ojai, Santa Paula and more — in family law, criminal defense, and personal injury.",
  alternates: { canonical: "/areas-we-serve" },
};

export default function AreasIndexPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div className="container-x pb-12">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Areas We Serve", href: "/areas-we-serve" }]}
          />
          <p className="eyebrow mb-4 mt-6">Proudly Local</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">Serving all of Ventura County</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            From the firm&apos;s office on County Square Drive in Ventura, Rachel
            represents families throughout the county. Find your community below.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/areas-we-serve/${loc.slug}`}
              className="card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <h2 className="font-display text-2xl text-cream">{loc.city}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{loc.heroSub}</p>
              <span className="mt-4 text-sm font-semibold text-gold-light">
                {loc.city} attorney →
              </span>
            </Link>
          ))}
        </div>
        <p className="container-x mt-10 text-muted">
          Don&apos;t see your city?{" "}
          <Link href="/contact" className="text-gold-light link-underline">
            Contact Rachel
          </Link>{" "}
          or call{" "}
          <a href={site.phone.href} className="text-gold-light link-underline">
            {site.phone.display}
          </a>{" "}
          — she serves communities throughout Ventura County.
        </p>
      </section>

      <CTASection />
    </>
  );
}
