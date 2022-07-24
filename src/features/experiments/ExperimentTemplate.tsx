import { graphql, PageProps } from "gatsby";

import { BottomNavigation } from "../../components/BottomNavigation";
import { Seo } from "../../components/Seo";
import { CollectionPageContext } from "../../createPagesForCollection";
import { Styles } from "../../Theme";
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
  pageContext
}: PageProps<Queries.ExperimentByPathQuery, CollectionPageContext>) => {
  const { next, prev } = pageContext;
  const post = data.markdownRemark as PostData;
  const {
    frontmatter: { title }
  } = post;
  return (
    <Layout>
      {/* TODO: add tags from item */}
      <Seo title={title} keywords={[]} />
      <h1>{title}</h1>
      <div
        css={Styles.markdown}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <BottomNavigation
        next={next && next.frontmatter}
        prev={prev && prev.frontmatter}
        back={{ title: "Experiments", path: "/experiments" }}
      />
    </Layout>
  );
};

export default Template;

export const query = graphql`
  query ExperimentByPath($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
