/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
