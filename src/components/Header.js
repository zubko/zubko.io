/**
 * Top common part of the website
 *
 * @flow
 */

import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Link, MenuVertical, MenuHorizontal } from '../components';
import { Media, Colors } from '../Theme';
import { rhythm } from '../Typography';

const MENU_MEDIA_SPLIT = 780;
const MediaForVertMenu = Media.lessThanPx(MENU_MEDIA_SPLIT);
const MediaForHorzMenu = Media.greaterThanPx(MENU_MEDIA_SPLIT);

type Props = {
  siteTitle: string,
};

const Header = ({ siteTitle }: Props) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query MenuQuery {
          allMenuYaml {
            edges {
              node {
                path
                title
              }
            }
          }
        }
      `}
      render={({ allMenuYaml: { edges: menuEdges } }: Object) => {
        const menuLinks = menuEdges.map(e => e.node);
        return (
          <div css={styles.headerOuter}>
            <div css={styles.headerInner}>
              <Link usePlainStyle to="/" css={styles.homeLink}>
                <h3>{siteTitle}</h3>
              </Link>

              <MenuHorizontal
                css={{ [MediaForVertMenu]: { display: 'none' } }}
                links={menuLinks}
              />
              <MenuVertical
                isHead
                isOpened={isMenuOpened}
                setOpened={setMenuOpened}
                css={{ [MediaForHorzMenu]: { display: 'none' } }}
                links={menuLinks}
              />
            </div>
            <MenuVertical
              isBody
              isOpened={isMenuOpened}
              setOpened={setMenuOpened}
              css={{ [MediaForHorzMenu]: { display: 'none' } }}
              links={menuLinks}
            />
          </div>
        );
      }}
    />
  );
};

const styles = {
  headerOuter: {
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
  },
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
