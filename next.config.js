/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  cssMinimizerOptions: {
    minimize: false,
  },
  images: {
    domains: ["website.bikefixup.com", "bikeadvice.in"],
  },
};

module.exports = nextConfig;
