import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Brain,
  Cable,
  Cpu,
  Database,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CapabilityCard, PortfolioCard } from "@/components/Cards";
import { Section, SectionHeader } from "@/components/Section";
import { featuredItems, portfolioItems } from "@/data/apps";
import { services, site, systemModel, verificationPages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AI Software, Automation, and App Development",
  description:
    "AxonForge AI builds AI-powered apps, agent systems, desktop workflows, content engines, business operating systems, and custom automation platforms.",
  path: "/",
});

const serviceIcons = [Cpu, Bot, Workflow, Database, Brain, Cable];

export default function Home() {
  return (
    <>
      <section className="bg-grid overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
              AxonForge <span className="text-cyan-300">AI</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-zinc-100 sm:text-2xl">
              AI software, agent systems, and automation platforms for modern
              operators.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              We build AI-powered apps, desktop workflows, content engines,
              business operating systems, and custom automation platforms that
              turn repeatable work into reliable software.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact AxonForge AI</ButtonLink>
              <ButtonLink href="/apps" variant="secondary">
                View Apps
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-lg border border-cyan-300/15 bg-black/30 lg:min-h-[430px]">
            <Image
              src="/assets/axonforge-ai-core.png"
              alt="Futuristic AxonForge AI neural core"
              width={1792}
              height={1024}
              priority
              className="hero-fade h-full min-h-64 w-full object-cover object-center lg:min-h-[430px]"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader
            title="Software portfolio foundations."
            description="Initial app and portfolio records are structured so future public products can receive stable URLs, metadata, support pages, privacy links, and app store verification references."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-950/50">
        <SectionHeader
          title="Services and capabilities."
          description="AxonForge AI focuses on the engineering layer between business intent and working software."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Cpu;
            return (
              <CapabilityCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={Icon}
              />
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionHeader
              title="AI systems that operate."
              description="The systems are designed around real data, bounded actions, and practical review points."
            />
            <ButtonLink href="/ai-systems" variant="secondary">
              Explore AI Systems
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {systemModel.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="mb-4 grid size-10 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/10 text-sm font-semibold text-amber-200">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-zinc-950/50">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            title="Built for public verification."
            description={`The site provides stable public pages for future Apple Developer, Google Play Console, Microsoft Store, partner, and customer review processes for ${site.name}.`}
          />
          <div className="grid gap-4">
            {verificationPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-lg border border-white/10 bg-black/35 p-5 transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="mb-4 size-5 text-cyan-300"
                />
                <h3 className="text-lg font-semibold text-white">{page.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/[0.06] p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Plan a product, agent system, or automation platform.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300">
                Start with a clear scope, the systems involved, the data that
                needs protection, and the workflow outcome the software should
                support.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                View Portfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <section className="sr-only" aria-label="Portfolio item count">
        {portfolioItems.length} initial portfolio records are configured.
      </section>
    </>
  );
}
