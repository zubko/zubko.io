import { CreatePagesArgs } from "gatsby";
import path from "path";
import { createPagesForCollection } from "../../createPagesForCollection";

export const createWorkPages = async ({
  graphql,
  actions
}: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "work",
    template: path.resolve(__dirname, "./WorkProjectTemplate.tsx"),
    sortOder: "DESC"
  });
};
