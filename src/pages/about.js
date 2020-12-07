import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/util/SEO'

import BioImg from '../components/atoms/QueryImages/BioImg'

export default () => (
  <Layout>
    <SEO title='About' description='About Deadhead.Design. Who are we? How did we start?' />
    <div className='container m-auto'>
      <h1 className='m-10 text-center text-3xl font-semibold'>About Me</h1>
      <div className='flex flex-wrap justify-center'>
        <BioImg className='max-w-sm w-4/5 lg:mr-10 mb-5' />
        <div className='max-w-sm'>
          <h2 className='text-center text-lg font-semibold'>Hayden Young, Owner</h2>
          <p className='m-3'>
            While computers and code have always fascinated me, I initially took a different path
            and got my start in professional aviation at 18. After working for various local
            companies as a pilot, consultant, and instructor, I then shifted to a position at a
            regional airline. When I found myself made redundant in Fall of 2020, I decided to start
            my own business.
          </p>
          <p className='m-3'>
            In my time off, I enjoy cooking, biking, camping, photography, and a cold Ale-8-One.
          </p>
          <p className='m-3'>
            Many companies invest money and time in marketing that does not produce results. I
            realized I could use my skills in education and technical fields to identify problems
            and create solutions that do make an impact.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
