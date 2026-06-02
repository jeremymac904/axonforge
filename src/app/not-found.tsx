import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="bg-grid py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h1 className="text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          The requested AxonForge AI page does not exist or is not public.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </div>
    </section>
  );
}
