import { CreatePagesArgs } from "gatsby";
import path from "path";

type CreatePagesForCollectionArgs = {
  graphql: CreatePagesArgs["graphql"];
  actions: CreatePagesArgs["actions"];
  collection: string;
  sortOder: Queries.SortOrderEnum;
  template: string;
};

export const createPagesForCollection = async ({
  graphql,
  actions,
  collection,
  sortOder,
  template
}: CreatePagesForCollectionArgs) => {
  const { createPage } = actions;
  const templatePath = path.resolve(`src/templates/${template}.tsx`);

  const queryResult = await graphql(
    `
        query CreatePagesCollection {
          allMarkdownRemark(
            sort: { order: ${sortOder}, fields: [frontmatter___date] }
            filter: { fields: { collection: { eq: "${collection}" } } }
          ) {
            edges {
              node {
                frontmatter {
                  hidden
                  title
                  path
                  date
                  tags
                }
              }
            }
          }
        }
      `
  );

  const posts = queryResult.data.allMarkdownRemark.edges;

  const postsVisible = posts.filter(({ node }) => !node.frontmatter.hidden);
  const postsHidden = posts.filter(({ node }) => node.frontmatter.hidden);

  postsVisible.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: templatePath,
      context: {
        pathSlug: path,
        prev: index > 0 ? postsVisible[index - 1].node : null,
        next:
          index < postsVisible.length - 1 ? postsVisible[index + 1].node : null
      }
    });
  });

  postsHidden.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: templatePath,
      context: {
        pathSlug: path,
        prev: null,
        next: null
      }
    });
  });
};
