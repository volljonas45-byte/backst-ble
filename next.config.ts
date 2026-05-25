import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/backst-ble",
  assetPrefix: "/backst-ble",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
