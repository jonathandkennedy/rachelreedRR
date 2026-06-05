import Image from "next/image";
import Link from "next/link";
import { site, images } from "@/lib/site";
import { getPillars } from "@/lib/practices";
import { locations } from "@/lib/locations";
import { reviews } from "@/lib/reviews";
import { getSortedPosts } from "@/lib/blog";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import Stars from "@/components/Stars";

export default function HomePage() {
  const pillars = getPillars();
  const featuredReviews = reviews.slice(0, 3);
  const featuredPosts = getSortedPosts().slice(0, 3);
  const yearsPracticing = new Date().getFullYear() - site.barAdmittedYear;

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
          <div className="animate-fade-up">
            <p className="eyebrow mb-5">Ventura County Trial Attorney</p>
            <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              A fierce advocate for your{" "}
              <span className="text-gold">family</span>, your{" "}
              <span className="text-gold">freedom</span>, and your future.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Rachel Reed is a Ventura, California attorney known as a bulldog in
              the courtroom — handling family law, criminal defense, and personal
              injury with honest answers and relentless advocacy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold text-base">
                Get Rachel On Your Side
              </Link>
              <a href={site.phone.href} className="btn-ghost text-base">
                Call {site.phone.display}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-muted">
                  5.0 on{" "}
                  <a
                    href={site.profiles.yelp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-light link-underline"
                  >
                    Yelp
                  </a>
                </span>
              </div>
              <span className="text-sm text-muted">
                <span className="font-semibold text-cream">{yearsPracticing}+ years</span>{" "}
                practicing law in California
              </span>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm animate-fade-up lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-0 top-10 rounded-t-[40%] border border-gold/30"
            />
            <Image
              src={images.portraitWalking}
              alt={`${site.attorney}, Ventura County attorney`}
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="relative z-10 mx-auto w-full max-w-md rounded-sm object-cover"
            />
            <div className="card absolute bottom-5 left-0 z-20 hidden p-4 sm:block">
              <p className="font-display text-2xl leading-none text-gold">Rachel Reed</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                Attorney at Law
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="border-y border-line bg-ink-soft">
        <div className="container-x grid gap-6 py-8 text-center sm:grid-cols-3">
          <Stat value="Honest" label="Straight answers, never a runaround" />
          <Stat value="Fearless" label="A bulldog in the courtroom" />
          <Stat value="Local" label="Serving all of Ventura County" />
        </div>
      </section>

      {/* ===================== PRACTICE AREAS ===================== */}
      <section className="py-20">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">How Rachel Can Help</p>
            <h2 className="text-3xl sm:text-4xl">Practice Areas</h2>
            <p className="mt-4 text-muted">
              Whether you&apos;re protecting your family, defending your freedom,
              or recovering from an injury, you get the same fierce, prepared
              advocate in your corner.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.path}
                href={`/${p.path}`}
                className="card group flex flex-col p-7 transition-all hover:-translate-y-1 hover:border-gold/50"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {p.category}
                </span>
                <h3 className="mt-3 text-2xl text-cream">{p.navLabel}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.heroSub}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
                  Explore {p.navLabel}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY RACHEL ===================== */}
      <section className="border-y border-line bg-gradient-to-b from-ink-soft to-ink">
        <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <Image
              src={images.portraitSuited}
              alt={`${site.attorney} standing at a Ventura courthouse`}
              width={1024}
              height={1536}
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="mx-auto w-full max-w-md rounded-sm object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">Why Clients Choose Rachel</p>
            <h2 className="text-3xl sm:text-4xl">
              The advocate you want when everything is on the line.
            </h2>
            <p className="mt-5 text-muted">
              Clients describe Rachel the same way again and again: fierce,
              focused, and refreshingly honest. She won&apos;t sell you a fantasy
              to get you in the door — she&apos;ll tell you the truth and then
              out-prepare the other side.
            </p>
            <ul className="prose-rrl mt-6">
              <li>Direct access to Rachel — not a rotating cast of staff.</li>
              <li>Straight answers and realistic expectations from day one.</li>
              <li>Relentless preparation and a commanding courtroom presence.</li>
              <li>Deep familiarity with the Ventura County courts.</li>
            </ul>
            <Link href="/about" className="btn-ghost mt-8">
              Meet Rachel Reed
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section className="py-20">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">In Their Words</p>
              <h2 className="text-3xl sm:text-4xl">Clients who&apos;ve been in your shoes</h2>
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-gold-light link-underline">
              Read all reviews →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredReviews.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CTASection />

      {/* ===================== BLOG ===================== */}
      <section className="py-20">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Guidance &amp; Insight</p>
              <h2 className="text-3xl sm:text-4xl">From the Rachel Reed Law blog</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-gold-light link-underline">
              Visit the blog →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
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
                  <h3 className="text-lg leading-snug text-cream">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-gold-light">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICE AREA ===================== */}
      <section className="border-t border-line bg-ink-soft py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-4">Proudly Local</p>
            <h2 className="text-3xl sm:text-4xl">Serving Ventura County</h2>
            <p className="mt-4 text-muted">
              From the firm&apos;s office on County Square Drive in Ventura, Rachel
              represents clients throughout the county and surrounding communities.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/areas-we-serve/${l.slug}`}
                    className="inline-block rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-gold hover:text-cream"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/areas-we-serve" className="mt-4 inline-block text-sm font-semibold text-gold-light link-underline">
              View all areas we serve →
            </Link>
            <address className="mt-6 not-italic text-muted">
              <span className="block font-semibold text-cream">{site.name}</span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              <a href={site.phone.href} className="mt-2 inline-block text-gold-light link-underline">
                {site.phone.display}
              </a>
            </address>
          </div>
          <div className="overflow-hidden rounded-sm border border-line">
            <iframe
              title={`Map to ${site.name}`}
              src={site.address.mapsEmbed}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.3]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-gold">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
