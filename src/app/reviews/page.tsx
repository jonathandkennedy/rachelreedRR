import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import Stars from "@/components/Stars";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Reviews | Rachel Reed Law",
  description:
    "Read what real clients say about Ventura attorney Rachel Reed — a 5-star rated family law and criminal defense lawyer known as a bulldog in the courtroom.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div className="container-x pb-14">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
          <p className="eyebrow mb-4 mt-6">In Their Words</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Real clients. Real results. Real relief.
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Stars />
            <p className="text-muted">
              5.0 average rating ·{" "}
              <a href={site.profiles.yelp} target="_blank" rel="noopener noreferrer" className="text-gold-light link-underline">
                See the reviews on Yelp
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} full />
          ))}
        </div>
        <p className="container-x mt-10 text-sm text-muted-dark">
          Reviews are reproduced from the firm&apos;s public Yelp profile. Prior
          results do not guarantee a similar outcome in your case.
        </p>
      </section>

      <CTASection
        headline="Ready for an advocate in your corner?"
        buttonLabel="Get Rachel On Your Side"
      />
    </>
  );
}
