/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
