/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["thrangra.sirv.com"],
  },
}

module.exports = nextTranslate(nextConfig);
