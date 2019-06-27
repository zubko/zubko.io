import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Link } from '../components';
import LearningItem from '../components/LearningItem';
import { rhythm } from '../Typography';

const LearningSection = ({ title, items }) =>
  items.length > 0 ? (
    <>
      <h3>{title}</h3>
      <ul css={styles.list}>
        {items.map(edge => (
          <LearningItem node={edge.node} />
        ))}
      </ul>
    </>
  ) : null;

const LearningPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const books = edges.filter(({ node }) => node.frontmatter.type === 'book');
  const courses = edges.filter(
    ({ node }) => node.frontmatter.type === 'course',
  );

  return (
    <Layout>
      <SEO title="Learning" keywords={['learning', 'books', 'courses']} />
      <h1>Learning</h1>

      <LearningSection
        title="Currently reading 📖"
        items={books.filter(({ node }) => node.frontmatter.active)}
      />

      <LearningSection
        title="Currently doing 🏋️‍♂️"
        items={courses.filter(({ node }) => node.frontmatter.active)}
      />

      <LearningSection
        title="Finished books 📚"
        items={books.filter(({ node }) => !node.frontmatter.active)}
      />

      <LearningSection
        title="Finished courses 🏅"
        items={courses.filter(({ node }) => !node.frontmatter.active)}
      />

      <Link to="/">← Home</Link>
    </Layout>
  );
};
export default LearningPage;
export const query = graphql`
  query LearningItems {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___relativePath] }
      filter: { fields: { collection: { eq: "learning" } } }
    ) {
      edges {
        node {
          fileAbsolutePath
          html
          fields {
            relativePath
          }
          frontmatter {
            type
            author
            title
            year
            tags
            active
          }
        }
      }
    }
  }
`;
const styles = {
  list: {
    marginLeft: 0,
    listStyle: 'none',
  },
  platformIcon: {
    display: 'inline',
    marginBottom: 0,
    verticalAlign: 'text-bottom',
    marginRight: rhythm(0.1),
    height: '1.3em',
  },
};
