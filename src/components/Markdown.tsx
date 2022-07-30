import { FC } from "react";
import styled from "styled-components";
import { AnimatedLinkStyle, Colors, Media } from "../Theme";

export type MarkdownProps = { htmlContent: string; inline?: boolean };

export const Markdown: FC<MarkdownProps> = ({ htmlContent, inline }) => {
  const Container = inline ? ContainerInline : ContainerPage;
  return <Container dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

// MD rendered as a page
const ContainerPage = styled.div`
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    margin-bottom: 1.618rem;
    padding: 1em;
    overflow: auto;
  }

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  a:not(.anchor):not(.gatsby-resp-image-link) {
    ${AnimatedLinkStyle};
  }

  /**
   * Fix the font size of the code.
   * It looks bigger than the current font
   */
  code[class*="language-"] {
    font-size: 0.85em;
    line-height: 1.618em;
  }

  /* First paragraph of the blog */
  & > p:first-child {
    font-size: 1.1em;
    font-weight: 200;
    color: ${Colors.subtle};

    ${Media.greaterThan("xlarge")} {
      font-size: 1.2em;
    }

    a,
    strong {
      font-weight: 400;
    }
  }

  /* using **bold** inside > quote */
  blockquote em {
    font-weight: 600;
  }
`;

// MD included in some element of the page
const ContainerInline = styled.div`
  a {
    ${AnimatedLinkStyle}
  }
`;
