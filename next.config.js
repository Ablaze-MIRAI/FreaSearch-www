/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/settings',
        destination: '/settings/general',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
