import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {device} from '../components/layout/GlobalStyles/Styles/devices'

import Img from 'gatsby-image'
import SEO from '../components/util/SEO'
import Layout from '../components/layout/Layout'
import Button from '../components/atoms/Button'
import { Title } from '../components/atoms/typo'

const ServiceWrapper = styled.div`
  margin: 0 auto;

  .cta {
    display: block;
    width: 300px;
    text-align: center;
    margin: 20px auto;
  }
`

const Body = styled.div`
  display: grid;
  
  p,
  ul {
    padding-top: 15px;
    margin: 10px;
  }

  ul {
    list-style: inside;
  }
  
  .hero {
    margin: 20px 0;
  }
  
  @media ${device.laptop} {
    grid-template-columns: .7fr 1fr;
  }
`

const ServicePage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.seoTitle} description={frontmatter.seoMeta} />
      <ServiceWrapper>
        <Title>{frontmatter.title}</Title>
        <Body>
          <Img className='hero' fluid={frontmatter.featuredImage.childImageSharp.fluid} alt={frontmatter.alt}/>
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Button size='lg' className='cta'>Free Quote</Button>
          </div>
        </Body>
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
