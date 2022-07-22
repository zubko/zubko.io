import { graphql } from "gatsby";

export { LearningPage as default } from "../features/learning/LearningPage";

export const query = graphql`
  query LearningItems {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___fileSystemName] }
      filter: { fields: { collection: { eq: "learning" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            type
            author
            title
            year
            tags
            active
          }
        }
      }
    }
  }
`;
