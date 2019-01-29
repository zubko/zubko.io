/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict';

const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/post.js');
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: {order: ASC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    date
                    tags
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        //createTagPages(createPage, posts);

        posts.forEach(({node}, index) => {
          const {path} = node.frontmatter;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index > 0 ? posts[index - 1].node : null,
              next: index < posts.length - 1 ? posts[index + 1].node : null,
            },
          });
          resolve();
        });
      }),
    );
  });
};
