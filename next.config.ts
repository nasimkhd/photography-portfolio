import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.128"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
