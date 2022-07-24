import styled from "@emotion/styled";
import { PageProps } from "gatsby";

import { Link } from "../../components/Link";
import { Seo } from "../../components/Seo";
import { Layout } from "../layout/Layout";

type BlogPostNode = {
  readonly frontmatter: {
    readonly title: string;
    readonly path: string;
    readonly date: string;
  };
};

export const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.map(({ node }) => node as BlogPostNode);
  return (
    <Layout>
      <Seo title="Blog" keywords={[`iOS`, `Android`, `React Native`]} />
      <h1>Blog</h1>
      <div>
        {posts.map(node => {
          const { frontmatter } = node;
          return (
            <Title key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </Title>
          );
        })}
      </div>
      <Link to="/">← Home</Link>
    </Layout>
  );
};

const Title = styled.div`
  margin-bottom: 1rem;
`;
