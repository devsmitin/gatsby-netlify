/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    // edit below
    title: `The Blog`,
    author: `Smit Modi`,
    description: `A personal blog with Netlify CMS.`,
    siteUrl: `https://mega-owl.netlify.com/`,
    social: {
      twitter: `smilingsmit`,
      instagram: `smiling.smit`,
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat`],
        display: "swap",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
