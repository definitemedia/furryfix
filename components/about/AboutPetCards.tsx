import Image from "next/image";
import Link from "next/link";
import { ExploreProductsLink, container, reveal, sectionY } from "./ui";

type Card = {
  title: string;
  src: string;
  alt: string;
  position: string;
  surface: string;
  layout: string;
  sizes: string;
};

const CARDS: Card[] = [
  {
    title: "Love in Every Moment",
    src: "/about/care-cuddle.jpg",
    alt: "A woman with her eyes closed, smiling as she cuddles her happy black dog on the porch",
    position: "object-[55%_50%]",
    surface: "bg-aqua",
    layout: "lg:col-start-1 lg:row-start-1",
    sizes: "(min-width: 1200px) 370px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
  },
  {
    title: "Thoughtful Everyday Care",
    src: "/about/care-brushing.jpg",
    alt: "A man gently combing the fluffy white coat of a small Pomeranian-type dog",
    position: "object-[58%_40%]",
    surface: "bg-pale-turquoise",
    layout: "lg:col-start-2 lg:row-start-1",
    sizes: "(min-width: 1200px) 370px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
  },
  {
    title: "Happy Pets, Happy Homes",
    src: "/about/care-family-play.jpg",
    alt: "A laughing young girl hugging her happy black-and-tan dog on the grass in a park",
    position: "object-[55%_45%]",
    surface: "bg-lavender",
    layout: "sm:row-span-2 lg:col-start-3 lg:row-start-1",
    sizes: "(min-width: 1200px) 370px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
  },
  {
    title: "Everyday Pet Care",
    src: "/about/vision-outdoors.jpg",
    alt: "A happy golden retriever standing up on a waterfront railing beside its owner, who pats its back",
    position: "object-[58%_50%]",
    surface: "bg-aqua",
    layout: "lg:col-span-2 lg:col-start-1 lg:row-start-2",
    sizes: "(min-width: 1200px) 760px, (min-width: 1024px) 62vw, (min-width: 640px) 45vw, 90vw",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPetCards() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="bg-white">
      <div className={`${container} ${sectionY} pt-4 sm:pt-6 lg:pt-8`}>
        <header className={`${reveal} relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between`}>
          <div className="max-w-2xl">
            <h2
              id="philosophy-heading"
              className="text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy uppercase sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
            >
              Care <span className="text-turquoise">Beyond</span> Grooming
            </h2>
            <p className="mt-4 text-base leading-7 text-body sm:text-lg sm:leading-8">
              FurryFix was born from a simple belief: every furry friend deserves thoughtful care. It&apos;s
              about building trust, creating routines, and strengthening the bond between pets and their
              families.
            </p>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 160 40"
            fill="none"
            className="hidden h-10 w-40 shrink-0 text-navy/30 lg:block"
          >
            <path
              d="M4 30c22-10 44-18 70-18-18 6-30 12-34 18 30-12 62-20 92-22-16 6-28 12-34 18 18-6 38-10 58-12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,300px))]">
          {CARDS.map((card) => (
            <li key={card.title} className={card.layout}>
              <article
                className={`${reveal} group relative flex h-full min-h-72 flex-col overflow-hidden rounded-3xl ${card.surface} shadow-[0_12px_32px_color-mix(in_srgb,var(--color-navy)_8%,transparent)] ring-1 ring-navy/5`}
              >
                <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                  <h3 className="max-w-[12rem] text-base leading-6 font-bold text-navy sm:text-lg">{card.title}</h3>
                  <Link
                    href="/#product"
                    aria-label={`${card.title}: explore our products`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turquoise text-navy transition duration-200 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-safe:group-hover:rotate-45 motion-reduce:transition-none"
                  >
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="relative mx-3 mb-3 min-h-44 flex-1 overflow-hidden rounded-[20px]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes={card.sizes}
                    className={`object-cover ${card.position} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <ExploreProductsLink variant="secondary" className="w-full border-turquoise/60 sm:w-auto sm:min-w-80" />
        </div>
      </div>
    </section>
  );
}
