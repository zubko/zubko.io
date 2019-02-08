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
  textDecoration: 'none',

  ':hover': {
    color: Colors.main,
    textDecoration: 'underline',
  },
};

const Styles = {
  link: LinkStyle,
};

export { Colors, Styles };
