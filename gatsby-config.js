module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [`gatsby-plugin-react-helmet`]
};
module.exports = {
  siteMetadata: {
    title: `Alexander Zubko`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    `gatsby-transformer-remark`
  ]
};
