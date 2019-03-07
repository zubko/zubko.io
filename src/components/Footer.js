/**
 * Common footer of the website
 *
 * @flow
 */

import React from 'react';

import { Link } from '../components';
import { rhythm } from '../Typography';

export default () => (
  <footer css={{ marginTop: rhythm(1) }}>
    <p>
      ~~~
      <br /> © {new Date().getFullYear()}, Built{' '}
      <Link to="/acknowledgements">with ❤️and open source ⚛</Link>
    </p>
  </footer>
);
