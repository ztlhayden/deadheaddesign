import React from 'react';

import Layout from '../components/layout/Layout';
import PortfolioItems from '../components/PortfolioItems';

export default () => (
  <Layout>
    <div className="container m-auto">
      <h1 className="m-10 text-center text-3xl font-semibold">Portfolio</h1>
      <PortfolioItems />
    </div>
  </Layout>
);
