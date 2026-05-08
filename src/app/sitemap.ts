import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { CASE_STUDIES } from "./case-studies/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date("2026-05-08");

  return [
    {
      url: SITE.url,
      lastModified: updatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CASE_STUDIES.map((caseStudy) => ({
      url: `${SITE.url}case-studies/${caseStudy.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
