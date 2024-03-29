/**
 * Component which helps with SEO
 */

import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

const DEFAULT_KEYWORDS = [`Zubko`, `Alexander`, `blog`];

type Props = {
  description?: string;
  lang?: string;
  meta?: string[];
  keywords?: string[];
  title: string;
};

export const Seo = ({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
}: Props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat({
                name: `keywords`,
                content: [...DEFAULT_KEYWORDS].concat(keywords).join(`, `),
              })
              .concat(meta)}
          />
        );
      }}
    />
  );
};

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
