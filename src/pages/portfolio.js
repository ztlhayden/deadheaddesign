import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/util/SEO'
import PortfolioItems from '../components/Portfolio/PortfolioItems'
import ImgHaydenYoungMe from '../components/Portfolio/portfolio_photos/ImgHaydenYoungMe'
import ImgRiverOfLife from '../components/Portfolio/portfolio_photos/ImgRiverOfLife'
import ImgBonAppeAirplane from '../components/Portfolio/portfolio_photos/ImgBonAppeAirline'
import ImgTidyTim from '../components/Portfolio/portfolio_photos/ImgTidyTim'

export default () => (
  <Layout>
    <SEO
      title='Past Work'
      description="See Deadhead.Design's growing portfolio of great print, branding, and web design work."
    />
    <div className='container m-auto'>
      <h1 className='m-10 text-center text-3xl font-semibold'>Check out these great projects.</h1>
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
        <PortfolioItems name='Tidy Tim Cleaning Company' url='https://tidytimcleaning.com'>
          <ImgTidyTim />
        </PortfolioItems>
      </div>
    </div>
  </Layout>
)
