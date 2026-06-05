import type { Review } from "@/lib/reviews";
import Stars from "./Stars";

export default function ReviewCard({
  review,
  full = false,
}: {
  review: Review;
  full?: boolean;
}) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between">
        <Stars count={review.rating} />
        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-dark">
          {review.source}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-cream/90">
        <p className="leading-relaxed">“{full ? review.full : review.short}”</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <span className="block font-display text-lg text-cream">{review.name}</span>
        <span className="block text-sm text-muted">
          {review.matter} · {review.city}
        </span>
      </figcaption>
    </figure>
  );
}
