import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import PortfolioItems from '../components/PortfolioItems'
import ImgHaydenYoungMe from '../components/ImgHaydenYoungMe'

export default () => (
  <Layout>
    <SEO title='Past Work' />
    <div className='container m-auto'>
      <h1 className='m-10 text-center text-3xl font-semibold'>Portfolio</h1>
      <PortfolioItems name='My Online Resume' url='https://haydenyoung.me/'>
        <ImgHaydenYoungMe />
      </PortfolioItems>
    </div>
  </Layout>
)
