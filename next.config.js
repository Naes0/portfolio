/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  basePath: '/nextjs-pages',
  assetPrefix: '/nextjs-pages',
};

module.exports = nextConfig;
