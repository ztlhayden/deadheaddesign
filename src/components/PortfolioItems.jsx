import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PortfolioItems = () => {
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
  `);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-bright_white max-w-xs w-full text-center rounded shadow-md">
        <a href="https://haydenyoung.me">
          <h3 className="font-semibold text-lg mt-1 mb-5">Hayden&apos;s Resume Site</h3>
          <Img
            className="center w-11/12 m-auto"
            fluid={data.file.childImageSharp.fluid}
            alt="Hayden's Resume Site"
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItems;
