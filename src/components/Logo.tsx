import Image from "next/image";
import Link from "next/link";
import { site, images } from "@/lib/site";

export default function Logo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src={images.logo}
        alt={`${site.name} monogram logo`}
        width={56}
        height={56}
        priority
        className="h-12 w-12 rounded-sm bg-cream/95 p-0.5 object-contain"
      />
      {showText && (
        <span className="leading-tight">
          <span className="block font-display text-lg tracking-wide text-cream">
            Rachel Reed
          </span>
          <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
            Law, PC
          </span>
        </span>
      )}
    </Link>
  );
}
