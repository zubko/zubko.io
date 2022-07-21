import React from "react";
import renderer from "react-test-renderer";

import LearningItem from "../LearningItem";

describe("LearningItem", () => {
  it("renders without regressions", () => {
    const tree = renderer
      .create(
        <LearningItem
          node={{
            html: "<p>some html</p>",
            frontmatter: { author: "author", title: "title", year: 2019 },
          }}
        ></LearningItem>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
