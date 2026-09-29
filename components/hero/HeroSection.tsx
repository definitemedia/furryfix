import Image from "next/image";
import { bottleSrc, logoSrc } from "@/lib/brand-assets";
import { amazonProductUrl, exploreHref } from "@/lib/site";

const cards = [
  {
    title: "2-in-1 Care",
    detail: "Cleansing + Conditioning",
    icon: "layers",
    position: "left-0 top-[7%]",
    delay: "0s",
  },
  {
    title: "Botanical Care",
    detail: "With Oat & Aloe Vera",
    icon: "leaf",
    position: "right-1 top-[4%] xl:right-3",
    delay: "0.7s",
  },
  {
    title: "Made for Dogs",
    detail: "Everyday Grooming",
    icon: "paw",
    position: "left-0 bottom-[40%]",
    delay: "1.2s",
  },
] as const;

function CardIcon({ name }: { name: (typeof cards)[number]["icon"] }) {
  const common = "h-5 w-5";

  if (name === "layers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none">
        <path
          d="M12 4.5 4.5 8.25 12 12l7.5-3.75L12 4.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 12 12 15.75 19.5 12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M4.5 15.75 12 19.5l7.5-3.75"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="none">
        <path
          d="M5 19s1.2-7.2 6.2-11.2C15.4 4.6 20 4.2 20 4.2s-.2 4.8-3.4 8.6C12.8 17.2 5 19 5 19Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 14.6c1.6-1.5 3.4-3.6 4.6-6.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
      <circle cx="7.2" cy="8.2" r="1.7" />
      <circle cx="12" cy="6.4" r="1.7" />
      <circle cx="16.8" cy="8.2" r="1.7" />
      <circle cx="8.6" cy="12.2" r="1.55" />
      <path d="M12.1 11.2c2.15 0 3.9 1.7 3.9 3.85 0 2.35-1.9 4.15-4.15 4.15-1.7 0-3.15-.95-3.75-2.35-.35.25-.8.4-1.25.4-1.15 0-2.05-.95-2.05-2.15 0-1.55 1.35-2.7 3.15-2.9.85-.7 1.9-1 3.15-1Z" />
    </svg>
  );
}

function InfoCard({
  title,
  detail,
  icon,
}: {
  title: string;
  detail: string;
  icon: (typeof cards)[number]["icon"];
}) {
  return (
    <article className="flex w-[210px] items-center gap-3 rounded-2xl border border-[#16365c]/6 bg-white px-3 py-2.5 shadow-[0_12px_32px_rgba(22,54,92,0.12)]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e7f6f4] text-turquoise">
        <CardIcon name={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-bold leading-4 text-navy">{title}</span>
        <span className="mt-0.5 block text-[12px] font-medium leading-4 text-muted">{detail}</span>
      </span>
    </article>
  );
}

function BrandMark() {
  if (!logoSrc) {
    return <p className="text-lg font-extrabold tracking-[-0.03em] text-navy">FurryFix</p>;
  }

  if (logoSrc.endsWith(".svg")) {
    return (
      // The official file must keep its intrinsic ratio. Next/Image can force a box.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logoSrc} alt="FurryFix" className="h-11 w-auto max-w-[190px]" />
    );
  }

  return (
    <Image
      src={logoSrc}
      alt="FurryFix"
      width={190}
      height={48}
      priority
      className="h-11 w-auto max-w-[190px] object-contain object-left"
    />
  );
}

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="hero-surface relative overflow-x-clip">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] items-center px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
          <div className="hero-rise max-w-xl">
            <BrandMark />

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy/80">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              Shed Control Shampoo · 300 ml
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-[2.45rem] font-extrabold leading-[0.96] tracking-[-0.045em] text-navy sm:text-[2.9rem] md:text-[2.65rem] lg:text-[3.7rem] xl:text-[4.35rem]"
            >
              <span className="block">Better Care</span>
              <span className="block">For Every Pet</span>
            </h1>

            <p className="mt-5 max-w-[36ch] text-base leading-7 text-muted sm:text-[1.075rem] sm:leading-8">
              Thoughtful grooming care for happier, healthier-looking coats. Discover FurryFix and
              make every bath a little better.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={amazonProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-turquoise px-6 text-[0.95rem] font-semibold text-white shadow-[0_10px_24px_rgba(12,122,112,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0a675f] hover:shadow-[0_14px_28px_rgba(12,122,112,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise sm:w-auto"
              >
                Shop on Amazon
                <span className="sr-only"> (opens in a new tab)</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={exploreHref}
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-navy/15 bg-white px-6 text-[0.95rem] font-semibold text-navy transition duration-200 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-[#f8f7fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:w-auto"
              >
                Explore FurryFix
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-navy/70">
              Purchases are completed securely on Amazon.
            </p>
          </div>

          <div className="hero-rise relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[520px] md:mx-0 md:h-[500px] md:max-w-none lg:h-[600px] [animation-delay:120ms]">
            <div
              aria-hidden="true"
              className="absolute bottom-[7%] left-[12%] right-[8%] h-10 rounded-[100%] bg-navy/10 blur-md"
            />

            <div className="absolute right-0 top-0 h-full w-[74%] overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(22,54,92,0.16)] sm:rounded-[2rem]">
              <Image
                src="/hero/dog-primary.jpg"
                alt="A well-groomed golden retriever sitting outdoors and holding a tulip"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 70vw"
                className="object-cover object-[center_20%]"
              />
            </div>

            <div className="absolute bottom-[5%] left-0 z-10 aspect-square w-[40%] max-w-[188px] overflow-hidden rounded-full border-[5px] border-white shadow-[0_16px_40px_rgba(22,54,92,0.18)]">
              <Image
                src="/hero/dog-secondary.jpg"
                alt="A happy dog with a soft, healthy-looking coat"
                fill
                sizes="188px"
                className="object-cover object-[58%_42%]"
              />
            </div>

            {bottleSrc ? (
              <div className="absolute bottom-[2%] left-[30%] z-20 w-[30%] max-w-[168px]">
                {bottleSrc.endsWith(".svg") ? (
                  // Packaging must stay undistorted, so the image keeps its intrinsic ratio.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={bottleSrc}
                    alt="FurryFix Shed Control 2-in-1 Conditioning Shampoo, 300 ml"
                    className="h-auto w-full drop-shadow-[0_18px_28px_rgba(22,54,92,0.28)]"
                  />
                ) : (
                  <Image
                    src={bottleSrc}
                    alt="FurryFix Shed Control 2-in-1 Conditioning Shampoo, 300 ml"
                    width={420}
                    height={840}
                    className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(22,54,92,0.28)]"
                  />
                )}
              </div>
            ) : null}

            <ul className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
              {cards.map((card) => (
                <li
                  key={card.title}
                  className={`hero-float absolute ${card.position}`}
                  style={{ animationDelay: card.delay }}
                >
                  <InfoCard title={card.title} detail={card.detail} icon={card.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 pb-14 sm:px-8 lg:hidden">
        <ul className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-3">
          {cards.map((card) => (
            <li key={card.title} className="flex justify-center">
              <InfoCard title={card.title} detail={card.detail} icon={card.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
