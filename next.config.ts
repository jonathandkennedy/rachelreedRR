import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats for the portrait photography.
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;
