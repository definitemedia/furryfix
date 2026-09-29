import Image from "next/image";
import Link from "next/link";
import { Eyebrow, PawPrint, container, reveal } from "./ui";

const CONTACT_EMAIL = "care@neurishfuturekind.com";

export default function AboutClosing() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="bg-lavender">
      <div className={`${container} py-14 sm:py-16 lg:py-20`}>
        <div
          className={`${reveal} relative isolate grid overflow-hidden rounded-[28px] bg-navy shadow-[0_30px_60px_-30px_color-mix(in_srgb,var(--color-navy)_60%,transparent)] sm:rounded-[36px] lg:grid-cols-[0.9fr_1.1fr]`}
        >
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

          <figure className="relative m-3 aspect-[4/3] overflow-hidden rounded-[22px] sm:m-4 sm:aspect-[16/10] sm:rounded-[28px] lg:m-5 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/about/journey-closing.jpg"
              alt="A young boy kneeling in the grass, lovingly kissing the head of his curly golden doodle"
              fill
              sizes="(min-width: 1200px) 520px, (min-width: 1024px) 42vw, 92vw"
              className="object-cover object-[50%_55%]"
            />
          </figure>

          <div className="relative flex flex-col justify-center px-6 pt-4 pb-10 sm:px-10 sm:pb-12 lg:py-12 lg:pr-14 lg:pl-8">
            <PawPrint className="pointer-events-none absolute top-6 right-6 hidden h-10 w-10 sm:block rotate-12 text-turquoise/30" />
            <p>
              <Eyebrow tone="dark">Our Journey Together</Eyebrow>
            </p>
            <h2
              id="journey-heading"
              className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-balance text-white uppercase sm:text-4xl lg:text-[2.4rem] lg:leading-[1.1]"
            >
              More Than a Brand, <span className="text-turquoise">A Part of Your Pet&apos;s Journey</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-white/90 sm:text-[1.0625rem] sm:leading-8">
              FurryFix wants to be part of that journey, helping pet parents make everyday care a positive
              experience. Because every pet has its own story, every wag has its own meaning, and every paw
              deserves a little extra love.
            </p>
            <p className="mt-5 flex items-start gap-3 text-lg leading-7 font-extrabold text-white">
              <PawPrint className="mt-0.5 h-6 w-6 shrink-0 text-turquoise" />
              <span>FurryFix — In Paw Language, It&apos;s All About Love!</span>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-turquoise px-8 text-[15px] font-semibold text-navy transition duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                Contact Us
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 text-[15px] font-semibold break-all text-white underline decoration-turquoise decoration-2 underline-offset-4 hover:text-turquoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:justify-start"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
