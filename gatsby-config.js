const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sam Chillcott",
    author: "Sam Chillcott",
    siteUrl: `https://www.portfolio.samchillcott.com`,
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
