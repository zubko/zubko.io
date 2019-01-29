// @flow

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Template = ({ data, pageContext }: Object) => {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data;
  const {
    frontmatter: { title },
  } = post;
  return (
    <Layout>
      {/* TODO: add tags from post */}
      <SEO title={title} keywords={[]} />
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div style={{ marginBottom: '1rem', fontFamily: 'avenir' }}>
          {next && <Link to={next.frontmatter.path}>Next</Link>}
        </div>
        <div style={{ marginBottom: '1rem', fontFamily: 'avenir' }}>
          {prev && <Link to={prev.frontmatter.path}>Prev</Link>}
        </div>
      </div>
    </Layout>
  );
};

export default Template;

export const postQuery = graphql`
  query BlogPostByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
