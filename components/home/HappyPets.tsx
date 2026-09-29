import Image from "next/image";
import type { ReactNode } from "react";

type Highlight = {
  label: string;
  icon: ReactNode;
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

function BallIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M5.2 7.4c2.6 1.1 4.1 3.2 4.1 4.6s-1.5 3.5-4.1 4.6M18.8 7.4c-2.6 1.1-4.1 3.2-4.1 4.6s1.5 3.5 4.1 4.6" />
    </svg>
  );
}

function HeartsIcon() {
  return (
    <svg {...iconProps}>
      <path d="M10 19.5s-6.25-3.8-6.25-8.4A3.45 3.45 0 0 1 7.2 7.65c1.17 0 2.18.58 2.8 1.5a3.35 3.35 0 0 1 2.8-1.5 3.45 3.45 0 0 1 3.45 3.45c0 4.6-6.25 8.4-6.25 8.4Z" />
      <path d="M15.6 5.2a2.3 2.3 0 0 1 1.9-1 2.3 2.3 0 0 1 2.3 2.3c0 1.95-1.9 3.6-3.1 4.5" />
    </svg>
  );
}

function BubblesIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="9" cy="14" r="5.25" />
      <circle cx="17" cy="7.5" r="3" />
      <circle cx="18.25" cy="16.25" r="1.75" />
      <path d="M6.75 12.25a2.6 2.6 0 0 1 2-1.6" />
    </svg>
  );
}

const HIGHLIGHTS: Highlight[] = [
  { label: "Everyday Adventures", icon: <BallIcon /> },
  { label: "Love & Companionship", icon: <HeartsIcon /> },
  { label: "Happy Grooming Moments", icon: <BubblesIcon /> },
];

const figureClass =
  "group relative overflow-hidden rounded-3xl bg-white shadow-[0_12px_32px_rgba(32,40,72,0.10)] ring-1 ring-navy/5";

const imageClass =
  "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100";

export default function HappyPets() {
  return (
    <section id="happy-pets" aria-labelledby="happy-pets-heading" className="bg-off-white">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-5 py-16 sm:gap-10 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-8 lg:py-24">
        <header className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
          <h2
            id="happy-pets-heading"
            className="text-3xl font-extrabold tracking-[-0.035em] text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            Happy Pets, Happier Moments
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-body sm:text-lg">
            Every wag, every cuddle, every little moment. Life is better with our furry friends.
          </p>
        </header>

        <figure
          className={`${figureClass} aspect-[4/5] sm:aspect-square lg:col-span-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[600px]`}
        >
          <Image
            src="/lifestyle/playing-with-owner.jpg"
            alt="A woman leaning down to play with her excited corgi on a sunny park lawn"
            fill
            sizes="(min-width: 1200px) 560px, (min-width: 1024px) 46vw, 92vw"
            className={`${imageClass} object-[50%_55%]`}
          />
        </figure>

        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-turquoise">
            More Than Pet Care
          </h3>
          <p className="mt-3 max-w-xl text-[0.975rem] leading-7 text-body sm:text-base">
            At FurryFix, we believe the best moments are the little ones we share with our pets.
            From playful afternoons to cozy cuddles, we&apos;re here to celebrate the love that
            makes every day special.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-navy/5 sm:flex-col sm:items-start sm:gap-2.5 sm:py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua text-turquoise">
                  {item.icon}
                </span>
                <span className="text-[0.95rem] font-semibold leading-snug text-navy">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
            <figure className={`${figureClass} aspect-[4/3]`}>
              <Image
                src="/lifestyle/loving-hug.jpg"
                alt="A man warmly hugging his smiling golden retriever outdoors"
                fill
                sizes="(min-width: 1200px) 270px, (min-width: 1024px) 22vw, 45vw"
                className={`${imageClass} object-[50%_40%]`}
              />
            </figure>
            <figure className={`${figureClass} aspect-[4/3]`}>
              <Image
                src="/lifestyle/bath-time.jpg"
                alt="A happy golden retriever with a freshly washed coat, gently cared for at bath time"
                fill
                sizes="(min-width: 1200px) 270px, (min-width: 1024px) 22vw, 45vw"
                className={`${imageClass} object-[60%_35%]`}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
