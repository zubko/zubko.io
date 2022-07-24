import { graphql } from "gatsby";

export { BlogPage as default } from "../features/blog/BlogPage";

export const query = graphql`
  query BlogPage {
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
            date
          }
        }
      }
    }
  }
`;
