/**
 * Top common part of the website
 */

import { graphql, StaticQuery } from "gatsby";
import { useState } from "react";
import styled from "styled-components";

import { Link } from "../../components/Link";
import { Colors, Media } from "../../Theme";
import { rhythm } from "../../Typography";

import { MenuHorizontal as MenuHorizontalOrig } from "./MenuHorizontal";
import { MenuVertical as MenuVerticalOrig } from "./MenuVertical";

const MENU_MEDIA_SPLIT = 780;
const MediaForVertMenu = Media.lessThanPx(MENU_MEDIA_SPLIT);
const MediaForHorzMenu = Media.greaterThanPx(MENU_MEDIA_SPLIT);

type Props = {
  siteTitle?: string;
};

type LinkNode = {
  path: string;
  title: string;
};

export const Header = ({ siteTitle = "" }: Props) => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <StaticQuery<Queries.HeaderMenuQuery>
      query={graphql`
        query HeaderMenu {
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
      render={({ allMenuYaml: { edges: menuEdges } }) => {
        const menuLinks = menuEdges.map((e) => e.node as LinkNode);
        return (
          <HeaderOuter>
            <HeaderInner>
              <HomeLink usePlainStyle to="/">
                <h1>{siteTitle}</h1>
              </HomeLink>

              <MenuHorizontal links={menuLinks} />
              <MenuVertical
                isHead
                isOpened={isMenuOpened}
                onOpened={setMenuOpened}
                links={menuLinks}
              />
            </HeaderInner>
            <MenuVertical
              isBody
              isOpened={isMenuOpened}
              onOpened={setMenuOpened}
              links={menuLinks}
            />
          </HeaderOuter>
        );
      }}
    />
  );
};

const HeaderOuter = styled.div`
  margin-bottom: ${rhythm(0.5)};
`;

const HeaderInner = styled.div`
  padding-top: ${rhythm(0.5)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  background: none;
  text-shadow: none;
  > h1 {
    color: ${Colors.mainDarker};
    margin: 0;
    font-weight: 600;
    font-size: 1.21225rem; // h3
  }
`;

const MenuHorizontal = styled(MenuHorizontalOrig)`
  ${MediaForVertMenu} {
    display: none;
  }
`;

const MenuVertical = styled(MenuVerticalOrig)`
  ${MediaForHorzMenu} {
    display: none;
  }
`;
