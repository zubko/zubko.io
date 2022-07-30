import { graphql, PageProps } from "gatsby";

import { BottomNavigation } from "../../components/BottomNavigation";
import { Markdown } from "../../components/Markdown";
import { Seo } from "../../components/Seo";
import { CollectionPageContext } from "../../createPagesForCollection";
import { Layout } from "../layout/Layout";

type PostData = {
  readonly html: string;
  readonly frontmatter: {
    readonly path: string;
    readonly title: string;
  };
};

const Template = ({
  data,
  pageContext,
}: PageProps<Queries.BlogPostByPathQuery, CollectionPageContext>) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark as PostData;
  const {
    frontmatter: { title },
  } = post;
  return (
    <Layout>
      {/* TODO: add tags from post */}
      <Seo title={title} keywords={[]} />
      <div>
        <h1>{title}</h1>
        <Markdown htmlContent={post.html} />
        <BottomNavigation
          next={next && next.frontmatter}
          prev={prev && prev.frontmatter}
          back={{ title: "Blog", path: "/blog" }}
        />
      </div>
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query BlogPostByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
