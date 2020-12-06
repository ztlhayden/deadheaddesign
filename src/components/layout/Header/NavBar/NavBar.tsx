import React, {useState} from 'react'
import styled from 'styled-components'
import { device } from '../../GlobalStyles/Styles/devices'

import Icon from '../../../atoms/icon'
import NavButton from './NavButton'
import ServicesNav from './ServicesNav'

const NavBarContainer = styled.div`
  display: flex;

  svg {
    font-size: 48px;
  }

  nav {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--contrast_dark);
    width: 100vw;
    transition: width .13s ease-out;
    overflow: hidden;

    @media ${device.laptop} {
      position: relative;
      top: 10%;
      display: flex;
      overflow: visible;
    }
  }

  .show {
    width: 100vw;
  }

  .hide {
    width: 0;
  }

  @media ${device.laptop} {
    height: 50px;

    .show {
      width: auto;
    }

    .hide {
      width: auto;
    }

    button#hammie {
      display: none;
    }
  }
`

const NavBar = () => {
  const [vis, setVis] = useState(false)

  const handleFocus = () => setVis(true)

  return (
    <NavBarContainer>
      <button id='hammie' onClick={() => setVis(!vis)}>
        <Icon symbol='hamburger' />  
      </button>
      <nav className={vis ? 'show' : 'hide'}>
        <ServicesNav />
        <NavButton onFocus={handleFocus} to='/about/'>About</NavButton>
        <NavButton to='/contact/'>Contact</NavButton>
        <NavButton to='/portfolio/'>Our Work</NavButton>
        <NavButton to='/'>Blog</NavButton>
      </nav>
    </NavBarContainer>
  )
}

export default NavBar