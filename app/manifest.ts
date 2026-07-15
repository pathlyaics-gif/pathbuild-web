import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PathBuild",
    short_name: "PathBuild",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F3",
    theme_color: "#C1502A",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
