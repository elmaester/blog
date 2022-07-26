const rssOptions = require("./rss-feed-options");

module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.oleg.date",
    title: "Oleg.Date Blog",
    description: "Oleg's personal blog about philosophy and life experiences. Come and explore!",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    { resolve: "gatsby-plugin-feed", options: rssOptions },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "./src/markdown-pages/",
      },
      __key: "markdown-pages",
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://blog.oleg.date',
        sitemap: 'https://blog.oleg.date/sitemap/sitemap-0.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
  ],
};
