/**
 * Top bar menu component
 */

import styled from "@emotion/styled";
import { Fragment } from "react";
import { Link } from "../../components/Link";

type Props = {
  links: { path: string; title: string }[];
};

export const MenuHorizontal = ({ links, ...otherProps }: Props) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row"
      }}
      {...otherProps}
    >
      {links.map((item, index) => (
        <Fragment key={item.path}>
          <MenuLink usePlainStyle to={item.path}>
            {item.title}
          </MenuLink>
          {index < links.length - 1 ? <Separator /> : null}
        </Fragment>
      ))}
    </div>
  );
};

const MenuLink = styled(Link)`
  text-decoration: none;
  :hover: {
  }
  fontsize: 1rem;
  font-weight: medium;
  background: none;
`;

const Separator = styled.span`
  color: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: default;
`;
