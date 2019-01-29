import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Zubko`,
          `Alexander`,
          `iOS Developer`,
          `Android Developer`,
          `React Native Developer`,
        ]}
      />
      <h2>Hello</h2>
      <p>
        My name is Alexander. I'm a fan of technology and I'm programming from
        my early age. In the recent time I concentrate my efforts mostly on iOS
        and Android native and React Native development and Web development with
        React.
      </p>
      <p>
        This website as a tool to share{' '}
        <a href="blog/">my experiences and thoughts in my work</a>. Also I keep
        my <a href="portfolio/">portfolio</a> and my{' '}
        <a href="/CV-Alexander-Zubko-iOS-Android-ReactNative.pdf">
          most recent CV
        </a>{' '}
        here.
      </p>
      <h2>Menu</h2>
      <p>
        <Link to="/about/">About</Link>
        <br />
        <Link to="/blog/">Blog</Link>
        <br />
        <Link to="/portfolio/">Portfolio</Link>
        <br />
        <Link to="/contacts/">Contacts</Link>
        <br />
      </p>
      <h2>Posts</h2>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} style={{ marginBottom: '1rem' }}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
