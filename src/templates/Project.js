// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { Styles } from '../Theme';
import { Layout, SEO, Link } from '../components';

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
      <h1>{title}</h1>
      <div
        css={Styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <p>
        {next && (
          <span>
            Next:{' '}
            <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
          </span>
        )}
      </p>
      <p>
        {prev && (
          <span>
            Prev:{' '}
            <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
          </span>
        )}
      </p>
      <p>
        <Link to="/projects">← Projects</Link>
      </p>
    </Layout>
  );
};

export default Template;

export const postQuery = graphql`
  query ProjectByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
