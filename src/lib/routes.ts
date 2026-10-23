import { portfolioItems } from "@/data/apps";
import {platforms,notes} from "@/data/forge";

export const staticRoutes = [
  "/",
  "/about",
  "/about/jeremy-mcdonald",
  "/platforms",
  "/news",
  "/tutorials",
  "/lab",
  "/team",
  "/apps",
  "/products",
  "/services",
  "/portfolio",
  "/case-studies",
  "/ai-systems",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
  "/data-deletion",
  "/security",
  "/accessibility",
];

export const allRoutes = [
  ...staticRoutes,
  ...platforms.map(p=>`/platforms/${p.slug}`),
  ...notes.flatMap(n=>[`/news/${n.slug}`,`/tutorials/${n.slug}`]),
  ...portfolioItems.map((item) => `/apps/${item.slug}`),
];

// Redesign routes retain all prior public app/support destinations.
