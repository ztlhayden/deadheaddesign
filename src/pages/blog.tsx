import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import SEO from '../components/util/SEO'
import Layout from '../components/layout/Layout'
import {Title} from '../components/atoms/typo'
import BlogPostPreview from '../components/molecules/BlogPostPreview'

const PostsWrapper = styled.div`
  width: 55%;
  min-width: 300px;
  margin: 20px auto;

  div {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(limit: 10, sort: {fields: publishedAt, order: DESC}) {
        nodes {
          _id
          title
          publishedAt
          description
          slug {
            current
          }
        }
      }
    }
    `)
  const posts = data.allSanityPost.nodes

  return (
    <Layout>
      <SEO />
      <Title>Latest Blog Posts</Title>
      <PostsWrapper>
        {posts.map(post => BlogPostPreview(post))}
      </PostsWrapper>
    </Layout>
  )
}

export default Blog