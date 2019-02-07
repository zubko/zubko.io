/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Styles } from '../theme';

export default ({ useAnchor, children, to, ...otherProps }: Object) => {
  const internal = /^\/(?!\/)/.test(to);
  if (!useAnchor && internal) {
    return (
      <GatsbyLink to={to} style={Styles.link} {...otherProps}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} style={Styles.link} {...otherProps}>
      {children}
    </a>
  );
};
