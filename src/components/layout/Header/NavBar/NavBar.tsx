import React, {useState} from 'react'
import styled from 'styled-components'
import { device } from '../../GlobalStyles/Styles/devices'

import Icon from '../../../atoms/icon'
import NavButton from './NavButton'

const NavBarContainer = styled.div`
  display: flex;

  svg {
    font-size: 48px;
  }

  .show {
    display: default;
  }

  .hide {
    display: none;
  }
`

const NavBar = () => {
  const [vis, setVis] = useState(false)


  return (
    <NavBarContainer>
      <button onClick={() => setVis(!vis)}>
        <Icon symbol='hamburger' />  
      </button>
      <nav className={vis ? 'show' : 'hide'}>
        <NavButton to='/about/'>About</NavButton>
        <NavButton to='/contact/'>Contact</NavButton>
        <NavButton to='/#services'>Services</NavButton>
        {/* Blog */}
        <NavButton to='/portfolio/'>Our Work</NavButton>
      </nav>
    </NavBarContainer>
  )
}

export default NavBar