import React, {useState} from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import NavButton from './NavButton'

const Nav = styled.ul`
  button {
    display: inline;
    height: 20px;
  }
`

const NavItem = (page) => {
  const link = page.frontmatter.link
  const slug= page.frontmatter.slug

  return (
    <li key={link}><NavButton to={slug}>{link}</NavButton></li>
  )
}

const ServicesNav = () => {
  const [isVis, setVis] = useState()
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
    <div>
      <button>Hello</button>
      <Nav>
        {pages.map(page => NavItem(page))}
      </Nav>
    </div>
  )
}

export default ServicesNav