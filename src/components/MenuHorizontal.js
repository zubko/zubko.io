/**
 * Top bar menu component
 * @flow
 */

import React, { Fragment } from 'react';

import { Link } from '../components';

type Props = {
  links: { path: string, title: string }[],
  css: any,
};

const Separator = () => <span css={Styles.separator}>{' '}</span>;

const MenuHorizontal = ({ links, ...otherProps }: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
      }}
      {...otherProps}>
      {links.map((item, index) => (
        <Fragment key={item.path}>
          <Link to={item.path} css={Styles.menuItem}>
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
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      color: `white`,
    },
    fontSize: '1rem',
    fontWeight: 'medium',
  },
  separator: {
    color: 'white',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    cursor: 'default',
  },
};
