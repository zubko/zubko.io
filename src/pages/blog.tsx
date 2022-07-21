import { graphql } from "gatsby";
import React from "react";

import { Layout, Link, SEO } from "../components";

const BlogPage = ({ data }: Object) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Blog" keywords={[`iOS`, `Android`, `React Native`]} />
      <h1>Posts</h1>
      <div>
        {edges.map((edge) => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} css={{ marginBottom: "1rem" }}>
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { collection: { eq: "posts" } }
        frontmatter: { hidden: { ne: true } }
      }
    ) {
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
