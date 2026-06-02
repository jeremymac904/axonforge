import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-white outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      aria-label="AxonForge AI home"
    >
      <span className="grid size-9 place-items-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
        A
      </span>
      <span className="text-base font-semibold">
        AxonForge <span className="text-cyan-300">AI</span>
      </span>
    </Link>
  );
}
