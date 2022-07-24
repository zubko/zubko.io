import { StaticQuery } from "gatsby";
import renderer from "react-test-renderer";
import { Seo } from "./Seo";

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "site title",
          description: "site description",
          author: "author"
        }
      }
    })
  );
});

describe("Seo", () => {
  it("most common usage renders without regressions", () => {
    const tree = renderer
      .create(<Seo title="Title" keywords={["keyword-1", "keyword-2"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
