import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";

import Header from "../Header";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMenuYaml: {
        edges: [
          {
            node: {
              path: "/path-1/",
              title: "title-1",
            },
          },
          {
            node: {
              path: "/path-2/",
              title: "title-2",
            },
          },
        ],
      },
    })
  );
});

describe("Header", () => {
  it("renders without regressions", () => {
    const tree = renderer.create(<Header siteTitle="siteTitle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
