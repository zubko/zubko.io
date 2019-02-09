/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { css as cssGlam } from 'glamor';

import { Styles } from '../Theme';

export default ({ useAnchor, children, to, css, ...otherProps }: Object) => {
  const internal = /^\/(?!\/)/.test(to);
  // TODO: can't do `css={[Styles.link, css]}` or `css={css || Styles.link}`
  // because the both classes will end up assigned to the tag in the random order
  const style = cssGlam(css || Styles.link);
  if (!useAnchor && internal) {
    return (
      <GatsbyLink to={to} className={`${style}`} {...otherProps}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} className={`${style}`} {...otherProps}>
      {children}
    </a>
  );
};
