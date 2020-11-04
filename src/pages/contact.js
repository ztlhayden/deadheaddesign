import React from 'react'

import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

import PhoneIcon from '../assets/icon/phone.svg'
import ComputerIcon from '../assets/icon/computer.svg'
import HookContactForm from '../components/HookContactForm'

export default () => (
  <Layout>
    <SEO title='Request Quote' />
    <div className='container m-auto'>
      <h1 className='text-3xl text-center mt-5 font-semibold'>Drop us a line!</h1>
      <div className='min-w-100 m-auto flex flex-wrap justify-between'>
        <section className='max-w-sm w-full text-center ml-auto mr-auto mt-5'>
          <h2 className='font-semibold text-lg m-5'>Free Quotes</h2>
          <p>
            Your quote will include a personal consultation and a design mock-up, all free of charge
            and with no obligation. However, I am confident you will love it, and look forward to
            working with you.
          </p>
        </section>
        <div className='max-w-sm w-full p-3 ml-auto mr-auto mt-5 bg-contrast_dark text-white shadow-md rounded'>
          <h2 className='text-center font-semibold text-lg'>Request an Email</h2>
          <HookContactForm />
        </div>
        <section className='max-w-sm w-full text-center ml-auto mr-auto mt-5'>
          <h2 className='font-semibold text-lg mt-5'>Reach Out</h2>
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
