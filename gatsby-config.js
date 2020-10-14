module.exports = {
  siteMetadata: {
    title: `Deadhead.Design`,
    description: `We offer website design in Lexington, Kentucky. Fast, affordable, and totally custom website creation and maintenance for your small business. Request a free quote today!`,
    author: `Hayden Young`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets`
      }
    },
    'gatsby-plugin-svgr',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'sans-serif']
        }
      }
    }
  ]
};
