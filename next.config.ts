import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/abcd",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "img-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
