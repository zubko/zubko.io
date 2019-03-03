import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Link } from '../components';
import { rhythm, scale } from '../Typography';

const Layout = ({ children }) => (
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
    render={data => (
      <div
        css={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        <header>
          <Header siteTitle={data.site.siteMetadata.title} />
        </header>
        <main>{children}</main>
        <footer css={{ marginTop: '1rem' }}>
          © {new Date().getFullYear()}, Built{' '}
          <Link to="/acknowledgements">with ❤️and open source ⚛</Link>
        </footer>
      </div>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
