import { ratingValue, type AmazonReviewSnapshot } from "@/lib/reviews";
import ReviewsMarquee from "./ReviewsMarquee";

type AmazonReviewsProps = {
  snapshot: AmazonReviewSnapshot | null;
  reviewsUrl: string;
};

const link =
  "inline-flex min-h-11 items-center gap-1.5 rounded-md font-semibold text-turquoise-hover underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

function Stars({ value }: { value: number }) {
  return (
    <span aria-hidden="true" className="flex gap-0.5 text-turquoise">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4">
            <defs>
              <linearGradient id={`star-${value}-${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${value}-${i})`}
              d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z"
            />
          </svg>
        );
      })}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AmazonReviews({ snapshot, reviewsUrl }: AmazonReviewsProps) {
  const reviews = snapshot?.reviews ?? [];
  const overall = ratingValue(snapshot?.rating ?? null);

  return (
    <section aria-labelledby="reviews-heading" className="mt-16 border-t border-navy/10 pt-12 sm:mt-20 sm:pt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-[-0.03em] text-navy sm:text-3xl">
            Customer reviews
          </h2>
          {reviews.length > 0 ? (
            <p className="mt-2 text-base text-body">
              A few reviews from the FurryFix listing on Amazon.in, shown as published there.
            </p>
          ) : null}
        </div>
        {snapshot?.rating ? (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-body">
            {overall !== null ? <Stars value={overall} /> : null}
            <span className="font-semibold text-navy">{snapshot.rating}</span>
            {snapshot.ratingCount ? <span className="text-sm">{snapshot.ratingCount} on Amazon</span> : null}
          </div>
        ) : null}
      </div>

      {reviews.length > 0 ? (
        <ReviewsMarquee label="Customer reviews from Amazon.in">
          {reviews.map((review) => {
            const stars = ratingValue(review.stars);
            return (
              <li
                key={review.id}
                className="mr-5 flex w-[min(300px,calc(100vw-4rem))] shrink-0 flex-col rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_10px_30px_color-mix(in_srgb,var(--color-navy)_6%,transparent)] sm:w-[340px]"
              >
                {review.stars ? (
                  <div className="flex items-center gap-2">
                    {stars !== null ? <Stars value={stars} /> : null}
                    <span className="sr-only">{review.stars}</span>
                  </div>
                ) : null}
                {review.title ? (
                  <h3 className="mt-3 break-words text-lg font-bold leading-snug text-navy">{review.title}</h3>
                ) : null}
                {review.body ? (
                  <p title={review.body} className="mt-2 line-clamp-6 whitespace-pre-line break-words text-[15px] leading-7 text-body">
                    {review.body}
                  </p>
                ) : null}
                <div className="mt-auto pt-4 text-sm text-secondary">
                  {review.author ? <p className="font-semibold text-navy">{review.author}</p> : null}
                  <p>
                    {review.date}
                    {review.verified ? " · Verified Purchase" : null}
                  </p>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                    aria-label={`Read ${review.author ? `the review by ${review.author}` : "this review"} on Amazon (opens in a new tab)`}
                  >
                    Read on Amazon
                    <ExternalIcon />
                  </a>
                </div>
              </li>
            );
          })}
        </ReviewsMarquee>
      ) : (
        <p className="mt-4 max-w-xl text-base leading-7 text-body">
          Reviews for this product are published on Amazon.
        </p>
      )}

      <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className={`${link} mt-6`}>
        {reviews.length > 0 ? "See all reviews on Amazon" : "Read customer reviews on Amazon"}
        <ExternalIcon />
      </a>
    </section>
  );
}
