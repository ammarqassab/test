/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: 'http://localhost:3000',
  // },
  env: {
    appName: 'App Programming',
    appUrl: 'https://appprogramming.vercel.app',
    apiUrl: 'https://appprogramming.vercel.app',
  },
  // basePath:'/larect',
  // assentPrefix:'/larect',
}

module.exports = nextConfig;