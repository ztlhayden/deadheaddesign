import React from 'react'
import styled from 'styled-components'
import { device } from '../GlobalStyles/Styles/devices'

import Logo from './atoms/Logo'
import NavBar from './NavBar/NavBar'

const HeaderContainer = styled.header`
  background-color: var(--contrast_dark);
  color: var(--white);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 3rem;
  .logo {
    span {
      display: none;
    }
  }

  @media ${device.mobileM} {
    .logo {
      span {
        display: inline;
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const Header = () => (
  <HeaderContainer>
    <Logo className='logo' />
    <NavBar />
  </HeaderContainer>
)

export default Header
