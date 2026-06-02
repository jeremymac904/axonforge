import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-cyan-300 bg-cyan-300 text-black hover:bg-cyan-200 hover:border-cyan-200",
  secondary:
    "border-white/15 bg-white/5 text-white hover:border-cyan-300/60 hover:bg-cyan-300/10",
  ghost:
    "border-transparent bg-transparent text-cyan-200 hover:text-cyan-100 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
