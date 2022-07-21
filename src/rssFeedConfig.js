module.exports = {
  resolve: `gatsby-plugin-feed`,
  options: {
    query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
        }
      }
    }
  `,
    feeds: [
      {
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map((edge) => {
            return Object.assign(
              {},
              {
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [{ "content:encoded": edge.node.html }],
              }
            );
          });
        },
        query: `
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
              fields: { collection: { eq: "posts" } }
              frontmatter: { hidden: { ne: true } }
            }
          ) {
            edges {
              node {
                excerpt
                html
                frontmatter {
                  path
                  title
                  date
                }
              }
            }
          }
        }
      `,
        title: `Alexander Zubko Blog RSS feed`,
        output: "/rss.xml",
        match: "^/blog/",
      },
    ],
  },
};
