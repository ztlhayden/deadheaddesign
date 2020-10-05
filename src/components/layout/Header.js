import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../assets/icon/dd_icon.svg';

const Header = () => (
  <header className="sticky top-0 bg-contrast_dark text-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-4">
          <img src={LogoIcon} atl='' />
        </div>
        Deadhead.Design
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-contrast_dark_lighter hover:text-white" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4 text-contrast_dark_lighter hover:text-white" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-contrast_dark_lighter hover:text-white" href="/about">
          About
        </AnchorLink>
        <AnchorLink className="px-4 text-contrast_dark_lighter hover:text-white" href="/portfolio">
          Portfolio
        </AnchorLink>
      </div>
      <div className="hidden md:block">
      </div>
    </div>
  </header>
);

export default Header;
