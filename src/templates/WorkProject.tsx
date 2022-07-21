import { graphql } from "gatsby";

import { Layout, SEO } from "../components";
import BottomNavigation from "../components/BottomNavigation";
import { Styles } from "../Theme";

const Template = ({ data, pageContext }: Object) => {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data;
  const {
    frontmatter: { title },
  } = post;
  return (
    <Layout>
      {/* TODO: add tags from post */}
      <SEO title={title} keywords={[]} />
      <h1>{title}</h1>
      <div
        css={Styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <BottomNavigation
        next={next && next.frontmatter}
        prev={prev && prev.frontmatter}
        back={{ title: "Work", path: "/work" }}
      />
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query WorkProjectByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
