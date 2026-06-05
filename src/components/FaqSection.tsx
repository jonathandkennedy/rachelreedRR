import type { FAQ } from "@/lib/content";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";

export default function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
}: {
  faqs: FAQ[];
  heading?: string;
}) {
  if (!faqs.length) return null;
  return (
    <section className="mt-4">
      <h2 className="mb-6 text-2xl text-cream sm:text-3xl font-display">{heading}</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-cream">
              {f.q}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
