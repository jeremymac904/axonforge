import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { portfolioItems } from "@/data/apps";
import { caseStudyStandards } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "AxonForge AI case study standards and future case study placeholders without unsupported results or fake client claims.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        description="This page defines how AxonForge AI will publish case studies: public examples should be specific, approved, and tied to verified scope and outcomes."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            title="Publication standard"
            description="AxonForge AI does not publish fabricated testimonials, fake client logos, or unsupported impact claims. Case studies should include only details that are approved for public use."
          />
          <div className="grid gap-3">
            {caseStudyStandards.map((standard) => (
              <div
                key={standard}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-cyan-300"
                />
                <p className="text-sm leading-6 text-zinc-300">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-zinc-950/50">
        <SectionHeader
          title="Case study candidates"
          description="These records are candidates for future public case studies when accurate scope, permissions, and outcomes are available."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <article
              key={item.slug}
              className="rounded-lg border border-white/10 bg-black/30 p-5"
            >
              <h3 className="font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.category}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
