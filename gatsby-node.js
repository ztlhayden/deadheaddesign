exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const ServicePage = require.resolve(`./src/templates/ServicePage.tsx`)
  const Service = await graphql(`
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
  if (Service.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  Service.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: ServicePage,
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  const BlogPage = require.resolve(`./src/templates/BlogPage.tsx`)
  const blog = await graphql(`
    {
      allSanityPost {
        nodes {
          slug {
            current
          }
        }
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (blog.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = blog.data.allSanityPost.edges || []
  posts.forEach((edge, index) => {
    const path = `/blog/${edge.node.slug.current}`

    createPage({
      path,
      component: BlogPage,
      context: { slug: edge.node.slug.current }
    })
  })
}
