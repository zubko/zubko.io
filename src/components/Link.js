/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Styles } from '../Theme';

export default ({ useAnchor, children, to, ...otherProps }: Object) => {
  const internal = /^\/(?!\/)/.test(to);
  // TODO: can't do `css={[Styles.link, css]}` or `css={css || Styles.link}`
  // because the both classes will end up assigned to the tag in the random order
  if (!useAnchor && internal) {
    return (
      <GatsbyLink to={to} css={Styles.link} {...otherProps}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} css={Styles.link} target="_blank" {...otherProps}>
      {children}
    </a>
  );
};
