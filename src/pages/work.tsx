import React from "react";
import { graphql } from "gatsby";

import { Layout, SEO, Link } from "../components";
import { rhythm } from "../Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const TAG_TO_ICON = {
  "React Native": faReact,
  Android: faAndroid,
  iOS: faApple,
  React: faReact,
};

const AVAILABLE_ICONS = Object.keys(TAG_TO_ICON);

const TAG_SORT = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

const ProjectItem = ({ node }) => {
  const {
    frontmatter: { path, tags = [], title },
  } = node;
  const sortedTags = [...tags].sort(TAG_SORT);
  return (
    <li key={path}>
      <Link to={path}>
        {title}
        {sortedTags.map((tag) =>
          AVAILABLE_ICONS.includes(tag) ? <ProjectIcon tag={tag} /> : null
        )}
      </Link>
    </li>
  );
};

const ProjectIcon = ({ tag }) => {
  return (
    <FontAwesomeIcon
      css={STYLES.platformIcon}
      icon={TAG_TO_ICON[tag]}
      width={18}
      height={18}
    />
  );
};

const WorkPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const pastProjects = edges.filter(({ node }) => !node.frontmatter.active);
  const activeProjects = edges.filter(({ node }) => node.frontmatter.active);
  return (
    <Layout>
      <SEO title="Work" keywords={["projects", "work"]} />
      <h1>Work</h1>
      {activeProjects.length > 0 ? (
        <>
          <h4>Active projects</h4>
          <ul css={STYLES.list}>
            {activeProjects.map((edge) => (
              <ProjectItem node={edge.node} />
            ))}
          </ul>
        </>
      ) : null}
      <h4>Some previous full-time projects and contract work</h4>
      <ul css={STYLES.list}>
        {pastProjects.map((edge) => (
          <ProjectItem node={edge.node} />
        ))}
      </ul>

      <Link to="/">← Home</Link>
    </Layout>
  );
};

export const query = graphql`
  query WorkPages {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "work" } } }
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
  platformIcon: {
    width: "1em",
    height: "1em",
    marginLeft: rhythm(0.1),
  },
};

export default WorkPage;
