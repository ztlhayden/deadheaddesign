import React from 'react'
import GlobalStyle from './GlobalStyles/GlobalStyle'
import Footer from './Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
  return (
    <body>
      <GlobalStyle />
      <Header />
      <main className='text-grey=-900'>{children}</main>
      <Footer />
    </body>
  )
}

export default Layout
