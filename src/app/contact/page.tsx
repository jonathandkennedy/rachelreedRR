import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Rachel Reed Law | Free Case Review",
  description:
    "Contact Ventura attorney Rachel Reed for a free, confidential case review. Call (805) 585-5330 or send a message. Family law, criminal defense & personal injury.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-ink-soft to-ink pt-28 lg:pt-32">
        <div className="container-x pb-12">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
          <p className="eyebrow mb-4 mt-6">Free &amp; Confidential</p>
          <h1 className="max-w-3xl text-4xl sm:text-5xl">
            Tell Rachel what happened.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Every case starts with an honest conversation. Share a few details and
            Rachel&apos;s office will reach out — or call now to speak with someone
            today. Your message is reviewed by Rachel personally, never a call
            center.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h2 className="font-display text-2xl text-cream">Speak with us now</h2>
              <a
                href={site.phone.href}
                className="mt-3 block text-2xl font-bold text-gold-light"
              >
                {site.phone.display}
              </a>
              <p className="mt-2 text-sm text-muted">
                Call or text for the fastest response.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Office
              </h2>
              <address className="mt-3 not-italic text-muted">
                <span className="block font-semibold text-cream">{site.name}</span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-gold-light link-underline"
              >
                Get directions →
              </a>
            </div>

            <div className="card p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Hours
              </h2>
              <dl className="mt-3 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-muted">{h.day}</dt>
                    <dd className="text-cream">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line">
        <iframe
          title={`Map to ${site.name}`}
          src={site.address.mapsEmbed}
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full grayscale-[0.3]"
        />
      </section>
    </>
  );
}
