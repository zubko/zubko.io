import { graphql, PageProps } from "gatsby";
import styled from "styled-components";
import { Ampersand } from "../components/Ampersand";

import { Link } from "../components/Link";
import { Seo } from "../components/Seo";
import { Layout } from "../features/layout/Layout";

type PostData = {
  readonly frontmatter: {
    readonly path: string;
    readonly title: string;
  };
};

const IndexPage = ({ data }: PageProps<Queries.HomePageQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const nodes = edges.map(({ node }) => node as PostData);
  return (
    <Layout>
      <Seo
        title="Home"
        keywords={[
          `Zubko`,
          `Alexander`,
          `iOS Developer`,
          `Android Developer`,
          `React Native Developer`,
        ]}
      />
      <h2>Hello</h2>
      <p>
        My name is Alexander. I&apos;m a Mobile <Ampersand /> Web Developer with
        Node.js skills.
      </p>
      <p>
        This website is a tool to share{" "}
        <Link to="/blog">my experiences and thoughts on my work</Link>. You can
        see my{" "}
        <Link useAnchor to="/CV-Alexander-Zubko-Mobile-Web.pdf">
          most recent CV
        </Link>{" "}
        here.
      </p>
      <h2>Recent blog posts</h2>
      <div>
        {nodes.map((node) => {
          const { frontmatter } = node;
          return (
            <BlogPostItem key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </BlogPostItem>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fields: { collection: { eq: "blog" } }
        frontmatter: { hidden: { ne: true } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const BlogPostItem = styled.div`
  margin-bottom: 1rem;
`;

export default IndexPage;
