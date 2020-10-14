import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

import bio from '../assets/img/IMG_9623.jpg';

export default () => (
  <Layout>
    <SEO title="About"/>
    <div className="container m-auto">
      <h1 className="m-10 text-center text-3xl font-semibold">About Me</h1>
      <div className="flex flex-wrap justify-center">
        <div>
          <img className="max-w-xs mr-5" src={bio} alt="Hayden Young" />
        </div>
        <div className="max-w-sm">
          <h2 className="text-center text-lg font-semibold">Hayden Young, Owner</h2>
          <p className="m-3">
            While computers and code have always fascinated me, I initially took a different path
            and got my start in professional aviation at 18. After working for various local
            companies as a pilot, consultant, and instructor, I then shifted to a position at a
            regional airline. When I found myself made redundant in Fall of 2020, I decided to start
            Deadhead.Designs.
          </p>
          <p className="m-3">
            In my time off, I enjoy cooking, biking, camping, photography, and a cold Ale-8-One.
          </p>
          <p className="m-3">
            But why pick Deadhead.Design? My experiences in web design, technical writing, and
            instructing make me a great resource. I am excited to learn about your business and
            vision and to build innovative ways to circulate to new customers.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);
