import Image from "next/image";
import Link from "next/link";
import type { EsPractice } from "@/lib/es-family";
import { esFamily, esFamilyPillarPath } from "@/lib/es-family";
import { site } from "@/lib/site";
import ContentBlocks from "./ContentBlocks";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import FaqSection from "./FaqSection";
import CTASection from "./CTASection";
import JsonLd from "./JsonLd";
import { serviceSchema } from "@/lib/schema";

export default function SpanishFamilyTemplate({ practice }: { practice: EsPractice }) {
  const subs = esFamily.filter((p) => !p.isPillar);
  const selfPath = practice.isPillar
    ? esFamilyPillarPath
    : `${esFamilyPillarPath}/${practice.slug}`;

  const crumbs: Crumb[] = [
    { name: "Inicio", href: "/" },
    { name: "Derecho de Familia", href: esFamilyPillarPath },
  ];
  if (!practice.isPillar) crumbs.push({ name: practice.navLabel, href: selfPath });

  return (
    <div lang="es">
      <JsonLd
        data={serviceSchema({
          name: practice.h1,
          description: practice.metaDescription,
          url: selfPath,
        })}
      />

      {/* Language switcher */}
      <div className="border-b border-line bg-ink-soft/60">
        <div className="container-x flex justify-end py-2 pt-24 lg:pt-28">
          <Link
            href={practice.enHref}
            hrefLang="en"
            className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-gold"
          >
            Read in English →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-ink-soft to-ink">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-4 mt-6">Derecho de Familia</p>
            <h1 className="text-balance text-4xl leading-[1.06] sm:text-5xl">{practice.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{practice.heroSub}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold text-base">
                {practice.ctaButton}
              </Link>
              <a href={site.phone.href} className="btn-ghost text-base">
                Llame al {site.phone.display}
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

            {/* Sub-area links on the pillar */}
            {practice.isPillar && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {subs.map((s) => (
                  <Link
                    key={s.slug}
                    href={`${esFamilyPillarPath}/${s.slug}`}
                    className="card group p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
                  >
                    <h3 className="text-lg text-cream">{s.navLabel}</h3>
                    <span className="mt-2 inline-block text-sm font-semibold text-gold-light">
                      Más información →
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-10">
              <ContentBlocks blocks={practice.body} lang="es" />
            </div>

            <div className="mt-12">
              <FaqSection faqs={practice.faqs} heading="Preguntas Frecuentes" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <p className="font-display text-2xl text-cream">{practice.ctaHeadline}</p>
              <p className="mt-2 text-sm text-muted">
                Gratis, confidencial y revisado por Rachel personalmente — no un centro de llamadas.
              </p>
              <Link href="/contact" className="btn-gold mt-5 w-full">
                {practice.ctaButton}
              </Link>
              <a href={site.phone.href} className="btn-ghost mt-3 w-full">
                {site.phone.display}
              </a>
            </div>

            <nav className="card mt-6 p-6" aria-label="Temas de derecho de familia">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Derecho de Familia
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <Link
                    href={esFamilyPillarPath}
                    className={`block rounded px-3 py-2 text-sm transition-colors hover:bg-gold/10 ${
                      practice.isPillar ? "bg-gold/10 text-gold" : "text-muted"
                    }`}
                  >
                    Resumen
                  </Link>
                </li>
                {subs.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`${esFamilyPillarPath}/${s.slug}`}
                      className={`block rounded px-3 py-2 text-sm transition-colors hover:bg-gold/10 ${
                        s.slug === practice.slug ? "bg-gold/10 text-gold" : "text-muted"
                      }`}
                    >
                      {s.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <CTASection
        headline={practice.ctaHeadline}
        sub="Reciba una evaluación gratuita y confidencial de su caso con una abogada que le da respuestas honestas. Revisado por Rachel personalmente."
        buttonLabel={practice.ctaButton}
      />
    </div>
  );
}
