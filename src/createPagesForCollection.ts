import { CreatePagesArgs } from "gatsby";

type CreatePagesForCollectionArgs = {
  graphql: CreatePagesArgs["graphql"];
  actions: CreatePagesArgs["actions"];
  collection: string;
  sortOder: Queries.SortOrderEnum;
  template: string;
};

type CollectionPageNode = {
  readonly frontmatter: {
    readonly title: string;
    readonly path: string;
    readonly date: string;
    readonly hidden: boolean | null;
  };
};

export type CollectionPageContext = {
  pathSlug: string;
  prev: CollectionPageNode | null;
  next: CollectionPageNode | null;
};

type CreatePagesCollectionQuery = {
  readonly allMarkdownRemark: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly frontmatter: {
          readonly title: string | null;
          readonly path: string | null;
          readonly date: string | null;
          readonly hidden: boolean | null;
          readonly tags: ReadonlyArray<string | null> | null;
        };
      };
    }>;
  };
};

export const createPagesForCollection = async ({
  graphql,
  actions,
  collection,
  sortOder,
  template
}: CreatePagesForCollectionArgs) => {
  const { createPage } = actions;

  const queryResult = await graphql<CreatePagesCollectionQuery>(
    `query CreatePagesCollection {
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
    }`
  );

  if (!queryResult.data) {
    throw Error(`No query data for collection ${collection}`);
  }

  const posts = queryResult.data.allMarkdownRemark.edges.map(edge => edge.node);
  const postsVisible = posts.filter(node => !node.frontmatter.hidden);
  const postsHidden = posts.filter(node => node.frontmatter.hidden);

  postsVisible.forEach((node, index) => {
    const { path } = node.frontmatter;
    if (!path) {
      throw Error(`No path for post ${node.frontmatter.title}`);
    }
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: index > 0 ? postsVisible[index - 1] : null,
        next: index < postsVisible.length - 1 ? postsVisible[index + 1] : null
      }
    });
  });

  postsHidden.forEach(node => {
    const { path } = node.frontmatter;
    if (!path) {
      throw Error(`No path for post ${node.frontmatter.title}`);
    }
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: null,
        next: null
      }
    });
  });
};
