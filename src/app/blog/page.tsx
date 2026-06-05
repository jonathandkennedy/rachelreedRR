import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { getSortedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ventura Family Law & Criminal Defense Insights",
  description:
    "Practical guidance on family law, divorce, custody, DUI, and criminal defense in Ventura County, California — from attorney Rachel Reed.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getSortedPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div className="container-x pb-12">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }]} />
          <p className="eyebrow mb-4 mt-6">Guidance &amp; Insight</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Straight answers for Ventura County families
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Clear, practical guidance on the legal questions that keep people up at
            night — written to help you understand your options before you ever
            pick up the phone.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="card group mb-12 grid overflow-hidden md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {featured.category} · {formatDate(featured.date)}
              </span>
              <h2 className="mt-3 text-3xl text-cream">{featured.title}</h2>
              <p className="mt-3 text-muted">{featured.excerpt}</p>
              <span className="mt-5 font-semibold text-gold-light">Read article →</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover object-top opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs text-muted-dark">{formatDate(post.date)}</span>
                  <h3 className="mt-1.5 text-lg leading-snug text-cream">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-gold-light">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
