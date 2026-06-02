import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { BulletList } from "@/components/InfoPage";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { getPortfolioItem, portfolioItems } from "@/data/apps";
import { pageMetadata } from "@/lib/metadata";

type AppDetailProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: AppDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    return pageMetadata({
      title: "App Detail",
      description: "AxonForge AI app detail page.",
      path: "/apps",
    });
  }

  return pageMetadata({
    title: item.name,
    description: item.shortDescription,
    path: `/apps/${item.slug}`,
  });
}

export default async function AppDetailPage({ params }: AppDetailProps) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHeader title={item.name} description={item.shortDescription}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={item.cta.href}>{item.cta.label}</ButtonLink>
          <ButtonLink href="/apps" variant="secondary">
            View all apps
          </ButtonLink>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              {item.longDescription}
            </p>
            <h3 className="mt-8 text-xl font-semibold text-white">Use case</h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              {item.useCase}
            </p>
          </article>
          <aside className="rounded-lg border border-cyan-300/25 bg-cyan-300/[0.055] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Status</h2>
            <dl className="mt-5 grid gap-5 text-sm">
              <div>
                <dt className="font-semibold text-cyan-200">Category</dt>
                <dd className="mt-1 text-zinc-300">{item.category}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-200">Public status</dt>
                <dd className="mt-1 text-zinc-300">{item.status}</dd>
              </div>
              <div>
                <dt className="font-semibold text-cyan-200">Platforms</dt>
                <dd className="mt-1 text-zinc-300">{item.platforms.join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section className="bg-zinc-950/50">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title="Technical stack" />
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Expected capabilities" />
            <BulletList items={item.highlights} />
          </div>
        </div>
      </Section>
    </>
  );
}
