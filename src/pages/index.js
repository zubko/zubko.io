import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my website.</p>
    <h2>Pages</h2>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/page-3/">Go to page 3</Link>
    </p>
    <h2>Posts</h2>
    <p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.frontmatter.path}>
          {node.frontmatter.title}
        </Link>
      ))}
    </p>
  </div>
);

export default IndexPage;

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
