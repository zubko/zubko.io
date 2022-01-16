/**
 * Component which renders a beautiful & symbol
 * @flow
 */

import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

const globalCss = css`
  @font-face {
    font-family: Ampersand;
    src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'),
      local('Palatino-Italic'), local('BookAntiqua-Italic');
    unicode-range: U+26;
  }
`;

const TextWithAmp = styled.span`
  font-family: Ampersand, sans-serif;
  font-size: 115%;
`;

export default () => (
  <>
    <Global styles={globalCss} />
    <TextWithAmp>&</TextWithAmp>
  </>
);
