import Image from "next/image";

type Variant = "tall" | "featured" | "side" | "wide";

type Reason = {
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition: string;
  sizes: string;
  variant: Variant;
};

const REASONS: Reason[] = [
  {
    title: "Made with Love",
    description:
      "Every pet deserves thoughtful care. FurryFix is built around the love we share with our furry companions.",
    image: "/why/kitten.jpg",
    alt: "A fluffy golden kitten sitting up and reaching one paw into the air",
    objectPosition: "50% 30%",
    sizes: "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw",
    variant: "tall",
  },
  {
    title: "Everyday Pet Care",
    description:
      "Making everyday grooming and care simple, comfortable, and enjoyable for pets and their families.",
    image: "/why/french-bulldog.jpg",
    alt: "A small French bulldog puppy in a cosy hoodie looking back over its shoulder",
    objectPosition: "50% 55%",
    sizes: "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw",
    variant: "featured",
  },
  {
    title: "For Every Furry Friend",
    description:
      "From playful moments to bath time, FurryFix celebrates the special bond between pets and their people.",
    image: "/why/fluffy-dog.jpg",
    alt: "A shaggy grey schnauzer wearing round sunglasses and tilting its head",
    objectPosition: "45% 25%",
    sizes: "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw",
    variant: "side",
  },
  {
    title: "Thoughtful Products",
    description:
      "Discover pet-care essentials designed with your pet's everyday needs in mind.",
    image: "/why/corgi.jpg",
    alt: "A happy corgi smiling with its tongue out",
    objectPosition: "40% 45%",
    sizes: "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw",
    variant: "wide",
  },
];

const CARD_LAYOUT: Record<Variant, string> = {
  tall: "bg-pale-turquoise",
  featured: "bg-turquoise",
  side: "bg-off-white ring-1 ring-navy/5",
  wide: "bg-off-white ring-1 ring-navy/5 lg:flex-row",
};

const ITEM_LAYOUT: Record<Variant, string> = {
  tall: "",
  featured: "",
  side: "lg:row-span-2",
  wide: "lg:col-span-2",
};

const PHOTO_LAYOUT: Record<Variant, string> = {
  tall: "min-h-44 flex-1 sm:min-h-52 lg:min-h-0 [mask-image:linear-gradient(to_bottom,transparent,black_28%)]",
  featured: "mx-4 mb-4 min-h-44 flex-1 overflow-hidden rounded-[1.25rem] ring-4 ring-white/20 sm:min-h-48 lg:min-h-0 lg:mx-5 lg:mb-5",
  side: "min-h-48 flex-1 sm:min-h-56 lg:min-h-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%)]",
  wide: "min-h-44 flex-1 sm:min-h-52 lg:min-h-0 lg:w-[48%] lg:flex-none lg:shrink-0 [mask-image:linear-gradient(to_bottom,transparent,black_28%)] lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]",
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="transition-transform duration-300 ease-out group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function ReasonCard({ reason }: { reason: Reason }) {
  const featured = reason.variant === "featured";

  return (
    <li className={`flex ${ITEM_LAYOUT[reason.variant]}`}>
      <article
        className={`group relative flex w-full flex-col overflow-hidden rounded-[2rem] transition-shadow duration-300 ease-out hover:shadow-[0_18px_40px_rgba(32,40,72,0.10)] motion-reduce:transition-none ${CARD_LAYOUT[reason.variant]}`}
      >
        <div className={`relative z-10 flex items-start justify-between gap-4 p-5 lg:p-6 ${reason.variant === "wide" ? "lg:flex-1" : ""}`}>
          <div className="max-w-[17rem]">
            <h3
              className={`text-lg font-bold leading-snug tracking-[-0.025em] lg:text-[1.25rem] ${featured ? "text-white" : "text-navy"}`}
            >
              {reason.title}
            </h3>
            <p className={`mt-1.5 text-sm leading-[1.45] ${featured ? "text-white/85" : "text-body"}`}>
              {reason.description}
            </p>
          </div>
          <a
            href="#product"
            aria-label={`Explore products: ${reason.title}`}
            className={`group/arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
              featured
                ? "bg-white text-navy hover:bg-off-white focus-visible:outline-white"
                : "bg-turquoise text-white hover:bg-turquoise-hover focus-visible:outline-turquoise"
            }`}
          >
            <ArrowIcon />
          </a>
        </div>

        <div className={`relative ${PHOTO_LAYOUT[reason.variant]}`}>
          <Image
            src={reason.image}
            alt={reason.alt}
            fill
            sizes={reason.sizes}
            style={{ objectPosition: reason.objectPosition }}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      </article>
    </li>
  );
}

export default function WhyFurryFix() {
  return (
    <section id="why-furryfix" aria-labelledby="why-furryfix-heading" className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2
              id="why-furryfix-heading"
              className="text-[2rem] font-extrabold leading-[1.1] tracking-[-0.035em] text-navy sm:text-[2.5rem] lg:text-[2.875rem] lg:leading-[1.05]"
            >
              Why{" "}
              <span className="relative inline-block text-turquoise">
                FurryFix
                <svg
                  viewBox="0 0 200 20"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                  className="absolute -bottom-2 left-0 h-3 w-full text-turquoise/60"
                >
                  <path d="M3 14C45 5 120 2 197 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              ?
            </h2>
            <p className="mt-3 text-base leading-6 text-body sm:text-[1.0625rem]">
              Because every pet deserves care, comfort, and a little extra love.
            </p>
          </div>
          <a
            href="#product"
            className="-my-3 inline-flex min-h-11 items-center self-start text-sm font-semibold text-turquoise underline decoration-turquoise/40 underline-offset-4 transition-colors hover:text-turquoise-hover hover:decoration-turquoise-hover focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise motion-reduce:transition-none sm:-mb-1 sm:self-auto"
          >
            Explore our products
          </a>
        </div>

        <ul className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[minmax(340px,auto)_minmax(210px,auto)] lg:gap-5">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </ul>
      </div>
    </section>
  );
}
