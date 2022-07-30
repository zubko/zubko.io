/**
 * Link with styling
 */

import { Link as GatsbyLink } from "gatsby";
import * as React from "react";
import styled from "styled-components";

import { AnimatedLinkStyle, PlainLinkStyle } from "../Theme";

type Props = {
  useAnchor?: boolean;
  usePlainStyle?: boolean;
  children?: React.ReactNode;
  to: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const Link = ({
  useAnchor,
  usePlainStyle,
  children,
  to,
  ...otherProps
}: Props) => {
  const internal = to === "#" || to.indexOf("/") === 0;
  if (!useAnchor && internal) {
    return (
      <StyledLink to={to} usePlainStyle={usePlainStyle} {...otherProps}>
        {children}
      </StyledLink>
    );
  }
  const sameTab = to.indexOf("mailto:") === 0;
  return (
    <StyledAnchor
      usePlainStyle={usePlainStyle}
      href={to}
      {...(!sameTab ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...otherProps}
    >
      {children}
    </StyledAnchor>
  );
};

const StyledLink = styled(GatsbyLink)<{ usePlainStyle?: boolean }>`
  ${({ usePlainStyle }) => (usePlainStyle ? PlainLinkStyle : AnimatedLinkStyle)}
`;

const StyledAnchor = styled.a<{ usePlainStyle?: boolean }>`
  ${({ usePlainStyle }) => (usePlainStyle ? PlainLinkStyle : AnimatedLinkStyle)}
`;
