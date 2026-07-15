import type { MetadataRoute } from "next";

const BASE_URL = "https://pathbuild.app";
// Static build date (no Date.now()/new Date() — keeps output deterministic).
const LAST_MODIFIED = "2026-07-15";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/pricing",
    "/support",
    "/about",
    "/legal/privacy",
    "/legal/terms",
    "/legal/subscription",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_MODIFIED,
  }));
}
