import { Bot, Brain, Cable, Eye, Gauge, ShieldCheck } from "lucide-react";
import { CapabilityCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { systemModel } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Systems",
  description:
    "AxonForge AI designs AI systems that perceive, reason, act, and improve with clear controls and review points.",
  path: "/ai-systems",
});

const architecture = [
  {
    title: "Knowledge and retrieval",
    description:
      "Approved source material, indexed knowledge, prompt context, and versioned operating instructions.",
    Icon: Brain,
  },
  {
    title: "Tool boundaries",
    description:
      "Explicit permissions, action scopes, approval checkpoints, and logs for sensitive workflow steps.",
    Icon: ShieldCheck,
  },
  {
    title: "System integration",
    description:
      "APIs, webhooks, chat surfaces, desktop automation, databases, and content systems connected with clear data contracts.",
    Icon: Cable,
  },
  {
    title: "Operational monitoring",
    description:
      "Error handling, review queues, exceptions, quality checks, and documentation for ongoing maintenance.",
    Icon: Gauge,
  },
];

export default function AISystemsPage() {
  return (
    <>
      <PageHeader
        title="AI Systems"
        description="AxonForge AI builds systems around the work: what the software needs to know, what it can do, where humans review, and how outcomes are monitored."
      />
      <Section>
        <SectionHeader
          title="Operating model"
          description="The system model keeps AI work grounded in source material, tool boundaries, and visible actions."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemModel.map((step, index) => {
            const Icon = [Eye, Brain, Bot, Gauge][index];
            return (
              <CapabilityCard
                key={step.title}
                title={step.title}
                description={step.description}
                Icon={Icon}
              />
            );
          })}
        </div>
      </Section>
      <Section className="bg-zinc-950/50">
        <SectionHeader
          title="Architecture priorities"
          description="AI systems should reduce repetitive work without hiding important decisions or data handling."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {architecture.map((item) => (
            <CapabilityCard
              key={item.title}
              title={item.title}
              description={item.description}
              Icon={item.Icon}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
