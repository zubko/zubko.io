/**
 * Root component of the page
 *
 * @flow
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Footer } from '../components';
import { rhythm } from '../Typography';

type Props = {
  children: React.Node,
};

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div
          css={{
            margin: `0 auto`,
            maxWidth: rhythm(24),
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <header>
            <Header siteTitle={data.site.siteMetadata.title} />
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      );
    }}
  />
);

export default Layout;
