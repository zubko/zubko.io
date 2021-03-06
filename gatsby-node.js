/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict';

const path = require('path');

exports.sourceNodes = ({ actions }) => {
  // specify explicitly that `fileSystemName` has the type of string
  // otherwise it can become File type if the vale will match the file name
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
    }
    type MarkdownRemarkFields {
      fileSystemName: String
    }
  `);
};

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
    createNodeField({
      node,
      name: 'fileSystemName',
      value: parent.relativeDirectory || parent.name,
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
                hidden
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

  const postsVisible = posts.filter(({ node }) => !node.frontmatter.hidden);
  const postsHidden = posts.filter(({ node }) => node.frontmatter.hidden);

  postsVisible.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: index > 0 ? postsVisible[index - 1].node : null,
        next:
          index < postsVisible.length - 1 ? postsVisible[index + 1].node : null,
      },
    });
  });

  postsHidden.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: template,
      context: {
        pathSlug: path,
        prev: null,
        next: null,
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
        next: index > 0 ? projects[index - 1].node : null,
        prev: index < projects.length - 1 ? projects[index + 1].node : null,
      },
    });
  });
}
