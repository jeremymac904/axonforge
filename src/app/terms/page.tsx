import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "AxonForge AI Terms of Service covering website use, software use, app store distribution, intellectual property, no warranty, and limitation of liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Effective date: June 2, 2026. These terms describe general conditions for using the AxonForge AI website, public materials, and future software products."
      />
      <InfoPage
        sections={[
          {
            title: "Acceptance and scope",
            body: (
              <p>
                By using this website or an AxonForge AI software product, you
                agree to these Terms unless a separate written agreement or
                product-specific terms apply. If you do not agree, do not use
                the website or product.
              </p>
            ),
          },
          {
            title: "Website and software use",
            body: (
              <BulletList
                items={[
                  "Use the website and software only for lawful purposes and in a way that does not interfere with security, availability, or other users.",
                  "Do not attempt to reverse engineer, scrape, disrupt, overload, bypass access controls, or misuse any AxonForge AI system.",
                  "Do not submit unlawful, infringing, harmful, deceptive, or unauthorized content through contact forms, support channels, apps, or AI features.",
                  "Future products may require accounts, subscriptions, app store accounts, or additional product-specific terms.",
                ]}
              />
            ),
          },
          {
            title: "AI features",
            body: (
              <p>
                If AI features are included in a future product, outputs may be
                incomplete, inaccurate, or inappropriate for a particular use.
                Users remain responsible for reviewing outputs, complying with
                applicable laws, and deciding whether outputs are suitable for
                their intended purpose.
              </p>
            ),
          },
          {
            title: "App store distribution",
            body: (
              <p>
                Future apps may be distributed through Apple App Store, Google
                Play, Microsoft Store, or other marketplaces. Marketplace terms,
                payment rules, refund processes, device requirements, and
                account controls may also apply. Support and privacy requests
                should still use the public AxonForge AI pages linked from the
                applicable app listing.
              </p>
            ),
          },
          {
            title: "Payments and billing",
            body: (
              <p>
                Paid products, subscriptions, or services may be processed by
                third-party payment providers or app marketplaces. Pricing,
                billing cycles, cancellations, refunds, and taxes may be
                governed by the applicable product page, order form, written
                agreement, payment processor, or marketplace.
              </p>
            ),
          },
          {
            title: "Intellectual property",
            body: (
              <p>
                The website, brand, copy, designs, code, product names,
                documentation, software, and related materials are owned by
                AxonForge AI or its licensors unless otherwise stated. You may
                not copy, modify, distribute, sell, or create derivative works
                from AxonForge AI materials without permission.
              </p>
            ),
          },
          {
            title: "No warranty",
            body: (
              <p>
                The website and software are provided without warranties and as
                available to the fullest extent allowed by law. AxonForge AI
                does not promise uninterrupted service, error-free operation,
                compatibility with every system, or that outputs will meet every
                requirement.
              </p>
            ),
          },
          {
            title: "Limitation of liability",
            body: (
              <p>
                To the fullest extent allowed by law, AxonForge AI will not be
                liable for indirect, incidental, special, consequential,
                exemplary, or punitive damages, or for lost profits, lost data,
                business interruption, or unauthorized access arising from use
                of the website or software.
              </p>
            ),
          },
          {
            title: "Contact",
            body: (
              <p>
                Questions about these Terms can be sent to{" "}
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
