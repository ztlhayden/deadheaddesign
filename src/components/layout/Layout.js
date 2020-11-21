import React from 'react'
import Footer from './Footer'
import Header from './Header'

import '../../styles/styles.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='text-grey=-900'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
