/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    //providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://appprogramming.vercel.app',
  },
  env: {
    appName: 'App Programming',
    appUrl: 'https://appprogramming.vercel.app',
    apiUrl: 'https://appprogramming.vercel.app',
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});


// const nextConfig = {
//   reactStrictMode: true,
//   // images: {
//   //   loader: 'imgix',
//   //   path: 'http://localhost:3000',
//   // },
//   env: {
//     appName: 'App Programming',
//     appUrl: 'https://appprogramming.vercel.app',
//     apiUrl: 'https://appprogramming.vercel.app',
//   },
//   // basePath:'/larect',
//   // assentPrefix:'/larect',
// }

// module.exports = nextConfig;