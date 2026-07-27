import type { NextConfig } from "next";

// On GitHub Pages the site lives under /<repo-name>; CI sets BASE_PATH=/notes.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
