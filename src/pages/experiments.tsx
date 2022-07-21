import React from "react";
import { graphql } from "gatsby";

import { Layout, SEO, Link } from "../components";
import { rhythm } from "../Typography";

const ExperimentItem = ({ node }) => {
  const {
    frontmatter: { path, title },
  } = node;
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
    </li>
  );
};

const ExperimentsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const pastItems = edges.filter(({ node }) => !node.frontmatter.active);
  const activeItems = edges.filter(({ node }) => node.frontmatter.active);
  return (
    <Layout>
      <SEO title="Experiments" keywords={["projects", "experiments"]} />
      <h1>Experiments</h1>
      {activeItems.length > 0 ? (
        <>
          <h4>Active personal projects</h4>
          <ul css={STYLES.list}>
            {activeItems.map((edge) => (
              <ExperimentItem node={edge.node} />
            ))}
          </ul>
        </>
      ) : null}
      <h4>Previous personal projects</h4>
      <ul css={STYLES.list}>
        {pastItems.map((edge) => (
          <ExperimentItem node={edge.node} />
        ))}
      </ul>

      <Link to="/">← Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query ExperimentsPages {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "experiments" } } }
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
  },
};

export default ExperimentsPage;
