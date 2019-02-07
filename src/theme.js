/**
 * Theme of the website
 * @flow
 */

const Colors = {
  main: '#3CB534',
  mainDarker: '#2C8127',
};

const LinkStyle = {
  color: Colors.mainDarker,

  ':hover': {
    color: Colors.mainDarker,
  },
  ':visited': {
    color: Colors.mainDarker,
  },
};

const Styles = {
  link: LinkStyle,
};

export { Colors, Styles };
