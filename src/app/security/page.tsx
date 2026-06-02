import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Security",
  description:
    "AxonForge AI security practices and responsible reporting process for security concerns and suspected vulnerabilities.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        title="Security"
        description="AxonForge AI uses reasonable security practices for websites, software products, automations, and support workflows without claiming that any system is risk-free."
      />
      <InfoPage
        sections={[
          {
            title: "Security practices",
            body: (
              <BulletList
                items={[
                  "Use reputable hosting, source control, and deployment providers with access controls and audit capabilities.",
                  "Limit administrative access to systems and data based on role and operational need.",
                  "Prefer secure authentication, encrypted transport, environment variables for secrets, and least-privilege integrations.",
                  "Review dependencies, logs, and deployment changes as part of normal engineering maintenance.",
                  "Design AI and automation systems with clear tool permissions, review points, and documented data flows.",
                ]}
              />
            ),
          },
          {
            title: "Reporting a concern",
            body: (
              <p>
                Send suspected vulnerabilities, account security concerns, or
                abuse reports to{" "}
                <a href={`mailto:${site.securityEmail}`}>{site.securityEmail}</a>.
                Include the product, affected URL or app version, reproduction
                steps, screenshots or logs if safe to share, and your contact
                information for follow-up.
              </p>
            ),
          },
          {
            title: "Responsible disclosure",
            body: (
              <p>
                Do not access, modify, delete, exfiltrate, or disclose data that
                does not belong to you. Do not disrupt service availability,
                attempt social engineering, or perform destructive testing.
                AxonForge AI will review credible reports and prioritize
                remediation based on severity, exploitability, and impact.
              </p>
            ),
          },
          {
            title: "No absolute guarantee",
            body: (
              <p>
                No website, app, AI system, or automation platform can be made
                completely secure. AxonForge AI works to use reasonable
                safeguards and improve practices as products and risks evolve.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
