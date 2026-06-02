import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CapabilityCard } from "@/components/Cards";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeader } from "@/components/Section";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact AxonForge AI for AI software, app development, automation systems, support, privacy, and security requests.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact AxonForge AI"
        description="Use this page for project inquiries, app support routing, business verification, privacy requests, and security contact."
      >
        <ButtonLink href={`mailto:${site.contactEmail}`}>
          Email {site.contactEmail}
        </ButtonLink>
      </PageHeader>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              title="Contact paths"
              description="Role-based addresses are used so app store review teams, platform partners, and users have stable contact references."
            />
            <div className="grid gap-4">
              <CapabilityCard
                title="General inquiries"
                description={site.contactEmail}
                Icon={Mail}
              />
              <CapabilityCard
                title="Product support"
                description={site.supportEmail}
                Icon={MessageSquare}
              />
              <CapabilityCard
                title="Privacy and security"
                description={`${site.privacyEmail} or ${site.securityEmail}`}
                Icon={ShieldCheck}
              />
            </div>
          </div>
          <form
            name="axonforge-contact"
            method="POST"
            action="/contact/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="axonforge-contact" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <h2 className="text-2xl font-semibold text-white">Send a message</h2>
            <div className="mt-6 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Name
                <input
                  name="name"
                  required
                  className="min-h-11 rounded-lg border border-white/10 bg-black/40 px-3 text-white outline-none transition focus:border-cyan-300"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="min-h-11 rounded-lg border border-white/10 bg-black/40 px-3 text-white outline-none transition focus:border-cyan-300"
                  autoComplete="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Request type
                <select
                  name="requestType"
                  className="min-h-11 rounded-lg border border-white/10 bg-black/40 px-3 text-white outline-none transition focus:border-cyan-300"
                >
                  <option>Project inquiry</option>
                  <option>App support</option>
                  <option>Business verification</option>
                  <option>Privacy request</option>
                  <option>Security report</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Message
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-3 text-white outline-none transition focus:border-cyan-300"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-cyan-300 bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-black transition hover:border-cyan-200 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Submit message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
