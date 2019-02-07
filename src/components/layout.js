import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Header, Link } from '../components';
import './layout.css';

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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          {children}
          <footer style={{ marginTop: '1rem' }}>
            © {new Date().getFullYear()}, Built with
            {` 🚀 `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link> ⚛
          </footer>
        </div>
      </>
    )}
  />
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
