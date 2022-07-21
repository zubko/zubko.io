/**
 * Component which renders a button to be used as a link
 */

import * as React from "react";
import Link from "./Link";

type Props = {
  backgroundColor: string;
  borderColor: string;
  to: string;
  children?: React.Node;
};

export default ({
  backgroundColor,
  borderColor,
  to,
  children,
  ...otherProps
}: Props) => (
  <Link
    usePlainStyle
    to={to}
    css={[styles.button, { backgroundColor, "--boxShadowColor": borderColor }]}
    {...otherProps}
  >
    {children}
  </Link>
);

const styles = {
  button: {
    userSelect: "none",
    padding: "0.3em 0.7em 0.2em",
    color: "white",
    textDecoration: "none",
    backgroundImage: "none",
    textShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    textAlign: "center",
    verticalAlign: "center",
    transform: "translate(0, 0)",
    transition: "all .2s ease",
    cursor: "pointer",
    overflow: "hidden",
    boxShadow: "0px 6px 0px var(--boxShadowColor, #000)",
    "&:hover": {
      color: "white",
      transform: "translate(0, -2px)",
      boxShadow: "0px 8px 0px  var(--boxShadowColor, #000)",
      filter: "brightness(110%)",
    },
    "&:active": {
      transform: "translate(0, 3px)",
      boxShadow: "0px 2px 0px  var(--boxShadowColor, #000)",
    },
  },
};
