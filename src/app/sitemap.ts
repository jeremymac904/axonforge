import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { allRoutes } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.filter(route=>route!=="/news"&&!route.startsWith("/news/")).map((route) => ({
    url: new URL(route, site.url).toString(),
    lastModified: new Date("2026-10-23"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
