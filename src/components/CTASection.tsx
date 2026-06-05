import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  headline?: string;
  sub?: string;
  buttonLabel?: string;
};

/** Reusable conversion band used across pages. */
export default function CTASection({
  headline = "Talk to Rachel Today",
  sub = "Get a free, confidential case review with an attorney who gives you honest answers — not a call center. Reviewed by Rachel personally.",
  buttonLabel = "Get Rachel On Your Side",
}: Props) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-gradient-to-br from-surface to-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-x relative grid items-center gap-8 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow mb-4">Free &amp; Confidential</p>
          <h2 className="text-balance text-3xl md:text-4xl">{headline}</h2>
          <p className="mt-4 max-w-xl text-muted">{sub}</p>
          <p className="mt-3 text-sm text-muted-dark">
            100% confidential · No obligation · Reviewed by Rachel personally
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="btn-gold w-full text-base">
            {buttonLabel}
          </Link>
          <a href={site.phone.href} className="btn-ghost w-full text-base">
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
