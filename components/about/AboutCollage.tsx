import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow, ExploreProductsLink, PawPrint, container } from "./ui";

function HeartIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <path d="M12 20.3c-.3 0-.6-.1-.8-.3C6.4 15.9 3 12.9 3 9.1 3 6.3 5.2 4 8 4c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2 2.8 0 5 2.3 5 5.1 0 3.8-3.4 6.8-8.2 10.9-.2.2-.5.3-.8.3Z" />
    </svg>
  );
}

type PhotoTileProps = {
  src: string;
  alt: string;
  position: string;
  sizes: string;
  className: string;
  label?: string;
  eager?: boolean;
};

function PhotoTile({ src, alt, position, sizes, className, label, eager = false }: PhotoTileProps) {
  return (
    <figure className={`group relative overflow-hidden bg-aqua shadow-[0_14px_30px_-18px_color-mix(in_srgb,var(--color-navy)_45%,transparent)] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
        className={`object-cover ${position} transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      {label ? (
        <figcaption className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] leading-4 font-bold text-navy shadow-sm sm:bottom-3 sm:left-3 sm:px-3 sm:text-xs">
          {label}
        </figcaption>
      ) : null}
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

export default function AboutCollage() {
  return (
    <section aria-labelledby="about-hero-heading" className="bg-white">
      <div className={`${container} grid items-stretch gap-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pt-12 lg:pb-20`}>
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
          <PawPrint className="pointer-events-none absolute top-8 right-8 h-10 w-10 rotate-[18deg] text-turquoise/30" />

          <p>
            <Eyebrow>About FurryFix</Eyebrow>
          </p>
          <h1
            id="about-hero-heading"
            className="mt-5 max-w-xl text-4xl font-extrabold tracking-[-0.04em] text-balance text-navy uppercase sm:text-5xl lg:text-[3.1rem] lg:leading-[1.05]"
          >
            In Paw Language, <span className="text-turquoise">It&apos;s All About Love!</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-body sm:text-lg sm:leading-8">
            Every wagging tail, every happy bark, and every gentle nuzzle tells a story of love. At
            FurryFix, we believe every furry friend deserves thoughtful care, comfort, and happiness.
          </p>
          <div className="mt-8">
            <ExploreProductsLink className="w-full sm:w-auto sm:min-w-64" />
          </div>
        </div>

        <div className="hero-rise grid aspect-square grid-cols-4 grid-rows-4 gap-2 [animation-delay:120ms] sm:gap-3">
          <PhotoTile
            src="/about/hero-owner-dog.jpg"
            alt="A smiling young woman holding a fluffy tricolour puppy close to her cheek outdoors"
            position="object-[50%_55%]"
            sizes={double}
            className="col-span-2 rounded-3xl rounded-tl-[56px] sm:rounded-tl-[80px]"
            label="Happy pets"
            eager
          />
          <IconTile className="rounded-3xl bg-turquoise text-white">
            <PawPrint className="h-8 w-8 sm:h-12 sm:w-12" />
          </IconTile>
          <LabelTile
            className="rounded-3xl bg-navy text-white"
            icon={<HeartIcon className="h-5 w-5 text-turquoise sm:h-6 sm:w-6" />}
          >
            Everyday care
          </LabelTile>

          <PhotoTile
            src="/about/care-brushing.jpg"
            alt="A man gently combing the fluffy white coat of a small Pomeranian-type dog"
            position="object-[58%_40%]"
            sizes={cell}
            className="row-span-2 rounded-3xl"
            label="Gentle grooming"
          />
          <PhotoTile
            src="/about/story-home.jpg"
            alt="A woman kneeling on a rug in a warmly lit living room, stroking her relaxed golden doodle"
            position="object-[46%_70%]"
            sizes={double}
            className="col-span-2 row-span-2 rounded-3xl"
          />
          <IconTile className="rounded-3xl bg-lavender text-turquoise">
            <HeartIcon className="h-8 w-8 sm:h-11 sm:w-11" />
          </IconTile>
          <PhotoTile
            src="/about/mission-bath.jpg"
            alt="A pet parent gently rinsing a tan dog in the bathtub at home"
            position="object-[60%_45%]"
            sizes={cell}
            className="rounded-3xl"
          />

          <IconTile className="rounded-3xl bg-aqua text-navy">
            <PawPrint className="h-8 w-8 -rotate-12 sm:h-11 sm:w-11" />
          </IconTile>
          <PhotoTile
            src="/about/promise-bg.jpg"
            alt="A woman in an orange jacket crouching on an autumn street to hug her brown-and-white dog"
            position="object-[50%_85%]"
            sizes={cell}
            className="rounded-3xl"
          />
          <LabelTile
            className="col-span-2 rounded-3xl rounded-br-[56px] bg-turquoise text-navy sm:rounded-br-[80px]"
            icon={<PawPrint className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
          >
            Care beyond grooming
          </LabelTile>
        </div>
      </div>
    </section>
  );
}
