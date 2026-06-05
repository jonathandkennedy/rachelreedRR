import Link from "next/link";
import { type Block, slugify } from "@/lib/content";
import { site } from "@/lib/site";

/** Renders an array of structured content blocks inside `.prose-rrl`. */
export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
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
                  Talk to Rachel about your case →
                </Link>
              </aside>
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
      <p className="text-sm text-muted-dark mt-10">
        Call {site.attorney} directly at{" "}
        <a href={site.phone.href} className="text-gold-light">
          {site.phone.display}
        </a>
        .
      </p>
    </div>
  );
}
