const rssOptions = require("./rss-feed-options");

module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.oleg.date",
    title: "Oleg.Date Blog",
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
  ],
};
