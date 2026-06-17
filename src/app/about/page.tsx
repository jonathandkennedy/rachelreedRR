import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, images } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "About Rachel Reed | Ventura Attorney",
  description:
    "Meet Rachel Reed — a Ventura County attorney admitted to the State Bar of California in 2016, known as a fierce, honest advocate in family law, criminal defense, and personal injury.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const years = new Date().getFullYear() - site.barAdmittedYear;
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
            <p className="eyebrow mb-4 mt-6">Meet Your Attorney</p>
            <h1 className="text-4xl sm:text-5xl">Rachel Reed</h1>
            <p className="mt-3 text-lg text-gold">Attorney at Law · Ventura, California</p>
            <p className="mt-6 text-muted">
              Rachel Reed built her practice on a simple promise: tell clients the
              truth, and fight for them like everything depends on it — because it
              does. Her clients call her a &quot;bulldog in the courtroom,&quot; but
              the people who know her describe someone equally defined by how much
              she cares.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Stars />
              <span className="text-sm text-muted">
                5.0 rating from real clients on{" "}
                <a href={site.profiles.yelp} target="_blank" rel="noopener noreferrer" className="text-gold-light link-underline">
                  Yelp
                </a>
              </span>
            </div>
          </div>
          <div className="relative">
            <Image
              src={images.portraitCasual}
              alt="Rachel Reed, Ventura County attorney"
              width={1024}
              height={1536}
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="mx-auto w-full max-w-sm rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_18rem]">
          <article className="prose-rrl">
            <h2>An advocate who tells you the truth</h2>
            <p>
              Too many people leave a lawyer&apos;s office having heard exactly what
              they wanted to hear — and learn the hard way that it wasn&apos;t real.
              Rachel takes the opposite approach. From your first conversation, she
              gives you a straight, honest assessment of your situation: your
              strengths, your risks, and the most realistic path to your goals.
            </p>
            <p>
              That honesty is paired with relentless preparation. Whether she&apos;s
              protecting a parent&apos;s relationship with their children, defending
              someone&apos;s freedom against criminal charges, or standing up to an
              insurance company after a serious injury, Rachel out-works and
              out-prepares the other side.
            </p>

            <h2>Admitted to the California Bar in 2016</h2>
            <p>
              Rachel was admitted to the State Bar of California on December 6,
              2016, and has spent the years since building a reputation across
              Ventura County as a fierce, focused trial attorney. She handles
              family law, criminal defense, and personal injury matters from her
              office on County Square Drive in Ventura.
            </p>

            <h2>What clients say</h2>
            <p>
              The way clients describe Rachel says more than any biography could.
              One client wrote that hiring Rachel was &quot;the single best decision
              I made during the most challenging chapter of my life.&quot; Another
              simply said: &quot;Rachel Reed fights — and she wins.&quot; A father
              she helped through a difficult divorce noted that she did &quot;what
              was best for our children.&quot;
            </p>
            <p>
              What ties those stories together isn&apos;t just results. It&apos;s the
              feeling of finally having someone in your corner who listens, who
              tells you the truth, and who refuses to back down.
            </p>

            <h2>Compassion meets ferocity</h2>
            <p>
              Family law and criminal cases arrive at the hardest moments of
              people&apos;s lives. Rachel never loses sight of that. She&apos;s
              fierce where it counts — in negotiation and in the courtroom — and
              steady and reassuring everywhere else. You won&apos;t be handed off to
              a rotating cast of staff. You work with Rachel.
            </p>

            <p className="text-sm text-muted-dark">
              Verify Rachel&apos;s standing on her{" "}
              <a href={site.profiles.avvo} target="_blank" rel="noopener noreferrer">
                Avvo profile
              </a>
              .
            </p>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                At a glance
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <Fact term="Admitted" detail="State Bar of California, 2016" />
                <Fact term="Experience" detail={`${years}+ years practicing law`} />
                <Fact term="Focus" detail="Family Law · Criminal Defense · Personal Injury" />
                <Fact term="Office" detail={`${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`} />
                <Fact term="Languages" detail={site.languages.join(", ")} />
              </dl>
              <Link href="/contact" className="btn-gold mt-6 w-full">
                Get Rachel On Your Side
              </Link>
              <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                {site.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Fact({ term, detail }: { term: string; detail: string }) {
  return (
    <div>
      <dt className="text-muted-dark">{term}</dt>
      <dd className="mt-0.5 text-cream">{detail}</dd>
    </div>
  );
}
