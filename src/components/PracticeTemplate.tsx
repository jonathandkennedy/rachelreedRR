import Image from "next/image";
import Link from "next/link";
import type { Practice } from "@/lib/practices";
import { getChildren, getPractice } from "@/lib/practices";
import { getPostsForPractice } from "@/lib/blog";
import { site } from "@/lib/site";
import ContentBlocks from "./ContentBlocks";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import FaqSection from "./FaqSection";
import CTASection from "./CTASection";
import JsonLd from "./JsonLd";
import { serviceSchema } from "@/lib/schema";

export default function PracticeTemplate({ practice }: { practice: Practice }) {
  const pillar = getPractice(practice.parent)!;
  const siblings = getChildren(practice.parent);
  const relatedPosts = getPostsForPractice(practice.path, practice.category);

  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];
  if (!practice.isPillar) {
    crumbs.push({ name: pillar.navLabel, href: `/${pillar.path}` });
  }
  crumbs.push({ name: practice.navLabel, href: `/${practice.path}` });

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: practice.h1,
          description: practice.metaDescription,
          url: `/${practice.path}`,
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-10 pb-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-4 mt-6">{practice.category}</p>
            <h1 className="text-balance text-4xl leading-[1.06] sm:text-5xl">
              {practice.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{practice.heroSub}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold text-base">
                {practice.ctaButton}
              </Link>
              <a href={site.phone.href} className="btn-ghost text-base">
                Call {site.phone.display}
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src={practice.image}
              alt={`${site.attorney}, ${practice.h1}`}
              width={1024}
              height={1536}
              priority
              sizes="30vw"
              className="ml-auto w-full max-w-xs rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_20rem]">
          <article>
            <div className="prose-rrl">
              {practice.intro.map((b, i) =>
                b.type === "p" ? <p key={i} className="text-lg">{b.text}</p> : null
              )}
            </div>

            {/* Sub-area highlights (pillar pages) */}
            {practice.highlights && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {practice.highlights.map((h) =>
                  h.href ? (
                    <Link
                      key={h.title}
                      href={h.href}
                      className="card group p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
                    >
                      <h3 className="text-lg text-cream">{h.title}</h3>
                      <p className="mt-2 text-sm text-muted">{h.text}</p>
                      <span className="mt-3 inline-block text-sm font-semibold text-gold-light">
                        Learn more →
                      </span>
                    </Link>
                  ) : (
                    <div key={h.title} className="card p-5">
                      <h3 className="text-lg text-cream">{h.title}</h3>
                      <p className="mt-2 text-sm text-muted">{h.text}</p>
                    </div>
                  )
                )}
              </div>
            )}

            <div className="mt-10">
              <ContentBlocks blocks={practice.body} />
            </div>

            <div className="mt-12">
              <FaqSection faqs={practice.faqs} />
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <h2 className="mb-6 font-display text-2xl text-cream sm:text-3xl">
                  Related reading
                </h2>
                <ul className="grid gap-4 sm:grid-cols-3">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="card group flex h-full flex-col p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
                      >
                        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                          {post.category}
                        </span>
                        <span className="mt-2 flex-1 font-display text-lg leading-snug text-cream group-hover:text-gold-light">
                          {post.title}
                        </span>
                        <span className="mt-3 text-sm font-semibold text-gold-light">
                          Read more →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-display text-2xl text-cream">{practice.ctaHeadline}</p>
              <p className="mt-2 text-sm text-muted">
                Free, confidential, and reviewed by Rachel personally — not a call
                center.
              </p>
              <Link href="/contact" className="btn-gold mt-5 w-full">
                {practice.ctaButton}
              </Link>
              <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                {site.phone.display}
              </a>
            </div>

            {siblings.length > 0 && (
              <nav className="card mt-6 p-6" aria-label={`${pillar.navLabel} topics`}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {pillar.navLabel}
                </p>
                <ul className="mt-4 space-y-1">
                  <li>
                    <Link
                      href={`/${pillar.path}`}
                      className={`block rounded px-3 py-2 text-sm transition-colors hover:bg-gold/10 ${
                        practice.isPillar ? "bg-gold/10 text-gold" : "text-muted"
                      }`}
                    >
                      Overview
                    </Link>
                  </li>
                  {siblings.map((s) => (
                    <li key={s.path}>
                      <Link
                        href={`/${s.path}`}
                        className={`block rounded px-3 py-2 text-sm transition-colors hover:bg-gold/10 ${
                          s.path === practice.path ? "bg-gold/10 text-gold" : "text-muted"
                        }`}
                      >
                        {s.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>

      <CTASection headline={practice.ctaHeadline} buttonLabel={practice.ctaButton} />
    </>
  );
}
