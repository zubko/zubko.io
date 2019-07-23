/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Styles } from '../Theme';

export default ({ useAnchor, children, to, ...otherProps }: Object) => {
  const internal = to === '#' || to.indexOf('/') === 0;
  if (!useAnchor && internal) {
    return (
      <GatsbyLink to={to} css={Styles.link} {...otherProps}>
        {children}
      </GatsbyLink>
    );
  }
  const sameTab = to.indexOf('mailto:') === 0;
  return (
    <a
      href={to}
      css={Styles.link}
      {...(!sameTab ? { target: '_blank' } : null)}
      {...otherProps}>
      {children}
    </a>
  );
};
