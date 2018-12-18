import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello</h1>
    <p>
      My name is Alexander. I enjoy making apps and working with React Native
      and React.
    </p>
    <p>
      This website as a tool to share my experiences and thoughts in my work.
      Check out my <a href="blog/">blog</a>. Also I keep my{" "}
      <a href="portfolio/">portfolio</a> and my{" "}
      <a href="/CV-Alexander-Zubko-iOS-Android-ReactNative.pdf">
        most recent CV
      </a>.
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
  query GetRecentPosts {
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
