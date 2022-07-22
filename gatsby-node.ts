import { CreatePagesArgs, GatsbyNode } from "gatsby";
import { createPagesForCollection } from "./src/createPagesForCollection";

export const sourceNodes: GatsbyNode["sourceNodes"] = ({ actions }) => {
  // specify explicitly that `fileSystemName` has the type of string
  // otherwise it can become File type if the vale will match the file name
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
    }
    type MarkdownRemarkFields {
      fileSystemName: String
    }
  `);
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode
}) => {
  const { createNodeField } = actions;

  // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348

  if (node.internal && node.internal.type === `MarkdownRemark` && node.parent) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: "collection",
      value: parent?.sourceInstanceName
    });
    createNodeField({
      node,
      name: "fileSystemName",
      value: parent?.relativeDirectory || parent?.name
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async args => {
  await createBlogPages(args);
  await createWorkPages(args);
  await createExperimentsPages(args);
};

const createBlogPages = async ({ graphql, actions }: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "posts",
    template: "Post",
    sortOder: "ASC"
  });
};

const createWorkPages = async ({ graphql, actions }: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "work",
    template: "WorkProject",
    sortOder: "DESC"
  });
};

const createExperimentsPages = async ({
  graphql,
  actions
}: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "experiments",
    template: "ExperimentProject",
    sortOder: "DESC"
  });
};
