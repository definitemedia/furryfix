import Image from "next/image";
import ContactForm from "./ContactForm";
import { CONTACT_EMAIL, Eyebrow, MailIcon, PawPrint, container, reveal } from "./ui";

export default function ClosingMessage() {
  return (
    <section id="message" aria-labelledby="closing-heading" className="scroll-mt-24 bg-lavender">
      <div className={`${container} py-14 sm:py-16 lg:py-20`}>
        <div
          className={`${reveal} relative isolate grid overflow-hidden rounded-[28px] bg-navy shadow-[0_30px_60px_-30px_color-mix(in_srgb,var(--color-navy)_60%,transparent)] sm:rounded-[36px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]`}
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

          <div className="flex flex-col">
            <figure className="relative m-3 aspect-[4/3] overflow-hidden rounded-[22px] sm:m-4 sm:aspect-[16/10] sm:rounded-[28px] lg:m-5 lg:aspect-auto lg:min-h-[320px] lg:flex-1">
              <Image
                src="/contact/closing-dogs-sunset.jpg"
                alt="A happy corgi and a shaggy terrier running side by side down a dirt path in warm sunset light"
                fill
                sizes="(min-width: 1200px) 480px, (min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </figure>

            <div className="relative px-6 pt-4 pb-8 sm:px-10 lg:px-10 lg:pt-3 lg:pb-10">
              <p>
                <Eyebrow tone="dark">We&apos;d Love to Hear From You</Eyebrow>
              </p>
              <h2
                id="closing-heading"
                className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-balance text-white uppercase sm:text-4xl lg:text-[2.1rem] lg:leading-[1.12]"
              >
                Every Paw Has a Story. <span className="text-turquoise">We&apos;d Love to Hear Yours!</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-white/90 sm:text-[1.0625rem] sm:leading-8">
                Whether it&apos;s a question, suggestion, or a little love for your furry friend, we&apos;re
                always glad to connect with you.
              </p>

              <div className="mt-6 flex items-start gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-turquoise text-navy">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[15px] font-bold text-white">Email Us</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-11 items-center text-base font-semibold [overflow-wrap:anywhere] text-white underline decoration-turquoise decoration-2 underline-offset-4 hover:text-turquoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-white/80">
                <PawPrint className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
                <span>FurryFix is a brand of NEURISH FUTURE KIND INDIA PRIVATE LIMITED.</span>
              </p>
            </div>
          </div>

          <div className="px-3 pb-3 sm:px-4 sm:pb-4 lg:py-5 lg:pr-5 lg:pl-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
