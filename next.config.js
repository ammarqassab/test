/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: 'http://localhost:3000',
  // },
  env: {
    appName: 'Larect',
    appUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:3000',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect',
}

module.exports = nextConfig;