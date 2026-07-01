import { NextConfig } from "next";

/** @type {import('next/dist/next-server/server/config').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  experimental: {
    viewTransition: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
