import Image from "next/image";
import { featuredAmazonUrl } from "@/lib/products";
import { exploreHref } from "@/lib/site";

const fadeIn =
  "transition-opacity duration-700 ease-out starting:opacity-0 motion-reduce:transition-none";

const float = "motion-safe:animate-[hero-float_6.5s_ease-in-out_infinite]";

const softShadow = "shadow-[0_14px_36px_color-mix(in_srgb,var(--color-navy)_14%,transparent)]";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

const pill =
  "inline-flex h-12 min-w-[44px] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-colors duration-200";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLink({ label }: { label: string }) {
  return (
    <a
      href={exploreHref}
      aria-label={label}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors duration-200 hover:bg-turquoise ${focusRing}`}
    >
      <ArrowIcon className="h-4 w-4 -rotate-45" />
    </a>
  );
}

type SideCardProps = {
  src: string;
  alt: string;
  label: string;
  linkLabel: string;
  className?: string;
};

function SideCard({ src, alt, label, linkLabel, className = "" }: SideCardProps) {
  return (
    <div className={`rounded-[22px] bg-white p-2.5 ${softShadow} ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-lavender">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 200px, 45vw" className="object-cover" />
      </div>
      <div className="flex items-center justify-between gap-2 px-1.5 pb-0.5 pt-2.5">
        <p className="text-sm font-semibold text-navy">{label}</p>
        <ArrowLink label={linkLabel} />
      </div>
    </div>
  );
}

type PeekCardProps = {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
};

function PeekCard({ src, alt, label, objectPosition }: PeekCardProps) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-[24px] bg-white ${softShadow}`}>
      <div className="relative h-32 sm:h-40 lg:h-44">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 30vw, 45vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
      <p className="px-4 py-3 text-center text-sm font-semibold text-navy">{label}</p>
    </div>
  );
}

function ExploreBar() {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-4 rounded-[28px] bg-navy px-6 py-7 text-center ${softShadow}`}
    >
      <p className="text-lg font-bold tracking-[-0.01em] text-white sm:text-xl">Explore FurryFix</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {featuredAmazonUrl && (
          <a
            href={featuredAmazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} bg-turquoise text-white hover:bg-turquoise-hover ${focusRing}`}
          >
            Shop on Amazon
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowIcon />
          </a>
        )}
        <a
          href={exploreHref}
          className={`${pill} bg-white text-navy hover:bg-off-white ${focusRing}`}
        >
          Explore Products
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="w-full overflow-hidden bg-pale-turquoise">
      <div className={`relative mx-auto max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pt-12 ${fadeIn}`}>
        <div className="relative z-10 mx-auto max-w-[760px] text-center">
          <h1
            id="hero-heading"
            className="text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-navy sm:text-[3.4rem] lg:text-[4.25rem]"
          >
            <span className="block">Better Care</span>
            <span className="block">For Every Pet</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[46ch] text-[0.95rem] leading-7 text-body">
            Thoughtful grooming and care essentials designed to make everyday moments happier.
          </p>
        </div>

        <div className="relative mt-8 xl:-mt-24">
          <div className="relative mx-auto aspect-[5/6] w-full max-w-[320px] overflow-hidden rounded-t-full border-[6px] border-b-0 border-white bg-navy sm:max-w-[380px] lg:max-w-[420px] xl:mt-28">
            <Image
              src="/hero/golden-retriever.jpg"
              alt="A golden retriever looking straight at the camera with a happy open-mouth smile"
              fill
              preload
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 380px, 320px"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <div className="mx-auto mt-6 grid max-w-[560px] grid-cols-2 gap-4 xl:contents">
            <SideCard
              src="/hero/dog-card.jpg"
              alt="A small tan and white dog with folded ears looking at the camera"
              label="Everyday care"
              linkLabel="Explore FurryFix products"
              className={`xl:absolute xl:-top-12 xl:left-6 xl:w-[230px] ${float}`}
            />
            <SideCard
              src="/hero/cat-tabby.jpg"
              alt="A tabby cat sitting on light stairs looking at the camera"
              label="Happy companions"
              linkLabel="See products for your pet"
              className={`xl:absolute xl:right-6 xl:top-12 xl:w-[230px] ${float} motion-safe:[animation-delay:1.2s]`}
            />
          </div>
        </div>

        <div className="relative z-10 mt-6 grid grid-cols-2 gap-4 md:grid-cols-[1fr_1.2fr_1fr] md:items-stretch lg:-mt-16 lg:gap-6">
          <div className="col-span-2 md:order-2 md:col-span-1">
            <ExploreBar />
          </div>
          <div className="md:order-1">
            <PeekCard
              src="/hero/dog-peek.jpg"
              alt="A Cavalier King Charles spaniel puppy peeking over a soft white blanket"
              label="Made for everyday moments"
              objectPosition="50% 82%"
            />
          </div>
          <div className="md:order-3">
            <PeekCard
              src="/hero/cat-companion.jpg"
              alt="A black and white cat resting its paws on a ledge and peeking at the camera"
              label="Happy pets"
              objectPosition="50% 40%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
