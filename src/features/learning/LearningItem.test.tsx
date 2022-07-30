import renderer from "react-test-renderer";

import { LearningItem } from "./LearningItem";

describe("LearningItem", () => {
  it("renders without regressions", () => {
    const tree = renderer
      .create(
        <LearningItem
          node={{
            html: "<p>some html</p>",
            frontmatter: { author: "author", title: "title", year: "2019" },
          }}
        ></LearningItem>
      )
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
      <li
        className="LearningItem__Container-sc-s6mqx2-0 fiSSuw"
      >
        <div
          className="LearningItem__Triangle-sc-s6mqx2-1 kGvMHX"
          onClick={[Function]}
        >
          ▶
        </div>
        <div
          className="LearningItem__TitleAndContent-sc-s6mqx2-2 dHEWmU"
        >
          <a
            className="Link__StyledLink-sc-ualt9-0 gpCrQD LearningItem__StyledLink-sc-s6mqx2-3 hszUrY"
            href="#"
            onClick={[Function]}
            usePlainStyle={true}
          >
            author
             - 
            title
             '2019
          </a>
        </div>
      </li>
    `);
  });
});
