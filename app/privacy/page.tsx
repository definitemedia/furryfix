import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | FurryFix",
  description:
    "This Privacy Policy explains how FurryFix collects, uses, stores, and protects information when you visit our website.",
};

const email = "care@neurishfuturekind.com";

function EmailLink() {
  return (
    <a
      href={`mailto:${email}`}
      className="break-words font-semibold text-turquoise-hover underline decoration-turquoise/50 underline-offset-4 transition-colors duration-200 hover:text-navy hover:decoration-navy focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise motion-reduce:transition-none"
    >
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

export default function PrivacyPage() {
  return (
    <main className="overflow-x-clip bg-off-white">
      <header className="bg-lavender">
        <div className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-turquoise-hover">Privacy Policy</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-heading sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-base text-body">Last Updated: 12 September 2026</p>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[760px] px-5 py-12 text-base leading-relaxed text-body sm:px-8 sm:py-16 sm:text-[17px] sm:leading-[1.8]">
        <div className="space-y-4">
          <p>
            At FurryFix, a brand owned and operated by NEURISH FUTURE KIND INDIA PRIVATE LIMITED, we value your privacy
            as much as we value the happiness and well-being of your furry friends.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit
            our website.
          </p>
          <p>
            We believe in being transparent about how information is handled and are committed to respecting your
            privacy.
          </p>
          <p>By accessing or using our website, you acknowledge the practices described in this Privacy Policy.</p>
        </div>

        <div className="mt-12 space-y-10">
          <Section id="about-furryfix" title="1. About FurryFix">
            <p>FurryFix is a pet-care brand owned and operated by:</p>
            <CompanyBlock
              lines={[
                "NEURISH FUTURE KIND INDIA PRIVATE LIMITED",
                <>
                  Email: <EmailLink />
                </>,
                "Brand: FurryFix",
              ]}
            />
            <p>
              Our website allows visitors to explore our products, learn about our brand, read product information, and
              access third-party platforms where our products are available.
            </p>
          </Section>

          <Section id="information-we-collect" title="2. Information We Collect">
            <p>We may collect certain information when you visit or interact with our website.</p>

            <Subsection title="A. Personal Information">
              <p>
                If you contact us through email or a website contact form, we may collect information such as:
              </p>
              <List
                items={[
                  "Name",
                  "Email address",
                  "Phone number, if provided",
                  "The contents of your message",
                  "Any other information you voluntarily provide",
                ]}
              />
              <p>We collect this information to respond to your enquiries and provide customer support.</p>
            </Subsection>

            <Subsection title="B. Automatically Collected Information">
              <p>
                When you visit our website, certain technical information may be collected automatically, depending on
                the website&apos;s configuration.
              </p>
              <p>This may include:</p>
              <List
                items={[
                  "IP address",
                  "Browser type and version",
                  "Device type",
                  "Operating system",
                  "Pages visited",
                  "Date and time of your visit",
                  "Website usage and interaction information",
                ]}
              />
              <p>
                This information may be used to maintain website functionality, improve performance, and understand how
                visitors use our website.
              </p>
            </Subsection>

            <Subsection title="C. Information Collected Through Amazon">
              <p>Our website may contain links to FurryFix product listings on Amazon.</p>
              <p>
                When you click these links and visit Amazon, Amazon may independently collect information about you in
                accordance with its own privacy policy.
              </p>
              <p>We do not control the information collected or processed by Amazon.</p>
            </Subsection>
          </Section>

          <Section id="how-we-use" title="3. How We Use Your Information">
            <p>We may use the information we collect for the following purposes:</p>
            <List
              items={[
                "To respond to customer enquiries and requests.",
                "To provide information about FurryFix and our products.",
                "To improve our website's content, functionality, and user experience.",
                "To monitor website performance and identify technical issues.",
                "To maintain website security and prevent misuse.",
                "To comply with applicable legal obligations.",
                "To communicate with you when you have contacted us or requested a response.",
              ]}
            />
            <p>
              We will not use your personal information for purposes unrelated to those described in this policy without
              an appropriate lawful basis.
            </p>
          </Section>

          <Section id="cookies" title="4. Cookies and Similar Technologies">
            <p>
              Our website may use cookies and similar technologies to support essential website functionality and, where
              enabled, understand visitor activity.
            </p>
            <p>Cookies are small text files stored on your device when you visit a website.</p>
            <p>Depending on the tools implemented on our website, cookies may be used to:</p>
            <List
              items={[
                "Maintain essential website functionality.",
                "Understand website traffic and visitor behaviour.",
                "Improve website performance and user experience.",
              ]}
            />
            <p>
              You can manage or disable cookies through your browser settings. However, disabling certain cookies may
              affect some website features.
            </p>
            <p>
              If we use non-essential analytics or advertising cookies, we will provide any notices and consent options
              required by applicable law.
            </p>
          </Section>

          <Section id="sharing" title="5. Sharing of Information">
            <p>We respect your privacy and do not sell your personal information.</p>
            <p>We may share information in limited circumstances, including:</p>
            <ul className="list-disc space-y-3 pl-6 marker:text-turquoise">
              <li>
                <strong className="font-semibold text-heading">Service Providers:</strong> We may use third-party service
                providers for website hosting, maintenance, analytics, security, or other technical services. Such
                providers may process information on our behalf where necessary to provide their services.
              </li>
              <li>
                <strong className="font-semibold text-heading">Legal Requirements:</strong> We may disclose information
                when required by applicable law, regulation, court order, or lawful government request.
              </li>
              <li>
                <strong className="font-semibold text-heading">Business Protection:</strong> We may use or disclose
                information when reasonably necessary to protect our legal rights, website security, or the safety of our
                users.
              </li>
            </ul>
            <p>We aim to limit any sharing of personal information to what is necessary for the relevant purpose.</p>
          </Section>

          <Section id="third-party" title="6. Third-Party Websites and Links">
            <p>
              Our website may contain links to third-party websites, including Amazon, where FurryFix products may be
              available.
            </p>
            <p>When you visit an external website, its own privacy policy and terms of use apply.</p>
            <p>
              We are not responsible for the privacy practices, content, security, or data-handling policies of
              third-party websites.
            </p>
            <p>We encourage you to review the privacy policy of any external website you visit.</p>
          </Section>

          <Section id="security" title="7. Data Storage and Security">
            <p>
              We take reasonable steps to protect personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
            <p>
              Depending on the information and services involved, we may use appropriate technical and organizational
              safeguards.
            </p>
            <p>
              However, no method of transmitting or storing information electronically can be guaranteed to be
              completely secure.
            </p>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes described in this
              policy or as required by applicable law.
            </p>
          </Section>

          <Section id="rights" title="8. Your Privacy Rights">
            <p>Depending on applicable law, you may have rights concerning your personal information.</p>
            <p>These may include the right to:</p>
            <List
              items={[
                "Request information about personal data we process about you.",
                "Request correction of inaccurate or incomplete personal information.",
                "Request deletion of personal information, where legally permissible.",
                "Withdraw consent where processing is based on consent.",
                "Raise a concern or grievance regarding the handling of your personal information.",
              ]}
            />
            <p>To exercise an applicable privacy right or submit a privacy-related request, contact us at:</p>
            <p>
              Email: <EmailLink />
            </p>
            <p>We may need to verify your identity before responding to certain requests.</p>
            <p>We will handle requests in accordance with applicable legal requirements.</p>
          </Section>

          <Section id="children" title="9. Children's Privacy">
            <p>Our website is intended for general audiences and is not specifically directed at children.</p>
            <p>
              We do not knowingly seek to collect personal information from children in a manner that violates
              applicable law.
            </p>
            <p>
              If you believe a child has provided personal information to us inappropriately, please contact us at{" "}
              <EmailLink /> so that we can review the matter and take appropriate action.
            </p>
          </Section>

          <Section id="changes" title="10. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our website, business practices,
              technology, or applicable legal requirements.
            </p>
            <p>Any updates will be published on this page along with a revised Last Updated date.</p>
            <p>
              We encourage visitors to review this page periodically to stay informed about how we protect personal
              information.
            </p>
          </Section>

          <Section id="contact" title="11. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the way your personal
              information is handled, please contact us.
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
            <p>
              We will make reasonable efforts to respond to your enquiry within the time required by applicable law.
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
