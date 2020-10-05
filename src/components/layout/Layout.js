import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='bg-white'>
      <Header />
      <main className="text-grey=-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
