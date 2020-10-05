import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../assets/icon/dd_icon.svg';

const Header = () => (
  <header className="sticky top-0 bg-contrast_dark text-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-4">
          <Link to="/">
          <img src={LogoIcon} atl='' />
          </Link>
        </div>
        <Link to="/" className="text-white hover:text-contrast_dark_lighter">Deadhead.Design</Link>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4 text-contrast_dark_lighter hover:text-white" to="/features/">
          Features
        </Link>
        <Link className="px-4 text-contrast_dark_lighter hover:text-white" to="/services/">
          Services
        </Link>
        <Link className="px-4 text-contrast_dark_lighter hover:text-white" to="/about/">
          About
        </Link>
        <Link className="px-4 text-contrast_dark_lighter hover:text-white" to="/portfolio/">
          Portfolio
        </Link>
      </div>
      <div className="hidden md:block">
      </div>
    </div>
  </header>
);

export default Header;
