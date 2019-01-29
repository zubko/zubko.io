import React from 'react';
import Link from 'gatsby-link';

import { Layout, SEO, AsciiEmail } from '../components';

const ContactsPage = () => (
  <Layout>
    <SEO title="Contacts" keywords={[`contacts`]} />
    <h2>Contacts</h2>
    <p>You can reach me here:</p>
    <AsciiEmail />
    <Link to="/">← Home</Link>
  </Layout>
);

export default ContactsPage;
