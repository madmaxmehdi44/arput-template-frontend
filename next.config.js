/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["https://arput-template-frontend.vercel.app"],
  },
};

module.exports = nextConfig
