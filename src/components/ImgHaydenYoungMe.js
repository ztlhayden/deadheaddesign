import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgHaydenYoungMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/haydenyoungme.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className='center w-11/12 m-auto z-50'
      fluid={data.file.childImageSharp.fluid}
      alt="Hayden's Resume Site"
    />
  )
}

export default ImgHaydenYoungMe
