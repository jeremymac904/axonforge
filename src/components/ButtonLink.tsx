import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-[#496785] bg-[#142E50] text-white hover:bg-[#203F65] hover:border-[#A9B5C5]",
  secondary:
    "border-white/15 bg-white/5 text-white hover:border-slate-300/60 hover:bg-slate-300/10",
  ghost:
    "border-transparent bg-transparent text-slate-200 hover:text-slate-100 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} outline-none focus-visible:ring-2 focus-visible:ring-slate-300`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
