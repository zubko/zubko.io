import React from 'react';
import Link from 'gatsby-link';

import { Layout, SEO } from '../components';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`portfolio`]} />
    <h2>Portfolio</h2>
    <p>List of previous works</p>
    <Link to="/">← Home</Link>
  </Layout>
);

export default PortfolioPage;
