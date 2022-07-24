import styled from "@emotion/styled";

import { Link } from "../../components/Link";

import { ProjectIcon } from "./ProjectIcon";
import { WorkNode } from "./types";

const TagSort = (a: string, b: string) =>
  a.toLowerCase().localeCompare(b.toLowerCase()) * -1;

export const ProjectItem = ({ node }: { node: WorkNode }) => {
  const {
    frontmatter: { path, tags, title }
  } = node;
  const sortedTags = [...tags].sort(TagSort);
  return (
    <li key={path}>
      <Link to={path}>
        <Title>{title}</Title>
        {sortedTags.map(tag => (
          <ProjectIcon key={tag} tag={tag} />
        ))}
      </Link>
    </li>
  );
};

const Title = styled.span`
  margin-right: 0.2em;
`;
