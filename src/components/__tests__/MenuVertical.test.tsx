import React from "react";
import renderer from "react-test-renderer";

import MenuVertical from "../MenuVertical";

describe("MenuVertical", () => {
  const links = [
    { path: "/path-1", title: "title-1" },
    { path: "/path-2", title: "title-2" },
  ];

  it("head renders without regressions", () => {
    const tree = renderer
      .create(<MenuVertical isHead isOpened={false} links={links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("body renders without regressions", () => {
    const tree = renderer
      .create(<MenuVertical isBody isOpened={false} links={links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("opened head renders without regressions", () => {
    const tree = renderer
      .create(<MenuVertical isHead isOpened links={links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("opened body renders without regressions", () => {
    const tree = renderer
      .create(<MenuVertical isBody isOpened links={links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
