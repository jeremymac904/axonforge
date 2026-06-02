import { BulletList, InfoPage } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Accessibility",
  description:
    "AxonForge AI accessibility statement for website and future software products.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        title="Accessibility"
        description="AxonForge AI aims to make its website and future software products usable by as many people as practical, including users who rely on assistive technology."
      />
      <InfoPage
        sections={[
          {
            title: "Current approach",
            body: (
              <BulletList
                items={[
                  "Use semantic headings, links, buttons, labels, and landmarks where practical.",
                  "Maintain visible focus styles and keyboard-accessible navigation.",
                  "Provide descriptive alternative text for meaningful images.",
                  "Avoid relying only on color to communicate important information.",
                  "Review responsive layouts so text and controls remain readable on mobile and desktop screens.",
                ]}
              />
            ),
          },
          {
            title: "Feedback",
            body: (
              <p>
                If you experience an accessibility barrier on this site or a
                future AxonForge AI product, email{" "}
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>{" "}
                with the page or app name, assistive technology used, browser or
                device, and a description of the issue.
              </p>
            ),
          },
          {
            title: "Ongoing work",
            body: (
              <p>
                Accessibility is an ongoing engineering responsibility. Product
                accessibility requirements may vary by app, platform, and
                release stage, and should be reviewed before public launch.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
