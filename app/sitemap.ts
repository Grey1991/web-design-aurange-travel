import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aurangetravel.com.au",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}