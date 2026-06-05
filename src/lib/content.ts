/**
 * Shared structured-content model used by practice-area pages and blog
 * posts. Keeping content as data (rather than raw HTML) lets us render it
 * consistently and auto-generate FAQPage / Article schema from the same source.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export type FAQ = { q: string; a: string };

/** Rough reading-time estimate from the text inside content blocks. */
export function readingTime(blocks: Block[]): number {
  const words = blocks
    .map((b) => {
      if ("text" in b) return b.text;
      if ("items" in b) return b.items.join(" ");
      return "";
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Slug helper for auto heading ids / anchors. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
