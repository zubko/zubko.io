import { graphql } from "gatsby";

export { WorkPage as default } from "../features/work/WorkPage";

export const query = graphql`
  query WorkPages {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "work" } } }
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
