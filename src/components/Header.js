/**
 * Top common part of the website
 * @flow
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link, MenuVertical, MenuHorizontal } from '../components';
import { Colors, Media } from '../Theme';

const Links = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about/',
    title: 'About',
  },
  {
    path: '/blog/',
    title: 'Blog',
  },
  {
    path: '/portfolio/',
    title: 'Portfolio',
  },
  {
    path: '/contacts/',
    title: 'Contacts',
  },
];

const MediaForVertMenu = Media.lessThan('medium');
const MediaForHorzMenu = Media.greaterThan('medium');

const Header = ({ siteTitle }: Object) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div css={styles.headerOutter}>
      <div css={styles.headerInner}>
        <Link to="/" css={styles.home}>
          {siteTitle}
        </Link>
        <MenuHorizontal
          css={{ [MediaForVertMenu]: { display: 'none' } }}
          links={Links}
        />
        <MenuVertical
          isHead
          isOpened={isMenuOpened}
          setOpened={setMenuOpened}
          css={{ [MediaForHorzMenu]: { display: 'none' } }}
          links={Links}
        />
      </div>
      <MenuVertical
        isBody
        isOpened={isMenuOpened}
        setOpened={setMenuOpened}
        css={{ [MediaForHorzMenu]: { display: 'none' } }}
        links={Links}
      />
    </div>
  );
};

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
    alignItems: 'center',
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
