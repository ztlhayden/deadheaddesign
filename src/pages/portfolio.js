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
      <div className='flex flex-wrap justify-around'>
        <PortfolioItems name='My Online Resume' url='https://haydenyoung.me/'>
          <ImgHaydenYoungMe />
        </PortfolioItems>
        <PortfolioItems name='River of Life Church' url='https://myriveroflifechurch.com'>
          <ImgHaydenYoungMe />
        </PortfolioItems>
        <PortfolioItems name='Bon Appe Airplane' url='https://bonappeairplane.com/'>
          <ImgHaydenYoungMe />
        </PortfolioItems>
        <PortfolioItems name='GitHub' url='https://github.com/ztlhayden'>
          <ImgHaydenYoungMe />
        </PortfolioItems>
        <PortfolioItems name='CodePen' url='https://codepen.io/ztlhayden'>
          <ImgHaydenYoungMe />
        </PortfolioItems>
      </div>
    </div>
  </Layout>
)
