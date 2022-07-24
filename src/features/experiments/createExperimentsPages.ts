import { CreatePagesArgs } from "gatsby";
import path from "path";
import { createPagesForCollection } from "../../createPagesForCollection";

export const createExperimentsPages = async ({
  graphql,
  actions
}: CreatePagesArgs) => {
  return createPagesForCollection({
    graphql,
    actions,
    collection: "experiments",
    template: path.resolve(__dirname, "./ExperimentTemplate.tsx"),
    sortOder: "DESC"
  });
};
