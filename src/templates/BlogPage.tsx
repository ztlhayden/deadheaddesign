import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {device} from '../components/layout/GlobalStyles/Styles/devices'

import FormatBlogDate from '../components/util/FormatBlogDate'
import Img from 'gatsby-image'
import SEO from '../components/util/SEO'
import Layout from '../components/layout/Layout'
import { Title } from '../components/atoms/typo'
import PortableText from '../components/molecules/PortableText'

const Body = styled.div`
  padding: 5px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  ul {
    list-style: inside;
  }

  p {
    margin-top: 15px;
  }

  a {
    text-decoration: underline;

    :hover {
      color: var(--contrast_dark);
    }
  }
`

const Meta = styled.div`
  font-size: .85rem;
  display: flex;
  justify-content: space-around;
  width: 50%;
  min-width: 300px;
  margin: 10px auto;
`

const BlogPage = ({data}) => {
  const post = data.allSanityPost.nodes[0]

  return (
   <Layout>
    <SEO title={post.title} description={post.description}/>
    <article>
      <Img fluid={post.mainImage.asset.fluid}/>
      <Title>{post.title}</Title>
      <Meta>
        <span>{post.author.name}</span>
        <span>{FormatBlogDate(post.publishedAt)}</span>
      </Meta>
      <Body>
        {post._rawBody && <PortableText blocks={post._rawBody} />}
      </Body>
    </article>
   </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allSanityPost(filter: {slug: {current: {eq: $slug }}}) {
      nodes {
        title
        publishedAt
        _rawBody
        description
        author {
          name
        }
        mainImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPage

//$slug: String!