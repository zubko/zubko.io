/**
 * Component which renders a beautiful "&" symbol
 */

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Ampersand;
    src: local("Baskerville-Italic"), local("GoudyOldStyleT-Italic"),
      local("Palatino-Italic"), local("BookAntiqua-Italic");
    unicode-range: U+26;
  }
`;

const TextWithAmp = styled.span`
  font-family: Ampersand, sans-serif;
  font-size: 115%;
`;

export const Ampersand = () => (
  <>
    <GlobalStyle />
    <TextWithAmp>&</TextWithAmp>
  </>
);
