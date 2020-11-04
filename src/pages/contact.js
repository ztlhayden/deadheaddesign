import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

import PhoneIcon from '../assets/icon/phone.svg'
import ComputerIcon from '../assets/icon/computer.svg'
import Button from '../components/Button'
import Icon from '../components/icon'

export default () => (
  <Layout>
    <SEO title='Request Quote' />
    <div className='container m-auto'>
      <h1 className='text-3xl text-center mt-5 font-semibold'>Let&apos;s get coffee!</h1>
      <div className='max-w-md w-full p-3 ml-auto mr-auto mt-16 mb-20 bg-contrast_dark text-white shadow-md rounded flex flex-wrap justify-around content-center'>
        <h2 className='text-center font-semibold text-lg mt-auto mb-auto'>Schedule a Meeting</h2>
        <span className='text-center text-3xl mt-auto mb-auto'>&#10132;</span>
        <Button size='lg'>Contact Form</Button>
      </div>
      <div className='flex mt-5 justify-center'>
        <a
          className='mr-5'
          href='https://twitter.com/haydenyounglex'
          target='_blank'
          rel='noreferrer'
        >
          <Icon symbol='twitter' />
        </a>
        <a
          className='mr-5'
          href='https://linkedin.com/in/hayden-young-atp'
          target='_blank'
          rel='noreferrer'
        >
          <Icon symbol='linkedin' />
        </a>
        <a href='https://www.facebook.com/deadheadwebdesign' target='_blank' rel='noreferrer'>
          <Icon symbol='facebook' />
        </a>
      </div>
      <div className='min-w-100 m-auto flex flex-wrap justify-between'>
        <section className='max-w-sm w-full text-center ml-auto mr-auto mt-5'>
          <h2 className='font-semibold text-lg m-5'>Free Consultations</h2>
          <p>
            I always sit down with you to learn about your company and needs free of charge. We talk
            about past marketing approaches, and what your future goals are. Then I find ways to
            bring you to them.
          </p>
        </section>
        <section className='max-w-sm w-full text-center ml-auto mr-auto mt-5'>
          <h2 className='font-semibold text-lg m-5'>Reach Out</h2>
          <div className=''>
            <a className='block mb-3 m-auto' href='mailto:hayden@deadhead.design'>
              <img src={ComputerIcon} alt='' width='30' className='float-left mr-2' />
              <span className='underline'>hayden@deadhead.design</span>
            </a>
            <a className='block m-auto' href='tel:+18596840445'>
              <img src={PhoneIcon} alt='' width='30' className='float-left mr-2' />
              <span className='underline'>(859) 684-0445</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)
