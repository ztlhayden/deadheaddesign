import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'
import PortfolioItems from '../components/PortfolioItems'
import ImgHaydenYoungMe from '../components/portfolio_photos/ImgHaydenYoungMe'
import ImgRiverOfLife from '../components/portfolio_photos/ImgRiverOfLife'
import ImgBonAppeAirplane from '../components/portfolio_photos/ImgBonAppeAirline'
import ImgCodePen from '../components/portfolio_photos/ImgCodePen'

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
          <ImgRiverOfLife />
        </PortfolioItems>
        <PortfolioItems name='Bon Appe Airplane' url='https://bonappeairplane.com/'>
          <ImgBonAppeAirplane />
        </PortfolioItems>
        <PortfolioItems name='CodePen Examples' url='https://codepen.io/ztlhayden'>
          <ImgCodePen />
        </PortfolioItems>
      </div>
    </div>
  </Layout>
)
