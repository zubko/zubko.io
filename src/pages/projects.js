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
      <h2>Projects</h2>
      <p>Active projects</p>
      {activeProjects.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <p key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </p>
        );
      })}
      <p>List of previous works</p>
      {pastProjects.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <p key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </p>
        );
      })}
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
