import renderer from "react-test-renderer";

import { Markdown } from "./Markdown";

const MockContent = "<h1>Header</h1><p>Content</p>";

describe("Markdown", () => {
  it("renders page markdown without regressions", () => {
    const tree = renderer
      .create(<Markdown htmlContent={MockContent} />)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="Markdown__ContainerPage-sc-7cj7g1-0 kghHly"
        dangerouslySetInnerHTML={
          Object {
            "__html": "<h1>Header</h1><p>Content</p>",
          }
        }
      />
    `);
  });

  it("renders inline markdown without regressions", () => {
    const tree = renderer
      .create(<Markdown htmlContent={MockContent} inline />)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="Markdown__ContainerInline-sc-7cj7g1-1 kEVYiF"
        dangerouslySetInnerHTML={
          Object {
            "__html": "<h1>Header</h1><p>Content</p>",
          }
        }
      />
    `);
  });
});
