/**
 * Acknowledgements page

 */

import styled from "styled-components";
import { Link } from "../components/Link";
import { Seo } from "../components/Seo";
import { Layout } from "../features/layout/Layout";
import { rhythm } from "../Typography";

const AcknowledgementsPage = () => (
  <Layout>
    <Seo
      title="Acknowledgements"
      keywords={["acknowledgements", "gatsby", "react", "open-source"]}
    />
    <h2>Acknowledgements</h2>
    <p>
      This website wouldn&apos;t be possible without awesome modern JS based
      open source projects like:
    </p>
    <List>
      <ListItem bullet="⚛️">
        <Link to="https://reactjs.org/">React</Link>
      </ListItem>
      <ListItem bullet="🚀">
        <Link to="https://www.gatsbyjs.org">Gatsby</Link>
      </ListItem>
      <ListItem bullet=" 💅🏾">
        <Link to="https://styled-components.com/">Styled Components</Link>
      </ListItem>
      <ListItem bullet="🖋">
        <Link to="https://kyleamathews.github.io/typography.js/">
          Typography.js
        </Link>
      </ListItem>
    </List>
    <h3>Inspired by:</h3>
    <List>
      <ListItem bullet="💜">
        Structure and configs heavily inspired by{" "}
        <Link to="https://github.com/gatsbyjs/gatsby-starter-blog">
          https://github.com/gatsbyjs/gatsby-starter-blog
        </Link>
        {" and "}
        <Link to="https://github.com/reactjs/reactjs.org/">
          https://github.com/reactjs/reactjs.org/
        </Link>
      </ListItem>
      <ListItem bullet="❤️">
        Markdown test{" "}
        <Link to="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
          https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
        </Link>
      </ListItem>
    </List>
    <h3>Tools:</h3>
    <List>
      <ListItem bullet="🛠">
        Codded with <Link to="https://code.visualstudio.com/">VS Code</Link>
      </ListItem>
      <ListItem bullet="👮‍">
        Correctness ensured by <Link to="https://eslint.org/">ESLint</Link> and{" "}
        <Link to="https://www.typescriptlang.org/">TypeScript</Link>
      </ListItem>
      <ListItem bullet="🚚">
        Swift module delivery by <Link to="https://eslint.org/">Yarn</Link>
      </ListItem>
      <ListItem bullet="💪">
        Relentless hosting from{" "}
        <Link to="https://www.netlify.com/">Netlify</Link>
      </ListItem>
    </List>
    <h3>Code</h3>
    <p>
      The code of this website is{" "}
      <Link to="https://github.com/zubko/zubko.io">available on GitHub</Link>
    </p>
    {process.env.DEV ? (
      <p>
        <Link to="/blog/test">Test markdown page</Link>
      </p>
    ) : null}
  </Layout>
);

export default AcknowledgementsPage;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li<{ bullet: string }>`
  &::before {
    content: "${({ bullet }) => bullet}";
    margin-right: ${rhythm(0.5)};
  }
`;
