import { PortfolioCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { portfolioItems } from "@/data/apps";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Apps",
  description:
    "Explore AxonForge AI app and software portfolio placeholders with stable detail pages for future app store readiness.",
  path: "/apps",
});

export default function AppsPage() {
  return (
    <>
      <PageHeader
        title="Apps and Software"
        description="AxonForge AI maintains reusable app and portfolio records so each product can receive a stable URL, support path, privacy reference, and app store verification link when it is ready for release."
      />
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
