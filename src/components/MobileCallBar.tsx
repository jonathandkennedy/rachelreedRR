import Link from "next/link";
import { site } from "@/lib/site";

/** Sticky bottom action bar shown on mobile for one-tap calling / contact. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-ink/95 backdrop-blur lg:hidden">
      <a
        href={site.phone.href}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-cream"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.3a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.24 1z"
            fill="currentColor"
          />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light to-gold-dark py-3.5 text-sm font-bold text-ink"
      >
        Free Case Review
      </Link>
    </div>
  );
}
