import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BioImg = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      headshot: file(relativePath: { eq: "img/headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <Img className={className} fluid={data.headshot.childImageSharp.fluid} />
}

export default BioImg
