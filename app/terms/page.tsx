import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions | FurryFix",
  description:
    "These Terms & Conditions govern your access to and use of the FurryFix website, owned and operated by NEURISH FUTURE KIND INDIA PRIVATE LIMITED.",
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

export default function TermsPage() {
  return (
    <main className="overflow-x-clip bg-off-white">
      <header className="bg-lavender">
        <div className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-turquoise-hover">
            Terms &amp; Conditions
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-heading sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-base text-body">Last Updated: 12 September 2026</p>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[760px] px-5 py-12 text-base leading-relaxed text-body sm:px-8 sm:py-16 sm:text-[17px] sm:leading-[1.8]">
        <div className="space-y-4">
          <p>Welcome to FurryFix!</p>
          <p>
            These Terms &amp; Conditions govern your access to and use of the FurryFix website, owned and operated by
            NEURISH FUTURE KIND INDIA PRIVATE LIMITED.
          </p>
          <p>
            By accessing or using our website, you agree to these Terms &amp; Conditions. If you do not agree with them,
            please discontinue using the website.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <Section id="about-furryfix" title="1. About FurryFix">
            <p>FurryFix is a pet-care brand owned and operated by NEURISH FUTURE KIND INDIA PRIVATE LIMITED.</p>
            <p>
              Our website provides information about our brand, products, and pet-care offerings. Visitors can explore
              our products and access third-party platforms, including Amazon, to purchase available products.
            </p>
          </Section>

          <Section id="use-of-website" title="2. Use of Our Website">
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms &amp; Conditions.</p>
            <p>You must not:</p>
            <List
              items={[
                "Use the website for any unlawful or fraudulent activity.",
                "Attempt to gain unauthorized access to our website or its systems.",
                "Disrupt or interfere with the website's functionality or security.",
                "Copy, reproduce, or distribute website content without permission.",
                "Use the website in a way that may damage our brand, services, or reputation.",
              ]}
            />
            <p>
              We reserve the right to restrict access to our website if we reasonably believe these terms have been
              violated.
            </p>
          </Section>

          <Section id="product-information" title="3. Product Information">
            <p>
              We make reasonable efforts to ensure that product descriptions, images, and other information displayed on
              our website are accurate and up to date.
            </p>
            <p>However:</p>
            <List
              items={[
                "Product images are for illustrative purposes and may differ slightly from the actual packaging.",
                "Product availability may change without notice.",
                "Product descriptions and specifications may be updated from time to time.",
                "We do not guarantee that every product displayed will always be available.",
              ]}
            />
            <p>Please refer to the product packaging and instructions for the most relevant product-use information.</p>
          </Section>

          <Section id="amazon-purchases" title="4. Product Purchases Through Amazon">
            <p>FurryFix products may be available for purchase through Amazon.</p>
            <p>When you click a purchase link on our website, you may be redirected to Amazon to complete your purchase.</p>
            <p>Please note:</p>
            <List
              items={[
                "Purchases are subject to Amazon's applicable terms and conditions.",
                "Prices, availability, shipping charges, delivery dates, and payment options are determined by the applicable Amazon listing and checkout process.",
                "Orders and payments are processed through Amazon, not through the FurryFix website.",
                "Returns, refunds, cancellations, and delivery matters are subject to the applicable Amazon policies.",
              ]}
            />
            <p>We do not operate a shopping cart or checkout system on this website.</p>
          </Section>

          <Section id="intellectual-property" title="5. Intellectual Property">
            <p>All content on this website, including but not limited to:</p>
            <List
              items={[
                "FurryFix name and logo",
                "Brand identity and design elements",
                "Product descriptions",
                "Images and graphics",
                "Text, layout, and website content",
              ]}
            />
            <p>
              is owned by or licensed to NEURISH FUTURE KIND INDIA PRIVATE LIMITED and is protected by applicable
              intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, modify, distribute, publish, or commercially exploit our content without prior
              written permission, except where permitted by applicable law.
            </p>
          </Section>

          <Section id="third-party" title="6. Third-Party Websites">
            <p>Our website may contain links to third-party websites, including Amazon.</p>
            <p>These websites are operated independently and have their own terms, policies, and practices.</p>
            <p>We are not responsible for the content, availability, security, or practices of third-party websites.</p>
            <p>We encourage you to review the terms and privacy policies of any third-party website you visit.</p>
          </Section>

          <Section id="pet-care" title="7. Pet Care Information">
            <p>Information provided on the FurryFix website is intended for general informational purposes.</p>
            <p>
              Although we aim to provide useful pet-care information, it should not be treated as veterinary advice,
              diagnosis, or treatment.
            </p>
            <p>
              Every pet is different. Please follow the instructions on the product packaging and consult a qualified
              veterinarian if you have concerns about your pet&apos;s health, skin, or suitability for a particular
              product.
            </p>
            <p>
              Discontinue use of a product if your pet experiences an adverse reaction and seek veterinary advice where
              appropriate.
            </p>
          </Section>

          <Section id="availability" title="8. Website Availability">
            <p>
              We aim to keep our website accessible and functioning properly. However, we do not guarantee uninterrupted
              or error-free access.
            </p>
            <p>The website may occasionally be unavailable due to:</p>
            <List
              items={[
                "Scheduled maintenance",
                "Technical issues",
                "Hosting or network interruptions",
                "Updates or improvements",
              ]}
            />
            <p>We reserve the right to modify, suspend, or discontinue any part of the website when necessary.</p>
          </Section>

          <Section id="liability" title="9. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, NEURISH FUTURE KIND INDIA PRIVATE LIMITED shall not be liable for
              losses arising from:
            </p>
            <List
              items={[
                "Temporary website interruptions or technical errors.",
                "Reliance on general information published on the website.",
                "The content or operation of third-party websites.",
                "Unauthorized access caused by circumstances beyond our reasonable control.",
              ]}
            />
            <p>
              Nothing in these Terms &amp; Conditions excludes or limits liability where such exclusion or limitation is
              prohibited by applicable law.
            </p>
          </Section>

          <Section id="indemnification" title="10. Indemnification">
            <p>You agree not to misuse our website or infringe our rights.</p>
            <p>
              To the extent permitted by applicable law, you may be responsible for losses or claims arising from your
              unlawful use of the website or your violation of these Terms &amp; Conditions.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to These Terms">
            <p>
              We may revise these Terms &amp; Conditions from time to time to reflect changes in our website, business
              practices, or applicable laws.
            </p>
            <p>Updated terms will be published on this page with a revised Last Updated date.</p>
            <p>
              Your continued use of the website after changes are published constitutes acceptance of the updated terms,
              to the extent permitted by applicable law.
            </p>
          </Section>

          <Section id="governing-law" title="12. Governing Law and Jurisdiction">
            <p>These Terms &amp; Conditions are governed by the laws of India.</p>
            <p>
              Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent
              courts in India, subject to applicable law.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>
              If you have any questions or concerns regarding these Terms &amp; Conditions, please contact us.
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
