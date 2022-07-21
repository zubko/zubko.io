import React from "react";
import renderer from "react-test-renderer";

import Ampersand from "../Ampersand";

describe("Ampersand", () => {
  it("renders without regressions", () => {
    const tree = renderer.create(<Ampersand />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
