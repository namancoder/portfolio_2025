import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio_2025";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: `/${repoName}/`, // Replace with your actual repo name
  assetPrefix: `/${repoName}/`,
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
