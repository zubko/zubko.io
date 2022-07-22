import {
  faAndroid,
  faApple,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, PageProps } from "gatsby";

import { Layout, Link, SEO } from "../components";
import { rhythm } from "../Typography";

type WorkNode = {
  readonly frontmatter: {
    readonly title: string;
    readonly path: string;
    readonly date: string;
    readonly active: boolean;
    readonly tags: ReadonlyArray<string>;
  };
};

const TAG_TO_ICON = {
  "React Native": faReact,
  Android: faAndroid,
  iOS: faApple,
  React: faReact
};

const AVAILABLE_ICONS = Object.keys(TAG_TO_ICON);

const TAG_SORT = (a: string, b: string) =>
  a.toLowerCase().localeCompare(b.toLowerCase());

const ProjectItem = ({ node }: { node: WorkNode }) => {
  const {
    frontmatter: { path, tags, title }
  } = node;
  const sortedTags = [...tags].sort(TAG_SORT);
  return (
    <li key={path}>
      <Link to={path}>
        {title}
        {sortedTags.map(tag => (
          <ProjectIcon key={tag} tag={tag} />
        ))}
      </Link>
    </li>
  );
};

const ProjectIcon = ({ tag }: { tag: string }) => {
  if (!AVAILABLE_ICONS.includes(tag)) {
    return null;
  }
  return (
    <FontAwesomeIcon
      css={STYLES.platformIcon}
      // @ts-expect-error: Check after updating fontawesome to the latest version
      icon={TAG_TO_ICON[tag]}
      width={18}
      height={18}
    />
  );
};

const WorkPage = ({ data }: PageProps<Queries.WorkPagesQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const pastProjects = edges.filter(({ node }) => !node.frontmatter?.active);
  const activeProjects = edges.filter(({ node }) => node.frontmatter?.active);
  return (
    <Layout>
      <SEO title="Work" keywords={["projects", "work"]} />
      <h1>Work</h1>
      {activeProjects.length > 0 ? (
        <>
          <h4>Active projects</h4>
          <ul css={STYLES.list}>
            {activeProjects.map(edge => (
              <ProjectItem node={edge.node as WorkNode} />
            ))}
          </ul>
        </>
      ) : null}
      <h4>Some previous full-time projects and contract work</h4>
      <ul css={STYLES.list}>
        {pastProjects.map(edge => (
          <ProjectItem node={edge.node as WorkNode} />
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
    marginLeft: rhythm(0.5)
  },
  platformIcon: {
    width: "1em",
    height: "1em",
    marginLeft: rhythm(0.1)
  }
};

export default WorkPage;
