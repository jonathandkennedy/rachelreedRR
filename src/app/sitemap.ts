import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practices } from "@/lib/practices";
import { posts } from "@/lib/blog";
import { locations } from "@/lib/locations";
import { getComboParams } from "@/lib/combos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/areas-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/areas-we-serve/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comboRoutes: MetadataRoute.Sitemap = getComboParams().map(({ city, practice }) => ({
    url: `${base}/areas-we-serve/${city}/${practice}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const practiceRoutes: MetadataRoute.Sitemap = practices.map((p) => ({
    url: `${base}/${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.isPillar ? 0.9 : 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...practiceRoutes,
    ...locationRoutes,
    ...comboRoutes,
    ...postRoutes,
  ];
}
