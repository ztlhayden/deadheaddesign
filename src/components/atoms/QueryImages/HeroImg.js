import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/charts.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} alt='Graphs' />
}

export default HeroImg
