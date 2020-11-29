import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import SEO from '../components/SEO'
import Layout from '../components/layout/Layout'
import { Title } from '../components/atoms/typo'

const ServiceWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  .hero {
    width: 100%;
    max-width: 2560px;
    margin: 0 auto;
    position: relative;
  }

  h1 {
    color: white;
    position: absolute;
    top: 100px;
  }

  h2 {
    font-weight: 600;
    font-size: 1.675rem;
    margin-top: 10px;
  }
`

const Body = styled.div``

const ServicePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.seoTitle} description={frontmatter.seoMeta} />
      <ServiceWrapper>
        <Img className='hero' fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.alt}/>
        <Title>{frontmatter.title}</Title>
        <Body dangerouslySetInnerHTML={{ __html: html }} />
      </ServiceWrapper>
    </Layout>
  )
}

export default ServicePage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        seoTitle
        seoMeta
        alt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`
