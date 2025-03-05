// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
//   reactStrictMode: false,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following line to build a static site.
  // output: "export",
  images: { domains: ["lh3.googleusercontent.com"], unoptimized: true }, // Disable image optimization for static export
  reactStrictMode: true,
};

export default nextConfig;
