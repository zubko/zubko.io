/**
 * Achnowledgements page
 * @flow
 */

import React from 'react';

import { Layout, SEO, Link } from '../components';

const AcknowledgementsPage = () => (
  <Layout>
    <SEO
      title="Acknowledgements"
      keywords={['aknowledgements', 'gatsby', 'react', 'open-source']}
    />
    <h2>Acknowledgements</h2>
    <p>
      This website wouldn't be possible without awesome modern JS based open
      source projects like:
    </p>
    <ul>
      <li css={Styles.listItem}>
        <Link to="https://reactjs.org/">⚛️ React</Link>
      </li>
      <li css={Styles.listItem}>
        <Link to="https://www.gatsbyjs.org">🚀 Gatsby</Link>
      </li>
      <li css={Styles.listItem}>
        <Link to="https://emotion.sh">👩‍🎤 Emotion</Link>
      </li>
    </ul>
    <h3>Inspired by:</h3>
    <ul>
      <li css={Styles.listItemBullet('💜')}>
        Structure and configs heavily inspired by{' '}
        <Link to="https://github.com/reactjs/reactjs.org/">
          https://github.com/reactjs/reactjs.org/
        </Link>
      </li>
      <li css={Styles.listItemBullet('❤️')}>
        Markdown test{' '}
        <Link to="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
          https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
        </Link>
      </li>
    </ul>
    <h3>Tools:</h3>
    <ul>
      <li css={Styles.listItemBullet('🛠')}>
        Codded with <Link to="https://code.visualstudio.com/">VS Code</Link>
      </li>
      <li css={Styles.listItemBullet('👮‍')}>
        Correctness ensured by <Link to="https://eslint.org/">ESLint</Link> and{' '}
        <Link to="https://flow.org/">Flow</Link>
      </li>
      <li css={Styles.listItemBullet('🚚')}>
        Swift module delivery by <Link to="https://eslint.org/">Yarn</Link>
      </li>
      <li css={Styles.listItemBullet('💪')}>
        Relentless hosting from{' '}
        <Link to="https://www.netlify.com/">Netlify</Link>
      </li>
    </ul>
  </Layout>
);
export default AcknowledgementsPage;
const Styles = {
  listItem: { marginLeft: '0.5rem' },
  listItemBullet: bullet => ({
    '&::before': {
      content: `"${bullet}"`,
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
    },
  }),
};
