import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Data Deletion",
  description:
    "How users can request deletion of AxonForge AI account data, app data, support data, and AI interaction data.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <>
      <PageHeader
        title="Data Deletion"
        description="Use this page to request deletion of account data, app data, support data, or AI interaction data associated with AxonForge AI products."
      />
      <InfoPage
        sections={[
          {
            title: "How to submit a request",
            body: (
              <p>
                Email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>{" "}
                with the subject line{" "}
                <span className="font-medium text-white">Data Deletion Request</span>.
                Include the product or app name, the email address or account
                identifier connected to the data, the type of data you want
                deleted, and any marketplace account details needed to locate
                the request.
              </p>
            ),
          },
          {
            title: "Data that may be covered",
            body: (
              <BulletList
                items={[
                  "Website contact form submissions and support correspondence.",
                  "Future app account profile data and app settings.",
                  "Future app usage records, uploaded files, generated outputs, and AI interaction history where deletion is technically and legally available.",
                  "Billing or subscription metadata controlled by AxonForge AI, excluding records that must remain with payment processors or app marketplaces.",
                ]}
              />
            ),
          },
          {
            title: "Verification and timing",
            body: (
              <p>
                AxonForge AI may need to verify identity or account ownership
                before deleting data. Requests are reviewed within a reasonable
                period, generally within 30 days when the request can be
                verified and no legal, security, fraud prevention, billing, or
                marketplace retention requirement applies.
              </p>
            ),
          },
          {
            title: "Limits and retained records",
            body: (
              <p>
                Some records may be retained when required for legal compliance,
                tax and accounting, security logs, fraud prevention, dispute
                resolution, backup integrity, or app marketplace obligations.
                If full deletion is not possible, AxonForge AI may restrict,
                anonymize, or minimize retained data where appropriate.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
