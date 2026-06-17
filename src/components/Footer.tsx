import Link from "next/link";
import { mainNav, site } from "@/lib/site";
import { locations } from "@/lib/locations";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const practiceGroups = mainNav.filter((n) => n.children);

  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Fierce, honest representation in family law, criminal defense, and
            personal injury for Ventura County families.
          </p>
          <div className="mt-5 flex flex-col gap-1 text-sm">
            <a href={site.phone.href} className="font-semibold text-gold-light link-underline w-fit">
              {site.phone.display}
            </a>
            <address className="not-italic text-muted">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
          </div>
        </div>

        {practiceGroups.map((group) => (
          <div key={group.href}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Link href={group.href} className="hover:text-gold-light">
                {group.label}
              </Link>
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {group.children!.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-muted transition-colors hover:text-cream">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Firm</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-muted hover:text-cream">About Rachel</Link></li>
            <li><Link href="/reviews" className="text-muted hover:text-cream">Reviews</Link></li>
            <li><Link href="/blog" className="text-muted hover:text-cream">Blog</Link></li>
            <li><Link href="/areas-we-serve" className="text-muted hover:text-cream">Areas We Serve</Link></li>
            <li><Link href="/es/derecho-de-familia" hrefLang="es" className="text-muted hover:text-cream">Español: Derecho de Familia</Link></li>
            <li><Link href="/contact" className="text-muted hover:text-cream">Contact</Link></li>
            <li>
              <a href={site.profiles.yelp} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cream">
                Yelp Reviews
              </a>
            </li>
            <li>
              <a href={site.profiles.avvo} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-cream">
                Avvo Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-5 text-xs text-muted-dark">
          <p className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-muted">Serving:</span>
            {locations.map((l, i) => (
              <span key={l.slug}>
                <Link href={`/areas-we-serve/${l.slug}`} className="hover:text-cream">
                  {l.city}
                </Link>
                {i < locations.length - 1 && <span className="ml-2 text-muted-dark">·</span>}
              </span>
            ))}
          </p>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <p className="max-w-xl sm:text-right">
              The information on this website is for general purposes only and is
              not legal advice. Contacting the firm does not create an
              attorney–client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
