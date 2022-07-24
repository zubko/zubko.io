import { graphql } from "gatsby";
export { ExperimentsPage as default } from "../features/experiments/ExperimentsPage";

export const query = graphql`
  query ExperimentsPages {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "experiments" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            active
            tags
          }
        }
      }
    }
  }
`;
