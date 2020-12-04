import React from 'react'

import SEO from '../components/util/SEO'
import Button from '../components/atoms/Button'
import Card from '../components/atoms/Card'
// import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/atoms/LabelText'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/molecules/SplitSection'
import StatsBox from '../components/molecules/StatsBox'
// import customerData from '../data/customer-data';

import HeroImg from '../components/atoms/QueryImages/HeroImg'
import WebSearchPage from '../assets/img/web_search_page.svg'
import graph from '../assets/img/graph_color.svg'
import SiteBeforeAfter from '../assets/img/site_beforeafter.svg'
import PagePen from '../assets/img/page_pen_content.svg'

import { H3, H2 } from '../components/atoms/typo'

export default () => (
  <Layout>
    <SEO title='Web Design and Marketing in Lexington Kentucky' />
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto px-8 lg:flex'>
        <div className='text-center lg:text-left lg:w-1/2 lg:mr-10 mb-10'>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold leading-none'>
            Soar to new heights
          </h1>
          <p className='text-xl lg:text-2xl mt-6 font-light'>
            Deadhead.Design is a web development and marketing company in Lexington, Kentucky. I
            love solving problems to help other small businesses grow.
          </p>
          <p className='mt-6 md:mt-10'>
            <Button size='lg'>Schedule Meeting</Button>
          </p>
          <p className='mt-4 text-gray-600'>Free consultations</p>
        </div>
        <div className='lg:w-1/2'>
          <HeroImg />
        </div>
      </div>
    </section>

    <section id='services' className='py-20 lg:pb-40 lg:pt-48'>
      <div className='container mx-auto text-center'>
        <H2>Solution Based Marketing Plan</H2>
        <div className='flex flex-col sm:flex-row sm:-mx-3 mt-12'>
          <div className='flex-1 px-3'>
            <Card>
              <H3>Social Media Management</H3>
              <p>
                Drive engagement with regular content that is aligned with your brand and goals, but
                without all the hard work.
              </p>
            </Card>
          </div>
          <div className='flex-1 px-3'>
            <Card>
              <H3>Web Design</H3>
              <p>
                The cornerstone of your digital marketing, with the unique features your business
                needs to turn visitors into customers.
              </p>
            </Card>
          </div>
          <div className='flex-1 px-3'>
            <Card>
              <H3>Branding and Print Design</H3>
              <p>
                Fully custom print and digital graphic design to ensure your brand is consistent on
                every marketing channel.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      reverseOrder
      primarySlot={
        <div className='lg:pl-32 xl:pl-48'>
          <H2>Analyze</H2>
          <p className='mt-8 text-xl font-light leading-relaxed'>
            Get the most valuable information about your marketing and customers. See your
            investments make an impact.
          </p>
        </div>
      }
      secondarySlot={<img src={graph} alt='' className='object-contain' />}
    />

    <SplitSection
      primarySlot={
        <div className='lg:pr-32 xl:pr-48'>
          <H2>Decide</H2>
          <p className='mt-8 text-xl font-light leading-relaxed'>
            I meet with you often help you understand analytics. Here we will discuss when, how, and
            why we will adjust.
          </p>
        </div>
      }
      secondarySlot={<img src={PagePen} alt='' className='object-contain' />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className='lg:pl-32 xl:pl-48'>
          <H2>Deploy</H2>
          <p className='mt-8 text-xl font-light leading-relaxed'>
            Quickly get back to doing what you love to do, running your business, and let me put the
            plan we made into action.
          </p>
        </div>
      }
      secondarySlot={<img src={SiteBeforeAfter} alt='' className='object-contain' />}
    />

    <SplitSection
      primarySlot={
        <div className='lg:pr-32 xl:pr-48'>
          <H2>Repeat</H2>
          <p className='mt-8 text-xl font-light leading-relaxed'>
            I will be your partner, remaining on board for the long haul, to ensure the time and
            money spent never goes to waste.
          </p>
        </div>
      }
      secondarySlot={<img src={WebSearchPage} alt='' className='object-contain' />}
    />

    <section id='stats' className='py-20 lg:pt-32'>
      <div className='container mx-auto text-center'>
        <LabelText className='text-gray-600'>See The Results</LabelText>
        <div className='flex flex-col sm:flex-row mt-8 lg:px-24'>
          <div className='w-full sm:w-1/3'>
            <StatsBox primaryText='>60%' secondaryText='of Customers Prefer to Buy Online' />
          </div>
          <div className='w-full sm:w-1/3'>
            <StatsBox primaryText='>97%' secondaryText='of Customers Find Businesses Online' />
          </div>
          <div className='w-full sm:w-1/3'>
            <StatsBox primaryText='>57%' secondaryText='of Web Traffic is Mobile' />
          </div>
        </div>
      </div>
    </section>

    {/* <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}

    <section className='container mx-auto my-20 py-24 bg-contrast_dark text-white bg-gray-200 rounded-lg text-center'>
      <h3 className='text-5xl font-semibold'>Ready to Grow?</h3>
      <p className='mt-8 text-xl font-light'>Schedule a time to meet for a free consultation.</p>
      <p className='mt-8'>
        <Button size='xl'>Schedule Now</Button>
      </p>
    </section>
  </Layout>
)
