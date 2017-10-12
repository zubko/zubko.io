import React from "react";
import Link from "gatsby-link";

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog Page</h1>
    <h2>Posts</h2>
    <p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.frontmatter.path}>
          {node.frontmatter.title}
        </Link>
      ))}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default BlogPage;

export const postsQuery = graphql`
  query GetAllPosts {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
