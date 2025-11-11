import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Enables static exports
  distDir: 'dist', // Changes output directory to 'dist'
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig