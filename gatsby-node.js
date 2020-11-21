exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const ServicePage = require.resolve(`./src/templates/ServicePage.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 20) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: ServicePage,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}
