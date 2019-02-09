/**
 * Theme of the website
 * @flow
 */

const Colors = {
  main: '#3CB534',
  mainDarker: '#2C8127',
  text: '#1a1a1a',
  subtle: '#6d6d6d',
};

const LinkStyle = {
  color: Colors.mainDarker,
  textDecoration: 'none',

  ':hover': {
    color: Colors.main,
    textDecoration: 'underline',
  },
};

const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
};

type Size = $Keys<typeof SIZES>;

const Media = {
  between(smallKey: Size, largeKey: Size, excludeLarge: boolean = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
        }px)`;
      }
    }
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key: Size) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key: Size) {
    const size = SIZES[key];

    if (size.min == null) {
      return Media.lessThan(key);
    } else if (size.max == null) {
      return Media.greaterThan(key);
    } else {
      return Media.between(key, key);
    }
  },
};

const Fonts = {
  header: {
    fontSize: 60,
    lineHeight: '65px',
    fontWeight: 700,

    [Media.lessThan('medium')]: {
      fontSize: 40,
      lineHeight: '45px',
    },
  },
  small: {
    fontSize: 14,
  },
};

const Styles = {
  link: LinkStyle,

  markdown: {
    lineHeight: '25px',

    '& a:not(.anchor):not(.gatsby-resp-image-link)': LinkStyle,

    '& > p:first-child': {
      fontSize: 18,
      fontWeight: 300,
      color: Colors.subtle,

      [Media.greaterThan('xlarge')]: {
        fontSize: 24,
      },

      '& a, & strong': {
        fontWeight: 400,
      },
    },

    '& p': {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: '42em',

      '&:first-of-type': {
        marginTop: 15,
      },

      '&:first-child': {
        marginTop: 0,
      },

      [Media.lessThan('large')]: {
        fontSize: 16,
        marginTop: 25,
      },
    },
  },
};

export { Colors, Styles, Media, Fonts };