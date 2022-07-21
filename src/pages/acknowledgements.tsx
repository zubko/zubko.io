/**
 * Acknowledgements page

 */

import { Layout, Link, SEO } from "../components";
import { rhythm } from "../Typography";

const AcknowledgementsPage = () => (
  <Layout>
    <SEO
      title="Acknowledgements"
      keywords={["acknowledgements", "gatsby", "react", "open-source"]}
    />
    <h2>Acknowledgements</h2>
    <p>
      This website wouldn't be possible without awesome modern JS based open
      source projects like:
    </p>
    <ul css={Styles.list}>
      <li css={Styles.listItemBullet("⚛️")}>
        <Link to="https://reactjs.org/">React</Link>
      </li>
      <li css={Styles.listItemBullet("🚀")}>
        <Link to="https://www.gatsbyjs.org">Gatsby</Link>
      </li>
      <li css={Styles.listItemBullet("👩‍🎤")}>
        <Link to="https://emotion.sh">Emotion</Link>
      </li>
      <li css={Styles.listItemBullet("🖋")}>
        <Link to="https://kyleamathews.github.io/typography.js/">
          Typography.js
        </Link>
      </li>
    </ul>
    <h3>Inspired by:</h3>
    <ul css={Styles.list}>
      <li css={Styles.listItemBullet("💜")}>
        Structure and configs heavily inspired by{" "}
        <Link to="https://github.com/gatsbyjs/gatsby-starter-blog">
          https://github.com/gatsbyjs/gatsby-starter-blog
        </Link>
        {" and "}
        <Link to="https://github.com/reactjs/reactjs.org/">
          https://github.com/reactjs/reactjs.org/
        </Link>
      </li>
      <li css={Styles.listItemBullet("❤️")}>
        Markdown test{" "}
        <Link to="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
          https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
        </Link>
      </li>
    </ul>
    <h3>Tools:</h3>
    <ul css={Styles.list}>
      <li css={Styles.listItemBullet("🛠")}>
        Codded with <Link to="https://code.visualstudio.com/">VS Code</Link>
      </li>
      <li css={Styles.listItemBullet("👮‍")}>
        Correctness ensured by <Link to="https://eslint.org/">ESLint</Link> and{" "}
        <Link to="https://flow.org/">Flow</Link>
      </li>
      <li css={Styles.listItemBullet("🚚")}>
        Swift module delivery by <Link to="https://eslint.org/">Yarn</Link>
      </li>
      <li css={Styles.listItemBullet("💪")}>
        Relentless hosting from{" "}
        <Link to="https://www.netlify.com/">Netlify</Link>
      </li>
    </ul>
    <h3>Code</h3>
    <p>
      The code of this website is{" "}
      <Link to="https://github.com/zubko/zubko.io">available on GitHub</Link>
    </p>
    {process.env.DEV ? (
      <p>
        <Link to="/posts/test">Test markdown page</Link>
      </p>
    ) : null}
  </Layout>
);
export default AcknowledgementsPage;
const Styles = {
  list: {
    listStyle: "none",
  },
  listItemBullet: (bullet) => ({
    "&::before": {
      content: `"${bullet}"`, // marginLeft: '0.5rem',
      marginRight: rhythm(0.5),
    },
  }),
};
