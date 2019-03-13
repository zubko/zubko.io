import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO, Link } from '../components';

const ProjectsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const pastProjects = edges.filter(({ node }) => !node.frontmatter.active);
  const activeProjects = edges.filter(({ node }) => node.frontmatter.active);
  return (
    <Layout>
      <SEO title="Projects" keywords={['projects', 'portfolio']} />
      <h1>Projects</h1>
      <h4>Active projects</h4>
      <ul>
        {activeProjects.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
      <h4>List of previous works</h4>
      <ul>
        {pastProjects.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">← Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query ProjectPages {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            active
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
