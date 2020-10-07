import React from 'react';

import Layout from '../components/layout/Layout';
import PortItem from '../components/PortItem';

import haydenyoungme from '../assets/img/haydenyoungme.png';

export default () => (
  <Layout>
    <div className="container m-auto">
      <h1 className="m-10 text-center text-3xl font-semibold">Porfolio</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-around">
          <PortItem
            title="Hayden's Resume Site"
            site="https://haydenyoung.me"
            src={haydenyoungme}
          />
        </div>
      </div>
    </div>
  </Layout>
);
