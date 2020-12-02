import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from './GlobalStyles/GlobalStyle'
import Footer from './Footer/Footer'
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
