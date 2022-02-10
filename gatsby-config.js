module.exports = {
  pathPrefix: "/kirillito-web",
  siteMetadata: {
    siteTitle: `Kirill Bredikhin`,
    siteTitleAlt: `Kirill Bredikhin`,
    siteHeadline: `Kirill Bredikhin`,
    siteUrl: `https://kirillito.com`,
    siteDescription: `Kirill Bredikhin personal web site`,
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-168672345-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      }
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'pt',
        langKeyForNull: 'pt',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    }
  ],
}
