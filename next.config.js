/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/nextProject',
  env: {
    BASE_PATH: `/nextProject` 
  }
}

module.exports = nextConfig
