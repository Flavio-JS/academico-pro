import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? process.env.API_URL
        : "http://localhost:30080",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**",
      },
    ],
    disableStaticImages: true,
  },
};

export default nextConfig;
