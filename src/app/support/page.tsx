import { ButtonLink } from "@/components/ButtonLink";
import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { supportCategories } from "@/data/pages";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Support",
  description:
    "AxonForge AI support page for app support, bug reports, account help, billing help, privacy requests, and data deletion.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="Support"
        description="This page is the public support destination for AxonForge AI websites, software products, and future apps distributed through Apple App Store, Google Play, Microsoft Store, or direct web channels."
      >
        <ButtonLink href={`mailto:${site.supportEmail}`}>
          Email support
        </ButtonLink>
      </PageHeader>
      <InfoPage
        sections={[
          {
            title: "How to request support",
            body: (
              <p>
                Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>{" "}
                with the product or app name, device or browser, operating
                system, screenshots if helpful, and a clear description of the
                issue. Do not send passwords, full payment card numbers, or
                other unnecessary sensitive data.
              </p>
            ),
          },
          {
            title: "Support categories",
            body: <BulletList items={supportCategories} />,
          },
          {
            title: "Response expectations",
            body: (
              <p>
                AxonForge AI aims to review support requests within two to
                three business days. Security, privacy, account access, and
                billing issues may be prioritized. Contracted services may have
                separate support terms in a written agreement.
              </p>
            ),
          },
          {
            title: "Related requests",
            body: (
              <p>
                Data deletion requests should use the{" "}
                <a href="/data-deletion">Data Deletion</a> page. Privacy
                questions can be sent to{" "}
                <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
                Security reports can be sent to{" "}
                <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
