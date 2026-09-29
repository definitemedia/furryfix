import Image from "next/image";
import { exploreHref } from "@/lib/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise";

const rise =
  "motion-safe:animate-[hero-rise_0.9s_cubic-bezier(0.22,1,0.36,1)_both]";

const float = "motion-safe:animate-[hero-float_6.5s_ease-in-out_infinite]";

type Dog = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  /** Column width as a share of the row, plus overlap with neighbours. */
  slot: string;
  /** Stacking order of the photo; labels always sit above every photo. */
  layer: string;
  /** Extra lift for the label on narrow screens so neighbouring labels never collide. */
  labelLift: string;
  delay: string;
};

const dogs: Dog[] = [
  {
    src: "/hero/bath-row-chihuahua.webp",
    width: 640,
    height: 820,
    alt: "A fawn Chihuahua with a red collar looking toward the camera",
    label: "Gentle Rinse",
    slot: "w-[19%] sm:w-[17%]",
    layer: "z-0",
    labelLift: "mb-[8vw] sm:mb-2",
    delay: "motion-safe:[animation-delay:0.15s]",
  },
  {
    src: "/hero/bath-row-jack-russell.webp",
    width: 640,
    height: 729,
    alt: "A Jack Russell terrier puppy with tan ears looking at the camera",
    label: "Shampoo & Lather",
    slot: "w-[20%] sm:w-[19%] -ml-[3%]",
    layer: "z-10",
    labelLift: "mb-1 sm:mb-2",
    delay: "motion-safe:[animation-delay:0.3s]",
  },
  {
    src: "/hero/bath-row-golden.webp",
    width: 640,
    height: 805,
    alt: "A golden retriever smiling with its tongue out",
    label: "Deep Clean",
    slot: "w-[24%] sm:w-[23%] -ml-[3%]",
    layer: "z-20",
    labelLift: "mb-1 sm:mb-2",
    delay: "motion-safe:[animation-delay:0s]",
  },
  {
    src: "/hero/bath-row-pug.webp",
    width: 640,
    height: 619,
    alt: "A black pug wearing a knitted grey scarf",
    label: "Fresh & Fluffy",
    slot: "w-[22%] sm:w-[21%] -ml-[3%]",
    layer: "z-10",
    labelLift: "mb-1 sm:mb-2",
    delay: "motion-safe:[animation-delay:0.3s]",
  },
  {
    src: "/hero/bath-row-samoyed.webp",
    width: 640,
    height: 744,
    alt: "A fluffy white Samoyed smiling at the camera",
    label: "Happy Bath Time",
    slot: "w-[20%] sm:w-[19%] -ml-[3%]",
    layer: "z-0",
    labelLift: "mb-[6vw] sm:mb-2",
    delay: "motion-safe:[animation-delay:0.15s]",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
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

function DogColumn({ dog, index }: { dog: Dog; index: number }) {
  return (
    <li className={`relative flex shrink-0 flex-col items-center ${dog.slot}`}>
      <span
        className={`relative z-30 ${dog.labelLift} ${float}`}
        style={{ animationDelay: `${index * 0.8}s` }}
      >
        <span
          className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-turquoise/25 bg-white/95 px-2 py-1 text-[0.66rem] font-semibold leading-none text-navy shadow-[0_6px_18px_color-mix(in_srgb,var(--color-navy)_10%,transparent)] sm:px-3 sm:py-1.5 sm:text-xs lg:text-[0.8rem] ${rise} motion-safe:[animation-delay:0.6s]`}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />
          {dog.label}
        </span>
      </span>
      <Image
        src={dog.src}
        alt={dog.alt}
        width={dog.width}
        height={dog.height}
        preload={index === 2}
        sizes="(min-width: 1120px) 260px, 24vw"
        className={`relative ${dog.layer} block h-auto w-full select-none ${rise} ${dog.delay}`}
        draggable={false}
      />
    </li>
  );
}

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-[radial-gradient(ellipse_55%_70%_at_50%_100%,var(--color-aqua),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-12 sm:px-8 lg:pt-16">
        <div className={`mx-auto max-w-[720px] text-center ${rise}`}>
          <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-navy sm:text-xs">
            <span aria-hidden="true" className="h-px w-6 bg-turquoise" />
            A Little Love Goes a Long Way
            <span aria-hidden="true" className="h-px w-6 bg-turquoise" />
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-navy sm:text-[3.25rem] lg:text-[3.9rem]"
          >
            Make Every Bath a <span className="text-turquoise-hover">Happy</span> Moment!
          </h1>
          <p className="mx-auto mt-4 max-w-[44ch] text-[0.98rem] leading-7 text-body sm:text-[1.05rem]">
            Turn everyday bathing into a moment of love, care, and happiness with FurryFix.
          </p>
          <a
            href={exploreHref}
            className={`mt-7 inline-flex h-12 min-w-[44px] items-center justify-center gap-2 rounded-full bg-navy px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-turquoise hover:text-navy ${focusRing}`}
          >
            Explore Our Products
            <ArrowIcon />
          </a>
        </div>
      </div>

      <ul className="relative mx-auto mt-8 flex max-w-[1120px] items-end justify-center px-3 sm:mt-10 sm:px-8 lg:mt-6">
        {dogs.map((dog, index) => (
          <DogColumn key={dog.src} dog={dog} index={index} />
        ))}
      </ul>
    </section>
  );
}
