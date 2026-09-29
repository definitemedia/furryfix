import Image from "next/image";
import type { ReactNode } from "react";
import { CONTACT_EMAIL, Eyebrow, HeartIcon, MailIcon, PawPrint, buttonBase, container } from "./ui";

type PhotoTileProps = {
  src: string;
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

export default function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-heading" className="bg-white">
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
          <PawPrint className="pointer-events-none absolute top-8 right-8 h-10 w-10 rotate-[18deg] text-turquoise/30" />

          <p>
            <Eyebrow>We&apos;re Here for You</Eyebrow>
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-5 max-w-xl text-4xl font-extrabold tracking-[-0.04em] text-balance text-navy uppercase sm:text-5xl lg:text-[3.1rem] lg:leading-[1.05]"
          >
            Let&apos;s Talk, <span className="text-turquoise">Paw to Paw!</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-body sm:text-lg sm:leading-8">
            Have a question about FurryFix? We&apos;d love to hear from you! Whether you need product
            information, have feedback, or simply want to say hello, our team is here to help.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`${buttonBase} bg-navy text-white shadow-[0_10px_24px_-10px_color-mix(in_srgb,var(--color-navy)_55%,transparent)] hover:-translate-y-0.5 hover:bg-navy/90 focus-visible:outline-turquoise motion-reduce:hover:translate-y-0`}
            >
              <MailIcon className="h-5 w-5" />
              Email Us
            </a>
            <a
              href="#message"
              className={`${buttonBase} border border-navy/15 bg-white text-navy hover:bg-aqua focus-visible:outline-navy`}
            >
              Send a Message
            </a>
          </div>
        </div>

        <div className="hero-rise grid aspect-square grid-cols-4 grid-rows-4 lg:aspect-auto lg:min-h-[560px] gap-2 [animation-delay:120ms] sm:gap-3">
          <PhotoTile
            src="/contact/hero-owner-hug.jpg"
            alt="A man hugging his smiling golden retriever close on a mountain lookout"
            position="object-[50%_60%]"
            sizes="(min-width: 1200px) 280px, (min-width: 1024px) 24vw, 50vw"
            className="col-span-2 row-span-2 rounded-3xl rounded-tl-[56px] sm:rounded-tl-[80px]"
            eager
          />
          <IconTile className="rounded-3xl bg-turquoise text-white">
            <PawPrint className="h-8 w-8 sm:h-12 sm:w-12" />
          </IconTile>
          <LabelTile
            className="rounded-3xl bg-navy text-white"
            icon={<MailIcon className="h-5 w-5 text-turquoise sm:h-6 sm:w-6" />}
          >
            Product information
          </LabelTile>
          <IconTile className="rounded-3xl bg-lavender text-turquoise">
            <HeartIcon className="h-8 w-8 sm:h-11 sm:w-11" />
          </IconTile>
          <LabelTile
            className="rounded-3xl bg-aqua text-navy"
            icon={<HeartIcon className="h-5 w-5 text-navy sm:h-6 sm:w-6" />}
          >
            Feedback welcome
          </LabelTile>

          <IconTile className="rounded-3xl bg-pale-turquoise text-navy">
            <PawPrint className="h-8 w-8 -rotate-12 sm:h-11 sm:w-11" />
          </IconTile>
          <PhotoTile
            src="/contact/closing-dogs-sunset.jpg"
            alt="A happy corgi and a shaggy terrier running side by side down a dirt path in warm sunset light"
            position="object-[50%_50%]"
            sizes="(min-width: 1200px) 420px, (min-width: 1024px) 36vw, 75vw"
            className="col-span-3 row-span-2 rounded-3xl rounded-br-[56px] sm:rounded-br-[80px]"
          />
          <LabelTile
            className="rounded-3xl bg-turquoise text-navy"
            icon={<PawPrint className="h-5 w-5 text-navy sm:h-6 sm:w-6" />}
          >
            Say hello
          </LabelTile>
        </div>
      </div>
    </section>
  );
}
