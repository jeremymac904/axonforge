import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "AxonForge AI Privacy Policy covering website data, contact forms, analytics, app usage data, account data, payment processor data, AI interaction data, and data deletion requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Effective date: June 2, 2026. This policy explains how AxonForge AI may collect, use, retain, and delete information for this website and future software products."
      />
      <InfoPage
        sections={[
          {
            title: "Scope",
            body: (
              <p>
                This Privacy Policy applies to {site.name}, this website, public
                contact and support workflows, and future AxonForge AI software
                products unless a product-specific notice states otherwise.
              </p>
            ),
          },
          {
            title: "Information we may collect",
            body: (
              <BulletList
                items={[
                  "Contact form and support information, including name, email address, request type, message content, screenshots, and related correspondence.",
                  "Website and analytics data, such as pages visited, approximate location, browser type, device type, referring pages, and diagnostic logs if analytics tools are added.",
                  "App usage data for future software products, such as feature usage, crash logs, device information, app version, operating system, and performance diagnostics.",
                  "Account data if a future app includes accounts, including profile details, authentication identifiers, settings, subscription status, and product preferences.",
                  "Payment and billing metadata if paid products are added. Payment card details should be handled by third-party payment processors and not stored directly by AxonForge AI unless clearly disclosed in a product-specific notice.",
                  "AI interaction data if AI features are added, including prompts, uploaded files, generated outputs, tool actions, feedback, and review history needed to provide and improve the feature.",
                  "Marketplace and app store information provided by Apple, Google, Microsoft, or other distribution platforms when users install, subscribe, request refunds, or contact support through those platforms.",
                ]}
              />
            ),
          },
          {
            title: "How information may be used",
            body: (
              <BulletList
                items={[
                  "Provide, operate, secure, maintain, and improve websites, apps, automations, support workflows, and software services.",
                  "Respond to contact, support, business verification, privacy, data deletion, billing, and security requests.",
                  "Diagnose bugs, investigate abuse, monitor performance, and protect users, systems, and company operations.",
                  "Develop new products and features using aggregated, de-identified, or permissioned data where appropriate.",
                  "Comply with legal, tax, accounting, app marketplace, security, and contractual obligations.",
                ]}
              />
            ),
          },
          {
            title: "Sharing and processors",
            body: (
              <p>
                AxonForge AI may use service providers for hosting, analytics,
                email, forms, customer support, app distribution, payments,
                storage, AI model access, and security. Information may be
                shared with those providers only as needed for the relevant
                service, legal requirement, or protection of rights and safety.
              </p>
            ),
          },
          {
            title: "Retention",
            body: (
              <p>
                Information is retained only as long as reasonably needed for
                the purposes described above, including support records, account
                operation, security logs, legal compliance, dispute resolution,
                and business records. Retention periods may vary by product,
                data type, legal requirement, and marketplace obligation.
              </p>
            ),
          },
          {
            title: "Data deletion and user rights",
            body: (
              <p>
                Users can request deletion of account data, app data, support
                data, or AI interaction data by visiting{" "}
                <a href="/data-deletion">/data-deletion</a> or emailing{" "}
                <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
                Some information may be retained where required for legal,
                security, fraud prevention, accounting, dispute, or marketplace
                compliance reasons.
              </p>
            ),
          },
          {
            title: "Children",
            body: (
              <p>
                AxonForge AI products are not currently directed to children
                under 13. If a future product is intended for children or
                requires a different age threshold, a product-specific notice
                will explain the applicable practices.
              </p>
            ),
          },
          {
            title: "Contact",
            body: (
              <p>
                Privacy questions should be sent to{" "}
                <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
                General company questions can be sent to{" "}
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
