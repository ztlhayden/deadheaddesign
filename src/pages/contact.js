import React from 'react'

import Layout from '../components/layout/Layout'

import PhoneIcon from '../assets/icon/phone.svg'
import ComputerIcon from '../assets/icon/computer.svg'

export default () => (
    <Layout>  
    <h1 className="text-3xl text-center m-10 font-semibold">Drop us a line!</h1>
    <div className="container m-auto flex flex-wrap justify-around">
      <section className="max-w-sm">
        <p>Free Quotes</p>
      </section>
      <form action="post" className="max-w-sm">
        <div>
          <label htmlFor="name" className="block mt-4 mb-1">Name:</label>
          <input type="text" name="name" id="name" className="w-full"/>
        </div>
        <div>
          <label htmlFor="email" className="block mt-4 mb-1">Email:</label>
          <input type="email" name="email" id="email" className="w-full"/>
        </div>
        <div>
          <label htmlFor="phone" className="block mt-4 mb-1">Phone:</label>
          <input type="tel" name="phone" id="phone" className="w-full"/>
        </div>
        <div>
          <label htmlFor="body" className="block mt-4 mb-1">What's on your mind?</label>
          <textarea name="body" id="body" cols="24" rows="5" className="w-full"/>
        </div>
          <button type="submit">Send</button>
      </form>
      <section className="max-w-sm">
        <a className="block" href="mailto:hayden@haydenyoung.me">
          <img src={ComputerIcon} alt="" width="50"/>
          hayden@haydenyoung.me
        </a>
        <a className="block" href="tel:+18596840445">
          <img src={PhoneIcon} alt="" width="50"/>
          (859) 684-0445
        </a>
      </section>
    </div>
    </Layout>
)