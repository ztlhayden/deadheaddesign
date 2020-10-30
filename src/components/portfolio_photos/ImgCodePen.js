import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgCodePen = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/code.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img className='center w-11/12 m-auto' fixed={data.file.childImageSharp.fixed} alt='' />
}

export default ImgCodePen
