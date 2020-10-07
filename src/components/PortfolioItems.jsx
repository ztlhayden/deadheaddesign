import React from 'react';
import hayden from '../assets/img/haydenyoungme.png';

const PortfolioItems = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="bg-bright_white max-w-xs w-full text-center rounded shadow-md">
        <a href="https://haydenyoung.me">
          <h3 className="font-semibold text-lg mt-1 mb-5">Hayden&apos;s Resume Site</h3>
          <img className="center w-11/12 m-auto z-50" src={hayden} alt="Hayden's Resume Site" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItems;
