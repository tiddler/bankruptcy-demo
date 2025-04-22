/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-icons'], // Add this line
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
}

module.exports = nextConfig
