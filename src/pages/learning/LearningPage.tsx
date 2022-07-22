import { graphql, PageProps } from "gatsby";

import { Layout, Link, SEO } from "../../components";
import { rhythm } from "../../Typography";

import { LearningItem } from "./LearningItem";

type LearningNode = {
  readonly html: string;
  readonly frontmatter: {
    readonly type: string;
    readonly author: string;
    readonly title: string;
    readonly year: string;
    readonly tags: ReadonlyArray<string>;
    readonly active: boolean;
  };
};

export const LearningPage = ({
  data
}: PageProps<Queries.LearningItemsQuery>) => {
  const { edges } = data.allMarkdownRemark;
  const nodes = edges.map(edge => edge.node) as LearningNode[];
  const books = nodes.filter(node => node.frontmatter.type === "book");
  const courses = nodes.filter(node => node.frontmatter.type === "course");

  return (
    <Layout>
      <SEO title="Learning" keywords={["learning", "books", "courses"]} />
      <h1>Learning</h1>

      <LearningSection
        title="Currently reading 📖"
        items={books.filter(node => node.frontmatter.active)}
      />

      <LearningSection
        title="Currently doing 🏋️‍♂️"
        items={courses.filter(node => node.frontmatter.active)}
      />

      <LearningSection
        title="Finished books 📚"
        items={books.filter(node => !node.frontmatter.active)}
      />

      <LearningSection
        title="Finished courses 🏅"
        items={courses.filter(node => !node.frontmatter.active)}
      />

      <Link to="/">← Home</Link>
    </Layout>
  );
};

const LearningSection = ({
  title,
  items
}: {
  title: string;
  items: LearningNode[];
}) =>
  items.length > 0 ? (
    <>
      <h3>{title}</h3>
      <ul css={Styles.list}>
        {items.map(node => (
          <LearningItem node={node} />
        ))}
      </ul>
    </>
  ) : null;

export const query = graphql`
  query LearningItems {
    allMarkdownRemark(
      sort: { order: DESC, fields: [fields___fileSystemName] }
      filter: { fields: { collection: { eq: "learning" } } }
    ) {
      edges {
        node {
          html
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

const Styles = {
  list: {
    marginLeft: 0,
    listStyle: "none"
  },
  platformIcon: {
    display: "inline",
    marginBottom: 0,
    verticalAlign: "text-bottom",
    marginRight: rhythm(0.1),
    height: "1.3em"
  }
};
