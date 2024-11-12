import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "egxsocial",
    short_name: "egxsoc",
    description: "A Social Thin.",
    display: "standalone",
    background_color: "#eaeaea",
    theme_color: "#eaeaea",
    icons: [
      {
        src: "/icon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
