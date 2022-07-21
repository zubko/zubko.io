/**
 * Root component of the page
 */

import { graphql, StaticQuery } from 'gatsby';
import { ReactNode } from 'react';

import { Footer, Header } from '../components';
import { rhythm } from '../Typography';

type Props = {
  children: ReactNode;
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
