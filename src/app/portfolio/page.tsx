import { PortfolioCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { portfolioItems } from "@/data/apps";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "AxonForge AI portfolio placeholders for AI apps, agent systems, automation platforms, and business operating systems.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        description="The portfolio starts with named software and automation placeholders. Items are intentionally described without fake testimonials, fake client logos, unsupported metrics, or unverified availability claims."
      />
      <Section>
        <SectionHeader
          title="Initial portfolio records"
          description="Each record includes a category, status, description, stack, use case, CTA, and slug for stable routing."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
