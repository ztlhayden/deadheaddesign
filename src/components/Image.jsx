import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Image({ source }) {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = graphql(
    `
      query($source: String!) {
        file(relativePath: { eq: $source }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
    { source }
  );
  return <Img fluid={fluid} />;
}
