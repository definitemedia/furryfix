import Link from "next/link";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy | FurryFix",
  description:
    "This Cookie Policy explains how FurryFix uses cookies and similar technologies on its website and how you can manage your preferences.",
  path: "/cookies",
});

const email = "care@neurishfuturekind.com";

const inlineLinkClass =
  "break-words font-semibold text-turquoise-hover underline decoration-turquoise/50 underline-offset-4 transition-colors duration-200 hover:text-navy hover:decoration-navy focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none";

function EmailLink() {
  return (
    <a href={`mailto:${email}`} className={inlineLinkClass}>
      {email}
    </a>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-navy/10 pt-10 first:border-t-0 first:pt-0">
      <h2 id={id} className="text-xl font-bold leading-snug text-heading sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pt-2">
      <h3 className="text-lg font-semibold leading-snug text-heading">{title}</h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-turquoise">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CompanyBlock({ lines }: { lines: ReactNode[] }) {
  return (
    <address className="rounded-xl border border-navy/10 bg-white px-5 py-4 not-italic">
      {lines.map((line, index) => (
        <p key={index} className={index === 0 ? "font-semibold text-heading" : undefined}>
          {line}
        </p>
      ))}
    </address>
  );
}

export default function CookiePolicyPage() {
  return (
    <main className="overflow-x-clip bg-off-white">
      <header className="bg-lavender">
        <div className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-turquoise-hover">Cookie Policy</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-heading sm:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-base text-body">Last Updated: 12 September 2026</p>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[760px] px-5 py-12 text-base leading-relaxed text-body sm:px-8 sm:py-16 sm:text-[17px] sm:leading-[1.8]">
        <div className="space-y-4">
          <p>Welcome to FurryFix!</p>
          <p>
            This Cookie Policy explains how NEURISH FUTURE KIND INDIA PRIVATE LIMITED, the owner of the FurryFix brand,
            uses cookies and similar technologies on our website.
          </p>
          <p>
            We believe in transparency and want you to understand how these technologies work and how you can manage
            your preferences.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <Section id="what-are-cookies" title="1. What Are Cookies?">
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites remember
              certain information about your visit and can improve your browsing experience.
            </p>
            <p>
              Cookies may help websites remember preferences, maintain essential functionality, and understand how
              visitors interact with their pages.
            </p>
          </Section>

          <Section id="how-we-use" title="2. How We Use Cookies">
            <p>
              Depending on the features enabled on our website, we may use cookies and similar technologies for the
              following purposes.
            </p>

            <Subsection title="Essential Cookies">
              <p>These cookies may be necessary for basic website functionality, security, and proper operation.</p>
            </Subsection>

            <Subsection title="Performance and Analytics Cookies">
              <p>
                If analytics tools are enabled, these cookies may help us understand how visitors use our website,
                identify popular pages, and improve website performance.
              </p>
            </Subsection>

            <Subsection title="Functional Cookies">
              <p>
                These cookies may help remember preferences, such as language or other website settings, where those
                features are available.
              </p>
            </Subsection>

            <Subsection title="Advertising Cookies">
              <p>
                If advertising or marketing technologies are implemented, they may use cookies to measure advertising
                performance or personalize advertisements.
              </p>
            </Subsection>

            <p>We will only describe and use the cookie categories that actually apply to our website.</p>
          </Section>

          <Section id="third-party" title="3. Third-Party Cookies">
            <p>Some services integrated into our website may use their own cookies or similar technologies.</p>
            <p>
              For example, if we use third-party analytics or embedded content, those providers may collect information
              about your interaction with the website.
            </p>
            <p>
              Our website may also contain links to Amazon. When you visit Amazon, its own cookies and privacy practices
              apply.
            </p>
            <p>
              We do not control cookies placed by third-party websites. Please review their respective policies for more
              information.
            </p>
          </Section>

          <Section id="managing" title="4. Managing Your Cookie Preferences">
            <p>You can manage or disable cookies through your browser settings.</p>
            <p>Most browsers allow you to:</p>
            <List
              items={[
                "View cookies stored on your device.",
                "Delete existing cookies.",
                "Block cookies from specific websites.",
                "Block all or selected types of cookies.",
              ]}
            />
            <p>Please note that disabling certain cookies may affect some website functionality.</p>
            <p>
              Where required by applicable law, we will provide an appropriate mechanism to obtain and manage consent for
              non-essential cookies.
            </p>
          </Section>

          <Section id="duration" title="5. How Long Do Cookies Remain?">
            <p>Cookies may be either:</p>
            <ul className="list-disc space-y-3 pl-6 marker:text-turquoise">
              <li>
                <strong className="font-semibold text-heading">Session Cookies:</strong> These are temporary cookies that
                generally expire when you close your browser.
              </li>
              <li>
                <strong className="font-semibold text-heading">Persistent Cookies:</strong> These remain on your device
                for a specified period or until you delete them.
              </li>
            </ul>
            <p>The duration of a cookie depends on its purpose and the service that places it.</p>
          </Section>

          <Section id="protection" title="6. Protection of Your Information">
            <p>We take reasonable steps to protect information processed through our website.</p>
            <p>
              Cookies themselves do not necessarily identify you directly. However, information collected through
              cookies may sometimes be associated with other information about your visit.
            </p>
            <p>
              For details about how we handle personal information, please refer to our{" "}
              <Link href="/privacy" className={inlineLinkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section id="updates" title="7. Updates to This Cookie Policy">
            <p>
              We may update this Cookie Policy when our website features, technology, or applicable legal requirements
              change.
            </p>
            <p>Any updates will be published on this page with a revised Last Updated date.</p>
            <p>We encourage visitors to review this page periodically.</p>
          </Section>

          <Section id="contact" title="8. Contact Us">
            <p>
              If you have questions about this Cookie Policy or how cookies are used on our website, please contact us.
            </p>
            <CompanyBlock
              lines={[
                "NEURISH FUTURE KIND INDIA PRIVATE LIMITED",
                "Brand: FurryFix",
                <>
                  Email: <EmailLink />
                </>,
              ]}
            />
          </Section>
        </div>
      </article>
    </main>
  );
}
