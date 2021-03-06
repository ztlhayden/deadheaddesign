import React, {useState} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { device } from '../../GlobalStyles/Styles/devices'

import NavButton from './NavButton'

const ServiceNavContainer = styled.div`
  background-color: inherit;
  
  .hideSvc {
    height: 0;
  }

  .showSvc {
    height: 322px;

    @media ${device.laptop} {
      height: 280px;
      border-radius: 3px;
    }
  }
`

const Nav = styled.ul`
  overflow: hidden;
  background-color: inherit;
  transition: height .15s ease-in-out;
`

const Button = styled.button`
  margin-left: auto;
  margin-right: 0;
  //blank
`

const NavItem = (page) => {
  const link = page.frontmatter.link
  const slug= page.frontmatter.slug

  return (
    <li key={link}><NavButton to={slug}>{link}</NavButton></li>
  )
}

const ServicesNav = () => {
  const [isVis, setVis] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            link
          }
        }
      }
    }
  `)
  const pages = data.allMarkdownRemark.nodes

  return (
    <ServiceNavContainer>
      <NavButton onClick={() => setVis(!isVis)} as={Button}>Services</NavButton>
      <Nav className={isVis ? 'showSvc' : 'hideSvc'}>
        {pages.map(page => NavItem(page))}
      </Nav>
    </ServiceNavContainer>
  )
}

export default ServicesNav