import { portfolioItems } from "@/data/apps";

export const staticRoutes = [
  "/",
  "/about",
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
  ...portfolioItems.map((item) => `/apps/${item.slug}`),
];
