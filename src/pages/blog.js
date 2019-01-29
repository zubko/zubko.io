// @flow

import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

import { Layout, SEO } from '../components';

const BlogPage = ({ data }: Object) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" keywords={[`iOS`, `Android`, `React Native`]} />
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
      <Link to="/">← Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
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

export default BlogPage;
