import React from 'react'
import { Link } from 'gatsby'

import LogoIcon from '../../../assets/icon/dd_icon.svg'
import NavButton from './NavBar/NavButton'

const Header = () => (
  <header className='sticky top-0 bg-contrast_dark text-white shadow z-50'>
    <div className='container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8'>
      <div className='flex items-center text-2xl'>
        <div className='w-12 mr-4'>
          <Link to='/'>
            <img src={LogoIcon} alt='Logo' />
          </Link>
        </div>
        <Link to='/' className='text-white hover:text-contrast_dark_lighter'>
          Deadhead.Design
        </Link>
      </div>
      <div className='flex mt-4 sm:mt-0'>
        <NavButton to='/about/'>About</NavButton>
        <NavButton to='/contact/'>Contact</NavButton>
        <NavButton to='/#services'>Services</NavButton>
        <NavButton to='/portfolio/'>Portfolio</NavButton>
      </div>
    </div>
  </header>
)

export default Header
