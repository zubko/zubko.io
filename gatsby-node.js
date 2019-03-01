/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict';

const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348

  if (node.internal && node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    });
  }
};

exports.createPages = async function({ graphql, actions }) {
  await createBlogPages({ graphql, actions });
  await createProjectsPages({ graphql, actions });
};

async function createBlogPages({ graphql, actions }) {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Post.js');

  const queryResult = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { fields: { collection: { eq: "posts" } } }
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
  );

  const posts = queryResult.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: index > 0 ? posts[index - 1].node : null,
        next: index < posts.length - 1 ? posts[index + 1].node : null,
      },
    });
  });
}

async function createProjectsPages({ graphql, actions }) {
  const { createPage } = actions;
  const template = path.resolve('src/templates/Project.js');

  const queryResult = await graphql(
    `
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fields: { collection: { eq: "projects" } } }
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
  );

  const projects = queryResult.data.allMarkdownRemark.edges;

  //createTagPages(createPage, projects);

  projects.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: index > 0 ? projects[index - 1].node : null,
        next: index < projects.length - 1 ? projects[index + 1].node : null,
      },
    });
  });
}
