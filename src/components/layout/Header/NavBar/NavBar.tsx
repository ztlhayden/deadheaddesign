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

    a {
      font-size: 24px;
      padding: 5px;
      margin-bottom: 5px;
      display: block;
      text-align: center;
    }

    @media ${device.laptop} {
      position: relative;
      display: flex;
      width: fit-content;

      a{
        font-size: inherit;
        margin-left: 10px;
      }
    }
  }

  .show {
    width: 100vw;
  }

  .hide {
    width: 0;
  }

  @media ${device.laptop} {
    .show {
      width: auto;
    }

    .hide {
      width: auto;
    }

    button {
      display: none;
    }
  }
`

const NavBar = () => {
  const [vis, setVis] = useState(false)

  const handleFocus = () => setVis(true)

  return (
    <NavBarContainer>
      <button onClick={() => setVis(!vis)}>
        <Icon symbol='hamburger' />  
      </button>
      <nav className={vis ? 'show' : 'hide'}>
        <NavButton onFocus={handleFocus} to='/about/'>About</NavButton>
        <NavButton to='/contact/'>Contact</NavButton>
        <ServicesNav />
        <NavButton to='/'>Blog</NavButton>
        <NavButton to='/portfolio/'>Our Work</NavButton>
      </nav>
    </NavBarContainer>
  )
}

export default NavBar