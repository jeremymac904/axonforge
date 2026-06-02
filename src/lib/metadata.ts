import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const absoluteUrl = new URL(path, site.url).toString();
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: "/assets/axonforge-ai-core.png",
          width: 1792,
          height: 1024,
          alt: "AxonForge AI neural core visual",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/assets/axonforge-ai-core.png"],
    },
  };
}
