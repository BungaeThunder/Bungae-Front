/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  rewrites: () => [
    {
      source: '/naver-openapi/:path*',
      destination: 'https://openapi.naver.com/:path*',
    },
  ],
};

module.exports = nextConfig;
