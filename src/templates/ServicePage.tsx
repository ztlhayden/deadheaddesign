import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import SEO from '../components/SEO'
import Layout from '../components/layout/Layout'
import { Title } from '../components/atoms/typo'
import Container from '../components/atoms/wrapper'

const ServicePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <Title>{frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

ServicePage.propTypes = {
  html: PropTypes.string
}

export default ServicePage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
