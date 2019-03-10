/**
 * Top common part of the website
 * @flow
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link, MenuVertical, MenuHorizontal } from '../components';
import { Media, Colors } from '../Theme';
import { rhythm } from '../Typography';

const MenuLinks = [
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
    path: '/projects/',
    title: 'Projects',
  },
  {
    path: '/contacts/',
    title: 'Contacts',
  },
];

const MENU_MEDIA_SPLIT = 780;
const MediaForVertMenu = Media.lessThanPx(MENU_MEDIA_SPLIT);
const MediaForHorzMenu = Media.greaterThanPx(MENU_MEDIA_SPLIT);

const Header = ({ siteTitle }: Object) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div css={styles.headerOutter}>
      <div css={styles.headerInner}>
        <Link to="/" css={styles.homeLink}>
          <h3>{siteTitle}</h3>
        </Link>

        <MenuHorizontal
          css={{ [MediaForVertMenu]: { display: 'none' } }}
          links={MenuLinks}
        />
        <MenuVertical
          isHead
          isOpened={isMenuOpened}
          setOpened={setMenuOpened}
          css={{ [MediaForHorzMenu]: { display: 'none' } }}
          links={MenuLinks}
        />
      </div>
      <MenuVertical
        isBody
        isOpened={isMenuOpened}
        setOpened={setMenuOpened}
        css={{ [MediaForHorzMenu]: { display: 'none' } }}
        links={MenuLinks}
      />
    </div>
  );
};

const styles = {
  headerOutter: {
    marginBottom: `${rhythm(0.5)}`,
  },
  headerInner: {
    paddingTop: rhythm(0.5),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeLink: {
    textDecoration: `none`,
    ':hover': {
      textDecoration: `none`,
    },
    background: 'none',
    textShadow: 'none',
    '> h3': {
      marginTop: 0,
      marginBottom: 0,
      color: Colors.mainDarker,
    },
    ':hover > h3': {
      color: Colors.main,
    },
  },
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
