import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio_2025";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProd ? `/${repoName}` : "", // Replace with your repo name
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  // basePath: "/abcd",
  // images: {
  //   dangerouslyAllowSVG: true,
  //   contentDispositionType: "attachment",
  //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  // },
};

export default nextConfig;
