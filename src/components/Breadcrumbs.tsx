import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-gold" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-cream">
                  {c.name}
                </Link>
              )}
              {!last && <span className="text-muted-dark">/</span>}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(items)} />
    </nav>
  );
}
