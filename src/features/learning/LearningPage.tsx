import { PageProps } from "gatsby";

import { Link } from "../../components/Link";
import { Seo } from "../../components/Seo";
import { rhythm } from "../../Typography";
import { Layout } from "../layout/Layout";

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
      <Seo title="Learning" keywords={["learning", "books", "courses"]} />
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
          <LearningItem key={node.frontmatter.title} node={node} />
        ))}
      </ul>
    </>
  ) : null;

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
