/**
 * Vertical top bar menu component. It's displayed on small screens.
 * @flow
 */

import React, { Fragment } from 'react';

import { Link } from '../components';
import { Colors } from '../Theme';

const Separator = () => <span css={Styles.separator}>{' – '}</span>;

type Props = {
  links: { path: string, title: string }[],
  isHead: boolean,
  isBody: boolean,
  isOpened: boolean,
  setOpened: (val: boolean) => any,
  css: any,
};

const MenuVertical = ({
  isHead,
  isBody,
  isOpened,
  setOpened,
  links,
  ...otherProps
}: Props) => {
  return (
    <div {...otherProps}>
      {isHead ? (
        <button
          css={[Styles.button, isOpened ? Styles.buttonSelected : null]}
          onClick={() => setOpened(!isOpened)}>
          Menu
        </button>
      ) : null}
      {isBody ? (
        <div
          css={[
            Styles.body,
            !isOpened
              ? {
                  display: 'none',
                }
              : null,
          ]}>
          {links.map((item, index) => (
            <Fragment key={item.path}>
              <Link to={item.path} css={Styles.menuItem}>
                {item.title}
              </Link>
              {index < links.length - 1 ? <Separator /> : null}
            </Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MenuVertical;

const Styles = {
  button: {
    cursor: 'pointer',
    color: 'white',
    border: '1px solid white',
    padding: '0.5rem',
    backgroundColor: 'transparent',
    ':focus': { outline: 0 },
  },
  buttonSelected: {
    backgroundColor: Colors.mainDarker,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1rem',
  },
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
    cursor: 'default',
  },
};
