import styled from "@emotion/styled";
import { PageProps } from "gatsby";

import { Link } from "../../components/Link";
import { Seo } from "../../components/Seo";
import { rhythm } from "../../Typography";
import { Layout } from "../layout/Layout";

type ExperimentNode = {
  readonly frontmatter: {
    readonly title: string;
    readonly path: string;
    readonly date: string;
    readonly active: boolean;
    readonly tags: string[];
  };
};

export const ExperimentsPage = ({
  data
}: PageProps<Queries.ExperimentsPagesQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const nodes = edges.map(({ node }) => node as ExperimentNode);
  const pastItems = nodes.filter(node => !node.frontmatter.active);
  const activeItems = nodes.filter(node => node.frontmatter.active);
  return (
    <Layout>
      <Seo title="Experiments" keywords={["projects", "experiments"]} />
      <h1>Experiments</h1>
      {activeItems.length > 0 ? (
        <>
          <h4>Active personal projects</h4>
          <List>
            {activeItems.map(node => (
              <ExperimentItem key={node.frontmatter.path} node={node} />
            ))}
          </List>
        </>
      ) : null}
      <h4>Previous personal projects</h4>
      <List>
        {pastItems.map(node => (
          <ExperimentItem key={node.frontmatter.path} node={node} />
        ))}
      </List>

      <Link to="/">← Home</Link>
    </Layout>
  );
};

const ExperimentItem = ({ node }: { node: ExperimentNode }) => {
  const {
    frontmatter: { path, title }
  } = node;
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
    </li>
  );
};

const List = styled.ul`
  margin-left: ${rhythm(0.5)};
`;
