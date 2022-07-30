/**
 * Theme of the website
 */

import { css } from "styled-components";

export const Colors = {
  main: "#3CB534",
  mainDarker: "#2C8127",
  text: "#1a1a1a",
  subtle: "#8d8d8d",
  linkBackground: "#bcebb9",
};

export const PlainLinkStyle = css`
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

export const AnimatedLinkStyle = css`
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
  xxlarge: { min: 1340, max: Infinity },
};

type Size = keyof typeof Sizes;

export const Media = {
  between(smallKey: Size, largeKey: Size, excludeLarge = false) {
    if (excludeLarge) {
      return `@media (min-width: ${Sizes[smallKey].min}px) and (max-width: ${
        Sizes[largeKey].min - 1
      }px)`;
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
  },
};

export const Fonts = {
  header: {
    fontSize: 60,
    lineHeight: "65px",
    fontWeight: 700,

    [Media.lessThan("medium")]: {
      fontSize: 40,
      lineHeight: "45px",
    },
  },
  small: {
    fontSize: 14,
  },
};
