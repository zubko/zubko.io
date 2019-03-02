/**
 * Vertical top bar menu component. It's displayed on small screens.
 * @flow
 */

import React, { Fragment } from 'react';

import { Link } from '../components';
import { Colors } from '../Theme';

const Separator = () => <span css={Styles.separator}> </span>;

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
    color: Colors.mainDarker,
    border: `1px solid ${Colors.mainDarker}`,
    padding: '0.5rem',
    backgroundColor: 'transparent',
    ':focus': { outline: 0 },
  },
  buttonSelected: {
    color: 'white',
    border: `1px solid white`,
    backgroundColor: Colors.mainDarker,
    background: `repeating-linear-gradient(
      45deg,
      ${Colors.main},
      ${Colors.main} 10px,
      ${Colors.mainDarker} 10px,
      ${Colors.mainDarker} 20px
    )`,
    opacity: 0.9,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1rem',
  },
  menuItem: {
    textDecoration: 'none',
    ':hover': {},
    fontSize: '1rem',
    fontWeight: 'medium',
  },
  separator: {
    height: '0.5rem',
    color: 'white',
    cursor: 'default',
  },
};
