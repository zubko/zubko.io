/**
 * Theme of the website
 */

import { css } from "@emotion/react";

const Colors = {
  main: "#3CB534",
  mainDarker: "#2C8127",
  text: "#1a1a1a",
  subtle: "#8d8d8d",
  linkBackground: "#bcebb9"
};

const linkPlain = css`
  color: ${Colors.mainDarker};
  text-decoration: none;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    currentColor 1px,
    currentColor 2px,
    rgba(0, 0, 0, 0) 2px
  );
  &:hover {
    background-image: none;
    filter: brightness(1.3);
  }
`;

const linkAnimated = css`
  color: ${Colors.mainDarker};
  text-decoration: none;

  background-image: linear-gradient(
    to bottom,
    currentColor 0%,
    currentColor 100%
  );
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 4px 1px;
  transition: background-size 0s;

  :hover {
    color: black;
    text-decoration: none;
    background-image: linear-gradient(
      to bottom,
      ${Colors.linkBackground} 0%,
      ${Colors.linkBackground} 100%
    );
    background-size: 4px 100%;
    transition: background-size 0.15s;
  }
`;

const Sizes = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity }
};

type Size = keyof typeof Sizes;

const Media = {
  between(smallKey: Size, largeKey: Size, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        Sizes[smallKey].min
      }px) and (max-width: ${Sizes[largeKey].min - 1}px)`;
    } else {
      if (Sizes[largeKey].max === Infinity) {
        return `@media (min-width: ${Sizes[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${Sizes[smallKey].min}px) and (max-width: ${Sizes[largeKey].max}px)`;
      }
    }
  },

  greaterThanPx(px: number) {
    return `@media (min-width: ${px}px)`;
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${Sizes[key].min}px)`;
  },

  lessThanPx(px: number) {
    return `@media (max-width: ${px - 1}px)`;
  },

  lessThan(key: Size) {
    return `@media (max-width: ${Sizes[key].min - 1}px)`;
  },

  size(key: Size) {
    const size = Sizes[key];
    if (size.min == null) {
      return Media.lessThan(key);
    } else if (size.max == null) {
      return Media.greaterThan(key);
    } else {
      return Media.between(key, key);
    }
  }
};

const Fonts = {
  header: {
    fontSize: 60,
    lineHeight: "65px",
    fontWeight: 700,

    [Media.lessThan("medium")]: {
      fontSize: 40,
      lineHeight: "45px"
    }
  },
  small: {
    fontSize: 14
  }
};

// MD as a separate page
const markdownStyle = css`
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    margin-bottom: 1.618rem;
    padding: 1em;
    overflow: auto;
  }

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  a:not(.anchor):not(.gatsby-resp-image-link) {
    ${linkAnimated};
  }

  /**
   * Fix the font size of the code.
   * It looks bigger than the current font
   */
  code[class*="language-"] {
    font-size: 0.85em;
    line-height: 1.618em;
  }

  /* First paragraph of the blog */
  & > p:first-child {
    font-size: 1.1em;
    font-weight: 200;
    color: ${Colors.subtle};

    ${Media.greaterThan("xlarge")} {
      font-size: 1.2em;
    }

    a,
    strong {
      font-weight: 400;
    }
  }

  /* using **bold** inside > quote */
  blockquote em {
    font-weight: 600;
  }
`;

// MD included in the page
const markdownInlineStyle = css`
  a {
    ${linkAnimated}
  }
`;

const Styles = {
  linkPlain,
  linkAnimated,

  markdown: markdownStyle,
  markdownInline: markdownInlineStyle
};

export { Colors, Styles, Media, Fonts };
