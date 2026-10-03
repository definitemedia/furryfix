import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Disclaimer | FurryFix",
  description:
    "This Disclaimer explains the limits of the general information, product details, and third-party links published on the FurryFix website.",
  path: "/disclaimer",
});

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

export default function DisclaimerPage() {
  return (
    <main className="overflow-x-clip bg-off-white">
      <header className="bg-lavender">
        <div className="mx-auto w-full max-w-[760px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-turquoise-hover">Disclaimer</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-heading sm:text-5xl">Disclaimer</h1>
          <p className="mt-4 text-base text-body">Last Updated: 12 September 2026</p>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[760px] px-5 py-12 text-base leading-relaxed text-body sm:px-8 sm:py-16 sm:text-[17px] sm:leading-[1.8]">
        <div className="space-y-4">
          <p>Welcome to FurryFix!</p>
          <p>
            The information provided on this website is published by NEURISH FUTURE KIND INDIA PRIVATE LIMITED, the
            owner and operator of the FurryFix brand.
          </p>
          <p>By accessing or using this website, you acknowledge and agree to the terms of this Disclaimer.</p>
        </div>

        <div className="mt-12 space-y-10">
          <Section id="general-information" title="1. General Information">
            <p>All information on the FurryFix website is provided for general informational purposes.</p>
            <p>
              We make reasonable efforts to ensure that the information is accurate and up to date. However, we do not
              guarantee that all content is complete, accurate, or current at all times.
            </p>
            <p>
              Product details, descriptions, images, and other website content may be updated or changed without prior
              notice.
            </p>
          </Section>

          <Section id="product-information" title="2. Product Information">
            <p>
              We aim to provide clear and accurate information about FurryFix products, including their features,
              ingredients, usage instructions, and benefits.
            </p>
            <p>However:</p>
            <List
              items={[
                "Product images are for illustrative purposes and may vary slightly from the actual product.",
                "Packaging and product presentation may change over time.",
                "Product availability and pricing may vary depending on the sales platform.",
                "Product descriptions should be read alongside the instructions and information provided on the actual product packaging.",
              ]}
            />
            <p>Please refer to the product label for the applicable directions and precautions.</p>
          </Section>

          <Section id="pet-care" title="3. Pet Care Disclaimer">
            <p>
              The information provided on this website, including articles, product descriptions, and general pet-care
              content, is intended for informational purposes only.
            </p>
            <p>It is not a substitute for professional veterinary advice, diagnosis, or treatment.</p>
            <p>
              Every pet is different, and individual pets may respond differently to grooming and personal-care
              products.
            </p>
            <p>
              Before using a product, read its label and follow the instructions carefully. If your pet has a known
              sensitivity, existing skin condition, or experiences an adverse reaction, consult a qualified
              veterinarian.
            </p>
            <p>
              FurryFix does not claim that its products diagnose, treat, cure, or prevent any disease unless expressly
              permitted and supported by applicable law.
            </p>
          </Section>

          <Section id="availability-pricing" title="4. Product Availability and Pricing">
            <p>FurryFix products may be available through third-party platforms such as Amazon.</p>
            <p>
              Product prices, discounts, availability, delivery charges, and delivery estimates may change without
              notice.
            </p>
            <p>
              The information displayed on our website may not always reflect the latest details on a third-party sales
              platform.
            </p>
            <p>Please check the relevant product listing before making a purchase.</p>
          </Section>

          <Section id="third-party-links" title="5. Third-Party Links">
            <p>
              Our website may contain links to external websites, including Amazon, for product purchases or additional
              information.
            </p>
            <p>These websites are independently operated and have their own terms, privacy policies, and practices.</p>
            <p>
              NEURISH FUTURE KIND INDIA PRIVATE LIMITED does not control or guarantee the accuracy, availability, or
              content of third-party websites.
            </p>
            <p>Visiting an external website is at your own discretion.</p>
          </Section>

          <Section id="purchases" title="6. Purchases, Shipping, and Returns">
            <p>Purchases made through Amazon are subject to the applicable Amazon terms and policies.</p>
            <p>
              Amazon or the relevant seller manages the checkout and order process, including applicable payment,
              shipping, cancellation, return, and refund arrangements.
            </p>
            <p>Please refer to the relevant Amazon listing and its policies for information about your purchase.</p>
          </Section>

          <Section id="liability" title="7. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, NEURISH FUTURE KIND INDIA PRIVATE LIMITED shall not be
              responsible for losses arising from reliance on general website information, temporary website
              interruptions, or the content and operation of third-party websites.
            </p>
            <p>
              Nothing in this Disclaimer excludes or limits any liability or consumer rights that cannot legally be
              excluded or limited under applicable law.
            </p>
          </Section>

          <Section id="changes" title="8. Changes to This Disclaimer">
            <p>
              We may update this Disclaimer from time to time to reflect changes in our products, website, business
              practices, or applicable legal requirements.
            </p>
            <p>Any changes will be published on this page with an updated Last Updated date.</p>
            <p>We encourage visitors to review this page periodically.</p>
          </Section>

          <Section id="contact" title="9. Contact Us">
            <p>
              If you have any questions about this Disclaimer or the information published on our website, please
              contact us.
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
