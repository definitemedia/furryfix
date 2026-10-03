import InstagramReelEmbeds from "@/components/layout/InstagramReelEmbeds";
import {
  instagramHandle,
  instagramProfileUrl,
  instagramReelsToEmbed,
} from "@/lib/instagram";

const profileLinkClass =
  "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-turquoise px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none";

export default function InstagramReels() {
  const reels = instagramReelsToEmbed(4);

  return (
    <section
      aria-labelledby="instagram-reels-heading"
      className="w-full min-w-0 max-w-full overflow-x-clip bg-lavender text-body"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1200px] px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="min-w-0">
            <h2
              id="instagram-reels-heading"
              className="text-lg font-semibold tracking-tight text-navy sm:text-xl"
            >
              Watch on Instagram
            </h2>
            <p className="mt-1 text-sm font-medium text-navy">{instagramHandle}</p>
          </div>
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={profileLinkClass}
          >
            View {instagramHandle}
          </a>
        </div>

        {reels.length > 0 ? (
          <InstagramReelEmbeds reels={reels} />
        ) : (
          <p className="mt-3 max-w-xl text-sm leading-relaxed">
            Reels will appear when permalinks are added.
          </p>
        )}
      </div>
    </section>
  );
}
