import React from 'react';
import Link from 'gatsby-link';

import { Layout, SEO } from '../components';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`]} />
    <h2>About Me</h2>
    <p>Longer intro will be here...</p>
    <Link to="/">← Home</Link>
  </Layout>
);

export default AboutPage;
