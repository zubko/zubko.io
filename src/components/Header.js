import React from 'react';
import PropTypes from 'prop-types';

import { Link, Menu } from '../components';
import { Colors } from '../Theme';

const Header = ({ siteTitle }) => (
  <div css={styles.headerOutter}>
    <div css={styles.headerInner}>
      <Link to="/" css={styles.home}>
        {siteTitle}
      </Link>
      <Menu />
    </div>
  </div>
);

const styles = {
  headerOutter: {
    background: Colors.main,
    marginBottom: `1.45rem`,
  },
  headerInner: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  home: {
    color: `white`,
    textDecoration: `none`,
    ':hover': {
      color: `white`,
      textDecoration: `none`,
    },
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
