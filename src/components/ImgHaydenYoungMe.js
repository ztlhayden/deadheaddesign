import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgHaydenYoungMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/haydenyoungme.png" }) {
        childImageSharp {
          fixed(width: 315) {
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
