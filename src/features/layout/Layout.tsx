/**
 * Root component of the page
 */

import { graphql, StaticQuery } from "gatsby";
import { ReactNode } from "react";
import styled from "styled-components";

import { rhythm } from "../../Typography";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
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
    render={(data) => {
      return (
        <Container>
          <header>
            <Header siteTitle={data.site.siteMetadata.title} />
          </header>
          <main>{children}</main>
          <Footer />
        </Container>
      );
    }}
  />
);

const Container = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(24)};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
`;
