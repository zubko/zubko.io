/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

'use strict';

// Import global styles
require('normalize.css');
require('./src/css/reset.css');
require('prismjs/themes/prism-solarizedlight.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
exports.onClientEntry = () => {};
