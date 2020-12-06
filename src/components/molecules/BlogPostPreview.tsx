import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import BlogDate from '../util/FormatBlogDate'
import FormatBlogDate from '../util/FormatBlogDate'

const PostLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
  font-size: 1.26rem;

  :hover {
    color: var(--contrast_dark);
  }
`

const Date = styled.span`
  font-size: .9rem;
`

interface Post {
  _id:string
  title:string
  publishedAt:string
  description:string
  slug: {
    current:string
  }
}

const BlogPostPreview = (post: Post) => {
  return (
    <div key={post._id}>
      <PostLink to={post.slug.current}><h2>{post.title || 'Untitled'}</h2></PostLink>
      <Date>{FormatBlogDate(post.publishedAt)}</Date>
      <p>{post.description || 'Error fetching post.'}</p>
    </div>
  )
}

export default BlogPostPreview