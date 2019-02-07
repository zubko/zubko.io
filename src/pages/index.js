import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Link } from '../components';

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
        <Link to="/blog">my experiences and thoughts in my work</Link>. Also I
        keep my <Link to="/portfolio">portfolio</Link> and my{' '}
        <Link useAnchor to="/CV-Alexander-Zubko-iOS-Android-ReactNative.pdf">
          most recent CV
        </Link>{' '}
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
