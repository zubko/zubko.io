/**
 * Theme of the website
 * @flow
 */

const Colors = {
  main: '#3CB534',
  mainDarker: '#2C8127',
  text: '#1a1a1a',
  subtle: '#8d8d8d',
};

const LinkStyle = {
  color: Colors.mainDarker,
  textDecoration: 'none',

  ':hover': {
    color: Colors.main,
    textDecoration: 'none',
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

  greaterThanPx(px: number) {
    return `@media (min-width: ${px}px)`;
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThanPx(px: number) {
    return `@media (max-width: ${px - 1}px)`;
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

  markdown: {},
};

Styles.markdown = {
  '& .gatsby-highlight-code-line': {
    backgroundColor: '#feb',
    display: 'block',
    marginRight: '-1em',
    marginLeft: '-1em',
    paddingRight: '1em',
    paddingLeft: '0.75em',
    borderLeft: '0.25em solid #f99',
  },

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  '& .gatsby-highlight': {
    backgroundColor: '#fdf6e3',
    borderRadius: '0.3em',
    margin: '0.5em 0',
    marginBottom: '1.618rem', // from typography
    padding: '1em',
    overflow: 'auto',
  },

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   */
  '& .gatsby-highlight pre[class*="language-"]': {
    backgroundColor: 'transparent',
    margin: '0',
    padding: '0',
    overflow: 'initial',
    float: 'left',
    minWidth: '100%',
  },

  /* Adjust the position of the line numbers */
  '& .gatsby-highlight pre[class*="language-"].line-numbers': {
    paddingLeft: '2.8em',
  },

  '& a:not(.anchor):not(.gatsby-resp-image-link)': LinkStyle,

  '& > p:first-child': {
    fontSize: '1.1em',
    fontWeight: 200,
    color: Colors.subtle,

    [Media.greaterThan('xlarge')]: {
      fontSize: '1.2em',
    },

    '& a, & strong': {
      fontWeight: 400,
    },
  },
};

export { Colors, Styles, Media, Fonts };
