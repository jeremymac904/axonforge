import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/apps";

type CapabilityCardProps = {
  title: string;
  description: string;
  Icon?: LucideIcon;
};

export function CapabilityCard({
  title,
  description,
  Icon,
}: CapabilityCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:border-slate-300/40 hover:bg-slate-300/[0.045]">
      {Icon ? (
        <Icon aria-hidden="true" className="mb-5 size-6 text-slate-300" />
      ) : null}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  );
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-zinc-950/70 p-6 transition hover:border-slate-300/45 hover:bg-zinc-900/90">
      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
        <span className="rounded-md border border-slate-300/25 bg-slate-300/10 px-2 py-1 text-slate-200">
          {item.category}
        </span>
        <span>{item.status}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
        {item.shortDescription}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/apps/${item.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
      >
        View detail <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  );
}
