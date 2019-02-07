import React from 'react';

import { Layout, SEO, AsciiEmail, Link } from '../components';

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
