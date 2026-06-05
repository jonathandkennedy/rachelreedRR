import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getSortedPosts, posts } from "@/lib/blog";
import { readingTime } from "@/lib/content";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentBlocks from "@/components/ContentBlocks";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [{ url: post.image }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const mins = readingTime(post.body);
  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          url: `/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
          image: post.image,
        })}
      />

      <article>
        {/* Hero */}
        <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
          <div className="container-x max-w-3xl pb-12">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow mb-4 mt-6">{post.category}</p>
            <h1 className="text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span>By {site.attorney}</span>
              <span className="text-muted-dark">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="text-muted-dark">·</span>
              <span>{mins} min read</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_18rem]">
            <div className="max-w-3xl">
              <ContentBlocks blocks={post.body} />
              <div className="mt-12">
                <FaqSection faqs={post.faqs} />
              </div>

              <div className="card mt-12 flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-xl text-cream">
                    Have a {post.category.toLowerCase()} question of your own?
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Get a free, confidential answer from Rachel.
                  </p>
                </div>
                <Link href="/contact" className="btn-gold shrink-0">
                  Talk to Rachel
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Related practice
                </p>
                <Link
                  href={post.relatedPractice.href}
                  className="mt-3 block font-display text-xl text-cream hover:text-gold-light"
                >
                  {post.relatedPractice.label} →
                </Link>
                <Link href="/contact" className="btn-gold mt-5 w-full">
                  Free Case Review
                </Link>
                <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                  {site.phone.display}
                </a>
              </div>

              {related.length > 0 && (
                <div className="card mt-6 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Keep reading
                  </p>
                  <ul className="mt-4 space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`/blog/${r.slug}`} className="group block">
                          <span className="block text-sm font-semibold text-cream group-hover:text-gold-light">
                            {r.title}
                          </span>
                          <span className="mt-1 block text-xs text-muted">
                            {formatDate(r.date)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>
      </article>

      <CTASection />
    </>
  );
}
