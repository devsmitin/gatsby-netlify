/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Smit!`,
    author: `Smit Modi`,
    description: `A personal blog with Netlify CMS.`,
    image: `/static/66dac8c7d0664d6b0f784ddd4f9e7b54/5840c/image.jpg`,
    siteUrl: `https://imsmit-dev.netlify.com`,
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
        fonts: [`Montserrat\:900`, `Merriweather\:300,400,700.900`],
        display: "swap",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `blog`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-offline`,
  ],
}
