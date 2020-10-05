module.exports = {
  plugins: [
    'gatsby-plugin-svgr',
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
