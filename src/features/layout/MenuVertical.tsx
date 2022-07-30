/**
 * Vertical top bar menu component. It's displayed on small screens.
 */

import { Fragment } from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Colors } from "../../Theme";
import { rhythm } from "../../Typography";

type Props = {
  className?: string;
  links: { path: string; title: string }[];
  isHead?: boolean;
  isBody?: boolean;
  isOpened: boolean;
  onOpened?: (val: boolean) => void;
};

export const MenuVertical = ({
  isHead,
  isBody,
  isOpened,
  onOpened,
  links,
  ...otherProps
}: Props) => {
  return (
    <div {...otherProps}>
      {isHead ? (
        <MenuButton isOpened={isOpened} onClick={() => onOpened?.(!isOpened)}>
          Menu
        </MenuButton>
      ) : null}
      {isBody ? (
        <Body isOpened={isOpened}>
          {links.map((item, index) => (
            <Fragment key={item.path}>
              <MenuLink usePlainStyle to={item.path}>
                {item.title}
              </MenuLink>
              {index < links.length - 1 ? <Separator /> : null}
            </Fragment>
          ))}
        </Body>
      ) : null}
    </div>
  );
};

const MenuButton = styled("button")<{ isOpened: boolean }>(({ isOpened }) => [
  `
  cursor: pointer;
  color: ${Colors.mainDarker};
  border: 1px solid ${Colors.mainDarker};
  padding: 0.5rem;
  background-color: transparent;
  :focus {
    outline: 0;
  }
`,
  isOpened
    ? `
  color: white;
  border: 1px solid white;
  background-color: ${Colors.mainDarker};
  background: repeating-linear-gradient(
    45deg,
    ${Colors.main},
    ${Colors.main} 10px,
    ${Colors.mainDarker} 10px,
    ${Colors.mainDarker} 20px
  );
  opacity: 0.9;
`
    : null,
]);

const Separator = styled.span`
  height: 0.5rem;
  color: white;
  cursor: default;
`;

const Body = styled.div<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding-bottom: ${rhythm(0.5)};
  padding-top: ${rhythm(1)};
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  :hover: {
  }
  font-size: 1rem;
  font-weight: medium;
  background: none;
`;
