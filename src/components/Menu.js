/**
 * Top bar menu component
 * @flow
 */

import * as React from 'react';

import { Link } from '../components';

const Separator = () => <span css={Styles.separator}>{' | '}</span>;

export default () => (
  <div css={{ display: 'flex', flexDirection: 'row' }}>
    <Link to="/" css={Styles.menuItem}>
      Home
    </Link>
    <Separator />
    <Link to="/about/" css={Styles.menuItem}>
      About
    </Link>
    <Separator />
    <Link to="/blog/" css={Styles.menuItem}>
      Blog
    </Link>
    <Separator />
    <Link to="/portfolio/" css={Styles.menuItem}>
      Portfolio
    </Link>
    <Separator />
    <Link to="/contacts/" css={Styles.menuItem}>
      Contacts
    </Link>
  </div>
);

const Styles = {
  menuItem: {
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      color: `white`,
    },
    fontSize: '1rem',
    fontWeight: 'medium',
  },
  separator: {
    color: 'white',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    cursor: 'default',
  },
};
