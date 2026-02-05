import { MetadataRoute } from "next";
import workData from "@/lib/workData.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://signalandform.net";
  const projects = (workData as { projects: { slug: string }[] }).projects;

  const workEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    ...projects.map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    ...workEntries,
  ];
}
