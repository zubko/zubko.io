import { PageProps } from "gatsby";

import { Link } from "../../components/Link";
import { Seo } from "../../components/Seo";
import { rhythm } from "../../Typography";
import { Layout } from "../layout/Layout";
import { ProjectItem } from "./ProjectItem";
import { WorkNode } from "./types";

export const WorkPage = ({ data }: PageProps<Queries.WorkPagesQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const nodes = edges.map(({ node }) => node as WorkNode);
  const pastProjects = nodes.filter(node => !node.frontmatter.active);
  const activeProjects = nodes.filter(node => node.frontmatter.active);
  return (
    <Layout>
      <Seo title="Work" keywords={["projects", "work"]} />
      <h1>Work</h1>
      {activeProjects.length > 0 ? (
        <>
          <h4>Active projects</h4>
          <ul css={Styles.list}>
            {activeProjects.map(node => (
              <ProjectItem key={node.frontmatter.path} node={node} />
            ))}
          </ul>
        </>
      ) : null}
      <h4>Some previous full-time projects and contract work</h4>
      <ul css={Styles.list}>
        {pastProjects.map(node => (
          <ProjectItem key={node.frontmatter.path} node={node} />
        ))}
      </ul>

      <Link to="/">← Home</Link>
    </Layout>
  );
};

const Styles = {
  list: {
    marginLeft: rhythm(0.5)
  }
};
