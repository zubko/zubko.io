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
      Array [
        <style
          dangerouslySetInnerHTML={
            Object {
              "__html": ".css-o2j9ze{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",
            }
          }
          data-emotion="css o2j9ze"
        />,
        <li
          className="css-o2j9ze"
        >
          <style
            dangerouslySetInnerHTML={
              Object {
                "__html": ".css-1msldt2{display:inline-block;margin-right:0.809rem;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);transform-origin:50% 45%;-webkit-align-self:flex-start;-ms-flex-item-align:flex-start;align-self:flex-start;-webkit-transition:-webkit-transform 0.2s;transition:transform 0.2s;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
              }
            }
            data-emotion="css 1msldt2"
          />
          <div
            className="css-1msldt2"
            onClick={[Function]}
          >
            ▶
          </div>
          <style
            dangerouslySetInnerHTML={
              Object {
                "__html": ".css-yp9swi{-webkit-flex:1;-ms-flex:1;flex:1;}",
              }
            }
            data-emotion="css yp9swi"
          />
          <div
            className="css-yp9swi"
          >
            <style
              dangerouslySetInnerHTML={
                Object {
                  "__html": ".css-v0hbq0{background-image:none;}",
                }
              }
              data-emotion="css v0hbq0"
            />
            <style
              dangerouslySetInnerHTML={
                Object {
                  "__html": ".css-1wqujsd-Link{color:#2C8127;-webkit-text-decoration:none;text-decoration:none;background-image:linear-gradient(
          to top,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0) 1px,
          currentColor 1px,
          currentColor 2px,
          rgba(0, 0, 0, 0) 2px
        );background-image:none;}.css-1wqujsd-Link:hover{background-image:none;-webkit-filter:brightness(1.3);filter:brightness(1.3);}",
                }
              }
              data-emotion="css 1wqujsd-Link"
            />
            <a
              className="css-1wqujsd-Link"
              href="#"
              onClick={[Function]}
            >
              author
               - 
              title
               '2019
            </a>
          </div>
        </li>,
      ]
    `);
  });
});
