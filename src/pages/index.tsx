import { graphql, PageProps } from "gatsby";
import styled from "styled-components";

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
        My name is Alexander. I&apos;m a Mobile & Web Developer with Node.js
        skills.
      </p>
      <p>
        This website is a tool to share{" "}
        <Link to="/blog">my experiences and thoughts on my work</Link>. And I
        keep a list of my{" "}
        <Link to="/work">full time projects and contract work</Link> and my{" "}
        <Link useAnchor to="/CV-Alexander-Zubko-Mobile-Web.pdf">
          most recent CV
        </Link>{" "}
        here.
      </p>
      <p>
        Also I like to learn new things in development, so I keep a list of{" "}
        <Link to="/learning">books and courses</Link> that I&apos;m taking or
        took. And I&apos;m tracking{" "}
        <Link to="/experiments">the list of my hobby projects and code</Link> on
        this website as well.
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
