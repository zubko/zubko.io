/**
 * Top bar menu component
 */

import { Fragment } from "react";
import Link from "./Link";

type Props = {
  links: { path: string; title: string }[];
};

const Separator = () => <span css={Styles.separator}> </span>;

const MenuHorizontal = ({ links, ...otherProps }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
      }}
      {...otherProps}
    >
      {links.map((item, index) => (
        <Fragment key={item.path}>
          <Link usePlainStyle to={item.path} css={Styles.menuItem}>
            {item.title}
          </Link>
          {index < links.length - 1 ? <Separator /> : null}
        </Fragment>
      ))}
    </div>
  );
};

export default MenuHorizontal;

const Styles = {
  menuItem: {
    textDecoration: "none",
    ":hover": {},
    fontSize: "1rem",
    fontWeight: "medium",
    background: "none",
  },
  separator: {
    color: "white",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    cursor: "default",
  },
};
