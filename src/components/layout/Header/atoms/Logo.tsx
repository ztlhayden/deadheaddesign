import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import LogoIcon from '../../../../assets/icon/dd_icon.svg'

const LogoContainer = styled(Link)`
  color: var(--white);

  img {
    width: 3.5rem;
    display: inline;
  }

  span {
    margin-left: 1rem;
    font-size: 1.25rem;
  }

  :hover {
    color: var(--contrast_dark_lighter);
  }
`

const Logo = ({className}) => {
  return (
    <LogoContainer className={className} to='/'>
      <img src={LogoIcon} alt='Deadhead Design Logo' />
      <span>Deadhead.Design</span>
    </LogoContainer>
  )
}

export default Logo