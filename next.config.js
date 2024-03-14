/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true
  },
  images: {
    domains: ['images.unsplash.com','imgv3.fotor.com']
  }
};

module.exports = nextConfig;
