import renderer from "react-test-renderer";

import { MenuHorizontal } from "./MenuHorizontal";

describe("MenuHorizontal", () => {
  it("renders without regressions", () => {
    const tree = renderer
      .create(
        <MenuHorizontal
          links={[
            { path: "/path-1", title: "title-1" },
            { path: "/path-2", title: "title-2" }
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
