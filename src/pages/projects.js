import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Link } from '../components';
import { rhythm } from '../Typography';

const AVAILABLE_ICONS = ['React Native', 'Android', 'iOS'];

const TAG_TO_ICON = tag =>
  `/images/${tag.toLowerCase().replace(/\s/g, '-')}.svg`;

const TAG_SORT = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

const ProjectItem = ({ node }) => {
  const {
    frontmatter: { path, tags = [], title },
  } = node;
  const sortedTags = [...tags].sort(TAG_SORT);
  return (
    <li key={path}>
      {sortedTags.map(tag =>
        AVAILABLE_ICONS.includes(tag) ? (
          <img src={TAG_TO_ICON(tag)} css={STYLES.platformIcon} key={tag} />
        ) : null,
      )}
      <Link to={path}>{title}</Link>
    </li>
  );
};

const ProjectsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const pastProjects = edges.filter(({ node }) => !node.frontmatter.active);
  const activeProjects = edges.filter(({ node }) => node.frontmatter.active);
  return (
    <Layout>
      <SEO title="Projects" keywords={['projects', 'portfolio']} />
      <h1>Projects</h1>
      {activeProjects.length > 0 ? (
        <>
          <h4>Active projects</h4>
          <ul css={STYLES.list}>
            {activeProjects.map(edge => (
              <ProjectItem node={edge.node} />
            ))}
          </ul>
        </>
      ) : null}
      <h4>List of previous works</h4>
      <ul css={STYLES.list}>
        {pastProjects.map(edge => (
          <ProjectItem node={edge.node} />
        ))}
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
            tags
          }
        }
      }
    }
  }
`;

const STYLES = {
  list: {
    marginLeft: rhythm(0.5),
    listStyle: 'none',
  },
  platformIcon: {
    display: 'inline',
    marginBottom: 0,
    verticalAlign: 'text-bottom',
    marginRight: rhythm(0.1),
    height: '1.3em',
  },
};

export default ProjectsPage;
