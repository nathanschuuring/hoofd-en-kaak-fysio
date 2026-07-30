import type { MetadataRoute } from "next";
import { klachten, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/specialisaties",
    "/over-mij",
    "/locaties-en-contact",
    "/veelgestelde-vragen",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const klachtPages = klachten.map((k) => ({
    url: `${site.url}/${k.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...klachtPages];
}
