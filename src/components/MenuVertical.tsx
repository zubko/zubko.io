/**
 * Vertical top bar menu component. It's displayed on small screens.

 */

import { Fragment } from 'react';
import { Colors } from '../Theme';
import { rhythm } from '../Typography';
import Link from './Link';

const Separator = () => <span css={Styles.separator}> </span>;

type Props = {
  links: { path: string, title: string }[],
  isHead: boolean,
  isBody: boolean,
  isOpened: boolean,
  setOpened: (val: boolean) => any,
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
              <Link usePlainStyle to={item.path} css={Styles.menuLink}>
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
    paddingBottom: rhythm(0.5),
    paddingTop: rhythm(1),
  },
  menuLink: {
    textDecoration: 'none',
    ':hover': {},
    fontSize: '1rem',
    fontWeight: 'medium',
    background: 'none',
  },
  separator: {
    height: '0.5rem',
    color: 'white',
    cursor: 'default',
  },
};
