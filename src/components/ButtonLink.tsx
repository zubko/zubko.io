/**
 * Component which renders a button to be used as a link
 */

import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "./Link";

type Props = {
  backgroundColor: string;
  borderColor: string;
  to: string;
  children?: ReactNode;
};

export const ButtonLink = ({
  backgroundColor,
  borderColor,
  to,
  children,
  ...otherProps
}: Props) => (
  <LinkWrap
    usePlainStyle
    to={to}
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    {...otherProps}
  >
    {children}
  </LinkWrap>
);

const LinkWrap = styled(Link)<{ backgroundColor: string; borderColor: string }>`
  user-select: none;
  padding: 0.3em 0.7em 0.2em;
  color: white;
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  text-align: center;
  vertical-align: center;
  transform: translate(0, 0);
  transition: all 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 6px 0px ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    color: white;
    transform: translate(0, -2px);
    box-shadow: 0px 8px 0px ${({ borderColor }) => borderColor};
    filter: brightness(110%);
  }

  &:active {
    transform: translate(0, 3px);
    box-shadow: 0px 2px 0px ${({ borderColor }) => borderColor};
  }
`;
