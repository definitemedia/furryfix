import type { ReactNode } from "react";
import { ArrowUpRightIcon, CONTACT_EMAIL, MailIcon, buttonBase, container, reveal, sectionY } from "./ui";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-navy underline decoration-turquoise decoration-2 underline-offset-4 transition-colors hover:text-turquoise-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none";

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-turquoise">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

type CardProps = {
  title: string;
  surface: string;
  icon: ReactNode;
  /** Only cards with a real destination get the arrow button. */
  arrowHref?: string;
  arrowLabel?: string;
  children: ReactNode;
};

function Card({ title, surface, icon, arrowHref, arrowLabel, children }: CardProps) {
  return (
    <li>
      <article
        className={`${reveal} group relative flex h-full min-h-80 flex-col overflow-hidden rounded-3xl ${surface} shadow-[0_12px_32px_color-mix(in_srgb,var(--color-navy)_8%,transparent)] ring-1 ring-navy/5`}
      >
        <div className="flex min-h-[4.75rem] items-start justify-between gap-4 p-5 sm:p-6">
          <h3 className="max-w-[12rem] text-base leading-6 font-bold text-navy sm:text-lg">{title}</h3>
          {arrowHref ? (
            <a
              href={arrowHref}
              aria-label={arrowLabel}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turquoise text-navy transition duration-200 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-safe:group-hover:rotate-45 motion-reduce:transition-none"
            >
              <ArrowUpRightIcon />
            </a>
          ) : null}
        </div>
        <div className="mx-3 mb-3 flex flex-1 flex-col rounded-[20px] bg-white/80 p-5 sm:p-6">
          {icon}
          <div className="mt-5 flex flex-1 flex-col text-[15px] leading-7 text-body">{children}</div>
        </div>
      </article>
    </li>
  );
}

export default function QuickHelp() {
  return (
    <section aria-labelledby="quick-help-heading" className="bg-white">
      <div className={`${container} ${sectionY} pt-4 sm:pt-6 lg:pt-8`}>
        <header className={`${reveal} relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between`}>
          <h2
            id="quick-help-heading"
            className="text-3xl font-extrabold tracking-[-0.035em] text-balance text-navy uppercase sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
          >
            Looking for <span className="text-turquoise">Something?</span>
          </h2>
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

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:mt-12">
          <Card
            title="Product Information"
            surface="bg-aqua"
            arrowHref="#message"
            arrowLabel="Product Information: send us a message"
            icon={
              <Icon>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </Icon>
            }
          >
            <p>Have questions about our products? Contact us for more information.</p>
            <p className="mt-auto pt-4">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Product Enquiry")}`} className={linkClass}>
                <MailIcon className="h-4 w-4" />
                Email us
              </a>
            </p>
          </Card>

          <Card
            title="Orders & Purchases"
            surface="bg-lavender"
            icon={
              <Icon>
                <path d="M4 7h16l-1.4 10.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7Z" />
                <path d="M9 7V6a3 3 0 0 1 6 0v1" />
              </Icon>
            }
          >
            <p>
              FurryFix products are available through Amazon. For order status, delivery, payment, or
              returns, please refer to your Amazon order page.
            </p>
          </Card>

          <Card
            title="Feedback & Suggestions"
            surface="bg-pale-turquoise"
            arrowHref="#message"
            arrowLabel="Feedback & Suggestions: share your feedback"
            icon={
              <Icon>
                <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
              </Icon>
            }
          >
            <p>
              Your feedback helps us understand what matters to pet parents. We&apos;d love to hear your
              thoughts.
            </p>
          </Card>
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href="#message"
            className={`${buttonBase} w-full border border-turquoise/60 bg-white text-navy hover:bg-aqua focus-visible:outline-navy sm:w-auto sm:min-w-80`}
          >
            Send Us a Message
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
