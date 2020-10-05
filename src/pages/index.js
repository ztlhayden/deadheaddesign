import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
//import CustomerCard from '../components/CustomerCard';
//import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
//import StatsBox from '../components/StatsBox';
//import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { ReactComponent as WebSearchPage } from '../assets/img/web_search_page.svg';
import { ReactComponent as GraphColor } from '../assets/img/graph_color.svg';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Imagine your stunning new website
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            You need a strong web presence and we are here to help your dreams come to life. Hand developed,
            developed, personalized websites meet your needs and deliver consistancy with your brand
            image.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Request Quote</Button>
          </p>
          <p className="mt-4 text-gray-600">Free personal consultations</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">The web, personalized</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Businesses</p>
              <p className="mt-4">
                Give your clients the information they need and new ways to engage with interactive web applications.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Individuals</p>
              <p className="mt-4">
                Loudly tell the world who you are both personally and professionally with a landing page that is 100% you.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Groups</p>
              <p className="mt-4">
                Stand out in recruiting while giving your members and organizers the tools they need to meet most effectively.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Design Help</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Be involved in your design, without doing the heavy lifting. Explain your needs and remain in the loop every step of the way so you can see your vision in your browser.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search Engine Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Your website looks amazing, but people need to see it. Advanced SEO features baked in will pull it to the top of searches.
          </p>
        </div>
      }
      secondarySlot={<WebSearchPage />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Marketing Analytics
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            The users visiting your site are your customers. Glean valuable marketing information from site analytics to see how business is effected.
          </p>
        </div>
      }
      secondarySlot={<GraphColor />}
    />
    {/* <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>/*}{/*
    <section id="testimonials" className="py-20 lg:py-40">
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
    <section className="container mx-auto my-20 py-24 bg-contrast_dark text-white bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Schedule a time for a free design consultation and quote.
      </p>
      <p className="mt-8">
        <Button size="xl">Schedule Now</Button>
      </p>
    </section>
  </Layout>
);
