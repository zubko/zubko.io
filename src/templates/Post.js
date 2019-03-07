// @flow

import React from 'react';
import { graphql } from 'gatsby';

import { Styles } from '../Theme';
import { Layout, SEO, Link } from '../components';
import { rhythm } from '../Typography';

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
        <div
          css={Styles.markdown}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div css={{ marginBottom: rhythm(1) }}>
          {next && (
            <span>
              Next: <br />
              <Link to={next.frontmatter.path}>{next.frontmatter.title} →</Link>
            </span>
          )}
        </div>
        <div css={{ marginBottom: rhythm(1) }}>
          {prev && (
            <span>
              Prev: <br />
              <Link to={prev.frontmatter.path}>← {prev.frontmatter.title}</Link>
            </span>
          )}
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
