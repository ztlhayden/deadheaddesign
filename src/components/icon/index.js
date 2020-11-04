import React from 'react'
import HamburgerIcon from './hamburger'
import PlaneIcon from './planesq'
import Burger from './burgersq'
import Code from './codesq'
import TwitterIcon from './twitter'
import LinkedInIcon from './linkedin'
import GithubIcon from './github'
import FacebookIcon from './facebook'

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'burger':
      return <Burger />
    case 'code':
      return <Code />
    case 'plane':
      return <PlaneIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'facebook':
      return <FacebookIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
