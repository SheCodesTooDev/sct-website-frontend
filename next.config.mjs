/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [process.env.DOMAIN, 'www.linkedin.com"'],
  },
  reactStrictMode: false,
};

export default nextConfig;
