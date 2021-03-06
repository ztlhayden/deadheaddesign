module.exports = {
  siteMetadata: {
    title: `Deadhead.Design`,
    description: `I am a digital marketing problem solver. Fast, affordable, and totally custom marketing consulation for your small business. Request a meeting today!`,
    author: `Hayden Young`,
    siteUrl: 'https://deadhead.design/'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.deadhead.design`
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `65wm0sc2`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default'
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `UA-178800194-2`
      }
    },
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/ServicePageData`,
        name: 'servicePages'
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://deadhead.design',
        sitemap: 'https://deadhead.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/category/*`, `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          // Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7
            }
          })
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
