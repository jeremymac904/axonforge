import { Boxes, BrainCircuit, Cable, Layers } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CapabilityCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { productLines } from "@/data/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "AxonForge AI product lines for AI app platforms, agent operating layers, automation systems, and content engines.",
  path: "/products",
});

const icons = [Layers, BrainCircuit, Cable, Boxes];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        description="AxonForge AI product work is organized around reusable software foundations that can become public apps, private platforms, or internal operating systems."
      >
        <ButtonLink href="/apps">View app records</ButtonLink>
      </PageHeader>
      <Section>
        <SectionHeader
          title="Product lines"
          description="Each product line is designed to support stable public documentation, support workflows, and future marketplace requirements."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productLines.map((product, index) => (
            <CapabilityCard
              key={product.title}
              title={product.title}
              description={product.description}
              Icon={icons[index]}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
