import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ImgRiverOfLife = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/myriveroflifechurch.com_.png" }) {
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
      alt="River of Life Chruch's Site"
    />
  )
}

export default ImgRiverOfLife
