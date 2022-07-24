import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";

import { Layout } from "./Layout";

beforeEach(() => {
  (StaticQuery as jest.Mock<StaticQuery>)
    .mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: "title"
          }
        }
      })
    )
    .mockImplementationOnce(({ render }) =>
      render({
        allMenuYaml: {
          edges: [
            {
              node: {
                path: "/path-1/",
                title: "title-1"
              }
            },
            {
              node: {
                path: "/path-2/",
                title: "title-2"
              }
            }
          ]
        }
      })
    );
});

describe("Layout", () => {
  it("renders without regressions", () => {
    const tree = renderer.create(<Layout>Child</Layout>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
