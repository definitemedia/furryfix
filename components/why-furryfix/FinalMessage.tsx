import Image from "next/image";
import closingPhoto from "@/public/why-furryfix/closing-golden-hug.jpg";
import Reveal from "@/components/why-furryfix/Reveal";
import { PawIcon } from "@/components/why-furryfix/icons";
import { Eyebrow, ExploreProductsButton, container } from "@/components/why-furryfix/ui";

export default function FinalMessage() {
  return (
    <section aria-labelledby="final-message-heading" className="bg-lavender">
      <div className={`${container} py-14 sm:py-16 lg:py-20`}>
        <Reveal>
          <div className="relative isolate grid overflow-hidden rounded-[28px] bg-navy shadow-[0_30px_60px_-30px_color-mix(in_srgb,var(--color-navy)_60%,transparent)] sm:rounded-[36px] lg:grid-cols-[0.9fr_1.1fr]">
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 600 400"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-turquoise/25"
            >
              <circle cx="120" cy="420" r="260" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="540" cy="-20" r="190" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="600" cy="360" r="120" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            <figure className="relative m-3 aspect-[4/3] overflow-hidden rounded-[22px] sm:m-4 sm:aspect-[16/10] sm:rounded-[28px] lg:m-5 lg:aspect-auto lg:min-h-[440px]">
              <Image
                src={closingPhoto}
                alt="A woman kneeling in golden evening light, lovingly hugging her golden retriever"
                fill
                placeholder="blur"
                sizes="(min-width: 1200px) 520px, (min-width: 1024px) 42vw, 92vw"
                className="object-cover object-[45%_55%]"
              />
            </figure>

            <div className="relative flex flex-col justify-center px-6 pt-4 pb-10 sm:px-10 sm:pb-12 lg:py-12 lg:pr-14 lg:pl-8">
              <PawIcon className="pointer-events-none absolute top-6 right-6 hidden h-10 w-10 rotate-12 text-turquoise/30 sm:block" />
              <p>
                <Eyebrow tone="dark">Every Paw Matters</Eyebrow>
              </p>
              <h2
                id="final-message-heading"
                className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-balance text-white uppercase sm:text-4xl lg:text-[2.4rem] lg:leading-[1.1]"
              >
                More Than Pet Care. <span className="text-turquoise">It&apos;s a Whole Lot of Love.</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-white/90 sm:text-[1.0625rem] sm:leading-8">
                From the first splash at bath time to the happiest tail wags, we&apos;re here to celebrate
                the little moments that make life with pets so special.
              </p>
              <p className="mt-4 text-base leading-7 text-white/90 sm:text-[1.0625rem] sm:leading-8">
                Because your furry friend isn&apos;t just part of your home. They&apos;re part of your heart.
              </p>
              <p className="mt-5 flex items-start gap-3 text-lg leading-7 font-extrabold text-white">
                <PawIcon className="mt-0.5 h-6 w-6 shrink-0 text-turquoise" />
                <span>
                  FurryFix <span aria-hidden="true">—</span>
                  <span className="sr-only">:</span> In Paw Language, It&apos;s All About Love!
                </span>
              </p>
              <div className="mt-8">
                <ExploreProductsButton variant="inverse" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
