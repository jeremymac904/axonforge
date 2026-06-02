import { Bot, Cable, Cpu, Database, FileText, Workflow } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CapabilityCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { services } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI software development, agent systems, workflow automation, business operating systems, content engines, and desktop AI workflows.",
  path: "/services",
});

const icons = [Cpu, Bot, Workflow, Database, FileText, Cable];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="AxonForge AI helps turn business workflows into software systems with practical AI, automation, and deployment-ready engineering."
      >
        <ButtonLink href="/contact">Request a project review</ButtonLink>
      </PageHeader>
      <Section>
        <SectionHeader
          title="Execution areas"
          description="Projects can start as strategy, prototype, production build, automation cleanup, or platform modernization depending on the current state of the workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <CapabilityCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={icons[index]}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
