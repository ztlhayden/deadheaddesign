import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../GlobalStyles/Styles/devices'

const FooterWrapper = styled.footer`
  //width: 100%;
  color: var(--black);
  margin-top: 100px;
  margin-bottom: 2rem;
  margin-right: auto;
  margin-left: auto;

  .about {
    display: none;

    @media ${device.laptop} {
      display: block;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <div className='flex mx-3'>
      <div className='flex-1 px-3 about'>
        <Link to='/about/' className='text-lg font-semibold hover:text-contrast_dark text-gray-800'>
          <h2>About Hayden</h2>
        </Link>
        <p className='mt-5'>
          After 5 years in professional aviation I now offer web presence and branding solutions for
          small businesses.
        </p>
      </div>
      <div className='flex-1 px-3'>
        <Link
          to='/contact/'
          className='text-lg font-semibold hover:text-contrast_dark text-gray-800'
        >
          <h2>Contact Info</h2>
        </Link>
        <ul className='mt-4 leading-loose'>
          <li>
            <a href='mailto:hayden@deadhead.design'>hayden@deadhead.design</a>
          </li>
          <li>
            <a href='tel:+18596840445'>(859) 684-0445</a>
          </li>
        </ul>
      </div>
      <div className='flex-1 px-3'>
        <h2 className='text-lg font-semibold'>Social Media</h2>
        <ul className='mt-4 leading-loose'>
          <li>
            <a href='https://www.facebook.com/deadheadwebdesign' target='_blank' rel='noreferrer'>
              Facebook
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/hayden-young-atp/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://twitter.com/haydenyounglex' target='_blank' rel='noreferrer'>
              Twitter
            </a>
          </li>
          <li>
            <a href='https://github.com/ztlhayden' target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
