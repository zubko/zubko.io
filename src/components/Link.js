/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Styles } from '../Theme';

export default ({
  useAnchor,
  usePlainStyle,
  children,
  to,
  ...otherProps
}: Object) => {
  const internal = to === '#' || to.indexOf('/') === 0;
  const style = usePlainStyle ? Styles.linkPlain : Styles.linkAnimated;
  if (!useAnchor && internal) {
    return (
      <GatsbyLink to={to} css={style} {...otherProps}>
        {children}
      </GatsbyLink>
    );
  }
  const sameTab = to.indexOf('mailto:') === 0;
  return (
    <a
      href={to}
      css={style}
      {...(!sameTab ? { target: '_blank' } : null)}
      {...otherProps}>
      {children}
    </a>
  );
};
