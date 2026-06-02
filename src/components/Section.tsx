type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionHeaderProps = {
  title: string;
  description?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`border-t border-white/10 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
