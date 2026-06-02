import Link from "next/link";
import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import { footerNav, mainNav, site } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.1fr_1.5fr] lg:px-8">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            {site.description}
          </p>
          <p className="text-sm text-zinc-500">Founded by {site.founder}.</p>
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href={`mailto:${site.contactEmail}`}
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label="Email AxonForge AI"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/axonforge-ai"
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label="AxonForge AI on LinkedIn"
            >
              <BriefcaseBusiness className="size-5" />
            </a>
            <a
              href="https://github.com/jeremymac904/axonforge"
              className="rounded-md p-2 transition hover:bg-white/5 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label="AxonForge AI GitHub repository"
            >
              <GitBranch className="size-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <div className="mt-4 grid gap-2">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/case-studies"
                className="text-sm text-zinc-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Case Studies
              </Link>
              <Link
                href="/ai-systems"
                className="text-sm text-zinc-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                AI Systems
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Legal and Support</h2>
            <div className="mt-4 grid gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-zinc-500">
        © 2026 {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
