import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import beliefPhoto from "@/public/why-furryfix/belief-laughing-cuddle.jpg";
import heroPhoto from "@/public/why-furryfix/hero-owner-smile.jpg";
import groomingPhoto from "@/public/why-furryfix/philosophy-brushing.jpg";
import sunsetPhoto from "@/public/why-furryfix/promise-sunset-bg.jpg";
import { BottleIcon, HeartIcon, HomeIcon, PawIcon } from "@/components/why-furryfix/icons";
import { Eyebrow, ExploreProductsButton, container } from "@/components/why-furryfix/ui";

type PhotoTileProps = {
  src: StaticImageData;
  alt: string;
  position: string;
  sizes: string;
  className: string;
  eager?: boolean;
};

function PhotoTile({ src, alt, position, sizes, className, eager = false }: PhotoTileProps) {
  return (
    <figure className={`group relative overflow-hidden bg-aqua shadow-[0_14px_30px_-18px_color-mix(in_srgb,var(--color-navy)_45%,transparent)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes={sizes}
        {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        className={`object-cover ${position} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
    </figure>
  );
}

function IconTile({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

function LabelTile({ className, icon, children }: { className: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div className={`flex flex-col justify-between p-2.5 sm:p-4 ${className}`}>
      {icon}
      <p className="text-[11px] leading-4 font-bold sm:text-sm sm:leading-5">{children}</p>
    </div>
  );
}

const cell = "(min-width: 1200px) 140px, (min-width: 1024px) 12vw, 25vw";
const double = "(min-width: 1200px) 280px, (min-width: 1024px) 24vw, 50vw";

export default function WhyHero() {
  return (
    <section aria-labelledby="why-hero-heading" className="bg-white">
      <div className={`${container} grid items-stretch gap-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:pt-12 lg:pb-20`}>
        <div className="hero-rise relative flex flex-col justify-end overflow-hidden rounded-[32px] bg-lavender px-6 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 lg:rounded-[40px] lg:px-12 lg:pb-12">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 220 160"
            fill="none"
            className="pointer-events-none mb-8 h-20 w-28 shrink-0 text-navy/30 sm:h-28 sm:w-40"
          >
            <path
              d="M6 132c28-6 54-4 78 4 30 10 52-6 58-40 6-34-4-78-26-82-22-4-26 38-10 74 14 32 52 56 108 52"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <PawIcon className="pointer-events-none absolute top-8 right-8 h-10 w-10 rotate-[18deg] text-turquoise/30" />

          <p>
            <Eyebrow>Why FurryFix?</Eyebrow>
          </p>
          <h1
            id="why-hero-heading"
            className="mt-5 max-w-xl text-4xl font-extrabold tracking-[-0.04em] text-balance text-navy uppercase sm:text-5xl lg:text-[3.1rem] lg:leading-[1.05]"
          >
            Because Every Paw Deserves <span className="text-turquoise">a Little Extra Love!</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-body sm:text-lg sm:leading-8">
            Our furry friends make every day brighter with their wagging tails, playful paws, and
            unconditional love. At FurryFix, we believe they deserve the same love and care they give
            us.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 font-medium text-navy sm:text-lg sm:leading-8">
            We&apos;re here to make everyday pet care a little easier, happier, and full of love.
          </p>
          <div className="mt-8">
            <ExploreProductsButton className="w-full sm:w-auto sm:min-w-64" />
          </div>
        </div>

        <div className="hero-rise grid aspect-square grid-cols-4 grid-rows-4 lg:aspect-auto lg:min-h-[560px] gap-2 [animation-delay:120ms] sm:gap-3">
          <PhotoTile
            src={heroPhoto}
            alt="A smiling woman hugging her happy dog outdoors in a sunny, tree-lined park"
            position="object-[62%_40%]"
            sizes={double}
            className="col-span-2 rounded-3xl rounded-tl-[56px] sm:rounded-tl-[80px]"
            eager
          />
          <IconTile className="rounded-3xl bg-turquoise text-white">
            <PawIcon className="h-8 w-8 sm:h-12 sm:w-12" />
          </IconTile>
          <LabelTile
            className="rounded-3xl bg-navy text-white"
            icon={<HeartIcon className="h-5 w-5 text-turquoise sm:h-6 sm:w-6" />}
          >
            Made with Love
          </LabelTile>

          <PhotoTile
            src={groomingPhoto}
            alt="A man gently brushing the coat of a small white fluffy dog on a grooming table"
            position="object-[45%_40%]"
            sizes={cell}
            className="row-span-2 rounded-3xl"
          />
          <PhotoTile
            src={beliefPhoto}
            alt="A laughing woman cuddling her fluffy dog as it nuzzles her face"
            position="object-[40%_35%]"
            sizes={double}
            className="col-span-2 row-span-2 rounded-3xl"
          />
          <IconTile className="rounded-3xl bg-lavender text-turquoise">
            <HeartIcon className="h-8 w-8 sm:h-11 sm:w-11" />
          </IconTile>
          <LabelTile
            className="rounded-3xl bg-aqua text-navy"
            icon={<BottleIcon className="h-5 w-5 text-navy sm:h-6 sm:w-6" />}
          >
            Thoughtful Products
          </LabelTile>

          <LabelTile
            className="rounded-3xl bg-pale-turquoise text-navy"
            icon={<PawIcon className="h-5 w-5 -rotate-12 text-navy sm:h-6 sm:w-6" />}
          >
            Everyday Pet Care
          </LabelTile>
          <PhotoTile
            src={sunsetPhoto}
            alt="A man and his dog sitting side by side on a cliff, watching the sunset"
            position="object-[50%_60%]"
            sizes={cell}
            className="rounded-3xl"
          />
          <LabelTile
            className="col-span-2 rounded-3xl rounded-br-[56px] bg-turquoise text-navy sm:rounded-br-[80px]"
            icon={<HomeIcon className="h-5 w-5 text-navy sm:h-6 sm:w-6" />}
          >
            Happy Pets, Happy Homes
          </LabelTile>
        </div>
      </div>
    </section>
  );
}
