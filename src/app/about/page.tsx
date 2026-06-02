import { ButtonLink } from "@/components/ButtonLink";
import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn about AxonForge AI, the AI software and automation company founded by Jeremy McDonald.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About AxonForge AI"
        description="AxonForge AI is a software company focused on practical AI systems: apps, agents, automations, and operating platforms that help teams execute work with more structure."
      >
        <ButtonLink href="/contact">Contact {site.name}</ButtonLink>
      </PageHeader>
      <InfoPage
        sections={[
          {
            title: "Company focus",
            body: (
              <p>
                AxonForge AI builds product foundations and custom software for
                AI-powered applications, agent systems, desktop workflows,
                content engines, business operating systems, and automation
                platforms. The company is positioned for future app publishing
                through Apple App Store, Google Play, Microsoft Store, and web
                distribution channels.
              </p>
            ),
          },
          {
            title: "Founder",
            body: (
              <p>
                AxonForge AI was founded by {site.founder}. The public website
                is intended to serve as the central company profile, support
                destination, policy hub, and portfolio record for current and
                future software products.
              </p>
            ),
          },
          {
            title: "Operating principles",
            body: (
              <BulletList
                items={[
                  "Build real software around the workflow, not isolated demos.",
                  "Keep public claims tied to verifiable product status and approved examples.",
                  "Design AI systems with clear data boundaries, review points, and support paths.",
                  "Use stable public pages for app verification, user support, privacy, and data requests.",
                ]}
              />
            ),
          },
        ]}
      />
    </>
  );
}
