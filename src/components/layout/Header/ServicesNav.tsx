import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Nav = styled.ul``

const Button = styled(Link)``

const NavItem = ({to, value}) => {
  return (
    <li key={value}><Button to={to}>{value}</Button></li>
  )
}

const ServicesNav = () => {
  const [isVis, setVis] = useState()
  
  return (
    <Nav>
      <li key={}><Link to={}>{}</Link></li>
    </Nav>
  )
}

export default ServicesNav