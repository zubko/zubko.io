import React from "react";

import { Layout, SEO, Link } from "../components";

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`]} />
    <h2>About Me</h2>
    <p>Longer intro will be here...</p>
    <Link to="/">← Home</Link>
  </Layout>
);

export default AboutPage;
