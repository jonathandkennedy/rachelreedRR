import Link from "next/link";
import { type Block, slugify } from "@/lib/content";
import { site } from "@/lib/site";

const COPY = {
  en: {
    calloutLink: "Talk to Rachel about your case →",
    trailing: (phone: string) => (
      <>
        Call {site.attorney} directly at{" "}
        <a href={site.phone.href} className="text-gold-light">
          {phone}
        </a>
        .
      </>
    ),
  },
  es: {
    calloutLink: "Hable con Rachel sobre su caso →",
    trailing: (phone: string) => (
      <>
        Llame a {site.attorney} directamente al{" "}
        <a href={site.phone.href} className="text-gold-light">
          {phone}
        </a>
        .
      </>
    ),
  },
} as const;

/** Renders an array of structured content blocks inside `.prose-rrl`. */
export default function ContentBlocks({
  blocks,
  lang = "en",
}: {
  blocks: Block[];
  lang?: "en" | "es";
}) {
  const copy = COPY[lang];
  return (
    <div className="prose-rrl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={block.id ?? slugify(block.text)}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={block.id ?? slugify(block.text)}>
                {block.text}
              </h3>
            );
          case "p":
            return <p key={i}>{block.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2 mb-6 text-[#cfcabf]">
                {block.items.map((it, j) => (
                  <li key={j} className="pl-2 leading-relaxed">
                    {it}
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="card my-8 border-l-2 border-l-gold p-6 not-prose"
              >
                <p className="font-display text-xl text-cream mb-2">{block.title}</p>
                <p className="text-muted leading-relaxed mb-0">{block.text}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-gold-light link-underline font-semibold"
                >
                  {copy.calloutLink}
                </Link>
              </aside>
            );
          case "links":
            return (
              <nav key={i} className="card my-8 p-6 not-prose" aria-label={block.title ?? "Related links"}>
                {block.title && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {block.title}
                  </p>
                )}
                <ul className="space-y-2">
                  {block.items.map((it, j) => {
                    const external = it.href.startsWith("http");
                    return (
                      <li key={j}>
                        {external ? (
                          <a
                            href={it.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold-light link-underline font-medium"
                          >
                            {it.label} ↗
                          </a>
                        ) : (
                          <Link href={it.href} className="text-gold-light link-underline font-medium">
                            {it.label} →
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-2 border-l-gold pl-6 italic text-cream text-xl font-display"
              >
                “{block.text}”
                {block.cite && (
                  <cite className="mt-2 block not-italic text-sm text-muted font-sans">
                    — {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
      <p className="text-sm text-muted-dark mt-10">{copy.trailing(site.phone.display)}</p>
    </div>
  );
}

