/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.appUrl || 'https://appprogramming.vercel.app',
    generateRobotsTxt: true, // (optional)
    changefreq: 'weekly',
    // exclude : ['/private/*']
}