import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pathbuild.app/sitemap.xml",
    host: "https://pathbuild.app",
  };
}
