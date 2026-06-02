export type PortfolioItem = {
  name: string;
  category: string;
  status: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  useCase: string;
  cta: {
    label: string;
    href: string;
  };
  slug: string;
  platforms: string[];
  highlights: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    name: "LegendsOS",
    category: "Business operating system",
    status: "Portfolio placeholder",
    shortDescription:
      "A business operating system concept for teams that need one place for tasks, content, client workflows, and reporting.",
    longDescription:
      "LegendsOS is listed as an initial AxonForge AI portfolio placeholder for a custom operations platform. The concept centers on consolidating work queues, internal knowledge, task routing, content planning, and management visibility into a single software layer. Public details will be updated only as work is approved for release.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AI agents"],
    useCase:
      "Internal operating layer for teams that need repeatable execution, shared records, and AI-assisted workflow support.",
    cta: { label: "Discuss a business OS", href: "/contact" },
    slug: "legendsos",
    platforms: ["Web", "Internal tools", "Automation"],
    highlights: [
      "Unified operations dashboard",
      "Content and task workflow concepts",
      "Agent-assisted knowledge retrieval",
    ],
  },
  {
    name: "SignalCraft",
    category: "Content intelligence",
    status: "Portfolio placeholder",
    shortDescription:
      "A content engine concept for planning, generating, reviewing, and distributing professional content systems.",
    longDescription:
      "SignalCraft represents AxonForge AI's approach to content operations: structured research, reusable brand context, review checkpoints, channel-specific formatting, and publishing workflows. It is designed as a portfolio placeholder until a public product page or released app is available.",
    techStack: ["Next.js", "TypeScript", "MDX", "AI workflows", "Automation APIs"],
    useCase:
      "Research-driven content planning and production workflows for teams that need consistency without lowering review standards.",
    cta: { label: "Build a content engine", href: "/contact" },
    slug: "signalcraft",
    platforms: ["Web", "API", "Automation"],
    highlights: [
      "Brand-context content generation",
      "Approval and revision workflows",
      "Publishing-ready content operations",
    ],
  },
  {
    name: "BlackFrame AI",
    category: "Creative production system",
    status: "Portfolio placeholder",
    shortDescription:
      "A creative AI workflow concept for scripts, media production planning, visual asset direction, and publishing support.",
    longDescription:
      "BlackFrame AI is a portfolio placeholder for a creative operations system that helps organize production briefs, scripts, visual direction, review notes, and repeatable media workflows. It is not presented as a released public application until a launch page is published.",
    techStack: ["Next.js", "TypeScript", "Media workflows", "AI tools", "Cloud storage"],
    useCase:
      "Creative teams and operators that need structured production workflows from idea to publishable asset.",
    cta: { label: "Plan a creative system", href: "/contact" },
    slug: "blackframe-ai",
    platforms: ["Web", "Desktop workflows", "Content systems"],
    highlights: [
      "Production brief management",
      "AI-assisted script and asset planning",
      "Review-ready content workflow structure",
    ],
  },
  {
    name: "Loan Factory AI Advantage",
    category: "AI enablement platform",
    status: "Portfolio placeholder",
    shortDescription:
      "A named portfolio placeholder for AI enablement, workflow education, and operations support concepts.",
    longDescription:
      "Loan Factory AI Advantage is included as a portfolio placeholder because it was specifically requested for this initial site. This listing does not claim endorsement, licensing, regulatory status, or app-store availability. Public details should be updated only with approved scope, permissions, and accurate product status.",
    techStack: ["Next.js", "TypeScript", "AI training workflows", "Automation", "Knowledge systems"],
    useCase:
      "AI education, workflow documentation, and internal process support where a team needs repeatable operating guidance.",
    cta: { label: "Review AI enablement", href: "/contact" },
    slug: "loan-factory-ai-advantage",
    platforms: ["Web", "Training systems", "Automation"],
    highlights: [
      "Knowledge and training structure",
      "Workflow enablement concepts",
      "Careful public-status handling",
    ],
  },
  {
    name: "AI Realtor Pro",
    category: "Real estate productivity",
    status: "Portfolio placeholder",
    shortDescription:
      "A real estate productivity app concept for lead workflows, content support, and task automation.",
    longDescription:
      "AI Realtor Pro is listed as a placeholder for a real estate productivity system. The concept focuses on organizing follow-up, marketing content, property research support, and repetitive administrative workflows. It avoids public performance claims until verified product details are available.",
    techStack: ["Next.js", "TypeScript", "Firebase", "AI workflows", "Mobile-ready UI"],
    useCase:
      "Productivity and automation support for real estate professionals who need organized follow-up and content workflows.",
    cta: { label: "Explore app planning", href: "/contact" },
    slug: "ai-realtor-pro",
    platforms: ["Web", "Mobile app candidate", "Automation"],
    highlights: [
      "Lead and follow-up workflow concepts",
      "AI-assisted content support",
      "Mobile-ready app structure",
    ],
  },
  {
    name: "Desktop AI Workflow Systems",
    category: "Desktop automation",
    status: "Portfolio placeholder",
    shortDescription:
      "Local AI-assisted workflow systems for document handling, browser tasks, file operations, and repeated desktop work.",
    longDescription:
      "Desktop AI Workflow Systems describes a class of custom internal tools rather than one public app. These systems can combine scripts, desktop automation, local file workflows, browser operations, and review checkpoints to reduce repetitive work while keeping sensitive actions visible to the operator.",
    techStack: ["TypeScript", "Python", "Desktop automation", "Browser automation", "Local scripts"],
    useCase:
      "High-repetition desktop workflows that need faster execution, consistent outputs, and human oversight.",
    cta: { label: "Map a desktop workflow", href: "/contact" },
    slug: "desktop-ai-workflow-systems",
    platforms: ["macOS", "Windows", "Local automation"],
    highlights: [
      "Human-reviewed desktop execution",
      "Document and file workflow support",
      "Browser and local app automation",
    ],
  },
  {
    name: "Google Chat AI Agents",
    category: "Team chat agents",
    status: "Portfolio placeholder",
    shortDescription:
      "Google Chat agent concepts for internal requests, status updates, research, and workflow routing.",
    longDescription:
      "Google Chat AI Agents are listed as a placeholder for team-facing assistants that live inside communication workflows. They can answer from approved knowledge, collect structured requests, trigger automations, and route tasks while preserving appropriate permissions and logs.",
    techStack: ["Google Workspace", "Apps Script", "Cloud Functions", "AI agents", "Webhooks"],
    useCase:
      "Teams that want AI assistance inside existing chat workflows without forcing every task into a separate app.",
    cta: { label: "Design a chat agent", href: "/contact" },
    slug: "google-chat-ai-agents",
    platforms: ["Google Chat", "Google Workspace", "Automation"],
    highlights: [
      "Chat-native request handling",
      "Knowledge-grounded responses",
      "Webhook and workflow triggers",
    ],
  },
  {
    name: "n8n and Zapier Automations",
    category: "Workflow automation",
    status: "Portfolio placeholder",
    shortDescription:
      "Automation systems for app-to-app routing, notifications, records, content workflows, and operational handoffs.",
    longDescription:
      "n8n and Zapier Automations represents AxonForge AI's automation implementation work: mapping repeatable processes, defining triggers and data contracts, adding error handling, and documenting maintenance requirements. Public examples will be limited to approved, non-sensitive workflows.",
    techStack: ["n8n", "Zapier", "Webhooks", "REST APIs", "Google Workspace"],
    useCase:
      "Operational workflows that need repeatable handoffs between tools, cleaner records, and fewer manual status updates.",
    cta: { label: "Automate a workflow", href: "/contact" },
    slug: "n8n-zapier-automations",
    platforms: ["n8n", "Zapier", "API workflows"],
    highlights: [
      "Trigger and action mapping",
      "Error handling and alerting",
      "Workflow documentation",
    ],
  },
];

export const getPortfolioItem = (slug: string) =>
  portfolioItems.find((item) => item.slug === slug);

export const featuredItems = portfolioItems.slice(0, 4);
