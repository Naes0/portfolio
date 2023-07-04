/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  distDir: 'build',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
