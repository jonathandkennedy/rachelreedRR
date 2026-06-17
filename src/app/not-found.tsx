import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-28">
      <div className="container-x text-center">
        <p className="eyebrow mb-4 justify-center">Page not found</p>
        <h1 className="font-display text-6xl text-gold">404</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          We couldn&apos;t find that page. Let&apos;s get you back on track — or
          reach out and Rachel&apos;s office will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            Back to home
          </Link>
          <a href={site.phone.href} className="btn-ghost">
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
