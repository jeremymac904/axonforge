import Link from "next/link";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="forge-button forge-contact hidden lg:inline-flex">Work With Us <span aria-hidden="true">→</span></Link>
        <details className="group relative md:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-white/15 bg-white/5 text-white marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
            <Menu aria-hidden="true" className="size-5" />
            <span className="sr-only">Open menu</span>
          </summary>
          <nav
            className="absolute right-0 mt-3 grid min-w-52 gap-1 rounded-lg border border-white/15 bg-zinc-950 p-2 shadow-2xl"
            aria-label="Mobile navigation"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
