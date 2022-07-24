import { CreatePagesArgs } from "gatsby";
import path from "path";
import { createPagesForCollection } from "../../createPagesForCollection";

export const createBlogPages = async ({
  graphql,
  actions
}: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "blog",
    template: path.resolve(__dirname, "./BlogPostTemplate.tsx"),
    sortOder: "ASC"
  });
};
