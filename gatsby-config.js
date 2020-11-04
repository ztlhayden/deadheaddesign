const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Deadhead.Design - Lexington Kentucky`,
    description: `I am a digital marketing problem solver. Fast, affordable, and totally custom marketing consulation for your small business. Request a meeting today!`,
    author: `Hayden Young`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `UA-178800194-2`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deadhead.Design`,
        short_name: `Deadhead.Design`,
        start_url: `/`,
        background_color: `#F5F5FF`,
        theme_color: `#1F245A`,
        display: `standalone`,
        icon: `src/assets/icon/dd_icon_b_sq.svg`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'img'
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
}
