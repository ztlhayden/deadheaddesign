import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgHaydenYoungMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/haydenyoung.me_.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      className='center w-11/12 m-auto'
      fixed={data.file.childImageSharp.fixed}
      alt="Hayden's Resume Site"
    />
  )
}

export default ImgHaydenYoungMe
