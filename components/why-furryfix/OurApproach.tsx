import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import beliefPhoto from "@/public/why-furryfix/belief-laughing-cuddle.jpg";
import heroPhoto from "@/public/why-furryfix/hero-owner-smile.jpg";
import groomingPhoto from "@/public/why-furryfix/philosophy-brushing.jpg";
import sunsetPhoto from "@/public/why-furryfix/promise-sunset-bg.jpg";
import Reveal from "@/components/why-furryfix/Reveal";
import { ArrowUpRightIcon } from "@/components/why-furryfix/icons";
import { ExploreProductsButton, container, sectionY } from "@/components/why-furryfix/ui";

type Card = {
  title: string;
  body: string;
  src: StaticImageData;
  alt: string;
  position: string;
  surface: string;
  layout: string;
  sizes: string;
};

const cardSizes = "(min-width: 1200px) 370px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw";

const cards: readonly Card[] = [
  {
    title: "Pet-Centered Thinking",
    body: "We keep pets and their everyday care needs at the center of our product ideas.",
    src: beliefPhoto,
    alt: "A laughing woman cuddling her fluffy dog as it nuzzles her face",
    position: "object-[40%_35%]",
    surface: "bg-aqua",
    layout: "lg:col-start-1 lg:row-start-1",
    sizes: cardSizes,
  },
  {
    title: "Practical Solutions",
    body: "We aim to make pet care simple and convenient for pet parents.",
    src: groomingPhoto,
    alt: "A man gently brushing the coat of a small white fluffy dog on a grooming table",
    position: "object-[45%_40%]",
    surface: "bg-pale-turquoise",
    layout: "lg:col-start-2 lg:row-start-1",
    sizes: cardSizes,
  },
  {
    title: "Quality-Focused Approach",
    body: "We value thoughtful product development and attention to detail.",
    src: heroPhoto,
    alt: "A smiling woman hugging her happy dog outdoors in a sunny, tree-lined park",
    position: "object-[62%_40%]",
    surface: "bg-lavender",
    layout: "sm:row-span-2 lg:col-start-3 lg:row-start-1",
    sizes: cardSizes,
  },
  {
    title: "Always Learning",
    body: "We believe in continuously learning and improving to make everyday pet care better.",
    src: sunsetPhoto,
    alt: "A man and his dog sitting side by side on a cliff, watching the sunset",
    position: "object-[50%_60%]",
    surface: "bg-aqua",
    layout: "lg:col-span-2 lg:col-start-1 lg:row-start-2",
    sizes: "(min-width: 1200px) 760px, (min-width: 1024px) 62vw, (min-width: 640px) 45vw, 90vw",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="bg-white">
      <div className={`${container} ${sectionY} pt-4 sm:pt-6 lg:pt-8`}>
        <Reveal className="relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="approach-heading"
              className="text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy uppercase sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
            >
              Thoughtful Care, <span className="text-turquoise">Every Day</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-body sm:text-lg sm:leading-8">
              We keep your pet&apos;s everyday needs at the heart of what we do.
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
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,320px))]">
          {cards.map((card, index) => (
            <li key={card.title} className={card.layout}>
              <Reveal className="h-full" delay={index * 90}>
                <article
                  className={`group relative flex h-full min-h-80 flex-col overflow-hidden rounded-3xl ${card.surface} shadow-[0_12px_32px_color-mix(in_srgb,var(--color-navy)_8%,transparent)] ring-1 ring-navy/5`}
                >
                  <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <h3 className="text-base leading-6 font-bold text-navy sm:text-lg">{card.title}</h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-6 text-body">{card.body}</p>
                    </div>
                    <Link
                      href="/#product"
                      aria-label={`${card.title}: explore our products`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turquoise text-navy transition duration-200 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-safe:group-hover:rotate-45 motion-reduce:transition-none"
                    >
                      <ArrowUpRightIcon />
                    </Link>
                  </div>
                  <div className="relative mx-3 mb-3 min-h-40 flex-1 overflow-hidden rounded-[20px]">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      placeholder="blur"
                      sizes={card.sizes}
                      className={`object-cover ${card.position} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <ExploreProductsButton variant="secondary" className="w-full sm:w-auto sm:min-w-80" />
        </div>
      </div>
    </section>
  );
}
