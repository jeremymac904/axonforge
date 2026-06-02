type InfoPageSection = {
  title: string;
  body: React.ReactNode;
};

type InfoPageProps = {
  sections: InfoPageSection[];
};

export function InfoPage({ sections }: InfoPageProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-zinc-300">
              {section.body}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-zinc-300">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
