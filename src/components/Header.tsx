"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur border-b border-line shadow-lg shadow-black/30"
          : "bg-gradient-to-b from-ink/90 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors hover:text-gold ${
                  pathname.startsWith(item.href) && item.href !== "/"
                    ? "text-gold"
                    : "text-cream"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="10" viewBox="0 0 12 12" className="mt-0.5 opacity-70">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="card overflow-hidden p-2 shadow-xl shadow-black/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded px-3 py-2.5 transition-colors hover:bg-gold/10"
                      >
                        <span className="block text-sm font-semibold text-cream">
                          {child.label}
                        </span>
                        {child.blurb && (
                          <span className="block text-xs text-muted">{child.blurb}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phone.href} className="btn-ghost px-4 py-2.5 text-sm">
            <PhoneIcon /> {site.phone.display}
          </a>
          <Link href="/contact" className="btn-gold px-4 py-2.5 text-sm">
            Get Rachel On Your Side
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-line text-cream lg:hidden"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-ink/98 backdrop-blur lg:hidden">
          <nav className="container-x flex max-h-[80vh] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-line/60 py-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className="flex-1 py-2 font-medium text-cream"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label}`}
                      onClick={() =>
                        setOpenGroup((g) => (g === item.href ? null : item.href))
                      }
                      className="px-3 py-2 text-gold"
                    >
                      {openGroup === item.href ? "−" : "+"}
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.href && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-line pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMobile}
                        className="py-2 text-sm text-muted hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a href={site.phone.href} className="btn-ghost">
                <PhoneIcon /> Call {site.phone.display}
              </a>
              <Link href="/contact" onClick={closeMobile} className="btn-gold">
                Get Rachel On Your Side
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.37 2.3.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.3a1 1 0 011 1c0 1.2.2 2.4.57 3.5a1 1 0 01-.24 1z"
        fill="currentColor"
      />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
