module.exports = {
  pathPrefix: "/kirillito-web",
  siteMetadata: {
    siteTitle: `Kirill Bredikhin`,
    siteTitleAlt: `Kirill Bredikhin`,
    siteHeadline: `Kirill Bredikhin`,
    siteUrl: `http://localhost:8000/`,
    siteDescription: `Kirill Bredikhin portfolio web site`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@kirillito`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},

    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`, 
  ],
}
