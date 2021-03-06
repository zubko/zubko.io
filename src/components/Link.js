/**
 * Link with styling
 *
 * @flow
 */

import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { Styles } from '../Theme';

type Props = {
  useAnchor?: boolean,
  usePlainStyle?: boolean,
  children?: React.Node,
  to: string,
};

export default ({
  useAnchor,
  usePlainStyle,
  children,
  to,
  ...otherProps
}: Props) => {
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
      {...(!sameTab ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...otherProps}>
      {children}
    </a>
  );
};
