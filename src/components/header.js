import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../components';
import { Colors } from '../theme';

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: Colors.main,
      marginBottom: `1.45rem`,
    }}>
    <div
      css={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <h1 css={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: `white`,
            textDecoration: `none`,
            ':hover': {
              color: `white`,
            },
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
