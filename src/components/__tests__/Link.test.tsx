import React from "react";
import renderer from "react-test-renderer";

import Link from "../Link";

describe("Link", () => {
  it("inner animated link renders without regressions", () => {
    const tree = renderer.create(<Link to="/inner-link">Title</Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("inner plain link renders without regressions", () => {
    const tree = renderer
      .create(
        <Link to="/inner-link" usePlainStyle>
          Title
        </Link>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("outer link renders without regressions", () => {
    const tree = renderer
      .create(<Link to="https://outer.link.to">Title</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
