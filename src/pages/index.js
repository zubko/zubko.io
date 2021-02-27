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
        My name is Alexander. I'm a Mobile & Web Developer with Node.js skills.
      </p>
      <p>
        This website is a tool to share{' '}
        <Link to="/blog">my experiences and thoughts in my work</Link>. Also I
        keep a list of my <Link to="/projects">projects</Link> and my{' '}
        <Link useAnchor to="/CV-Alexander-Zubko-Mobile-Web.pdf">
          most recent CV
        </Link>{' '}
        here.
      </p>
      <p>
        Also I'm learning constantly, so I keep a list of{' '}
        <Link to="/learning">books and courses</Link> that I'm taking with a
        little bit of review of the ones that I finished.
      </p>
      <h2>Recent posts</h2>
      <div>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path} css={{ marginBottom: '1rem' }}>
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

export default IndexPage;
