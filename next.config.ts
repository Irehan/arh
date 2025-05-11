import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during npm run build
  },
  experimental: {
    // Removed invalid property 'turbopack'
  },
};

export default nextConfig;